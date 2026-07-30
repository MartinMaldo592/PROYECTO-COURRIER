# Project Instructions (Aerobox Pro)

Este archivo sirve para guiar al agente de Inteligencia Artificial (antigravity/Gemini) en las tareas comunes de desarrollo y estilo dentro del repositorio.

## Tech Stack
*   **Monorepo:** Turborepo + pnpm Workspaces
*   **Frontend:** Next.js 16 (React 19) + TypeScript
*   **Estilos y UI:** Tailwind CSS v3, Framer Motion, Lucide React
*   **Procesamiento:** Python (para scripts auxiliares)

## Comandos Comunes

### Desarrollo y Ejecución
*   Iniciar servidor de desarrollo (monorepo completo): `pnpm dev`
*   Iniciar desarrollo solo en la web: `pnpm --filter web dev`
*   Construir el proyecto para producción: `pnpm build`
*   Ejecutar linter de código: `pnpm lint`

### Scripts Auxiliares
*   Anonimizar rostros en imágenes: `pnpm anonymize-faces`

## Estilo de Código y Convenciones

### Nombres y Estructura de Archivos
*   Componentes UI de React: `PascalCase.tsx` ubicados en `apps/web/src/components/`
*   Rutas y layouts de Next.js: `layout.tsx`, `page.tsx`, `globals.css` en `apps/web/src/app/`
*   Ficheros de utilidad y configuración: `kebab-case.ts` o `camelCase.ts`

### Patrones de Código
*   **Tipado estricto:** Declarar interfaces para objetos de datos en `src/types.ts`.
*   **Estilos:** Usar Tailwind CSS utilitario. Para composición condicional de clases, usar `clsx` y `tailwind-merge` para evitar colisiones.
*   **Animaciones:** Utilizar animaciones spring de Framer Motion en componentes interactivos (`Hero3D`, modals, etc.).
*   **Manejo de Datos:** Utilizar `apps/web/src/data/mockData.ts` como base de datos local y mock de negocio.
