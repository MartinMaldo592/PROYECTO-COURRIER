import re
from typing import Dict, Any, List

class JSAnalyzer:
    # Expresión regular para detectar endpoints de API en JS (fetch, axios, ajax, urls de api)
    API_ENDPOINT_REGEX = re.compile(r'["\'](/(?:api|v[0-9]|services|tracking|quote|calculator|v1|v2)/[^"\'\s>]+)["\']', re.IGNORECASE)
    HTTP_API_REGEX = re.compile(r'["\'](https?://[^"\'\s>]+/(?:api|tracking|v1|v2|quote|calc)[^"\'\s>]*)["\']', re.IGNORECASE)

    @classmethod
    def analyze(cls, js_urls: List[str], inline_js_texts: List[str], full_html: str) -> Dict[str, Any]:
        combined_js_sources = " ".join(js_urls) + " " + " ".join(inline_js_texts)
        combined_all = combined_js_sources + " " + full_html

        # 1. Detección de Librerías Frontend & Frameworks
        libraries = []
        lower_all = combined_all.lower()

        if 'react' in lower_all or '_react' in combined_all:
            libraries.append("React.js")
        if 'next' in lower_all or '__next' in combined_all:
            libraries.append("Next.js")
        if 'vue' in lower_all or '__vue' in combined_all:
            libraries.append("Vue.js")
        if 'angular' in lower_all or 'ng-version' in lower_all:
            libraries.append("Angular")
        if 'jquery' in lower_all or 'jQuery' in combined_all:
            libraries.append("jQuery")
        if 'framer-motion' in lower_all or 'framermotion' in lower_all:
            libraries.append("Framer Motion")
        if 'gsap' in lower_all or 'TweenMax' in combined_all:
            libraries.append("GSAP (GreenSock)")
        if 'swiper' in lower_all:
            libraries.append("Swiper Slider")
        if 'lottie' in lower_all:
            libraries.append("Lottie Web Animation")

        # 2. Detección de Endpoints de API Expuestos
        relative_apis = cls.API_ENDPOINT_REGEX.findall(combined_js_sources)
        absolute_apis = cls.HTTP_API_REGEX.findall(combined_js_sources)
        detected_endpoints = list(set(relative_apis + absolute_apis))[:10]

        # 3. Detección de Widgets / Integraciones externas
        widgets = []
        if 'whatsapp' in lower_all or 'api.whatsapp.com' in lower_all or 'wa.me' in lower_all:
            widgets.append("WhatsApp Chat / Support Directo")
        if 'google.com/maps' in lower_all or 'maps.googleapis.com' in lower_all:
            widgets.append("Google Maps API (Tracking / Agencias)")
        if 'gtag' in lower_all or 'google-analytics' in lower_all or 'googletagmanager' in lower_all:
            widgets.append("Google Tag Manager / Analytics")
        if 'facebook' in lower_all or 'fbevents.js' in lower_all:
            widgets.append("Meta Pixel (Ads Tracking)")
        if 'zendesk' in lower_all or 'zopim' in lower_all:
            widgets.append("Zendesk Live Support")
        if 'recaptcha' in lower_all or 'grecaptcha' in lower_all:
            widgets.append("Google reCAPTCHA Security")

        return {
            "libraries": list(set(libraries)),
            "api_endpoints": detected_endpoints,
            "widgets": list(set(widgets))
        }
