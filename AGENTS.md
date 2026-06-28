# Instrucciones para agentes — Eventflow Asistido AI

## Modelo obligatorio

Usa **GPT-5.3 Codex** (`gpt-5.3-codex`) para todo el trabajo en este repositorio.

En Cursor: abre el selector de modelo del Agent y elige **GPT-5.3 Codex** antes de ejecutar prompts.

## Stack

- Angular 21, pnpm, Vite (dev server), PWA, secretos vía `NG_APP_*`
- Bitácora agente: `.cardex/bitacora.md` (actualizar al finalizar cada prompt con trabajo)
- Bitácora calidad: `.quality/bitacora.md` (automática en cada `pnpm sonar`; ver `.cursor/rules/quality-bitacora.mdc`)
- **Sonar issues:** no corregir hallazgos salvo petición explícita; diagnosticar e informar (ver `.cursor/rules/sonar-issues.mdc`)
- Badges README: actualizar sección **Tecnologías** al cambiar stack (ver `.cursor/rules/readme-badges.mdc`)
- Appwrite: `src/app/core/appwrite/` — BaaS; valores solo en `NG_APP_*` (`.env`), `environment*.ts` con cadenas vacías
- Variables `NG_APP_*`: registro en `env.registry.ts` → campos de `Environment`; Sonar solo en dev; `pnpm env:sync` (ver `.cursor/rules/env-vars.mdc`)

## Convenciones

- Reglas detalladas en `.cursor/rules/`
- **Idioma:** redacción en español; sin spanglish en la misma frase. Se mantienen en inglés la jerga habitual (p. ej. `runtime`, `scaffold`, `build`, `bump`, `stack`, `dev server`, `metadata`, `dry-run`, `commit`, `hook`). Nombres de API, CLI y productos en su forma original. Archivos en inglés (`cursor.mdc`) íntegramente en inglés.
- **Plantilla y `styles` siempre en línea** en `@Component` (`template` / `styles`). Prohibido `templateUrl` y `styleUrl`. Ver `.cursor/rules/component-inline.mdc`.
- **Mockups:** analizar con atomic design antes de implementar. Ver `.cursor/rules/mockup-atomic-design.mdc`.
- **Mock data:** centralizar en `src/mock/`; ver `.cursor/rules/mock-data.mdc`.
- No hagas commit de `.env`; usa `.env.example` como plantilla
