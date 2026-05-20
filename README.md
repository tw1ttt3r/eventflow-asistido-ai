# Eventflow Asistido AI

Proyecto Angular 21 generado con asistencia de agente en el IDE.

## Stack

| Tecnología | Detalle |
|------------|---------|
| Angular | **21.2.x** (estable) |
| Package manager | **pnpm** |
| Build | `@angular/build:application` (esbuild + **Vite** como dev server) |
| Tests | **Vitest** |
| PWA | `@angular/pwa` + service worker |
| Secrets | Variables `NG_APP_*` en `.env` → inyección vía `ng --define` |

El código fuente vive en la raíz del repositorio (`src/`, `public/`, `angular.json`).

## Requisitos

- Node.js ≥ 20.19
- pnpm ≥ 9

## Inicio rápido

```bash
pnpm install
cp .env.example .env   # opcional: secrets locales
pnpm start
```

Abre [http://localhost:4200](http://localhost:4200).

## Environments y secrets

### Environments (archivos)

- `src/environments/environment.ts` — producción
- `src/environments/environment.development.ts` — desarrollo (reemplazo vía `fileReplacements`)

Generar o regenerar:

```bash
pnpm exec ng generate environments
```

### Secrets (variables de build)

1. Copia `.env.example` → `.env`
2. Define variables con prefijo `NG_APP_` (por ejemplo `NG_APP_API_KEY`)
3. Los scripts `start` / `build` usan `scripts/with-env.mjs` para cargar `.env` e inyectarlas con `--define`

En código, accede vía `APP_CONFIG` (`src/app/core/config/app-config.ts`).

**Importante:** no commitees `.env`. En CI/CD usa secrets del proveedor y exporta `NG_APP_*` antes del build.

## PWA

- Manifest: `public/manifest.webmanifest`
- Service worker: `ngsw-config.json` (activo en build de producción)
- Registro en `src/app/app.config.ts`

Build de producción con PWA:

```bash
pnpm build
```

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
| [`.cursor/rules/bitacora.mdc`](.cursor/rules/bitacora.mdc) | Regla de bitacoreo |

Tras clonar en otro equipo: `git pull`, abre el proyecto en Cursor, selecciona **GPT-5.3 Codex** en el selector del Agent (una vez por máquina). **Commitea** `.cardex/`, `AGENTS.md` y `.cursor/rules/` para conservar historial y convenciones.
