# Bitácora — Eventflow Asistido AI

Registro de metadata por prompt ejecutado con el agente.

> **Persistencia:** este archivo y la regla `.cursor/rules/bitacora.mdc` están en el repo. Al cambiar de equipo, clona o haz `git pull` y el bitacoreo sigue activo en Cursor.

| Campo | Descripción |
|-------|-------------|
| Fecha | Día de ejecución |
| Hora | Hora local de inicio/fin (si está disponible) |
| Tiempo total | Duración en segundos |
| Complejidad | Baja / Media / Alta |
| Ajustes requeridos | Pendientes o recomendaciones |

---

## Entrada #001 — Inicialización del proyecto Angular

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | No registrada (sin marca de inicio/fin en el IDE) |
| **Tiempo total de ejecución** | ~75–90 s (comandos medidos); ~2–4 min reloj total estimado |
| **Nivel de complejidad** | **Alta** |

### Prompt

> Inicializa un proyecto de angular en la versión 21 (que sea versión estable), agrega funcionalidad para pwa, uso de secrets, que ocupe vite como core, además el package manager será pnpm, además que el código fuente este en el root de este repositorio

### Criterios de complejidad

| Criterio | Detalle |
|----------|---------|
| Archivos afectados | ~40+ creados o modificados |
| Objetivo | Scaffold Angular 21 en raíz con pnpm, Vite/esbuild, PWA y secretos |
| Impacto al proyecto | **Total** — de repo casi vacío a aplicación Angular completa |
| Funcionalidad afectada | Build, dev server (Vite), tests (Vitest), PWA, entornos, secretos (`NG_APP_*`) |

### Desglose de tiempo (comandos)

| Actividad | Tiempo aprox. |
|-----------|----------------|
| Comprobación Node / CLI / dry-run | ~10 s |
| `ng new` (conflicto README + reintento exitoso) | ~24 s |
| `ng add @angular/pwa` | ~13 s |
| `ng generate environments` | ~3 s |
| `pnpm install` + `pnpm build` | ~12 s |
| `pnpm test` | ~7 s |
| Exploración (docs, esquemas CLI, búsquedas) | ~15–30 s |

### Entregables

- Angular **21.2.x** estable, **pnpm**, código fuente en **raíz**
- Builder `@angular/build:application` (esbuild + dev server **Vite**)
- **PWA**: `@angular/pwa`, `ngsw-config.json`, `manifest.webmanifest`, iconos
- **Secretos**: `.env.example`, `scripts/with-env.mjs`, `APP_CONFIG`, variables `NG_APP_*`
- **Entornos**: `src/environments/` + `fileReplacements` en `angular.json`
- Build y tests verificados en el mismo turno

### Ajustes requeridos

- [x] Resolver conflicto `README.md` con `ng new` (backup + regeneración)
- [x] Verificar `pnpm build` y `pnpm test`
- [ ] Commitear el scaffold cuando se decida
- [ ] Validar comportamiento PWA en producción (en dev deshabilitado por `isDevMode()`)
- [ ] Configurar valores reales en `environment*.ts` y `NG_APP_*` para API/entornos

---

## Entrada #002 — Regla persistente de bitacoreo entre equipos

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | 02:18:54 CST (cierre) |
| **Tiempo total de ejecución** | ~5 s |
| **Nivel de complejidad** | **Baja** |

### Prompt

> Necesito que el bitacoreo siga sin importar que cambie de equipo

### Criterios de complejidad

| Criterio | Detalle |
|----------|---------|
| Archivos afectados | 2 (`bitacora.md`, `bitacora.mdc`) |
| Objetivo | Fijar bitacoreo en reglas del proyecto versionadas en Git |
| Impacto al proyecto | Convención del agente; sin cambio en runtime de la app |
| Funcionalidad afectada | Flujo del agente Cursor en cualquier máquina con el repo |

### Entregables

- Regla `.cursor/rules/bitacora.mdc` con `alwaysApply: true`
- Nota de persistencia en encabezado de `bitacora.md`
- Instrucciones: hacer commit de `.cardex/` y `.cursor/rules/` para historial en otros equipos

### Ajustes requeridos

- [ ] `git add .cardex/ .cursor/rules/bitacora.mdc && git commit` en la rama actual
- [ ] En el nuevo equipo: `git pull` y abrir el proyecto en Cursor (reglas se cargan solas)

---

## Entrada #003 — Modelo de agente GPT-5.3 Codex

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | 02:23:39 CST |
| **Tiempo total de ejecución** | ~8 s |
| **Modelo de agente** | `gpt-5.3-codex` (requerido por proyecto) |
| **Nivel de complejidad** | **Baja** |

### Prompt

> Necesito que el agente a ocupar sea Codex 5.3

### Criterios de complejidad

| Criterio | Detalle |
|----------|---------|
| Archivos afectados | 4 (`agent-model.mdc`, `AGENTS.md`, `bitacora.mdc`, `README.md`, `bitacora.md`) |
| Objetivo | Fijar GPT-5.3 Codex como modelo del agente, portable entre equipos vía Git |
| Impacto al proyecto | Convención del agente; sin cambio en runtime de la app |
| Funcionalidad afectada | Configuración Cursor / Cloud Agents |

### Entregables

- Regla `.cursor/rules/agent-model.mdc` (`alwaysApply: true`)
- `AGENTS.md` con modelo obligatorio
- Campo **Modelo de agente** en regla de bitácora
- Documentación en `README.md`

### Ajustes requeridos

- [ ] En cada equipo: seleccionar **GPT-5.3 Codex** en el selector del Agent (Cursor no fija modelo solo con reglas)
- [ ] Hacer commit de `AGENTS.md` y `.cursor/rules/agent-model.mdc`
- [ ] Opcional: modelo por defecto en [Cloud Agents dashboard](https://cursor.com/dashboard/cloud-agents) para agentes en la nube

---

## Entrada #004 — Tailwind CSS v4

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | 10:06:50 CST (inicio) — 10:07:29 CST (build OK) |
| **Tiempo total de ejecución** | ~39 s |
| **Modelo de agente** | `gpt-5.3-codex` |
| **Nivel de complejidad** | **Media** |

### Prompt

> Configura tailwind v4 en el proyecto

### Criterios de complejidad

| Criterio | Detalle |
|----------|---------|
| Archivos afectados | 5 (`package.json`, `pnpm-lock.yaml`, `.postcssrc.json`, `src/styles.scss`, `README.md`) |
| Objetivo | Integrar Tailwind CSS 4.x con PostCSS en Angular 21 |
| Impacto al proyecto | Pipeline de estilos global; utilidades disponibles en plantillas |
| Funcionalidad afectada | Build CSS, estilos de componentes y plantillas |

### Entregables

- `tailwindcss@4.3.0`, `@tailwindcss/postcss@4.3.0`, `postcss@8.5.15`
- `.postcssrc.json` con plugin PostCSS
- `src/styles.scss` con `@use 'tailwindcss'` y `@source` para Angular
- `pnpm build` verificado (bundle `styles-*.css` ~4.6 kB)

### Ajustes requeridos

- [ ] Usar clases Tailwind en componentes y retirar estilos placeholder del scaffold si ya no se necesitan
- [ ] Hacer commit de cambios de dependencias y configuración

---

## Entrada #005 — Refactor Tailwind v4 sin PostCSS

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | 10:11:54 – 10:12:55 CST |
| **Tiempo total de ejecución** | ~70 s |
| **Modelo de agente** | `gpt-5.3-codex` |
| **Nivel de complejidad** | **Media** |

### Prompt

> Validar si PostCSS es necesario con Tailwind v4; refactorizar configuración si no lo es

### Criterios de complejidad

| Criterio | Detalle |
|----------|---------|
| Archivos afectados | 4 (`package.json`, `pnpm-lock.yaml`, `src/styles.scss`, `README.md`) + eliminado `.postcssrc.json` |
| Objetivo | Simplificar stack eliminando PostCSS explícito |
| Impacto al proyecto | Pipeline CSS; solo `tailwindcss` como dependencia directa |
| Funcionalidad afectada | Build y estilos globales |

### Hallazgos

- Con `@use 'tailwindcss'`, Angular 21 procesa Tailwind v4 **sin** `.postcssrc.json`
- Eliminados `@tailwindcss/postcss` y `postcss` del proyecto; build y tests OK
- `@tailwindcss/vite` no aplica a `ng build` (esbuild); PostCSS era opcional, no obligatorio

### Entregables

- Eliminado `.postcssrc.json`
- `devDependencies`: solo `tailwindcss@4.3.0`
- `src/styles.scss`: `@use 'tailwindcss'` + `@source`

### Ajustes requeridos

- [ ] Si el CSS global crece mucho, valorar volver a `@tailwindcss/postcss` para tree-shaking más agresivo (~4 kB vs ~21 kB en prueba local)

---

## Entrada #006 — Pantalla “en desarrollo” con Tailwind

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | 10:16:46 CST |
| **Tiempo total de ejecución** | ~12 s |
| **Modelo de agente** | `gpt-5.3-codex` |
| **Nivel de complejidad** | **Media** |

### Prompt

> Modificar app component para mostrar información de aplicación en desarrollo, usando Tailwind

### Criterios de complejidad

| Criterio | Detalle |
|----------|---------|
| Archivos afectados | 3 (`app.ts`, `app.html`, `app.spec.ts`); eliminado `app.scss` |
| Objetivo | Reemplazar placeholder del scaffold por UI de estado en desarrollo |
| Impacto al proyecto | Componente raíz y primera experiencia visual |
| Funcionalidad afectada | App shell, integración `APP_CONFIG`, estilos Tailwind |

### Entregables

- UI con badge “En desarrollo”, nombre de app, URL de API, estado de secretos, stack técnico
- Estilos 100 % Tailwind (sin CSS custom en componente)
- `OnPush`, `inject(APP_CONFIG)`, control flow nativo `@if` / `@for`
- Tests actualizados; build y Vitest OK

### Ajustes requeridos

- Ninguno

---

## Entrada #007 — Pipeline SemVer automático

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | 10:23:53 CST |
| **Tiempo total de ejecución** | ~90 s |
| **Modelo de agente** | `gpt-5.3-codex` |
| **Nivel de complejidad** | **Alta** |

### Prompt

> Semantic Versioning 2.0.0: patch por commit, minor por rama, major manual al cerrar módulo; pipeline automático

### Criterios de complejidad

| Criterio | Detalle |
|----------|---------|
| Archivos afectados | ~15 (scripts, husky, version state, environments, app, README, package.json) |
| Objetivo | Automatizar versionado según reglas custom SemVer |
| Impacto al proyecto | Flujo Git, package.json, UI, builds |
| Funcionalidad afectada | Commits, releases, pantalla dev |

### Entregables

- `scripts/version-bump.mjs` + hook `.husky/pre-commit`
- `.cardex/version.json` (estado) y `.cardex/VERSIONING.md` (docs)
- Comandos: `version:major`, `version:dry-run`, `version:bump`
- Sincronización: `package.json`, `src/version.ts`, entornos, badge en app
- Husky 9 en `prepare`

### Ajustes requeridos

- [ ] Ejecutar `pnpm install` en cada equipo para activar hooks
- [ ] Al cerrar módulo: `pnpm version:major -- --module=nombre-del-modulo` y commit

---

## Entrada #008 — Fix Tailwind: utilidades sin estilos

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | 10:30:54 CST |
| **Tiempo total de ejecución** | ~25 s |
| **Modelo de agente** | `gpt-5.3-codex` |
| **Nivel de complejidad** | **Media** |

### Prompt

> No veo los estilos aplicados

### Causa

Sin `@tailwindcss/postcss`, Angular solo compilaba tema/base de Tailwind; **no generaba utilidades** (`.min-h-screen`, `.bg-slate-950`, etc.).

### Entregables

- Restaurado `.postcssrc.json` + `@tailwindcss/postcss` + `postcss`
- `@source` en `styles.scss` apuntando a `./**/*.{html,ts}`
- Verificado: utilidades presentes en `styles.css` del build

### Ajustes requeridos

- [ ] Reiniciar `pnpm start` (Ctrl+C y volver a ejecutar)

---

## Entrada #009 — Versión en manifest PWA

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | 10:33:24 CST |
| **Tiempo total de ejecución** | ~8 s |
| **Modelo de agente** | `gpt-5.3-codex` |
| **Nivel de complejidad** | **Baja** |

### Prompt

> La versión debe verse igual en el manifest (PWA)

### Entregables

- `syncManifest()` en `scripts/version-bump.mjs`
- `public/manifest.webmanifest`: `version`, `name`, `description`, colores PWA
- Manifest incluido en `git add` del hook pre-commit

---

## Entrada #010 — Plantilla y estilos en línea en `@Component`

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | 10:44:24 CST |
| **Tiempo total de ejecución** | ~15 s |
| **Modelo de agente** | `gpt-5.3-codex` |
| **Nivel de complejidad** | **Baja** |

### Prompt

> El template y los styles (si se generarán) deben vivir dentro del decorador del componente; esto debe ser una regla.

### Entregables

- Regla `.cursor/rules/component-inline.mdc` (`alwaysApply: true`)
- Schematics en `angular.json`: `inlineTemplate` + `inlineStyle` por defecto
- `src/app/app.ts`: plantilla en línea; eliminado `src/app/app.html`
- `AGENTS.md`: convención documentada
- Tests (2) y `pnpm build:dev` OK

### Ajustes requeridos

- Ninguno

---

## Entrada #011 — Idioma consistente en documentación

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | ~10:50 CST |
| **Tiempo total de ejecución** | ~20 s |
| **Modelo de agente** | `gpt-5.3-codex` |
| **Nivel de complejidad** | **Baja** |

### Prompt

> Ser concisos en el idioma de los archivos md: español completo o inglés completo; evitar spanglish.

### Entregables

- `README.md`, `AGENTS.md`, `.cardex/VERSIONING.md`, `.cardex/bitacora.md`: español unificado
- `.cursor/rules/component-inline.mdc`, `bitacora.mdc`: español
- `.cursor/rules/cursor.mdc`: sección de plantillas en inglés (archivo en inglés)
- Convención de idioma en `AGENTS.md`

### Ajustes requeridos

- Ninguno

---

## Entrada #012 — Jerga técnica en inglés

| Campo | Valor |
|-------|--------|
| **Fecha de ejecución** | 2026-05-20 |
| **Hora de ejecución** | ~10:52 CST |
| **Tiempo total de ejecución** | ~10 s |
| **Modelo de agente** | `gpt-5.3-codex` |
| **Nivel de complejidad** | **Baja** |

### Prompt

> Algunos términos pueden quedarse en inglés por ser jerga del área (runtime, scaffold, etc.).

### Entregables

- Convención ampliada en `AGENTS.md` (lista de jerga permitida)
- Revertidos términos forzados al español en `README.md`, `.cardex/bitacora.md`, `VERSIONING.md`, `bitacora.mdc`

### Ajustes requeridos

- Ninguno

---

*Última actualización del archivo: 2026-05-20 10:52:00 CST*
