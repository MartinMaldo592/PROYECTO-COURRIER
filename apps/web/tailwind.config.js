/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#f8f9fa',
          card: '#ffffff',
          border: '#e5e7eb',
          // Paleta de Confianza Suprema (Psicología del Color: Azul Marino & Azul Real + Verde Esmeralda)
          navy: '#0f172a',
          red: '#2563eb',          // Convertido a Azul Real de Confianza Institucional
          'red-hover': '#1d4ed8',   // Azul Marino Intenso
          cyan: '#3b82f6',
          blue: '#1e40af',
          emerald: '#059669',
          gold: '#d97706',
          slate: '#475569'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
