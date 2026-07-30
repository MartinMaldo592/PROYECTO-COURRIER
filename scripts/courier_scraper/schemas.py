from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any

class CSSAnalysis(BaseModel):
    colors: List[str] = Field(default_factory=list, description="Lista de colores HEX/RGB encontrados")
    fonts: List[str] = Field(default_factory=list, description="Familias tipográficas usadas")
    frameworks: List[str] = Field(default_factory=list, description="Frameworks CSS detectados (Tailwind, Bootstrap, etc.)")
    styles_summary: str = Field(default="", description="Resumen visual de diseño y estilos")

class JSAnalysis(BaseModel):
    libraries: List[str] = Field(default_factory=list, description="Librerías JS detectadas (React, Vue, GSAP, Swiper, etc.)")
    api_endpoints: List[str] = Field(default_factory=list, description="Endpoints de API/fetch expuestos en el código JS")
    widgets: List[str] = Field(default_factory=list, description="Widgets detectados (WhatsApp, Chatbot, Maps, Analytics)")

class CourierData(BaseModel):
    id: str
    name: str
    url: str
    category: str
    description: str
    scraped_at: str
    page_title: str = ""
    meta_description: str = ""
    headings: List[str] = Field(default_factory=list)
    clean_markdown_content: str = ""
    css_info: CSSAnalysis = Field(default_factory=CSSAnalysis)
    js_info: JSAnalysis = Field(default_factory=JSAnalysis)
    extracted_links: List[str] = Field(default_factory=list)
