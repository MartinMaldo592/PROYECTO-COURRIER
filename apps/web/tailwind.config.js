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
          red: '#dc2626',
          'red-hover': '#b91c1c',
          cyan: '#2563eb',
          blue: '#1e40af',
          gold: '#d97706',
          slate: '#6b7280'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
