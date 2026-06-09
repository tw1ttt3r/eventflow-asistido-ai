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
pnpm quality        # pipeline local: cobertura + Sonar (ver sección siguiente)
```

## Calidad de código (local)

Flujo para ejecutar tests con cobertura y subir el análisis a SonarCloud o SonarQube desde tu máquina.

### Prerrequisitos

- Dependencias instaladas: `pnpm install`
- Proyecto creado en [SonarCloud](https://sonarcloud.io) (o tu instancia SonarQube) con `sonar.projectKey` igual al de `sonar-project.properties` (`eventflow-asistido-ai`)
- Token de análisis (SonarCloud: **My Account → Security → Generate Token**)

### Configuración (una vez)

1. Copia el ejemplo de variables:

```bash
cp .env.example .env
```

2. Edita `.env` y define al menos:

```env
SONAR_HOST_URL=https://sonarcloud.io
SONAR_TOKEN=<tu-token>
```

3. Si usas SonarCloud y tu organización no está en `sonar-project.properties`, descomenta y define:

```env
SONAR_ORGANIZATION=<org-key>
```

### Ejecutar el pipeline

```bash
pnpm quality
```

El script `scripts/quality.mjs` hace lo siguiente:

| Paso | Comando interno | Resultado |
|------|-----------------|-----------|
| 1 | `pnpm test:coverage` | Tests Vitest + reporte `coverage/eventflow-asistido-ai/lcov.info` |
| 2 | `pnpm sonar` | Análisis con `@sonar/scan` usando `sonar-project.properties` |

La versión enviada a Sonar se toma de `package.json` (`$npm_package_version`).

### Comandos por separado

```bash
pnpm quality:coverage   # solo tests + lcov (sin Sonar)
pnpm sonar              # solo análisis (requiere lcov generado antes)
```

### Ver resultados

Tras `pnpm quality`, abre tu proyecto en SonarCloud/SonarQube y revisa issues, duplicación y cobertura.

### Solución de problemas

| Error | Qué revisar |
|-------|-------------|
| `Falta SONAR_TOKEN` | `.env` existe y tiene `SONAR_TOKEN` |
| Cobertura en 0 % en Sonar | Ejecuta primero `pnpm quality:coverage`; verifica `coverage/eventflow-asistido-ai/lcov.info` |
| Proyecto no encontrado | `sonar.projectKey` en SonarCloud coincide con `sonar-project.properties` |
| Umbrales de cobertura fallan | `angular.json` exige 80 %; añade tests o ajusta `coverageThresholds` |

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
