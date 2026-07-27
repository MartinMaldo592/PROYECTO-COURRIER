import type { Metadata } from 'next';
import './globals.css';

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LogisticsService",
  "name": "AEROBOX PRO",
  "image": "https://aerobox.pe/logo.png",
  "description": "Servicio de courier internacional especializado en importar compras desde Estados Unidos a todo el Perú por $8 USD/kg.",
  "url": "https://aerobox.pe",
  "telephone": "+51987654321",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Javier Prado Este 2450, San Isidro",
    "addressLocality": "Lima",
    "addressCountry": "PE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -12.0897,
    "longitude": -77.0365
  },
  "areaServed": "PE",
  "offers": {
    "@type": "Offer",
    "price": "8.00",
    "priceCurrency": "USD",
    "eligibleRegion": "PE",
    "description": "Tarifa Plana por Kilogramo de Miami a Lima"
  }
};

export const metadata: Metadata = {
  title: 'AEROBOX PRO | Courier Internacional EE.UU. a Perú — $8 USD/kg',
  description: 'Importa productos desde Estados Unidos a cualquier ciudad del Perú por solo $8 USD por Kilo. Delivery gratis en Lima, consolidación gratuita, compramos por ti y despacho aduanero SUNAT.',
  keywords: 'courier peru, importar de miami a lima, traer de amazon a peru, casillero miami peru, courier 8 dolares kilo, importaciones ee.uu. peru, aerobox pro',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aerobox.pe/',
    title: 'AEROBOX PRO | Logística Inteligente EE.UU. → Perú',
    description: 'Traemos tus compras desde EE.UU. a la puerta de tu casa. Tarifa plana $8.00 USD/kg. Sin costos ocultos.',
    images: [{ url: 'https://aerobox.pe/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEROBOX PRO | Courier Internacional EE.UU. a Perú',
    description: 'Traemos tus compras desde EE.UU. a la puerta de tu casa. Tarifa plana $8.00 USD/kg. Sin costos ocultos.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-[#f8f9fa] text-gray-800 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
