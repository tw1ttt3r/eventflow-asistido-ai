# Bitácora de calidad — Sonar

Registro automático de cada ejecución de `pnpm sonar` (y del paso Sonar dentro de `pnpm quality`).

> **Persistencia:** este archivo y la regla `.cursor/rules/quality-bitacora.mdc` viven en el repo. Tras `git clone` / `git pull`, cada scan sigue appendiendo entradas.

| Campo | Descripción |
|-------|-------------|
| Fecha y hora | Momento local de la ejecución |
| Rama | `git rev-parse --abbrev-ref HEAD` |
| Resumen del scan | Resultado del CLI + Quality Gate |
| Status del scan | `OK` / `WARN` / `ERROR` según exit code y gate |
| Métricas overall | Tabla desde API Sonar |
| Detalle de archivos | Hallazgos (ruta, nivel, tipo, status) + inventario por archivo |
| Análisis | Interpretación automática de las métricas |

---

## Entrada #001 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-14 18:56:28 UTC-06:00 |
| **Inicio** | 2026-06-14 18:56:15 UTC-06:00 |
| **Rama** | `feat/sonarqube` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 1 |
| Security hotspots | 0 |
| Cobertura (%) | 87.5 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 161 |
| Deuda técnica (min) | 2 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Análisis

La cobertura (87.5 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #002 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-14 19:04:10 UTC-06:00 |
| **Inicio** | 2026-06-14 19:03:57 UTC-06:00 |
| **Rama** | `feat/sonarqube` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. No se pudieron consultar métricas vía API: 403 : {"errors":[{"msg":"Insufficient privileges"}]}

### Métricas overall (código)

_Métricas no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Inventario por archivo

_Inventario no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Análisis

Sin datos suficientes para un análisis detallado; verifica conectividad con la API de Sonar.

---


## Entrada #003 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-14 19:08:21 UTC-06:00 |
| **Inicio** | 2026-06-14 19:08:07 UTC-06:00 |
| **Rama** | `feat/sonarqube` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. No se pudieron consultar métricas vía API: 403 : {"errors":[{"msg":"Insufficient privileges"}]}

### Métricas overall (código)

_Métricas no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Inventario por archivo

_Inventario no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Análisis

Sin datos suficientes para un análisis detallado; verifica conectividad con la API de Sonar.

---


## Entrada #004 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-14 19:09:17 UTC-06:00 |
| **Inicio** | 2026-06-14 19:09:05 UTC-06:00 |
| **Rama** | `feat/sonarqube` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. No se pudieron consultar métricas vía API: 403 : {"errors":[{"msg":"Insufficient privileges"}]}

### Métricas overall (código)

_Métricas no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Inventario por archivo

_Inventario no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Análisis

Sin datos suficientes para un análisis detallado; verifica conectividad con la API de Sonar.

---


## Entrada #005 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-14 19:10:55 UTC-06:00 |
| **Inicio** | 2026-06-14 19:10:42 UTC-06:00 |
| **Rama** | `feat/sonarqube` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. No se pudieron consultar métricas vía API: 403 : {"errors":[{"msg":"Insufficient privileges"}]}

### Métricas overall (código)

_Métricas no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Inventario por archivo

_Inventario no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Análisis

Sin datos suficientes para un análisis detallado; verifica conectividad con la API de Sonar.

---


## Entrada #006 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-14 19:13:47 UTC-06:00 |
| **Inicio** | 2026-06-14 19:13:46 UTC-06:00 |
| **Rama** | `feat/sonarqube` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

El scanner `@sonar/scan` terminó con código distinto de cero. No se pudieron consultar métricas vía API: 401 : 

### Métricas overall (código)

_Métricas no disponibles (401 : )._

### Detalle de archivos

_Detalle de archivos no disponible (401 : )._

#### Hallazgos abiertos

_Hallazgos no disponibles (401 : )._

#### Inventario por archivo

_Inventario no disponible (401 : )._

### Análisis

El scan falló antes de completar el análisis. Revisa la salida de consola, el token (`SONAR_TOKEN`), la URL (`SONAR_HOST_URL`) y que el proyecto exista en el servidor Sonar con el `projectKey` configurado.

---


## Entrada #007 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-14 22:24:31 UTC-06:00 |
| **Inicio** | 2026-06-14 22:24:18 UTC-06:00 |
| **Rama** | `feat/sonarqube` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. No se pudieron consultar métricas vía API: 403 : {"errors":[{"msg":"Insufficient privileges"}]}

### Métricas overall (código)

_Métricas no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Inventario por archivo

_Inventario no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Análisis

Sin datos suficientes para un análisis detallado; verifica conectividad con la API de Sonar.

---


## Entrada #008 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-18 23:11:02 UTC-06:00 |
| **Inicio** | 2026-06-18 23:10:44 UTC-06:00 |
| **Rama** | `feat/check-status-infra` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. No se pudieron consultar métricas vía API: 403 : {"errors":[{"msg":"Insufficient privileges"}]}

### Métricas overall (código)

_Métricas no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

#### Inventario por archivo

_Inventario no disponible (403 : {"errors":[{"msg":"Insufficient privileges"}]})._

### Análisis

Sin datos suficientes para un análisis detallado; verifica conectividad con la API de Sonar.

---


## Entrada #009 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-19 23:42:16 UTC-06:00 |
| **Inicio** | 2026-06-19 23:42:01 UTC-06:00 |
| **Rama** | `feat/check-status-infra` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

El scanner `@sonar/scan` terminó con código distinto de cero. No se pudieron consultar métricas vía API: 404 : {"errors":[{"msg":"Project \u0027eventflow-asistido-ai\u0027 not found"}]}

### Métricas overall (código)

_Métricas no disponibles (404 : {"errors":[{"msg":"Project \u0027eventflow-asistido-ai\u0027 not found"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (404 : {"errors":[{"msg":"Project \u0027eventflow-asistido-ai\u0027 not found"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (404 : {"errors":[{"msg":"Project \u0027eventflow-asistido-ai\u0027 not found"}]})._

#### Inventario por archivo

_Inventario no disponible (404 : {"errors":[{"msg":"Project \u0027eventflow-asistido-ai\u0027 not found"}]})._

### Análisis

El scan falló antes de completar el análisis. Revisa la salida de consola, el token (`SONAR_TOKEN`), la URL (`SONAR_HOST_URL`) y que el proyecto exista en el servidor Sonar con el `projectKey` configurado.

---


## Entrada #010 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-19 23:44:58 UTC-06:00 |
| **Inicio** | 2026-06-19 23:44:41 UTC-06:00 |
| **Rama** | `feat/check-status-infra` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

El scanner `@sonar/scan` terminó con código distinto de cero. No se pudieron consultar métricas vía API: 404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]}

### Métricas overall (código)

_Métricas no disponibles (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

#### Inventario por archivo

_Inventario no disponible (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

### Análisis

El scan falló antes de completar el análisis. Revisa la salida de consola, el token (`SONAR_TOKEN`), la URL (`SONAR_HOST_URL`) y que el proyecto exista en el servidor Sonar con el `projectKey` configurado.

---


## Entrada #011 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 07:56:18 UTC-06:00 |
| **Inicio** | 2026-06-20 07:56:18 UTC-06:00 |
| **Rama** | `feat/check-status-infra` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

El scanner `@sonar/scan` terminó con código distinto de cero. No se pudieron consultar métricas vía API: fetch failed

### Métricas overall (código)

_Métricas no disponibles (fetch failed)._

### Detalle de archivos

_Detalle de archivos no disponible (fetch failed)._

#### Hallazgos abiertos

_Hallazgos no disponibles (fetch failed)._

#### Inventario por archivo

_Inventario no disponible (fetch failed)._

### Análisis

El scan falló antes de completar el análisis. Revisa la salida de consola, el token (`SONAR_TOKEN`), la URL (`SONAR_HOST_URL`) y que el proyecto exista en el servidor Sonar con el `projectKey` configurado.

---


## Entrada #012 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 07:58:44 UTC-06:00 |
| **Inicio** | 2026-06-20 07:58:30 UTC-06:00 |
| **Rama** | `feat/check-status-infra` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

El scanner `@sonar/scan` terminó con código distinto de cero. No se pudieron consultar métricas vía API: 404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]}

### Métricas overall (código)

_Métricas no disponibles (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

#### Inventario por archivo

_Inventario no disponible (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

### Análisis

El scan falló antes de completar el análisis. Revisa la salida de consola, el token (`SONAR_TOKEN`), la URL (`SONAR_HOST_URL`) y que el proyecto exista en el servidor Sonar con el `projectKey` configurado.

---


## Entrada #013 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 08:02:14 UTC-06:00 |
| **Inicio** | 2026-06-20 08:02:00 UTC-06:00 |
| **Rama** | `feat/check-status-infra` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

El scanner `@sonar/scan` terminó con código distinto de cero. No se pudieron consultar métricas vía API: 404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]}

### Métricas overall (código)

_Métricas no disponibles (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

### Detalle de archivos

_Detalle de archivos no disponible (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

#### Hallazgos abiertos

_Hallazgos no disponibles (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

#### Inventario por archivo

_Inventario no disponible (404 : {"errors":[{"msg":"Component key \u0027eventflow-asistido-ai\u0027 not found"}]})._

### Análisis

El scan falló antes de completar el análisis. Revisa la salida de consola, el token (`SONAR_TOKEN`), la URL (`SONAR_HOST_URL`) y que el proyecto exista en el servidor Sonar con el `projectKey` configurado.

---


## Entrada #014 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 08:03:34 UTC-06:00 |
| **Inicio** | 2026-06-20 08:03:18 UTC-06:00 |
| **Rama** | `feat/check-status-infra` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **NONE** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | — |
| Bugs | — |
| Vulnerabilidades | — |
| Code smells | — |
| Security hotspots | — |
| Cobertura (%) | — |
| Duplicación (%) | — |
| Líneas de código (ncloc) | — |
| Deuda técnica (min) | — |
| Rating fiabilidad | — |
| Rating seguridad | — |
| Rating mantenibilidad | — |

### Detalle de archivos

**Archivos analizados:** 0 · **Sin hallazgos:** 0 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

_Inventario de archivos no disponible._

### Análisis

Sin datos suficientes para un análisis detallado; verifica conectividad con la API de Sonar.

---


## Entrada #015 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 08:20:33 UTC-06:00 |
| **Inicio** | 2026-06-20 08:20:19 UTC-06:00 |
| **Rama** | `feat/check-status-infra` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 1 |
| Security hotspots | 0 |
| Cobertura (%) | 82.2 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 364 |
| Deuda técnica (min) | 2 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 1 · **Sin hallazgos:** 0 · **Con hallazgos:** 1 · **Issues abiertos:** 1

**Por nivel:** Menor: 1

**Por tipo:** Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/core/config/env-vars.ts` | Menor | Code smell | Abierto | 6 | `typescript:S7735` | Unexpected negated condition. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/core/config/env-vars.ts` | Menor | Code smell | ⚠️ Con hallazgos | — | 0 | 0 | 0 | — | 1 |

### Análisis

La cobertura (82.2 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar. 1 hallazgo(s) abierto(s) en 1 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #016 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 09:11:11 UTC-06:00 |
| **Inicio** | 2026-06-20 09:10:59 UTC-06:00 |
| **Rama** | `feat/check-status-infra` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 1 |
| Security hotspots | 0 |
| Cobertura (%) | 82.2 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 364 |
| Deuda técnica (min) | 2 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 1 · **Sin hallazgos:** 0 · **Con hallazgos:** 1 · **Issues abiertos:** 1

**Por nivel:** Menor: 1

**Por tipo:** Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/core/config/env-vars.ts` | Menor | Code smell | Abierto | 6 | `typescript:S7735` | Unexpected negated condition. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/core/config/env-vars.ts` | Menor | Code smell | ⚠️ Con hallazgos | — | 0 | 0 | 0 | — | 1 |

### Análisis

La cobertura (82.2 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar. 1 hallazgo(s) abierto(s) en 1 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #017 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 09:54:42 UTC-06:00 |
| **Inicio** | 2026-06-20 09:54:29 UTC-06:00 |
| **Rama** | `feat/refactor-appwrite` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 1 |
| Security hotspots | 0 |
| Cobertura (%) | 83.7 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 414 |
| Deuda técnica (min) | 2 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 1 · **Sin hallazgos:** 0 · **Con hallazgos:** 1 · **Issues abiertos:** 1

**Por nivel:** Menor: 1

**Por tipo:** Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/core/config/env-vars.ts` | Menor | Code smell | Abierto | 6 | `typescript:S7735` | Unexpected negated condition. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/core/config/env-vars.ts` | Menor | Code smell | ⚠️ Con hallazgos | — | 0 | 0 | 0 | — | 1 |

### Análisis

La cobertura (83.7 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar. 1 hallazgo(s) abierto(s) en 1 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #018 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 09:57:47 UTC-06:00 |
| **Inicio** | 2026-06-20 09:57:34 UTC-06:00 |
| **Rama** | `feat/refactor-appwrite` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 0 |
| Security hotspots | 0 |
| Cobertura (%) | 83.7 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 414 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 0 · **Sin hallazgos:** 0 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

_Inventario de archivos no disponible._

### Análisis

La cobertura (83.7 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #019 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 22:55:32 UTC-06:00 |
| **Inicio** | 2026-06-20 22:55:18 UTC-06:00 |
| **Rama** | `feat/auth` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 0 |
| Security hotspots | 0 |
| Cobertura (%) | 83.7 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 414 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 0 · **Sin hallazgos:** 0 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

_Inventario de archivos no disponible._

### Análisis

La cobertura (83.7 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #020 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-20 22:58:08 UTC-06:00 |
| **Inicio** | 2026-06-20 22:57:54 UTC-06:00 |
| **Rama** | `feat/auth` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **ERROR** — condiciones incumplidas: new_violations: 2 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 1 |
| Code smells | 1 |
| Security hotspots | 0 |
| Cobertura (%) | 89.4 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 1095 |
| Deuda técnica (min) | 5 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | B (2.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 2 · **Sin hallazgos:** 0 · **Con hallazgos:** 2 · **Issues abiertos:** 2

**Por nivel:** Menor: 2

**Por tipo:** Vulnerabilidad: 1 · Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/shared/ui/password-strength.util.ts` | Menor | Code smell | Abierto | 15 | `typescript:S6353` | Use concise character class syntax '\d' instead of '[0-9]'. |
| `src/index.html` | Menor | Vulnerabilidad | Abierto | 12 | `Web:S5725` | Make sure not using resource integrity feature is safe here. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/shared/ui/password-strength.util.ts` | Menor | Code smell | ⚠️ Con hallazgos | — | 0 | 0 | 0 | — | 1 |
| `src/index.html` | Menor | Vulnerabilidad | ⚠️ Con hallazgos | — | 0 | 0 | 0 | — | 1 |

### Análisis

La cobertura (89.4 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 vulnerabilidad(es): revisar issues de seguridad con prioridad. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate falló por: new_violations. Ajusta código, tests o umbrales en Sonar según corresponda. 2 hallazgo(s) abierto(s) en 2 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #021 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 09:38:24 UTC-06:00 |
| **Inicio** | 2026-06-28 09:38:07 UTC-06:00 |
| **Rama** | `feat/auth` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **ERROR** — condiciones incumplidas: new_violations: 2 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 1 |
| Code smells | 1 |
| Security hotspots | 0 |
| Cobertura (%) | 89.4 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 1095 |
| Deuda técnica (min) | 5 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | B (2.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 2 · **Sin hallazgos:** 0 · **Con hallazgos:** 2 · **Issues abiertos:** 2

**Por nivel:** Menor: 2

**Por tipo:** Vulnerabilidad: 1 · Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/shared/ui/password-strength.util.ts` | Menor | Code smell | Abierto | 15 | `typescript:S6353` | Use concise character class syntax '\d' instead of '[0-9]'. |
| `src/index.html` | Menor | Vulnerabilidad | Abierto | 12 | `Web:S5725` | Make sure not using resource integrity feature is safe here. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/shared/ui/password-strength.util.ts` | Menor | Code smell | ⚠️ Con hallazgos | — | 0 | 0 | 0 | — | 1 |
| `src/index.html` | Menor | Vulnerabilidad | ⚠️ Con hallazgos | — | 0 | 0 | 0 | — | 1 |

### Análisis

La cobertura (89.4 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 vulnerabilidad(es): revisar issues de seguridad con prioridad. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate falló por: new_violations. Ajusta código, tests o umbrales en Sonar según corresponda. 2 hallazgo(s) abierto(s) en 2 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #022 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 10:12:52 UTC-06:00 |
| **Inicio** | 2026-06-28 10:12:37 UTC-06:00 |
| **Rama** | `fix/refactor-auth` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **ERROR** — condiciones incumplidas: new_violations: 2 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 1 |
| Code smells | 1 |
| Security hotspots | 0 |
| Cobertura (%) | 82.6 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 1423 |
| Deuda técnica (min) | 5 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | B (2.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 2 · **Sin hallazgos:** 0 · **Con hallazgos:** 2 · **Issues abiertos:** 2

**Por nivel:** Menor: 2

**Por tipo:** Vulnerabilidad: 1 · Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/shared/ui/password-strength.util.ts` | Menor | Code smell | Abierto | 15 | `typescript:S6353` | Use concise character class syntax '\d' instead of '[0-9]'. |
| `src/index.html` | Menor | Vulnerabilidad | Abierto | 12 | `Web:S5725` | Make sure not using resource integrity feature is safe here. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/shared/ui/password-strength.util.ts` | Menor | Code smell | ⚠️ Con hallazgos | — | 0 | 0 | 0 | — | 1 |
| `src/index.html` | Menor | Vulnerabilidad | ⚠️ Con hallazgos | — | 0 | 0 | 0 | — | 1 |

### Análisis

La cobertura (82.6 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 vulnerabilidad(es): revisar issues de seguridad con prioridad. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate falló por: new_violations. Ajusta código, tests o umbrales en Sonar según corresponda. 2 hallazgo(s) abierto(s) en 2 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #023 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 10:13:47 UTC-06:00 |
| **Inicio** | 2026-06-28 10:13:32 UTC-06:00 |
| **Rama** | `fix/refactor-auth` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 0 |
| Security hotspots | 0 |
| Cobertura (%) | 82.6 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 1424 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 0 · **Sin hallazgos:** 0 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

_Inventario de archivos no disponible._

### Análisis

La cobertura (82.6 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #024 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 13:11:35 UTC-06:00 |
| **Inicio** | 2026-06-28 13:11:17 UTC-06:00 |
| **Rama** | `feat/event-list` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 0 |
| Security hotspots | 0 |
| Cobertura (%) | 82.6 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 1424 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 0 · **Sin hallazgos:** 0 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

_Inventario de archivos no disponible._

### Análisis

La cobertura (82.6 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #025 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 13:19:45 UTC-06:00 |
| **Inicio** | 2026-06-28 13:19:22 UTC-06:00 |
| **Rama** | `feat/event-list` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

El scanner `@sonar/scan` terminó con código distinto de cero. Quality Gate **ERROR** — condiciones incumplidas: new_violations: 1 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 1 |
| Security hotspots | 0 |
| Cobertura (%) | 85.8 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 1981 |
| Deuda técnica (min) | 1 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 61 · **Sin hallazgos:** 60 · **Con hallazgos:** 1 · **Issues abiertos:** 1

**Por nivel:** Menor: 1

**Por tipo:** Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | Menor | Code smell | Abierto | 1 | `typescript:S1128` | Remove this unused import of 'input'. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 8.3 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 70 | 0 | 0 | 0 | 60.6 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 80.8 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 61.5 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 40.6 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 77.6 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 92 | 0 | 0 | 0 | 87.2 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 76.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 93.3 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 75.6 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 80.5 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 79.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 96.2 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | Menor | Code smell | ⚠️ Con hallazgos | 26 | 0 | 0 | 1 | 90.9 | 1 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 46 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 1 | 0 | 0 | 0 | — | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

El scan falló antes de completar el análisis. Revisa la salida de consola, el token (`SONAR_TOKEN`), la URL (`SONAR_HOST_URL`) y que el proyecto exista en el servidor Sonar con el `projectKey` configurado.

---


## Entrada #026 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 13:21:58 UTC-06:00 |
| **Inicio** | 2026-06-28 13:21:37 UTC-06:00 |
| **Rama** | `feat/event-list` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 0 |
| Security hotspots | 0 |
| Cobertura (%) | 85.8 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 1981 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 61 · **Sin hallazgos:** 61 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 8.3 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 70 | 0 | 0 | 0 | 60.6 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 80.8 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 61.5 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 40.6 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 77.6 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 92 | 0 | 0 | 0 | 87.2 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 76.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 93.3 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 75.6 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 80.5 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 79.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 96.2 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 46 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 1 | 0 | 0 | 0 | — | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (85.8 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #027 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:00:51 UTC-06:00 |
| **Inicio** | 2026-06-28 17:00:29 UTC-06:00 |
| **Rama** | `refactor-custom-paths` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 0 |
| Security hotspots | 0 |
| Cobertura (%) | 85.8 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 1981 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 61 · **Sin hallazgos:** 61 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 8.3 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 70 | 0 | 0 | 0 | 60.6 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 80.8 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 61.5 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 40.6 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 77.6 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 92 | 0 | 0 | 0 | 87.2 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 76.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 93.3 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 75.6 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 80.5 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 79.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 96.2 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 46 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 1 | 0 | 0 | 0 | — | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (85.8 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #028 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:32:07 UTC-06:00 |
| **Inicio** | 2026-06-28 17:31:47 UTC-06:00 |
| **Rama** | `refactor-custom-paths` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **OK** |
| **Exit code scanner** | 0 |

### Resumen del scan

Análisis subido correctamente a SonarQube/SonarCloud. Quality Gate **OK** — todas las condiciones cumplidas.

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ✅ OK |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 0 |
| Security hotspots | 0 |
| Cobertura (%) | 85.8 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 1981 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 61 · **Sin hallazgos:** 61 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 8.3 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 70 | 0 | 0 | 0 | 60.6 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 80.8 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 61.5 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 40.6 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 77.6 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 92 | 0 | 0 | 0 | 87.2 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 76.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 93.3 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 75.6 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 80.5 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 79.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 96.2 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 46 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 1 | 0 | 0 | 0 | — | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (85.8 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #029 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 23:30:38 UTC-06:00 |
| **Inicio** | 2026-06-28 23:30:12 UTC-06:00 |
| **Rama** | `feat/event-register` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

Análisis procesado en SonarQube; exit code 1 porque el Quality Gate no pasó (`sonar.qualitygate.wait=true`). Quality Gate **ERROR** — condiciones incumplidas: new_security_hotspots_reviewed: 0.0 (umbral: 100); new_violations: 1 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 1 |
| Security hotspots | 1 |
| Cobertura (%) | 93.1 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 2771 |
| Deuda técnica (min) | 1 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 72 · **Sin hallazgos:** 71 · **Con hallazgos:** 1 · **Issues abiertos:** 1

**Por nivel:** Menor: 1

**Por tipo:** Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/features/events/event-registration-page.ts` | Menor | Code smell | Abierto | 7 | `typescript:S1128` | Remove this unused import of 'EventRegistrationDetail'. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 70 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/event-registration-page.ts` | Menor | Code smell | ⚠️ Con hallazgos | 92 | 0 | 0 | 1 | 96.6 | 1 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 98 | 0 | 0 | 0 | 98.3 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 92 | 0 | 0 | 0 | 88.5 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 93.5 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 59 | 0 | 0 | 0 | 86.1 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 93.3 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 71 | 0 | 0 | 0 | 97.4 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 75.6 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 79 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 51 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | — | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (93.1 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate falló por: new_security_hotspots_reviewed, new_violations. Ajusta código, tests o umbrales en Sonar según corresponda. 1 hallazgo(s) abierto(s) en 1 archivo(s); revisa la tabla de detalle en esta entrada.

---

