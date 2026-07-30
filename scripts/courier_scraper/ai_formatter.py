from typing import List, Dict, Any
from schemas import CourierData

class AIFormatter:
    @staticmethod
    def generate_markdown_profile(data: CourierData) -> str:
        css_info = data.css_info
        js_info = data.js_info

        colors_fmt = ", ".join([f"`{c}`" for c in css_info.colors]) or "Colores estándar web"
        fonts_fmt = ", ".join([f"`{f}`" for f in css_info.fonts]) or "Fuentes por defecto"
        frameworks_css = ", ".join(css_info.frameworks) or "CSS vanilla / Custom"
        libraries_js = ", ".join([f"`{lib}`" for lib in js_info.libraries]) or "Javascript nativo"
        widgets_fmt = "\n".join([f"- {w}" for w in js_info.widgets]) or "- Ningún widget de terceros detectado"
        endpoints_fmt = "\n".join([f"- `{ep}`" for ep in js_info.api_endpoints]) or "- No se expusieron endpoints públicos directamente en JS."

        md = f"""# [Ficha Tecnológica y Comercial] - {data.name}

> **Categoría**: {data.category}  
> **URL Oficial**: [{data.url}]({data.url})  
> **Fecha de Extracción**: {data.scraped_at}  
> **Título de la Página**: {data.page_title}  

---

## 1. Visión General & Descripción
{data.description}

### Meta Descripción Web:
*{data.meta_description or 'Sin meta descripción especificada.'}*

---

## 2. Análisis de Frontend, CSS y Diseño Visual (UX/UI)
- **Paleta de Colores Destacados**: {colors_fmt}
- **Tipografías / Font Family**: {fonts_fmt}
- **Frameworks CSS**: {frameworks_css}
- **Resumen de Estilo**: {css_info.styles_summary}

---

## 3. Arquitectura Javascript & Integraciones Tecnológicas
- **Librerías / Frameworks JS**: {libraries_js}
- **Widgets e Integraciones de Terceros**:
{widgets_fmt}

### Endpoints de API / Cotización / Tracking Detectados en JS:
{endpoints_fmt}

---

## 4. Estructura de Encabezados Principales (Jerarquía Web)
"""
        for h in data.headings[:12]:
            md += f"- {h}\n"
        
        md += f"""

---

## 5. Contenido Web Limpio & Semántico (Optimizado para LLM)

```markdown
{data.clean_markdown_content[:4000]}
```

*(Contenido truncado visualmente a 4,000 caracteres para eficiencia de contexto. El archivo JSON adjunto almacena el 100% de la extracción).*
"""
        return md

    @staticmethod
    def generate_master_benchmark(couriers_data: List[CourierData]) -> str:
        md = f"""# 🏆 Hub Maestro de Inteligencia Competitiva: 10 Couriers en Perú (AI Benchmark)

> **Documento generado automáticamente para consumo e interpretación de Inteligencia Artificial.**  
> Contiene el análisis consolidado de **Negocio, UX/UI, Paleta de Colores, Stack de Javascript y Endpoints de API** de los 10 principales actores del sector courier en Perú.

---

## 📊 Matriz Comparativa Tecnológica y de Diseño

| Courier | Categoría | Stack JS / Frameworks | Frameworks CSS | Paleta de Colores Principal | Widgets / Integraciones |
| :--- | :--- | :--- | :--- | :--- | :--- |
"""
        for c in couriers_data:
            js_libs = ", ".join(c.js_info.libraries) or "JS Native"
            css_fw = ", ".join(c.css_info.frameworks) or "Custom CSS"
            colors = ", ".join(c.css_info.colors[:3]) or "N/A"
            widgets = ", ".join(c.js_info.widgets[:2]) or "Standard"
            md += f"| **{c.name}** | {c.category} | {js_libs} | {css_fw} | {colors} | {widgets} |\n"

        md += """

---

## 💡 Guía de Prompts Sugeridos para la IA (Cómo Usar esta Carpeta)

Cuando desees consultar esta carpeta general para mejorar el proyecto **Aerobox Pro**, puedes indicarle a la IA:

1. **"Analiza la paleta de colores y componentes visuales de la carpeta de couriers y propón una mejora de UI/UX para la página principal de Aerobox Pro."**
2. **"Revisa los endpoints y librerías de JS detectados en los 10 couriers para diseñar un cotizador interactivo más rápido y moderno."**
3. **"Compara los servicios de casillero virtual y encomiendas de Olva, Shalom y Aeropost para identificar funcionalidades que nos falten implementar."**

---

## 📁 Índice de Fichas Individuales

"""
        for c in couriers_data:
            md += f"- [{c.name}](./{c.id}/technical_profile.md) - *{c.category}*\n"

        return md
