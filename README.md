# Eventflow Asistido AI

Proyecto Angular 21 generado con asistencia de agente en el IDE.

## Tecnologías

<!-- readme-badges:start — no editar manualmente fuera de esta sección; ver .cursor/rules/readme-badges.mdc -->

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-11-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Vite](https://img.shields.io/badge/Vite-dev%20server-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-tests-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-service%20worker-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![SonarQube](https://img.shields.io/badge/Sonar-análisis-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)](https://www.sonarsource.com/products/sonarqube/)
[![Appwrite](https://img.shields.io/badge/Appwrite-BaaS-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![Husky](https://img.shields.io/badge/Husky-git%20hooks-000000?style=for-the-badge)](https://typicode.github.io/husky/)
[![Cursor](https://img.shields.io/badge/Cursor-IDE-000000?style=for-the-badge&logo=cursor&logoColor=white)](https://cursor.com/)
[![GPT-5.3 Codex](https://img.shields.io/badge/Agent-GPT--5.3%20Codex-412991?style=for-the-badge&logo=openai&logoColor=white)](https://cursor.com/docs/models)

<!-- readme-badges:end -->

| Tecnología | Objetivo en el proyecto |
|------------|-------------------------|
| **Angular 21** | Framework principal: componentes, routing, forms y build de la SPA. |
| **TypeScript** | Lenguaje tipado del código fuente; compilado a JavaScript en build. |
| **JavaScript (ES2022+)** | Runtime del navegador y salida del compilador; base de módulos y APIs web. |
| **Node.js** | Runtime local para CLI, scripts (`scripts/*.mjs`) y toolchain de desarrollo. |
| **pnpm** | Gestor de paquetes y lockfile; instalación reproducible de dependencias. |
| **Vite** | Dev server rápido con HMR durante `pnpm start` (vía `@angular/build`). |
| **esbuild** | Bundler de producción integrado en el builder de Angular (`pnpm build`). |
| **Vitest** | Tests unitarios y cobertura (`lcov`) consumida por Sonar. |
| **Tailwind CSS v4** | Estilos utilitarios en plantillas; PostCSS genera clases en build. |
| **PWA** | Service worker, manifest e instalabilidad offline en producción. |
| **SonarQube / SonarCloud** | Análisis estático, Quality Gate e historial en `.quality/bitacora.md`. |
| **Appwrite** | BaaS: auth, base de datos, storage y functions; cliente vía `AppwriteService`. |
| **RxJS** | Flujos reactivos y composición asíncrona en servicios y componentes. |
| **Husky** | Hooks Git (`pre-commit`) para versionado SemVer automático. |
| **dotenv + `NG_APP_*`** | Secretos locales en `.env` inyectados en build/serve sin commitear credenciales. |
| **Cursor + GPT-5.3 Codex** | IDE y agente obligatorio para desarrollo asistido; reglas en `.cursor/rules/`. |
| **Prettier** | Formato consistente del código fuente en el equipo. |

> Al incorporar una tecnología nueva relevante (dependencia, BaaS, CI, etc.), el agente debe actualizar los badges y esta tabla según [`.cursor/rules/readme-badges.mdc`](.cursor/rules/readme-badges.mdc).

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
2. Define variables con prefijo `NG_APP_` (por ejemplo `NG_APP_API_URL`, `NG_APP_APPWRITE_PROJECT_ID`)
3. Los scripts `start` / `build` usan `scripts/with-env.mjs` para cargar `.env` e inyectarlas con `--define`

Los archivos `src/environments/environment*.ts` **no** guardan URLs ni IDs: solo cadenas vacías, `production` y `version`. Los valores reales viven en `.env`, se mapean vía `env.registry.ts` y quedan en campos directos de `Environment` (`apiUrl`, `appwrite.endpoint`, etc.).

| Paso | Acción |
|------|--------|
| Nueva `NG_APP_*` | Registrar en `env.registry.ts` + campo en `environment.model.ts` |
| Sincronizar plantilla | `pnpm env:sync` |
| En código | `inject(APP_CONFIG).apiUrl` o `injectEnvVar('NG_APP_API_URL')` |

Ver [`.cursor/rules/env-vars.mdc`](.cursor/rules/env-vars.mdc).

En código, accede vía `APP_CONFIG` (`src/app/core/config/app-config.ts`).

**Importante:** no hagas commit de `.env`. En CI/CD usa secretos del proveedor y exporta `NG_APP_*` antes del build.

## Appwrite (BaaS)

Backend as a Service vía [Appwrite](https://appwrite.io/). El cliente vive en `src/app/core/appwrite/` y se registra en `app.config.ts`.

### Configuración (una vez)

1. Crea un proyecto en [Appwrite Console](https://cloud.appwrite.io) (o tu instancia self-hosted).
2. **Add platform → Web** con hostname `localhost` (dev) y tu dominio de producción.
3. Copia `.env.example` → `.env` y define:

```env
NG_APP_APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
NG_APP_APPWRITE_PROJECT_ID=<tu-project-id>
NG_APP_APPWRITE_PROJECT_NAME=Eventflow Asistido
```

4. Reinicia `pnpm start`. En la pantalla inicial usa **Probar conexión Appwrite** (llama a `client.ping()`).

Todos los valores de integración deben estar en `.env`; `environment*.ts` permanece sin datos sensibles.

### Uso en código

```typescript
import { inject } from '@angular/core';
import { AppwriteService } from './core/appwrite/appwrite.service';

const appwrite = inject(AppwriteService);
await appwrite.ping();
// appwrite.account → módulo Account del SDK
```

Referencia: [starter Angular de Appwrite](https://github.com/appwrite/starter-for-angular) y [docs Angular](https://appwrite.io/docs/quick-starts/angular).

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
- Proyecto creado en [SonarCloud](https://sonar.orb.local/) (o tu instancia SonarQube) con `sonar.projectKey` igual al de `sonar-project.properties` (`eventflow-asistido-ai`)
- Token de análisis (SonarCloud: **My Account → Security → Generate Token**)

### Configuración (una vez)

1. Copia el ejemplo de variables:

```bash
cp .env.example .env
```

2. Edita `.env` y define al menos:

```env
SONAR_HOST_URL=https://sonar.orb.local/
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

### Bitácora de calidad (`.quality`)

Cada vez que corre `pnpm sonar` (solo o dentro de `pnpm quality`), el script actualiza **`.quality/bitacora.md`** con un registro append-only del análisis.

| Qué guarda | Para qué sirve |
|------------|----------------|
| Fecha, hora y rama Git | Saber cuándo y desde qué contexto se analizó el código |
| Status del scan (`OK` / `WARN` / `ERROR`) | Detectar rápido si el pipeline o el Quality Gate falló |
| Resumen + tabla de métricas overall | Evolución de cobertura, bugs, code smells, duplicación, ratings |
| Detalle de archivos | Por hallazgo: ruta, nivel, tipo, status, línea, regla; inventario por archivo con métricas |
| Análisis interpretativo | Por qué las métricas están en ese estado (p. ej. cobertura 0 % sin `lcov`) |

La bitácora se genera automáticamente consultando la API de Sonar tras el upload. Si el servidor no responde, igual queda constancia del exit code del scanner.

**Persistencia:** commitea `.quality/` y [`.cursor/rules/quality-bitacora.mdc`](.cursor/rules/quality-bitacora.mdc). En otro equipo, tras `git pull`, cada `pnpm sonar` sigue añadiendo entradas sin configuración extra.

Es complementaria a [`.cardex/bitacora.md`](.cardex/bitacora.md) (metadata de prompts del agente), no la reemplaza.

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
| [`.quality/bitacora.md`](.quality/bitacora.md) | Historial de scans Sonar |
| [`.cardex/VERSIONING.md`](.cardex/VERSIONING.md) | Reglas SemVer del proyecto |
| [`.cursor/rules/bitacora.mdc`](.cursor/rules/bitacora.mdc) | Regla de bitacoreo |
| [`.cursor/rules/quality-bitacora.mdc`](.cursor/rules/quality-bitacora.mdc) | Regla de bitácora Sonar |
| [`.cursor/rules/readme-badges.mdc`](.cursor/rules/readme-badges.mdc) | Badges shields.io en README |

Tras clonar en otro equipo: `git pull`, abre el proyecto en Cursor, selecciona **GPT-5.3 Codex** en el selector del Agent (una vez por máquina). Haz commit de `.cardex/`, `.quality/`, `AGENTS.md` y `.cursor/rules/` para conservar historial y convenciones.
