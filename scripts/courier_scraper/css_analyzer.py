import re
from typing import Dict, Any, List

class CSSAnalyzer:
    HEX_COLOR_REGEX = re.compile(r'#(?:[0-9a-fA-F]{3}){1,2}\b')
    RGB_COLOR_REGEX = re.compile(r'rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*[\d\.]+\s*)?\)')
    FONT_FAMILY_REGEX = re.compile(r'font-family\s*:\s*([^;}]+)', re.IGNORECASE)

    @classmethod
    def analyze(cls, css_texts: List[str]) -> Dict[str, Any]:
        all_css = " ".join(css_texts)
        
        # 1. Extracción de Colores
        hex_colors = list(set(cls.HEX_COLOR_REGEX.findall(all_css)))
        rgb_colors = list(set(cls.RGB_COLOR_REGEX.findall(all_css)))
        # Filtrar colores triviales como #fff, #000, #ffffff, #000000 para enfocarnos en paletas distintivas
        unique_colors = [c for c in hex_colors if c.lower() not in ['#fff', '#ffffff', '#000', '#000000', '#f5f5f5', '#eee', '#ddd']]
        unique_colors = unique_colors[:15] # Top 15 colores característicos

        # 2. Extracción de Tipografías
        fonts_found = cls.FONT_FAMILY_REGEX.findall(all_css)
        clean_fonts = set()
        for f in fonts_found:
            first_font = f.split(',')[0].strip(' "\'').title()
            if len(first_font) > 2 and not first_font.startswith('Inherit') and not first_font.startswith('Var('):
                clean_fonts.add(first_font)

        # 3. Detección de Frameworks CSS
        frameworks = []
        lower_css = all_css.lower()
        if 'tailwind' in lower_css or 'flex' in lower_css and 'items-center' in lower_css:
            frameworks.append("Tailwind CSS")
        if 'bootstrap' in lower_css or 'btn-primary' in lower_css or 'container-fluid' in lower_css:
            frameworks.append("Bootstrap")
        if 'elementor' in lower_css:
            frameworks.append("Elementor / WP")
        if 'mui' in lower_css or 'MuiButton' in all_css:
            frameworks.append("Material UI (MUI)")

        summary = f"Detectados {len(unique_colors)} colores de acento/paleta distintivos. Tipografías principales: {', '.join(list(clean_fonts)[:4]) or 'Standard Browser Fonts'}."

        return {
            "colors": unique_colors,
            "fonts": list(clean_fonts)[:6],
            "frameworks": frameworks,
            "styles_summary": summary
        }
