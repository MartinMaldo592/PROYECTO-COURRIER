import { FAQItem, DepartmentInfo, StoreItem, Testimonial, BlogPost, TrackingRecord } from '../types';

export const PERU_DEPARTMENTS: DepartmentInfo[] = [
  { id: 'lima', name: 'Lima Metropolitana', deliveryDays: '24 hrs', partner: 'Delivery Propio AEROBOX (GRATIS)', isFreeLima: true },
  { id: 'callao', name: 'Callao', deliveryDays: '24 hrs', partner: 'Delivery Propio AEROBOX (GRATIS)', isFreeLima: true },
  { id: 'arequipa', name: 'Arequipa', deliveryDays: '48 - 72 hrs', partner: 'Shalom Express / Olva', isFreeLima: false },
  { id: 'trujillo', name: 'La Libertad (Trujillo)', deliveryDays: '48 - 72 hrs', partner: 'Shalom / Marvisur', isFreeLima: false },
  { id: 'cusco', name: 'Cusco', deliveryDays: '48 - 72 hrs', partner: 'Shalom Cargo / Olva', isFreeLima: false },
  { id: 'piura', name: 'Piura', deliveryDays: '48 - 72 hrs', partner: 'Olva Courier / Shalom', isFreeLima: false },
  { id: 'lambayeque', name: 'Chiclayo (Lambayeque)', deliveryDays: '48 - 72 hrs', partner: 'Shalom / Olva', isFreeLima: false },
  { id: 'junin', name: 'Huancayo (Junín)', deliveryDays: '48 - 72 hrs', partner: 'Shalom Cargo', isFreeLima: false },
  { id: 'ica', name: 'Ica', deliveryDays: '24 - 48 hrs', partner: 'Delivery Exprés Ica', isFreeLima: false },
  { id: 'ancash', name: 'Chimbote / Huaraz (Áncash)', deliveryDays: '48 - 72 hrs', partner: 'Shalom Express', isFreeLima: false },
  { id: 'loreto', name: 'Iquitos (Loreto)', deliveryDays: '72 - 96 hrs', partner: 'Transporte Aéreo Olva', isFreeLima: false },
  { id: 'sanmartin', name: 'Tarapoto (San Martín)', deliveryDays: '72 - 96 hrs', partner: 'Shalom Cargo', isFreeLima: false },
  { id: 'ucayali', name: 'Pucallpa (Ucayali)', deliveryDays: '72 - 96 hrs', partner: 'Olva / Shalom', isFreeLima: false },
  { id: 'cajamarca', name: 'Cajamarca', deliveryDays: '48 - 72 hrs', partner: 'Shalom Cargo', isFreeLima: false },
  { id: 'puno', name: 'Puno / Juliaca', deliveryDays: '48 - 72 hrs', partner: 'Shalom Cargo', isFreeLima: false },
  { id: 'tacna', name: 'Tacna', deliveryDays: '48 - 72 hrs', partner: 'Shalom / Olva', isFreeLima: false },
  { id: 'moquegua', name: 'Moquegua', deliveryDays: '48 - 72 hrs', partner: 'Shalom Express', isFreeLima: false },
  { id: 'ayacucho', name: 'Ayacucho', deliveryDays: '48 - 72 hrs', partner: 'Shalom Cargo', isFreeLima: false },
  { id: 'huanuco', name: 'Huánuco', deliveryDays: '48 - 72 hrs', partner: 'Shalom Express', isFreeLima: false },
  { id: 'pasco', name: 'Cerro de Pasco', deliveryDays: '48 - 72 hrs', partner: 'Shalom Cargo', isFreeLima: false },
  { id: 'huancavelica', name: 'Huancavelica', deliveryDays: '48 - 72 hrs', partner: 'Shalom Express', isFreeLima: false },
  { id: 'apurimac', name: 'Abancay (Apurímac)', deliveryDays: '48 - 72 hrs', partner: 'Shalom Cargo', isFreeLima: false },
  { id: 'amazonas', name: 'Chachapoyas (Amazonas)', deliveryDays: '72 - 96 hrs', partner: 'Olva Courier', isFreeLima: false },
  { id: 'madrededios', name: 'Puerto Maldonado', deliveryDays: '72 - 96 hrs', partner: 'Olva / Shalom', isFreeLima: false },
  { id: 'tumbes', name: 'Tumbes', deliveryDays: '48 - 72 hrs', partner: 'Shalom / Olva', isFreeLima: false },
];

export const COMPATIBLE_STORES: StoreItem[] = [
  { id: 'amazon', name: 'Amazon', category: 'general', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', popularItems: 'Laptops, Echo, Kindle, Componentes PC', url: 'https://amazon.com' },
  { id: 'apple', name: 'Apple Store', category: 'tech', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', popularItems: 'iPhone 16, MacBooks, iPad Pro, AirPods', url: 'https://apple.com' },
  { id: 'nike', name: 'Nike USA', category: 'fashion', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', popularItems: 'Ediciones exclusivas Jordan, Dunks, Tech Fleece', url: 'https://nike.com' },
  { id: 'ebay', name: 'eBay USA', category: 'general', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg', popularItems: 'Refurbished Tech, Coleccionables, Repuestos Auto', url: 'https://ebay.com' },
  { id: 'bestbuy', name: 'Best Buy', category: 'tech', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg', popularItems: 'Consolas PS5/Switch, Laptops Gamer, TVs', url: 'https://bestbuy.com' },
  { id: 'walmart', name: 'Walmart USA', category: 'general', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo2014.svg', popularItems: 'Descuentos diarios, Tecnología, Juguetes', url: 'https://walmart.com' },
  { id: 'target', name: 'Target', category: 'general', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg', popularItems: 'Ropa exclusiva, Artículos de hogar, Belleza', url: 'https://target.com' },
  { id: 'costco', name: 'Costco Wholesale', category: 'general', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Costco_Wholesale_logo.svg', popularItems: 'Electrónica en combo, Suplementos, Accesorios', url: 'https://costco.com' },
  { id: 'shein', name: 'Shein USA', category: 'fashion', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/SHEIN_logo.svg', popularItems: 'Tendencias moda, Accesorios, Casa', url: 'https://shein.com' },
  { id: 'sephora', name: 'Sephora USA', category: 'luxury', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Sephora_logo.svg', popularItems: 'Maquillaje permitido, Skincare, Perfumes permitidos', url: 'https://sephora.com' },
  { id: 'adidas', name: 'Adidas USA', category: 'fashion', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg', popularItems: 'Yeezy, Ultraboost, Ediciones Limitadas', url: 'https://adidas.com' },
  { id: 'bhphoto', name: 'B&H Photo Video', category: 'tech', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/B%26H_Photo_Video_Logo.svg', popularItems: 'Cámaras Sony/Canon, Drones DJI, Audio Pro', url: 'https://bhphotovideo.com' },
  { id: 'newegg', name: 'Newegg', category: 'tech', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Newegg_logo.svg', popularItems: 'Tarjetas Gráficas RTX, RAM, Procesadores AMD', url: 'https://newegg.com' },
  { id: 'rockauto', name: 'RockAuto', category: 'general', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/RockAuto_Logo.png', popularItems: 'Repuestos automotrices originales a precio de fábrica', url: 'https://rockauto.com' },
];

export const FAQS: FAQItem[] = [
  // TARIFAS Y PAGOS (6)
  { id: 'f1', category: 'rates', question: '¿Cuál es la tarifa exacta por kilogramo?', answer: 'Cobramos únicamente $8.00 USD por kilogramo (o fracción mínima equivalente). No aplicamos cobros sorpresa por manipulación de carga, recepción ni apertura de casilla.' },
  { id: 'f2', category: 'rates', question: '¿Existen costos ocultos o mantenimiento mensual?', answer: 'Ninguno. La creación y mantenimiento de tu Casillero Internacional en Miami es 100% GRATIS de por vida. Solo pagas cuando decides traer un paquete a Perú.' },
  { id: 'f3', category: 'rates', question: '¿Cómo se calcula el peso de mi paquete?', answer: 'Utilizamos el peso real báscula en kilogramos. Además, con nuestro servicio de reempaque y consolidación gratuita eliminamos cajas sobredimensionadas para evitar penalidades por peso volumétrico.' },
  { id: 'f4', category: 'rates', question: '¿Qué medios de pago aceptan en Perú?', answer: 'Aceptamos Yape, Plin, Transferencia BCP / Interbank / BBVA / Scotiabank, Tarjetas de Crédito/Débito (Visa, Mastercard, Amex) y Pagos en USD o Soles al tipo de cambio del día.' },
  { id: 'f5', category: 'rates', question: '¿El delivery dentro de Lima Metropolitana es realmente gratis?', answer: '¡Sí! Todas las entregas a direcciones dentro de Lima Metropolitana y Callao cuentan con delivery GRATIS en la puerta de tu domicilio u oficina.' },
  { id: 'f6', category: 'rates', question: '¿Cómo funcionan los envíos hacia provincias?', answer: 'Para provincias despachamos diariamente mediante agencias aliadas como Shalom Express, Olva Courier o Marvisur. Pagas el envío local al recibir en tu agencia preferida o cobro en destino.' },

  // TIEMPOS Y ENVÍOS (6)
  { id: 'f7', category: 'shipping', question: '¿Cuánto tiempo tarda en llegar mi paquete a Perú?', answer: 'El tiempo promedio de tránsito aéreo es de 48 a 72 horas hábiles desde que el paquete es recibido e identificado en nuestro almacén principal de Miami.' },
  { id: 'f8', category: 'shipping', question: '¿Cuáles son los días de salida de vuelos desde Miami?', answer: 'Contamos con 4 vuelos semanales directos Miami (MCO/MIA) → Lima (LIM) los días Martes, Jueves, Viernes y Domingos para garantizar la máxima velocidad.' },
  { id: 'f9', category: 'shipping', question: '¿Qué sucede si la tienda de EE.UU. divide mi compra en varios paquetes?', answer: 'No hay problema. Recibimos cada paquete individual en Miami, los agrupamos en tu casillero y los consolidamos en un solo envío para que ahorres al máximo.' },
  { id: 'f10', category: 'shipping', question: '¿Cómo sé cuándo mi paquete llegó al almacén de Miami?', answer: 'Recibirás una notificación automática vía correo electrónico y WhatsApp con fotos del paquete, peso registrado y número de rastreo interno apenas es escaneado en Miami.' },
  { id: 'f11', category: 'shipping', question: '¿Puedo almacenar mis compras en Miami mientras espero otras tiendas?', answer: 'Sí, ofrecemos hasta 30 días de almacenamiento 100% GRATUITO en nuestro warehouse de Miami para que puedas juntar todas tus compras sin prisa.' },
  { id: 'f12', category: 'shipping', question: '¿Tienen cobertura de entrega en todo el Perú?', answer: 'Llegamos al 100% de ciudades y provincias del Perú (Arequipa, Trujillo, Cusco, Piura, Chiclayo, Huancayo, Iquitos, Tarapoto, Tacna, etc.).' },

  // COMPRAMOS POR TI (6)
  { id: 'f13', category: 'buyforme', question: '¿En qué consiste el servicio "Compramos por Ti"?', answer: 'Si no cuentas con tarjeta de crédito internacional o si una tienda de EE.UU. rechaza tarjetas peruanas (como Nike USA o Sephora), nuestro equipo de Miami realiza la compra directamente por ti.' },
  { id: 'f14', category: 'buyforme', question: '¿Cuánto cobran por el servicio de compra asistida?', answer: 'La comisión es de apenas un 5% sobre el valor del producto (mínimo $5 USD). Incluye verificación de vendedor seguro y gestión del pedido.' },
  { id: 'f15', category: 'buyforme', question: '¿Cómo solicito una compra asistida?', answer: 'Solo ingresas al formulario o nos envías el enlace del producto deseado vía WhatsApp. Te enviamos una cotización exacta en soles o dólares y al confirmar realizamos la compra de inmediato.' },
  { id: 'f16', category: 'buyforme', question: '¿Pueden comprar ofertas relámpago en Amazon Prime Day o Black Friday?', answer: '¡Absolutamente! Nuestro equipo monitorea las ofertas en tiempo real para asegurar el stock antes de que se agoten las promociones en EE.UU.' },
  { id: 'f17', category: 'buyforme', question: '¿Pueden pujar por subastas en eBay?', answer: 'Sí, podemos participar en subastas de eBay bajo tu límite de presupuesto especificado para ganar el artículo al mejor precio.' },
  { id: 'f18', category: 'buyforme', question: '¿Qué garantía tengo si el producto comprado llega dañado o no es el correcto?', answer: 'Verificamos visualmente el estado del producto al llegar a Miami. Si la tienda envió un item incorrecto o defectuoso, gestionamos la devolución gratuita directamente con el vendedor en EE.UU.' },

  // ADUANAS SUNAT Y RESTRICCIONES (6)
  { id: 'f19', category: 'customs', question: '¿Hasta qué monto puedo importar sin pagar impuestos en Perú?', answer: 'Puedes importar hasta $200.00 USD por envío (valor FOB de la mercadería) totalmente libre de impuestos aduaneros (Arancel 0% e IGV 0%).' },
  { id: 'f20', category: 'customs', question: '¿Qué sucede si mi compra supera los $200.00 USD?', answer: 'Si el valor excede los $200 USD, el envío estará sujeto a impuestos de importación en SUNAT (aprox. 4% Ad Valorem + 18% IGV). Nuestro equipo de desaduanaje se encarga de todo el trámite por ti.' },
  { id: 'f21', category: 'customs', question: '¿Cuántas importaciones de hasta $200 USD puedo hacer al año?', answer: 'Como persona natural con DNI puedes realizar hasta 3 importaciones al año sin ruc de hasta $1,000 USD cada una, o ilimitadas si cuentas con RUC 10 o RUC 20.' },
  { id: 'f22', category: 'customs', question: '¿Qué productos requieren permiso especial (Restringidos)?', answer: 'Equipos con conectividad celular o WiFi potente (requieren permiso DIGECAL/MTC), suplementos o medicamentos (DIGEMID), o cosméticos en cantidad comercial (DIGEMID). Nos encargamos de tramitar el permiso MTC de forma gratuita.' },
  { id: 'f23', category: 'customs', question: '¿Qué artículos están totalmente prohibidos de importar?', answer: 'Armas de fuego, municiones, explosivos, dinero en efectivo, drogas, repuestos de autos usados, cosméticos usados y perecibles sin registro sanitario.' },
  { id: 'f24', category: 'customs', question: '¿Se pueden importar iPhones o laptops reacondicionadas (Refurbished)?', answer: '¡Sí! Puedes importar laps, iPads y iPhones reacondicionados (A-Grade) de tiendas autorizadas como Apple Refurbished, Amazon Renewed o eBay Certified.' },

  // GARANTÍA Y SEGURIDAD (6)
  { id: 'f25', category: 'guarantee', question: '¿Mis paquetes cuentan con seguro durante el trayecto?', answer: 'Todos nuestros envíos incluyen un seguro de carga base que cubre pérdida o extravío. Además, puedes optar por nuestro Seguro Premium AEROBOX (1.5% del valor) para protección contra todo riesgo.' },
  { id: 'f26', category: 'guarantee', question: '¿Tienen oficina física donde pueda retirar mis paquetes o hacer consultas?', answer: 'Sí, nuestra oficina administrativa y centro de distribución principal en Perú está ubicada en Av. Javier Prado Este 2450, San Isidro, Lima. También puedes recibir por delivery.' },
  { id: 'f27', category: 'guarantee', question: '¿Dónde está ubicado el almacén en Estados Unidos?', answer: 'Nuestro warehouse propio está ubicado en Miami, Florida (8300 NW 30th Terrace, Doral, FL 33122), un área libre de impuestos sobre ventas locales (Sales Tax Exemption disponible).' },
  { id: 'f28', category: 'guarantee', question: '¿Cómo puedo rastrear mi envío en tiempo real?', answer: 'Con tu código de rastreo (ej. AB-9042-PE) puedes ingresar a nuestra sección de Tracking en la web o consultar por WhatsApp para ver la ubicación GPS y estado aduanero 24/7.' },
  { id: 'f29', category: 'guarantee', question: '¿Qué pasa si mi paquete sufre daños durante el envío aéreo?', answer: 'Nuestro empaque de alta seguridad e inspección previa reduce el riesgo a casi 0%. Si ocurre una incidencia imputable al transporte, reembolsamos el valor declarado cubierto por el seguro.' },
  { id: 'f30', category: 'guarantee', question: '¿Ofrecen servicio para empresas que importan en volumen (Carga Comercial)?', answer: 'Sí, contamos con la división AEROBOX B2B para importadores comerciales, pequeñas empresas y e-commerce con tarifas preferenciales por volumen desde 50 kg en adelante.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Mendoza V.',
    city: 'Lima (Miraflores)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Hace 3 días',
    store: 'Apple Store USA',
    comment: 'Compré el nuevo MacBook Pro M3 en Apple USA. En tiendas locales me pedían S/ 9,500. Con AEROBOX PRO pagué $8/kg sin sorpresas y me llegó a mi casa en Surco en solo 3 días hábiles. ¡Experiencia de 10 estrellas!',
    savedAmount: 'Ahorro: S/ 2,400',
    verified: true
  },
  {
    id: 't2',
    name: 'Dra. Andrea Salcedo',
    city: 'Arequipa',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Hace 5 días',
    store: 'Amazon USA',
    comment: 'Traigo equipamiento médico ligero y libros universitarios desde Miami a Arequipa de forma constante. La consolidación de 4 paquetes en 1 caja me ahorró casi $80 de peso volumétrico. Servicio impecable.',
    savedAmount: 'Ahorro: $115 USD',
    verified: true
  },
  {
    id: 't3',
    name: 'Renzo Farfán',
    city: 'Trujillo',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Hace 1 semana',
    store: 'Nike USA & eBay',
    comment: 'Nike USA rechazaba mi tarjeta peruana. Usé el servicio "Compramos por Ti" de AEROBOX. Compraron las zapatillas en Miami en 20 minutos y las enviaron a Trujillo sin ningún contratiempo.',
    savedAmount: 'Ahorro: S/ 450',
    verified: true
  },
  {
    id: 't4',
    name: 'Valeria & Gabriel',
    city: 'Lima (San Borja)',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Hace 2 semanas',
    store: 'Best Buy & Target',
    comment: 'Excelente atención al cliente por WhatsApp. Me guiaron con el permiso MTC para una consola de videojuegos y no tuve que hacer ningún trámite engorroso. ¡Super recomendados!',
    savedAmount: 'Ahorro: S/ 980',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Guía Definitiva 2026: Cómo importar laptops y smartphones de EE.UU. a Perú sin pagar impuestos extras',
    slug: 'guia-importar-laptops-peru-2026',
    excerpt: 'Conoce los secretos para aprovechar la exoneración de $200 USD de SUNAT, trámites de homologación MTC gratuitos y cómo calcular tu ahorro exacto.',
    category: 'Tecnología & Consejos',
    readTime: '5 min de lectura',
    date: '20 de Julio, 2026',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    content: 'Importar tecnología desde Estados Unidos a Perú se ha convertido en la estrategia preferida por gamers, ingenieros y profesionales para ahorrar hasta un 40% respecto a los precios de tiendas retail locales...'
  },
  {
    id: 'b2',
    title: 'Consolidación de Paquetes: El truco poco conocido para reducir el peso volumétrico hasta un 60%',
    slug: 'como-funciona-consolidacion-de-paquetes',
    excerpt: 'Aprende cómo juntar compras de Amazon, Nike, Apple y eBay en una sola caja optimizada antes de volar a Lima.',
    category: 'Ahorro & Logística',
    readTime: '4 min de lectura',
    date: '14 de Julio, 2026',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    content: 'Cuando compras en múltiples tiendas online de EE.UU., cada marca envía su producto en cajas sobredimensionadas llenas de aire y plástico de burbujas...'
  },
  {
    id: 'b3',
    title: 'Fechas Clave de Descuentos en EE.UU.: Amazon Prime Day, Black Friday y Labor Day Sales',
    slug: 'calendario-ofertas-eeuu-peru',
    excerpt: 'Prepárate para las temporadas de liquidación más agresivas de Estados Unidos y asegura las mejores ofertas del año.',
    category: 'Compras Online',
    readTime: '6 min de lectura',
    date: '02 de Julio, 2026',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    content: 'Las tiendas de EE.UU. lanzan descuentos de hasta el 70% en fechas estratégicas del año. Saber exactamente cuándo comprar marca la diferencia entre ahorrar cientos de dólares...'
  }
];

export const MOCK_TRACKING_DATABASE: Record<string, TrackingRecord> = {
  'AB-9042-PE': {
    code: 'AB-9042-PE',
    clientName: 'Miguel Ángel R.',
    destinationCity: 'Lima (Santiago de Surco)',
    weightKg: 3.4,
    declaredValueUsd: 185.00,
    currentStatus: 'En Ruta de Reparto Local',
    estimatedDelivery: 'Hoy antes de las 6:00 PM',
    steps: [
      { title: 'Paquete Recibido en Almacén Miami', date: '20 Jul - 09:15 AM', location: 'Doral, FL (USA)', completed: true },
      { title: 'Inspección & Consolidación Completada', date: '20 Jul - 02:40 PM', location: 'Warehouse Miami #4', completed: true },
      { title: 'Vuelo Internacional MCO → LIM Despegó', date: '21 Jul - 11:30 PM', location: 'Vuelo Cargo AA-802', completed: true },
      { title: 'Arribo a Lima & Despacho Aduanero SUNAT', date: '22 Jul - 08:20 AM', location: 'Aeropuerto Jorge Chávez', completed: true },
      { title: 'En Centro de Distribución San Isidro', date: '22 Jul - 04:10 PM', location: 'Hub Central AEROBOX', completed: true },
      { title: 'En Ruta de Reparto con Courier Local', date: '23 Jul - 08:30 AM', location: 'Unidad de Reparto #12', completed: true, active: true },
      { title: 'Entregado en Puerta del Cliente', date: 'Pendiente', location: 'Dirección Final', completed: false }
    ]
  },
  'AB-5510-PE': {
    code: 'AB-5510-PE',
    clientName: 'Dra. Sofía Alva',
    destinationCity: 'Arequipa (Cayma)',
    weightKg: 1.8,
    declaredValueUsd: 140.00,
    currentStatus: 'En Transit Vuelo Internacional',
    estimatedDelivery: 'Mañana a las 2:00 PM',
    steps: [
      { title: 'Paquete Recibido en Almacén Miami', date: '21 Jul - 04:20 PM', location: 'Doral, FL (USA)', completed: true },
      { title: 'Inspección & Consolidación Completada', date: '22 Jul - 10:00 AM', location: 'Warehouse Miami #2', completed: true },
      { title: 'Vuelo Internacional MCO → LIM en Curso', date: '23 Jul - 02:15 AM', location: 'En Vuelo Comercial', completed: true, active: true },
      { title: 'Despacho Aduanero SUNAT', date: 'Pendiente', location: 'Lima Cargo', completed: false },
      { title: 'Despacho a Provincia (Shalom)', date: 'Pendiente', location: 'Ruta Arequipa', completed: false },
      { title: 'Entregado en Agencia / Domicilio', date: 'Pendiente', location: 'Arequipa', completed: false }
    ]
  },
  'AB-3312-PE': {
    code: 'AB-3312-PE',
    clientName: 'Jorge L. Torres',
    destinationCity: 'Trujillo',
    weightKg: 5.2,
    declaredValueUsd: 198.50,
    currentStatus: 'Recibido en Almacén Miami',
    estimatedDelivery: 'En 3 días hábiles',
    steps: [
      { title: 'Paquete Recibido en Almacén Miami', date: '23 Jul - 10:45 AM', location: 'Doral, FL (USA)', completed: true, active: true },
      { title: 'Inspección & Consolidación', date: 'Pendiente', location: 'Warehouse Miami', completed: false },
      { title: 'Vuelo Internacional MCO → LIM', date: 'Pendiente', location: 'Ruta Aérea', completed: false },
      { title: 'Despacho Aduanero SUNAT', date: 'Pendiente', location: 'Lima Cargo', completed: false },
      { title: 'Entrega Final Trujillo', date: 'Pendiente', location: 'La Libertad', completed: false }
    ]
  }
};
