import os
import json
import requests
from bs4 import BeautifulSoup
import markdownify
from datetime import datetime
from urllib.parse import urljoin, urlparse

from config import COURIERS, OUTPUT_DIR, USER_AGENT
from schemas import CourierData, CSSAnalysis, JSAnalysis
from css_analyzer import CSSAnalyzer
from js_analyzer import JSAnalyzer
from ai_formatter import AIFormatter

class CourierScraperEngine:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": USER_AGENT})

    def scrape_courier(self, courier_conf: dict) -> CourierData:
        url = courier_conf["url"]
        print(f"[SEARCH] Scraping [{courier_conf['name']}] -> {url} ...")
        
        try:
            res = self.session.get(url, timeout=12, verify=False)
            res.raise_for_status()
            html_text = res.text
        except Exception as e:
            print(f"[WARNING] Error al conectar con {url}: {e}")
            # Retornar estructura de respaldo en caso de bloqueo/timeout
            return CourierData(
                id=courier_conf["id"],
                name=courier_conf["name"],
                url=url,
                category=courier_conf["category"],
                description=courier_conf["description"],
                scraped_at=datetime.now().isoformat(),
                page_title=f"{courier_conf['name']} (Página Protegida / Offline)",
                clean_markdown_content=f"No se pudo extraer contenido directamente de {url}. Razón: {e}"
            )

        soup = BeautifulSoup(html_text, "lxml")

        # 1. Metadatos
        title = soup.title.string.strip() if soup.title and soup.title.string else courier_conf["name"]
        meta_desc = ""
        meta_tag = soup.find("meta", attrs={"name": "description"}) or soup.find("meta", attrs={"property": "og:description"})
        if meta_tag and meta_tag.get("content"):
            meta_desc = meta_tag["content"].strip()

        # 2. Encabezados (H1, H2, H3)
        headings = []
        for tag in soup.find_all(["h1", "h2", "h3"]):
            text = tag.get_text(strip=True)
            if text and len(text) > 3:
                headings.append(f"{tag.name.upper()}: {text}")

        # 3. Extracción de Estilos CSS (Inline <style> y <link rel="stylesheet">)
        css_sources = []
        for style in soup.find_all("style"):
            if style.string:
                css_sources.append(style.string)

        css_links = []
        for link in soup.find_all("link", rel="stylesheet"):
            href = link.get("href")
            if href:
                full_css_url = urljoin(url, href)
                css_links.append(full_css_url)

        # Tratar de descargar el primer CSS principal si existe para enriquecer el análisis de paleta
        if css_links:
            try:
                css_res = self.session.get(css_links[0], timeout=5, verify=False)
                if css_res.status_code == 200:
                    css_sources.append(css_res.text[:50000]) # Muestra de 50KB
            except Exception:
                pass

        css_data = CSSAnalyzer.analyze(css_sources)

        # 4. Extracción de JS (Inline <script> y <script src="...">)
        inline_js = []
        js_urls = []
        for script in soup.find_all("script"):
            src = script.get("src")
            if src:
                js_urls.append(urljoin(url, src))
            elif script.string:
                inline_js.append(script.string)

        js_data = JSAnalyzer.analyze(js_urls, inline_js, html_text)

        # 5. Limpieza de HTML y Conversión a Markdown Semántico
        # Eliminar etiquetas ruidosas para la IA
        for noise in soup(["script", "style", "nav", "footer", "noscript", "svg"]):
            noise.decompose()

        body_html = str(soup.body) if soup.body else str(soup)
        clean_md = markdownify.markdownify(body_html, heading_style="ATX", strip=['img', 'a'])
        # Limpiar saltos de línea repetidos
        clean_md = "\n".join([line.strip() for line in clean_md.splitlines() if line.strip()])

        return CourierData(
            id=courier_conf["id"],
            name=courier_conf["name"],
            url=url,
            category=courier_conf["category"],
            description=courier_conf["description"],
            scraped_at=datetime.now().isoformat(),
            page_title=title,
            meta_description=meta_desc,
            headings=headings[:15],
            clean_markdown_content=clean_md,
            css_info=CSSAnalysis(**css_data),
            js_info=JSAnalysis(**js_data)
        )

    def run_all(self):
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        all_results = []

        print(f"[START] Iniciando Scraping Full-Stack de 10 Couriers en Peru...")
        
        for courier in COURIERS:
            courier_data = self.scrape_courier(courier)
            all_results.append(courier_data)

            # Directorio individual para cada courier
            courier_folder = os.path.join(OUTPUT_DIR, courier["id"])
            os.makedirs(courier_folder, exist_ok=True)

            # 1. Guardar JSON completo de datos
            json_path = os.path.join(courier_folder, "data.json")
            with open(json_path, "w", encoding="utf-8") as f:
                json.dump(courier_data.model_dump(), f, ensure_ascii=False, indent=2)

            # 2. Guardar Ficha Markdown individual
            md_path = os.path.join(courier_folder, "technical_profile.md")
            md_content = AIFormatter.generate_markdown_profile(courier_data)
            with open(md_path, "w", encoding="utf-8") as f:
                f.write(md_content)

            print(f"  [OK] [Guardado] {courier['name']} -> {courier_folder}")

        # 3. Guardar Hub Maestro Benchmark para la IA
        master_path = os.path.join(OUTPUT_DIR, "00_FULL_COURIERS_TECH_BENCHMARK.md")
        master_md = AIFormatter.generate_master_benchmark(all_results)
        with open(master_path, "w", encoding="utf-8") as f:
            f.write(master_md)

        print(f"\n[DONE] Proceso finalizado con exito. Hub Maestro creado en:")
        print(f"   [FILE] {master_path}")

if __name__ == "__main__":
    # Desactivar advertencias de SSL para scraping flexible
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    
    engine = CourierScraperEngine()
    engine.run_all()
