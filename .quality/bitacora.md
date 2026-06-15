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

