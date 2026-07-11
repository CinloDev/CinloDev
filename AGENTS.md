# Guía Rápida y Reglas del Proyecto (AGENTS.md)

Este documento centraliza toda la información técnica, convenciones y comandos clave del proyecto **CinloDev (nextn)**. Todo agente de IA o desarrollador que trabaje en este repositorio debe seguir estas instrucciones sin necesidad de inspeccionar repetidamente la estructura o los archivos de configuración.

---

## 1. Gestor de Paquetes y Comandos Principales

- **Gestor oficial:** `pnpm` (versión 9.x+).
  - 🚫 **NUNCA** utilizar `npm`, `yarn` ni `bun`.
  - 🚫 **NUNCA** generar `package-lock.json` ni `yarn.lock`.
- **Instalación de dependencias:**
  ```bash
  pnpm install
  pnpm add <paquete>
  pnpm add -D <paquete-dev>
  ```
- **Comandos de desarrollo (`package.json`):**
  - **Servidor de desarrollo:** `pnpm dev`  
    *(Ejecuta Next.js con Turbopack en el puerto **9002**: `http://localhost:9002`)*
  - **Build de producción:** `pnpm build`
  - **Chequeo de tipos:** `pnpm typecheck` (`tsc --noEmit`)
  - **Genkit IA (Dev):** `pnpm genkit:dev` o `pnpm genkit:watch`

---

## 2. Stack Tecnológico

- **Framework Core:** [Next.js 16](file:///d:/Programacion/CinloDev/package.json) (App Router con Turbopack para dev).
- **Lenguaje:** TypeScript 5 (estricto).
- **Estilos:** Tailwind CSS 3.4 (`tailwind.config.ts`, variables CSS en `src/app/globals.css`).
- **UI Components:** Radix UI Primitives + Shadcn UI (`components.json`).
- **Iconografía:** `lucide-react` y `react-icons`.
- **Formularios & Validación:** `react-hook-form` + `zod` + `@hookform/resolvers`.
- **Servicios e IA:**
  - **Firebase SDK (`firebase`)** para servicios cloud.
  - **Google GenAI & Genkit (`genkit`, `@genkit-ai/google-genai`, `@genkit-ai/next`)** para flujos de IA.
  - **Formspree (`@formspree/react`)** para envíos de formularios.
- **Internacionalización (i18n):** Archivos JSON en `src/locales/` (`es.json` y `en.json`).

---

## 3. Estructura de Directorios (`src/`)

```
CinloDev/
├── .agents/
│   └── AGENTS.md               # Guía para agentes en carpeta de configuración
├── public/                     # Archivos estáticos, sitemaps e imágenes
├── src/
│   ├── ai/                     # Flujos y configuración de IA con Genkit (ej. dev.ts)
│   ├── app/                    # Rutas y layouts de Next.js App Router
│   ├── components/             # Componentes reutilizables de la aplicación
│   │   └── ui/                 # Primitivos de interfaz estilo Shadcn UI
│   ├── hooks/                  # Custom hooks de React
│   ├── lib/                    # Funciones utilitarias (utils.ts), datos estáticos (data.ts)
│   └── locales/                # Diccionarios de idiomas (en.json, es.json)
├── components.json             # Configuración de Shadcn UI y alias
├── next.config.ts              # Configuración de Next.js
├── pnpm-workspace.yaml         # Configuración de workspace y compilaciones nativas de pnpm
└── tailwind.config.ts          # Configuración de Tailwind CSS
```

---

## 4. Convenciones de Código y Arquitectura

### Alias de Importación (Path Aliases)
El proyecto utiliza alias configurados en `tsconfig.json` / `components.json`:
- `@/*` ➔ `src/*`
- `@/components/*` ➔ `src/components/*`
- `@/ui/*` ➔ `src/components/ui/*`
- `@/lib/*` ➔ `src/lib/*`
- `@/hooks/*` ➔ `src/hooks/*`

### Estilos y Componentes UI
- Usar siempre la función `cn(...)` (de `@/lib/utils`) al combinar clases de Tailwind con condiciones o props `className`.
- Para agregar nuevos primitivos UI, mantener la coherencia con Radix UI / Shadcn UI en `src/components/ui/`.
- Respetar el soporte para modo oscuro (`next-themes`) utilizando clases semánticas de variables CSS (por ejemplo, `bg-background`, `text-foreground`, `border-border`).

### Internacionalización (i18n)
- **Regla estricta:** Si se añade, edita o elimina texto visible para el usuario, **debe actualizarse en ambos archivos de localización simultáneamente:**
  - [es.json](file:///d:/Programacion/CinloDev/src/locales/es.json)
  - [en.json](file:///d:/Programacion/CinloDev/src/locales/en.json)

### Tipado y Calidad (TypeScript)
- Evitar el uso de `any` no tipado.
- Antes de dar por finalizada una tarea compleja o refactorización, verificar que no haya errores de TypeScript ejecutando `pnpm typecheck`.
