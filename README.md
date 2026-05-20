# Eventflow Asistido AI

Proyecto Angular 21 generado con asistencia de agente en el IDE.

## Stack

| Tecnología | Detalle |
|------------|---------|
| Angular | **21.2.x** (estable) |
| Gestor de paquetes | **pnpm** |
| Build | `@angular/build:application` (esbuild + **Vite** como dev server) |
| Tests | **Vitest** |
| PWA | `@angular/pwa` + service worker |
| Estilos | **Tailwind CSS v4** (`@tailwindcss/postcss` + `@use` en `styles.scss`) |
| Secretos | Variables `NG_APP_*` en `.env` → inyección vía `ng --define` |

El código fuente vive en la raíz del repositorio (`src/`, `public/`, `angular.json`).

## Requisitos

- Node.js ≥ 20.19
- pnpm ≥ 9

## Inicio rápido

```bash
pnpm install
cp .env.example .env   # opcional: secretos locales
pnpm start
```

Abre [http://localhost:4200](http://localhost:4200).

## Entornos y secretos

### Entornos (archivos)

- `src/environments/environment.ts` — producción
- `src/environments/environment.development.ts` — desarrollo (reemplazo vía `fileReplacements`)

Generar o regenerar:

```bash
pnpm exec ng generate environments
```

### Secretos (variables de build)

1. Copia `.env.example` → `.env`
2. Define variables con prefijo `NG_APP_` (por ejemplo `NG_APP_API_KEY`)
3. Los scripts `start` / `build` usan `scripts/with-env.mjs` para cargar `.env` e inyectarlas con `--define`

En código, accede vía `APP_CONFIG` (`src/app/core/config/app-config.ts`).

**Importante:** no hagas commit de `.env`. En CI/CD usa secretos del proveedor y exporta `NG_APP_*` antes del build.

## Tailwind CSS v4

En Angular 21 hace falta **PostCSS** para que Tailwind genere las clases utilitarias en plantillas.

| Archivo | Rol |
|---------|-----|
| `.postcssrc.json` | Plugin `@tailwindcss/postcss` |
| `src/styles.scss` | `@use 'tailwindcss'` + `@source` para `.html` y `.ts` bajo `src/` |

Uso en plantillas:

```html
<h1 class="text-3xl font-bold text-slate-900">Eventflow</h1>
```

Tras cambiar estilos o clases Tailwind, reinicia `pnpm start` si no ves los cambios.

## PWA

- Manifest: `public/manifest.webmanifest`
- Service worker: `ngsw-config.json` (activo en build de producción)
- Registro en `src/app/app.config.ts`

Build de producción con PWA:

```bash
pnpm build
```

## Versionado (SemVer 2.0.0)

Automático en cada commit vía Husky (`pre-commit`):

| Segmento | Regla |
|----------|--------|
| PATCH | +1 por commit |
| MINOR | +1 al primer commit en una rama nueva |
| MAJOR | Manual al cerrar un módulo |

```bash
pnpm version:major                      # cierre de módulo → X.0.0
pnpm version:major -- --module=auth     # registra el módulo en el historial
pnpm version:dry-run                    # simula el próximo bump
```

La misma versión se sincroniza en `package.json`, la app, entornos y **`public/manifest.webmanifest`** (PWA).

Detalle: [`.cardex/VERSIONING.md`](.cardex/VERSIONING.md)

## Comandos

```bash
pnpm start          # dev server (Vite) + .env
pnpm build          # producción + service worker
pnpm build:dev      # desarrollo
pnpm test           # Vitest
```

## Angular CLI

```bash
pnpm exec ng generate component nombre
pnpm exec ng add <paquete>
```

Documentación: [angular.dev](https://angular.dev)

## Agente y bitácora

| Recurso | Propósito |
|---------|-----------|
| [AGENTS.md](AGENTS.md) | Modelo obligatorio: **GPT-5.3 Codex** |
| [`.cursor/rules/agent-model.mdc`](.cursor/rules/agent-model.mdc) | Regla persistente del modelo |
| [`.cardex/bitacora.md`](.cardex/bitacora.md) | Metadata por prompt |
| [`.cardex/VERSIONING.md`](.cardex/VERSIONING.md) | Reglas SemVer del proyecto |
| [`.cursor/rules/bitacora.mdc`](.cursor/rules/bitacora.mdc) | Regla de bitacoreo |

Tras clonar en otro equipo: `git pull`, abre el proyecto en Cursor, selecciona **GPT-5.3 Codex** en el selector del Agent (una vez por máquina). Haz commit de `.cardex/`, `AGENTS.md` y `.cursor/rules/` para conservar historial y convenciones.
