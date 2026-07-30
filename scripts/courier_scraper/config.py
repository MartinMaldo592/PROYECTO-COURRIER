import os

# Directorios de salida
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(BASE_DIR, "output")

# Definición de la lista de 10 Couriers en Perú (Prioridad: Las 5 URLs nuevas del usuario + 5 couriers activos)
COURIERS = [
    {
        "id": "01_fragmani",
        "name": "Fragmani Courier",
        "url": "https://fragmani.netlify.app/",
        "category": "Courier & Casillero Express",
        "description": "Servicio de courier y logística express especializado."
    },
    {
        "id": "02_chasqui_express",
        "name": "Chasqui Express Perú",
        "url": "https://www.chasquiexpressperu.com/",
        "category": "Mensajería & Encomiendas Perú",
        "description": "Servicios de transporte, mensajería y entrega urgente en Perú."
    },
    {
        "id": "03_rapidito",
        "name": "Rapidito Courier",
        "url": "https://www.rapidito.pe/",
        "category": "Envíos Express & Última Milla",
        "description": "Plataforma de servicios de envíos rápidos y distribución local."
    },
    {
        "id": "04_amex_courier",
        "name": "Amex Courier Perú",
        "url": "https://amexcourierperu.com/",
        "category": "Logística Courier & Encomiendas",
        "description": "Empresa especializada en logística y envío de documentos y paquetería en Perú."
    },
    {
        "id": "05_deshoppingbox",
        "name": "DeShoppingBox Courier",
        "url": "https://www.deshoppingboxcourier.com/casilla-postal-usa/",
        "category": "Casilla Postal USA -> Perú",
        "description": "Servicio de casillero postal internacional y transporte de compras en USA."
    },
    {
        "id": "06_aeropost_peru",
        "name": "Aeropost Perú",
        "url": "https://aeropost.com/site/spa/peru",
        "category": "Casillero Virtual USA -> Perú",
        "description": "Casillero internacional para compras en USA con despacho a domicilio en Perú."
    },
    {
        "id": "07_olva_courier",
        "name": "Olva Courier",
        "url": "https://www.olvacourier.com/",
        "category": "Nacional / Tracking / Puntos de Recojo",
        "description": "Líder en mensajería y paquetería express a nivel nacional en Perú."
    },
    {
        "id": "08_shalom_cargo",
        "name": "Shalom Cargo",
        "url": "https://shalom.com.pe/",
        "category": "Encomiendas / Agencias Masivas",
        "description": "Servicio de logística y envío de encomiendas con red extensa de agencias en Perú."
    },
    {
        "id": "09_scharff",
        "name": "Scharff (FedEx Partner)",
        "url": "https://holascharff.com/",
        "category": "Express / Casillero / E-commerce",
        "description": "Socio autorizado de FedEx en Perú, soluciones de casillero y envíos e-commerce."
    },
    {
        "id": "10_chazki",
        "name": "Chazki",
        "url": "https://chazki.com/",
        "category": "Última Milla / E-commerce",
        "description": "Solución de logística urbana y distribución de paquetes para comercio electrónico."
    }
]

# User Agent rotativo para simular navegación estándar de navegador
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
