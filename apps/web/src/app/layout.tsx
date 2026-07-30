import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://aeroboxpro.pe';

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LogisticsService",
  "name": "AEROBOX PRO",
  "image": `${siteUrl}/og-image.png`,
  "description": "Servicio de courier internacional especializado en importar compras desde Estados Unidos a todo el Perú por $8.00 USD/kg sin costos ocultos.",
  "url": siteUrl,
  "telephone": "+51987654321",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jirón Dante 454, Surquillo",
    "addressLocality": "Lima",
    "addressCountry": "PE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -12.1128,
    "longitude": -77.0267
  },
  "areaServed": "PE",
  "offers": {
    "@type": "Offer",
    "price": "8.00",
    "priceCurrency": "USD",
    "eligibleRegion": "PE",
    "description": "Tarifa Plana de $8.00 USD por Kilogramo de Miami a Lima y Provincias"
  }
};

export const viewport: Viewport = {
  themeColor: '#0b132b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AEROBOX PRO | Courier Internacional EE.UU. a Perú — $8.00 USD/kg',
    template: '%s | AEROBOX PRO Logistics'
  },
  description: 'Importa tus compras en Amazon, Apple, Nike, eBay y cualquier tienda de Estados Unidos hasta la puerta de tu casa en el Perú por $8.00 USD por Kilo sin costos ocultos. Delivery gratis en Lima, asesoría SUNAT y seguimiento en vivo.',
  keywords: [
    'courier peru',
    'importar de miami a lima',
    'compras amazon peru',
    'casillero miami peru',
    'courier 8 dolares kilo',
    'importaciones ee.uu. peru',
    'aerobox pro',
    'despacho sunat 200 dolares'
  ],
  authors: [{ name: 'AEROBOX PRO Logistics' }],
  creator: 'AEROBOX PRO',
  publisher: 'AEROBOX PRO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: siteUrl,
    siteName: 'AEROBOX PRO Logistics',
    title: 'AEROBOX PRO | Traemos tus compras de EE.UU. a la puerta de tu casa',
    description: 'Importa desde Estados Unidos a cualquier ciudad del Perú por $8.00 USD/kg. Recibimos en Miami, consolidamos gratis y te entregamos en tu casa.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'AEROBOX PRO — Servicio de Courier EE.UU. a Perú — Tarifa $8.00 USD/kg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEROBOX PRO | Courier EE.UU. → Perú — $8.00 USD/kg',
    description: 'Traemos tus compras desde EE.UU. hasta la puerta de tu casa en Perú. Casillero gratis en Miami y seguimiento en tiempo real.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@aeroboxpro',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-[#f8f9fa] text-slate-800 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
