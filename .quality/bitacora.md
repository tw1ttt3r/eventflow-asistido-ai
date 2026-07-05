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


## Entrada #030 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-29 08:40:30 UTC-06:00 |
| **Inicio** | 2026-06-29 08:40:08 UTC-06:00 |
| **Rama** | `feat/refactor-events` |
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
| Security hotspots | 1 |
| Cobertura (%) | 93.1 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 2770 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 72 · **Sin hallazgos:** 72 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

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
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 91 | 0 | 0 | 0 | 96.6 | 0 |
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

La cobertura (93.1 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #031 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-29 09:14:34 UTC-06:00 |
| **Inicio** | 2026-06-29 09:14:12 UTC-06:00 |
| **Rama** | `feat/event-detail` |
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
| Security hotspots | 1 |
| Cobertura (%) | 93.9 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 3412 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 84 · **Sin hallazgos:** 84 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 0.0 | 0 |
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
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 91 | 0 | 0 | 0 | 96.6 | 0 |
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
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 57 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 69 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 79 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 51 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | — | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (93.9 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #032 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-29 23:04:30 UTC-06:00 |
| **Inicio** | 2026-06-29 23:04:05 UTC-06:00 |
| **Rama** | `feat/event-detail` |
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
| Security hotspots | 1 |
| Cobertura (%) | 93.9 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 3412 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 84 · **Sin hallazgos:** 84 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 0.0 | 0 |
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
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 91 | 0 | 0 | 0 | 96.6 | 0 |
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
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 57 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 69 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 79 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 51 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | — | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (93.9 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #033 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 10:07:33 UTC-06:00 |
| **Inicio** | 2026-06-30 10:07:08 UTC-06:00 |
| **Rama** | `feat/attendee-list` |
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
| Security hotspots | 1 |
| Cobertura (%) | 93.9 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 4274 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 97 · **Sin hallazgos:** 97 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 84 | 0 | 0 | 0 | 91.8 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 91 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 92 | 0 | 0 | 0 | 88.5 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
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
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 92.9 | 0 |
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
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 57 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 69 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 120 | 0 | 0 | 0 | 98.3 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 79 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | — | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (93.9 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #034 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 13:31:20 UTC-06:00 |
| **Inicio** | 2026-06-30 13:30:53 UTC-06:00 |
| **Rama** | `refactor-svg-images` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

Análisis procesado en SonarQube; exit code 1 porque el Quality Gate no pasó (`sonar.qualitygate.wait=true`). Quality Gate **ERROR** — condiciones incumplidas: new_violations: 2 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 1 |
| Code smells | 1 |
| Security hotspots | 1 |
| Cobertura (%) | 94.1 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 4266 |
| Deuda técnica (min) | 5 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | E (5.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 105 · **Sin hallazgos:** 104 · **Con hallazgos:** 1 · **Issues abiertos:** 2

**Por nivel:** Bloqueante: 2

**Por tipo:** Vulnerabilidad: 1 · Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/shared/ui/atoms/icon/icon.ts` | Bloqueante | Code smell | Abierto | 41 | `typescript:S7649` | Input bindings should not be aliased (https://angular.dev/guide/components/inputs#choosing-input-na… |
| `src/app/shared/ui/atoms/icon/icon.ts` | Bloqueante | Vulnerabilidad | Abierto | 48 | `typescript:S6268` | Make sure disabling Angular built-in sanitization is safe here. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 84 | 0 | 0 | 0 | 91.8 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 91 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 92 | 0 | 0 | 0 | 88.5 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | Bloqueante | Code smell, Vulnerabilidad | ❌ Crítico | 48 | 0 | 1 | 1 | 100.0 | 2 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 93.5 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 93.3 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 75.6 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 95.5 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 98.3 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | — | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.1 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 vulnerabilidad(es): revisar issues de seguridad con prioridad. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate falló por: new_violations. Ajusta código, tests o umbrales en Sonar según corresponda. 2 hallazgo(s) abierto(s) en 1 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #035 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 13:47:05 UTC-06:00 |
| **Inicio** | 2026-06-30 13:46:41 UTC-06:00 |
| **Rama** | `refactor-svg-images` |
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
| Security hotspots | 1 |
| Cobertura (%) | 94.1 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 4429 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 105 · **Sin hallazgos:** 105 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 84 | 0 | 0 | 0 | 91.8 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 91 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 92 | 0 | 0 | 0 | 88.5 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 4 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 272 | 0 | 0 | 0 | 98.7 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 93.5 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 93.3 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 75.6 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 95.5 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 98.3 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 82.2 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | — | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.1 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #036 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 00:12:40 UTC-06:00 |
| **Inicio** | 2026-07-01 00:12:14 UTC-06:00 |
| **Rama** | `feat/user-profile` |
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
| Security hotspots | 1 |
| Cobertura (%) | 94.6 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 5315 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 122 · **Sin hallazgos:** 122 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 67 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 84 | 0 | 0 | 0 | 91.8 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 91 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 106 | 0 | 0 | 0 | 80.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 74 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 97.7 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 11 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 304 | 0 | 0 | 0 | 98.8 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 95.5 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 98.3 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | — | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 61 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.6 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #037 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 20:39:17 UTC-06:00 |
| **Inicio** | 2026-07-01 20:38:43 UTC-06:00 |
| **Rama** | `feat/edit-event` |
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
| Security hotspots | 1 |
| Cobertura (%) | 94.0 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 5933 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 126 · **Sin hallazgos:** 126 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 67 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 87.0 | 0 |
| `src/app/features/events/event-edit-state.service.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 92.3 | 0 |
| `src/app/features/events/event-edit.model.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 67.6 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 91 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 106 | 0 | 0 | 0 | 80.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 74 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 97.7 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 354 | 0 | 0 | 0 | 97.7 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 95.5 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts` | — | — | ✅ OK | 331 | 0 | 0 | 0 | 93.2 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-edit.mock.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | — | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 61 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.0 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #038 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 21:54:28 UTC-06:00 |
| **Inicio** | 2026-07-01 21:54:01 UTC-06:00 |
| **Rama** | `feat/edit-event` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

Análisis procesado en SonarQube; exit code 1 porque el Quality Gate no pasó (`sonar.qualitygate.wait=true`). Quality Gate **ERROR** — condiciones incumplidas: new_security_hotspots_reviewed: 0.0 (umbral: 100); new_violations: 6 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 6 |
| Security hotspots | 2 |
| Cobertura (%) | 94.1 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 6658 |
| Deuda técnica (min) | 28 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 135 · **Sin hallazgos:** 132 · **Con hallazgos:** 3 · **Issues abiertos:** 6

**Por nivel:** Crítico: 1 · Menor: 5

**Por tipo:** Code smell: 6

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | Crítico | Code smell | Abierto | 24 | `typescript:S3776` | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. |
| `src/app/features/tickets/digital-ticket-state.service.ts` | Menor | Code smell | Abierto | 3 | `typescript:S3863` | '@features/events/event-registration.model' imported multiple times. |
| `src/app/features/tickets/digital-ticket-state.service.ts` | Menor | Code smell | Abierto | 4 | `typescript:S3863` | '@features/events/event-registration.model' imported multiple times. |
| `src/app/features/tickets/digital-ticket.model.ts` | Menor | Code smell | Abierto | 32 | `typescript:S6594` | Use the "RegExp.exec()" method instead. |
| `src/app/features/tickets/digital-ticket.model.ts` | Menor | Code smell | Abierto | 50 | `typescript:S7758` | Prefer `String#codePointAt()` over `String#charCodeAt()`. |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | Menor | Code smell | Abierto | 69 | `typescript:S7758` | Prefer `String#codePointAt()` over `String#charCodeAt()`. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 87.0 | 0 |
| `src/app/features/events/event-edit-state.service.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 92.3 | 0 |
| `src/app/features/events/event-edit.model.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 67.6 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 113 | 0 | 0 | 0 | 93.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 84.2 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 107 | 0 | 0 | 0 | 80.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-download.util.ts` | — | — | ✅ OK | 88 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-page.ts` | — | — | ✅ OK | 126 | 0 | 0 | 0 | 90.4 | 0 |
| `src/app/features/tickets/digital-ticket-state.service.ts` | Menor | Code smell | ⚠️ Con hallazgos | 48 | 0 | 0 | 2 | 92.0 | 2 |
| `src/app/features/tickets/digital-ticket.model.ts` | Menor | Code smell | ⚠️ Con hallazgos | 56 | 0 | 0 | 2 | 84.0 | 2 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 354 | 0 | 0 | 0 | 97.7 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | Crítico | Code smell | ❌ Crítico | 64 | 0 | 0 | 2 | 100.0 | 2 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 95.5 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-card/digital-ticket-card.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-help-card/digital-ticket-help-card.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts` | — | — | ✅ OK | 331 | 0 | 0 | 0 | 93.2 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/ticket-layout/ticket-layout.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/digital-ticket.mock.ts` | — | — | ✅ OK | 70 | 0 | 0 | 0 | 77.8 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-edit.mock.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 62 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.1 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 6 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate falló por: new_security_hotspots_reviewed, new_violations. Ajusta código, tests o umbrales en Sonar según corresponda. 6 hallazgo(s) abierto(s) en 3 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #039 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 23:55:08 UTC-06:00 |
| **Inicio** | 2026-07-01 23:54:41 UTC-06:00 |
| **Rama** | `feat/edit-event` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

Análisis procesado en SonarQube; exit code 1 porque el Quality Gate no pasó (`sonar.qualitygate.wait=true`). Quality Gate **ERROR** — condiciones incumplidas: new_security_hotspots_reviewed: 0.0 (umbral: 100); new_violations: 6 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 6 |
| Security hotspots | 2 |
| Cobertura (%) | 94.0 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 6765 |
| Deuda técnica (min) | 28 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 135 · **Sin hallazgos:** 132 · **Con hallazgos:** 3 · **Issues abiertos:** 6

**Por nivel:** Crítico: 1 · Menor: 5

**Por tipo:** Code smell: 6

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | Crítico | Code smell | Abierto | 24 | `typescript:S3776` | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. |
| `src/app/features/tickets/digital-ticket-state.service.ts` | Menor | Code smell | Abierto | 3 | `typescript:S3863` | '@features/events/event-registration.model' imported multiple times. |
| `src/app/features/tickets/digital-ticket-state.service.ts` | Menor | Code smell | Abierto | 4 | `typescript:S3863` | '@features/events/event-registration.model' imported multiple times. |
| `src/app/features/tickets/digital-ticket.model.ts` | Menor | Code smell | Abierto | 32 | `typescript:S6594` | Use the "RegExp.exec()" method instead. |
| `src/app/features/tickets/digital-ticket.model.ts` | Menor | Code smell | Abierto | 50 | `typescript:S7758` | Prefer `String#codePointAt()` over `String#charCodeAt()`. |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | Menor | Code smell | Abierto | 69 | `typescript:S7758` | Prefer `String#codePointAt()` over `String#charCodeAt()`. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 87.0 | 0 |
| `src/app/features/events/event-edit-state.service.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 92.3 | 0 |
| `src/app/features/events/event-edit.model.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 67.6 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 113 | 0 | 0 | 0 | 93.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 84.2 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 107 | 0 | 0 | 0 | 80.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-download.util.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-page.ts` | — | — | ✅ OK | 137 | 0 | 0 | 0 | 90.6 | 0 |
| `src/app/features/tickets/digital-ticket-state.service.ts` | Menor | Code smell | ⚠️ Con hallazgos | 48 | 0 | 0 | 2 | 92.0 | 2 |
| `src/app/features/tickets/digital-ticket.model.ts` | Menor | Code smell | ⚠️ Con hallazgos | 75 | 0 | 0 | 2 | 76.1 | 2 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 354 | 0 | 0 | 0 | 97.7 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | Crítico | Code smell | ❌ Crítico | 64 | 0 | 0 | 2 | 100.0 | 2 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 95.5 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-card/digital-ticket-card.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-help-card/digital-ticket-help-card.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts` | — | — | ✅ OK | 331 | 0 | 0 | 0 | 93.2 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/ticket-layout/ticket-layout.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/digital-ticket.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 77.8 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-edit.mock.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 62 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.0 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 6 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate falló por: new_security_hotspots_reviewed, new_violations. Ajusta código, tests o umbrales en Sonar según corresponda. 6 hallazgo(s) abierto(s) en 3 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #040 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-02 10:58:58 UTC-06:00 |
| **Inicio** | 2026-07-02 10:58:25 UTC-06:00 |
| **Rama** | `feat/refactor-ticket` |
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
| Cobertura (%) | 94.1 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 6883 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 135 · **Sin hallazgos:** 135 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 87.0 | 0 |
| `src/app/features/events/event-edit-state.service.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 92.3 | 0 |
| `src/app/features/events/event-edit.model.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 67.6 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 113 | 0 | 0 | 0 | 93.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 84.2 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 107 | 0 | 0 | 0 | 80.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-download.util.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-page.ts` | — | — | ✅ OK | 137 | 0 | 0 | 0 | 90.6 | 0 |
| `src/app/features/tickets/digital-ticket-state.service.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/features/tickets/digital-ticket.model.ts` | — | — | ✅ OK | 126 | 0 | 0 | 0 | 76.1 | 0 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 354 | 0 | 0 | 0 | 97.7 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 28 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-card/digital-ticket-card.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-help-card/digital-ticket-help-card.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts` | — | — | ✅ OK | 331 | 0 | 0 | 0 | 93.2 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/ticket-layout/ticket-layout.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/digital-ticket.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 77.8 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-edit.mock.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 62 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.1 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #041 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-03 00:23:22 UTC-06:00 |
| **Inicio** | 2026-07-03 00:22:47 UTC-06:00 |
| **Rama** | `feat/no-connection` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

Análisis procesado en SonarQube; exit code 1 porque el Quality Gate no pasó (`sonar.qualitygate.wait=true`). Quality Gate **ERROR** — condiciones incumplidas: new_coverage: 73.7 (umbral: 80); new_violations: 3 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 3 |
| Security hotspots | 0 |
| Cobertura (%) | 92.9 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 7257 |
| Deuda técnica (min) | 6 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 146 · **Sin hallazgos:** 145 · **Con hallazgos:** 1 · **Issues abiertos:** 3

**Por nivel:** Menor: 3

**Por tipo:** Code smell: 3

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/features/offline/offline-connectivity.service.ts` | Menor | Code smell | Abierto | 53 | `typescript:S7764` | Prefer `globalThis.window` over `window`. |
| `src/app/features/offline/offline-connectivity.service.ts` | Menor | Code smell | Abierto | 59 | `typescript:S7764` | Prefer `globalThis` over `window`. |
| `src/app/features/offline/offline-connectivity.service.ts` | Menor | Code smell | Abierto | 60 | `typescript:S7764` | Prefer `globalThis` over `window`. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 79 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/core/connectivity/connectivity.guard.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/connectivity/connectivity.util.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 87.0 | 0 |
| `src/app/features/events/event-edit-state.service.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 92.3 | 0 |
| `src/app/features/events/event-edit.model.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 67.6 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 113 | 0 | 0 | 0 | 93.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 93.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline-connectivity.service.ts` | Menor | Code smell | ⚠️ Con hallazgos | 77 | 0 | 0 | 3 | 0.0 | 3 |
| `src/app/features/offline/offline-page.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/features/offline/offline.model.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | — | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 84.2 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 107 | 0 | 0 | 0 | 80.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-download.util.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-page.ts` | — | — | ✅ OK | 137 | 0 | 0 | 0 | 90.6 | 0 |
| `src/app/features/tickets/digital-ticket-state.service.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/features/tickets/digital-ticket.model.ts` | — | — | ✅ OK | 126 | 0 | 0 | 0 | 76.1 | 0 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 410 | 0 | 0 | 0 | 97.7 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 28 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-card/digital-ticket-card.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-help-card/digital-ticket-help-card.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts` | — | — | ✅ OK | 331 | 0 | 0 | 0 | 93.2 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/offline-bottom-bar/offline-bottom-bar.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/offline-header/offline-header.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/offline-illustration/offline-illustration.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/offline-status-card/offline-status-card.ts` | — | — | ✅ OK | 49 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/offline-layout/offline-layout.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/ticket-layout/ticket-layout.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/digital-ticket.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 77.8 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-edit.mock.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | — | 0 |
| `src/mock/offline.mock.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 0.0 | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 62 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (92.9 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 3 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate falló por: new_coverage, new_violations. Ajusta código, tests o umbrales en Sonar según corresponda. 3 hallazgo(s) abierto(s) en 1 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #042 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-03 22:45:22 UTC-06:00 |
| **Inicio** | 2026-07-03 22:44:50 UTC-06:00 |
| **Rama** | `feat/refactor-no-connection` |
| **Proyecto** | Eventflow Asistido AI (`eventflow-asistido-ai`) |
| **Status del scan** | **ERROR** |
| **Exit code scanner** | 1 |

### Resumen del scan

Análisis procesado en SonarQube; exit code 1 porque el Quality Gate no pasó (`sonar.qualitygate.wait=true`). Quality Gate **ERROR** — condiciones incumplidas: new_violations: 1 (umbral: 0).

### Métricas overall (código)

| Métrica | Valor |
|---------|-------|
| Quality Gate | ❌ ERROR |
| Bugs | 0 |
| Vulnerabilidades | 0 |
| Code smells | 1 |
| Security hotspots | 0 |
| Cobertura (%) | 94.9 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 7258 |
| Deuda técnica (min) | 2 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 146 · **Sin hallazgos:** 145 · **Con hallazgos:** 1 · **Issues abiertos:** 1

**Por nivel:** Menor: 1

**Por tipo:** Code smell: 1

#### Hallazgos abiertos

| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |
|------|-------|------|--------|-------|-------|---------|
| `src/app/features/offline/offline-connectivity.service.ts` | Menor | Code smell | Abierto | 54 | `typescript:S7741` | Compare with `undefined` directly instead of using `typeof`. |

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 79 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/core/connectivity/connectivity.guard.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/connectivity/connectivity.util.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 87.0 | 0 |
| `src/app/features/events/event-edit-state.service.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 92.3 | 0 |
| `src/app/features/events/event-edit.model.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 113 | 0 | 0 | 0 | 93.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 92.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline-connectivity.service.ts` | Menor | Code smell | ⚠️ Con hallazgos | 78 | 0 | 0 | 1 | 100.0 | 1 |
| `src/app/features/offline/offline-page.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline.model.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | — | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 84.2 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 107 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-download.util.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-page.ts` | — | — | ✅ OK | 137 | 0 | 0 | 0 | 90.6 | 0 |
| `src/app/features/tickets/digital-ticket-state.service.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/features/tickets/digital-ticket.model.ts` | — | — | ✅ OK | 126 | 0 | 0 | 0 | 96.0 | 0 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 410 | 0 | 0 | 0 | 94.5 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 28 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-card/digital-ticket-card.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-help-card/digital-ticket-help-card.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts` | — | — | ✅ OK | 331 | 0 | 0 | 0 | 93.2 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/offline-bottom-bar/offline-bottom-bar.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-header/offline-header.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-illustration/offline-illustration.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-status-card/offline-status-card.ts` | — | — | ✅ OK | 49 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/offline-layout/offline-layout.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/ticket-layout/ticket-layout.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/digital-ticket.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-edit.mock.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | — | 0 |
| `src/mock/offline.mock.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 62 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.9 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. 1 code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio. El Quality Gate falló por: new_violations. Ajusta código, tests o umbrales en Sonar según corresponda. 1 hallazgo(s) abierto(s) en 1 archivo(s); revisa la tabla de detalle en esta entrada.

---


## Entrada #043 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-03 23:43:45 UTC-06:00 |
| **Inicio** | 2026-07-03 23:43:18 UTC-06:00 |
| **Rama** | `feat/refactor-no-connection` |
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
| Cobertura (%) | 94.9 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 7258 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 146 · **Sin hallazgos:** 146 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 79 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/core/connectivity/connectivity.guard.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/connectivity/connectivity.util.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 87.0 | 0 |
| `src/app/features/events/event-edit-state.service.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 92.3 | 0 |
| `src/app/features/events/event-edit.model.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 113 | 0 | 0 | 0 | 93.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 92.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline-connectivity.service.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline-page.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline.model.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | — | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 84.2 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 107 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-download.util.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-page.ts` | — | — | ✅ OK | 137 | 0 | 0 | 0 | 90.6 | 0 |
| `src/app/features/tickets/digital-ticket-state.service.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/features/tickets/digital-ticket.model.ts` | — | — | ✅ OK | 126 | 0 | 0 | 0 | 96.0 | 0 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 410 | 0 | 0 | 0 | 94.5 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 28 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-card/digital-ticket-card.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-help-card/digital-ticket-help-card.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts` | — | — | ✅ OK | 331 | 0 | 0 | 0 | 93.2 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/offline-bottom-bar/offline-bottom-bar.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-header/offline-header.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-illustration/offline-illustration.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-status-card/offline-status-card.ts` | — | — | ✅ OK | 49 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/offline-layout/offline-layout.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/ticket-layout/ticket-layout.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/digital-ticket.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-edit.mock.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | — | 0 |
| `src/mock/offline.mock.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 62 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.9 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #044 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-04 14:21:18 UTC-06:00 |
| **Inicio** | 2026-07-04 14:20:52 UTC-06:00 |
| **Rama** | `feat/fallouts` |
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
| Cobertura (%) | 94.8 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 7425 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 154 · **Sin hallazgos:** 154 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 87 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/core/connectivity/connectivity.guard.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/connectivity/connectivity.util.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/content-unavailable/content-unavailable-page.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/features/content-unavailable/content-unavailable.model.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | — | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 87.0 | 0 |
| `src/app/features/events/event-edit-state.service.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 92.3 | 0 |
| `src/app/features/events/event-edit.model.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 113 | 0 | 0 | 0 | 93.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 92.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline-connectivity.service.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline-page.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline.model.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | — | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 53 | 0 | 0 | 0 | 84.2 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 107 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-download.util.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-page.ts` | — | — | ✅ OK | 137 | 0 | 0 | 0 | 90.6 | 0 |
| `src/app/features/tickets/digital-ticket-state.service.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/features/tickets/digital-ticket.model.ts` | — | — | ✅ OK | 126 | 0 | 0 | 0 | 96.0 | 0 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 410 | 0 | 0 | 0 | 94.5 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 28 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/content-unavailable-card/content-unavailable-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/content-unavailable-header/content-unavailable-header.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/content-unavailable-illustration/content-unavailable-illustration.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/content-unavailable-page-footer/content-unavailable-page-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/digital-ticket-card/digital-ticket-card.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-help-card/digital-ticket-help-card.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts` | — | — | ✅ OK | 331 | 0 | 0 | 0 | 93.2 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/offline-bottom-bar/offline-bottom-bar.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-header/offline-header.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-illustration/offline-illustration.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-status-card/offline-status-card.ts` | — | — | ✅ OK | 49 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/content-unavailable-layout/content-unavailable-layout.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/offline-layout/offline-layout.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/ticket-layout/ticket-layout.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/content-unavailable.mock.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 0.0 | 0 |
| `src/mock/digital-ticket.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-edit.mock.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | — | 0 |
| `src/mock/offline.mock.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 62 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.8 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---


## Entrada #045 — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-05 09:32:39 UTC-06:00 |
| **Inicio** | 2026-07-05 09:32:05 UTC-06:00 |
| **Rama** | `feat/my-events` |
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
| Cobertura (%) | 94.7 |
| Duplicación (%) | 0.0 |
| Líneas de código (ncloc) | 7686 |
| Deuda técnica (min) | 0 |
| Rating fiabilidad | A (1.0) |
| Rating seguridad | A (1.0) |
| Rating mantenibilidad | A (1.0) |

### Detalle de archivos

**Archivos analizados:** 157 · **Sin hallazgos:** 157 · **Con hallazgos:** 0 · **Issues abiertos:** 0

#### Hallazgos abiertos

_Sin hallazgos abiertos en esta ejecución._

#### Inventario por archivo

| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |
|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|
| `src/app/app.config.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.routes.ts` | — | — | ✅ OK | 87 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/app.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth-error.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite-auth.service.ts` | — | — | ✅ OK | 76 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.client.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/appwrite/appwrite.config.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.service.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/appwrite/appwrite.tokens.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/auth.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/auth/guest.guard.ts` | — | — | ✅ OK | 12 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/app-config.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/env-access.ts` | — | — | ✅ OK | 8 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/core/config/env-vars.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 89.3 | 0 |
| `src/app/core/config/env.registry.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/config/resolve-environment.ts` | — | — | ✅ OK | 58 | 0 | 0 | 0 | 91.3 | 0 |
| `src/app/core/connectivity/connectivity.guard.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/core/connectivity/connectivity.util.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/features/admin/admin-navigation.service.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/auth/auth-page.ts` | — | — | ✅ OK | 123 | 0 | 0 | 0 | 91.7 | 0 |
| `src/app/features/content-unavailable/content-unavailable-page.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/features/content-unavailable/content-unavailable.model.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | — | 0 |
| `src/app/features/events/attendees.model.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/features/events/event-attendees-page.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 84.3 | 0 |
| `src/app/features/events/event-detail-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 96.4 | 0 |
| `src/app/features/events/event-detail.model.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-edit-page.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 87.0 | 0 |
| `src/app/features/events/event-edit-state.service.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 92.3 | 0 |
| `src/app/features/events/event-edit.model.ts` | — | — | ✅ OK | 100 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/events/event-registration-page.ts` | — | — | ✅ OK | 113 | 0 | 0 | 0 | 93.6 | 0 |
| `src/app/features/events/event-registration.model.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 92.1 | 0 |
| `src/app/features/events/events-dashboard-page.ts` | — | — | ✅ OK | 103 | 0 | 0 | 0 | 98.4 | 0 |
| `src/app/features/events/events.model.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 95.9 | 0 |
| `src/app/features/fallback/fallback-redirect-page.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline-connectivity.service.ts` | — | — | ✅ OK | 78 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline-page.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/offline/offline.model.ts` | — | — | ✅ OK | 5 | 0 | 0 | 0 | — | 0 |
| `src/app/features/profile/profile-change-password-page.ts` | — | — | ✅ OK | 48 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/features/profile/profile-edit-page.ts` | — | — | ✅ OK | 55 | 0 | 0 | 0 | 97.1 | 0 |
| `src/app/features/profile/profile-state.service.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 84.2 | 0 |
| `src/app/features/profile/profile.model.ts` | — | — | ✅ OK | 133 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/features/session/session-page.ts` | — | — | ✅ OK | 66 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-download.util.ts` | — | — | ✅ OK | 163 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/features/tickets/digital-ticket-page.ts` | — | — | ✅ OK | 137 | 0 | 0 | 0 | 90.6 | 0 |
| `src/app/features/tickets/digital-ticket-state.service.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/features/tickets/digital-ticket.model.ts` | — | — | ✅ OK | 126 | 0 | 0 | 0 | 96.0 | 0 |
| `src/app/shared/ui/atoms/avatar/avatar.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/badge/badge.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/brand-name/brand-name.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/button/button.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/checkbox/checkbox.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.0 | 0 |
| `src/app/shared/ui/atoms/count-badge/count-badge.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/heading/heading.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon-button/icon-button.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/action.icons.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/event.icons.ts` | — | — | ✅ OK | 9 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/navigation.icons.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/status.icons.ts` | — | — | ✅ OK | 10 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/defs/user.icons.ts` | — | — | ✅ OK | 6 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.registry.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/icon/icon.ts` | — | — | ✅ OK | 410 | 0 | 0 | 0 | 94.5 | 0 |
| `src/app/shared/ui/atoms/icon/icon.types.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/atoms/input/input.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/label/label.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/link/link.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/logo-mark/logo-mark.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/qr-code-display/qr-code-display.ts` | — | — | ✅ OK | 77 | 0 | 0 | 0 | 96.8 | 0 |
| `src/app/shared/ui/atoms/subheading/subheading.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/text/text.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/atoms/toggle/toggle.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 92.6 | 0 |
| `src/app/shared/ui/molecules/attended-event-row/attended-event-row.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 95.8 | 0 |
| `src/app/shared/ui/molecules/attendees-filter-bar/attendees-filter-bar.ts` | — | — | ✅ OK | 41 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/molecules/attendees-search-bar/attendees-search-bar.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 92.0 | 0 |
| `src/app/shared/ui/molecules/auth-actions-row/auth-actions-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 89.5 | 0 |
| `src/app/shared/ui/molecules/checkbox-field/checkbox-field.ts` | — | — | ✅ OK | 19 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/molecules/field-feedback/field-feedback.ts` | — | — | ✅ OK | 32 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/filter-chips/filter-chips.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/form-field/form-field.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 96.7 | 0 |
| `src/app/shared/ui/molecules/info-notice-row/info-notice-row.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/inline-link-row/inline-link-row.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/my-event-card/my-event-card.ts` | — | — | ✅ OK | 96 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/molecules/password-field/password-field.ts` | — | — | ✅ OK | 81 | 0 | 0 | 0 | 84.1 | 0 |
| `src/app/shared/ui/molecules/profile-meta-item/profile-meta-item.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/section-header/section-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 95.7 | 0 |
| `src/app/shared/ui/molecules/segmented-control/segmented-control.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/sparkline-chart/sparkline-chart.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/molecules/ticket-row/ticket-row.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/admin-header/admin-header.ts` | — | — | ✅ OK | 28 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/app-header/app-header.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attended-events-card/attended-events-card.ts` | — | — | ✅ OK | 31 | 0 | 0 | 0 | 96.3 | 0 |
| `src/app/shared/ui/organisms/attendee-card/attendee-card.ts` | — | — | ✅ OK | 50 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-header/attendees-header.ts` | — | — | ✅ OK | 40 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/attendees-summary-card/attendees-summary-card.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-card/auth-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-footer/auth-footer.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-illustration/auth-illustration.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/auth-login-form/auth-login-form.ts` | — | — | ✅ OK | 73 | 0 | 0 | 0 | 82.9 | 0 |
| `src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.ts` | — | — | ✅ OK | 97 | 0 | 0 | 0 | 81.6 | 0 |
| `src/app/shared/ui/organisms/bottom-nav/bottom-nav.ts` | — | — | ✅ OK | 39 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/change-password-form/change-password-form.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/content-unavailable-card/content-unavailable-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/content-unavailable-header/content-unavailable-header.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/content-unavailable-illustration/content-unavailable-illustration.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/content-unavailable-page-footer/content-unavailable-page-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/organisms/digital-ticket-card/digital-ticket-card.ts` | — | — | ✅ OK | 94 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-ticket-help-card/digital-ticket-help-card.ts` | — | — | ✅ OK | 54 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/digital-tickets-card/digital-tickets-card.ts` | — | — | ✅ OK | 38 | 0 | 0 | 0 | 96.6 | 0 |
| `src/app/shared/ui/organisms/event-about-card/event-about-card.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-availability-card/event-availability-card.ts` | — | — | ✅ OK | 33 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-card/event-card.ts` | — | — | ✅ OK | 60 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-action-bar/event-detail-action-bar.ts` | — | — | ✅ OK | 25 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-header/event-detail-header.ts` | — | — | ✅ OK | 37 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-detail-hero/event-detail-hero.ts` | — | — | ✅ OK | 65 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card.ts` | — | — | ✅ OK | 104 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts` | — | — | ✅ OK | 331 | 0 | 0 | 0 | 93.2 | 0 |
| `src/app/shared/ui/organisms/event-edit-header/event-edit-header.ts` | — | — | ✅ OK | 36 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-host-banner/event-host-banner.ts` | — | — | ✅ OK | 29 | 0 | 0 | 0 | 92.9 | 0 |
| `src/app/shared/ui/organisms/event-host-profile-card/event-host-profile-card.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-registration-form/event-registration-form.ts` | — | — | ✅ OK | 166 | 0 | 0 | 0 | 83.9 | 0 |
| `src/app/shared/ui/organisms/event-summary-card/event-summary-card.ts` | — | — | ✅ OK | 44 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/event-unavailable-card/event-unavailable-card.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-stats-card/events-stats-card.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/events-toolbar/events-toolbar.ts` | — | — | ✅ OK | 26 | 0 | 0 | 0 | 90.9 | 0 |
| `src/app/shared/ui/organisms/my-events-section/my-events-section.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 0.0 | 0 |
| `src/app/shared/ui/organisms/offline-bottom-bar/offline-bottom-bar.ts` | — | — | ✅ OK | 16 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-header/offline-header.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-illustration/offline-illustration.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/offline-status-card/offline-status-card.ts` | — | — | ✅ OK | 49 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.ts` | — | — | ✅ OK | 109 | 0 | 0 | 0 | 87.5 | 0 |
| `src/app/shared/ui/organisms/profile-hero-card/profile-hero-card.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 97.8 | 0 |
| `src/app/shared/ui/organisms/registration-footer/registration-footer.ts` | — | — | ✅ OK | 17 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/registration-header/registration-header.ts` | — | — | ✅ OK | 35 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/similar-events-carousel/similar-events-carousel.ts` | — | — | ✅ OK | 42 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/organisms/upcoming-events-card/upcoming-events-card.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 95.0 | 0 |
| `src/app/shared/ui/password-strength.util.ts` | — | — | ✅ OK | 43 | 0 | 0 | 0 | 86.7 | 0 |
| `src/app/shared/ui/templates/admin-layout/admin-layout.ts` | — | — | ✅ OK | 34 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/attendees-layout/attendees-layout.ts` | — | — | ✅ OK | 15 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/auth-layout/auth-layout.ts` | — | — | ✅ OK | 23 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/content-unavailable-layout/content-unavailable-layout.ts` | — | — | ✅ OK | 24 | 0 | 0 | 0 | — | 0 |
| `src/app/shared/ui/templates/event-detail-layout/event-detail-layout.ts` | — | — | ✅ OK | 27 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/offline-layout/offline-layout.ts` | — | — | ✅ OK | 22 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/registration-layout/registration-layout.ts` | — | — | ✅ OK | 30 | 0 | 0 | 0 | 100.0 | 0 |
| `src/app/shared/ui/templates/ticket-layout/ticket-layout.ts` | — | — | ✅ OK | 56 | 0 | 0 | 0 | 100.0 | 0 |
| `src/index.html` | — | — | ✅ OK | 15 | 0 | 0 | 0 | — | 0 |
| `src/mock/attendees.mock.ts` | — | — | ✅ OK | 82 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/content-unavailable.mock.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 0.0 | 0 |
| `src/mock/digital-ticket.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-detail.mock.ts` | — | — | ✅ OK | 150 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-edit.mock.ts` | — | — | ✅ OK | 68 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/event-registration.mock.ts` | — | — | ✅ OK | 72 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/events.mock.ts` | — | — | ✅ OK | 52 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/index.ts` | — | — | ✅ OK | 18 | 0 | 0 | 0 | — | 0 |
| `src/mock/my-events.mock.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 0.0 | 0 |
| `src/mock/offline.mock.ts` | — | — | ✅ OK | 7 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/profile.mock.ts` | — | — | ✅ OK | 64 | 0 | 0 | 0 | 100.0 | 0 |
| `src/mock/session.mock.ts` | — | — | ✅ OK | 20 | 0 | 0 | 0 | 100.0 | 0 |
| `src/styles.scss` | — | — | ✅ OK | 21 | 0 | 0 | 0 | — | 0 |

### Análisis

La cobertura (94.7 %) alcanza el umbral del 80 % definido en `angular.json`, lo que indica tests suficientes para el código analizado. El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.

---

