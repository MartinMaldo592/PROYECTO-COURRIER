import os
import cv2
import numpy as np

def apply_precision_face_anonymization(image, fx, fy, fw, fh):
    """
    Applies heavy professional pixelation to the ENTIRE facial contour.
    Covers forehead, temples, cheeks, and chin edges completely.
    """
    img_h, img_w = image.shape[:2]

    # Center of face
    center_x = int(fx + fw / 2.0)
    center_y = int(fy + fh * 0.45)
    
    # Expanded full facial contour radius X (52% of face width) and radius Y (60% of face height)
    radius_x = max(12, int(fw * 0.52))
    radius_y = max(12, int(fh * 0.60))

    # Bounding box for ROI
    x1 = max(0, center_x - radius_x)
    y1 = max(0, center_y - radius_y)
    x2 = min(img_w, center_x + radius_x)
    y2 = min(img_h, center_y + radius_y)

    roi_w = x2 - x1
    roi_h = y2 - y1

    if roi_w <= 6 or roi_h <= 6:
        return image

    # Extract Face ROI
    roi = image[y1:y2, x1:x2].copy()

    # Step 1: Heavy Gaussian Blur to destroy feature lines (eyes, nose, mouth)
    blur_ksize = (max(15, (roi_w // 2) | 1), max(15, (roi_h // 2) | 1))
    blurred_roi = cv2.GaussianBlur(roi, blur_ksize, 30)

    # Step 2: Ultra-Chunky Mosaic Pixelation (~5 blocks per face)
    block_count = 5
    small_w = max(2, block_count)
    small_h = max(2, int(block_count * (roi_h / roi_w)))

    small_roi = cv2.resize(blurred_roi, (small_w, small_h), interpolation=cv2.INTER_AREA)
    pixelated_roi = cv2.resize(small_roi, (roi_w, roi_h), interpolation=cv2.INTER_NEAREST)

    # Step 3: Create Expanded Elliptical Face Contour Mask
    mask = np.zeros((roi_h, roi_w), dtype=np.uint8)
    local_center = (center_x - x1, center_y - y1)
    cv2.ellipse(mask, local_center, (radius_x, radius_y), 0, 0, 360, 255, -1)

    # Feather edge (7px blur) for clean blending
    mask = cv2.GaussianBlur(mask, (7, 7), 0)
    mask_3d = mask[:, :, np.newaxis] / 255.0

    # Blend pixelated face onto original image
    original_roi = image[y1:y2, x1:x2].astype(np.float32)
    pixelated_roi = pixelated_roi.astype(np.float32)

    blended_roi = original_roi * (1.0 - mask_3d) + pixelated_roi * mask_3d
    image[y1:y2, x1:x2] = blended_roi.astype(np.uint8)

    return image

def process_deliveries_folder(input_folder, output_folder=None):
    if output_folder is None:
        output_folder = input_folder

    os.makedirs(output_folder, exist_ok=True)

    model_path = os.path.join(os.path.dirname(__file__), "yunet.onnx")
    if not os.path.exists(model_path):
        print(f"[ERROR] Model not found at {model_path}")
        return

    valid_extensions = ('.jpg', '.jpeg', '.png', '.webp')
    files = [f for f in os.listdir(input_folder) if f.lower().endswith(valid_extensions)]

    print(f"[START] Expanded Face Contour Anonymizer on {len(files)} photos...")

    processed_count = 0
    total_faces_anonymized = 0

    for filename in files:
        filepath = os.path.join(input_folder, filename)
        image = cv2.imread(filepath)

        if image is None:
            continue

        orig_h, orig_w = image.shape[:2]

        # Target detection scale for optimal YuNet accuracy (1024px max dimension)
        target_dim = 1024.0
        scale_ratio = target_dim / max(orig_w, orig_h)
        resized_w = int(orig_w * scale_ratio)
        resized_h = int(orig_h * scale_ratio)

        resized_img = cv2.resize(image, (resized_w, resized_h))

        detector = cv2.FaceDetectorYN.create(
            model=model_path,
            config="",
            input_size=(resized_w, resized_h),
            score_threshold=0.55,
            nms_threshold=0.3,
            top_k=50
        )

        _, faces = detector.detect(resized_img)

        faces_in_img = 0
        if faces is not None:
            for face in faces:
                fx, fy, fw, fh, score = face[0:5]

                aspect_ratio = fh / float(fw) if fw > 0 else 0
                if score >= 0.55 and 0.75 <= aspect_ratio <= 1.6:
                    orig_fx = fx / scale_ratio
                    orig_fy = fy / scale_ratio
                    orig_fw = fw / scale_ratio
                    orig_fh = fh / scale_ratio

                    image = apply_precision_face_anonymization(image, orig_fx, orig_fy, orig_fw, orig_fh)
                    faces_in_img += 1
                    total_faces_anonymized += 1

        output_path = os.path.join(output_folder, filename)
        cv2.imwrite(output_path, image)
        processed_count += 1

        if faces_in_img > 0:
            print(f"   [FULL CONTOUR ANONYMIZED] {filename} -> {faces_in_img} face(s)")
        else:
            print(f"   [CLEAN] {filename} -> 0 faces")

    print(f"\n[SUCCESS] Successfully anonymized {processed_count} images ({total_faces_anonymized} face(s) full contour covered).")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(current_dir, "..", ".."))
    deliveries_dir = os.path.join(project_root, "public", "deliveries")

    if os.path.exists(deliveries_dir):
        process_deliveries_folder(deliveries_dir)
    else:
        print(f"[ERROR] Deliveries directory not found at: {deliveries_dir}")
