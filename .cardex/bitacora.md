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
| Objetivo | Scaffold Angular 21 en raíz con pnpm, Vite/esbuild, PWA y secrets |
| Impacto al proyecto | **Total** — de repo casi vacío a aplicación Angular completa |
| Funcionalidad afectada | Build, dev server (Vite), tests (Vitest), PWA, environments, secrets (`NG_APP_*`) |

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
- **Secrets**: `.env.example`, `scripts/with-env.mjs`, `APP_CONFIG`, variables `NG_APP_*`
- **Environments**: `src/environments/` + `fileReplacements` en `angular.json`
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
- Instrucciones: commitear `.cardex/` y `.cursor/rules/` para historial en otros equipos

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
- [ ] Commitear `AGENTS.md` y `.cursor/rules/agent-model.mdc`
- [ ] Opcional: modelo por defecto en [Cloud Agents dashboard](https://cursor.com/dashboard/cloud-agents) para agentes en la nube

---

*Última actualización del archivo: 2026-05-20 02:23:39 CST*
