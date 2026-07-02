# Bitácora de tests — Vitest / Angular

Registro automático de cada ejecución de `pnpm test` y `pnpm test:coverage` (y del paso tests dentro de `pnpm quality`).

> **Persistencia:** este archivo y la regla `.cursor/rules/quality-tests.mdc` viven en el repo. Tras `git clone` / `git pull`, cada run sigue appendiendo entradas.

| Campo | Descripción |
|-------|-------------|
| Fecha y hora | Inicio y fin local |
| Ejecutor | `agent` (Cursor Agent) o `developer` (humano / terminal) |
| Rama | `git rev-parse --abbrev-ref HEAD` |
| Razón | Motivo de la ejecución (`TEST_REASON` o inferida) |
| Resumen breve | Líneas clave parseadas de Vitest |
| Salida completa | stdout + stderr del comando |

Variables opcionales: `TEST_EXECUTOR=agent|developer`, `TEST_REASON="..."`.

---


## Entrada #001 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 14:16:38 UTC-06:00 |
| **Inicio** | 2026-06-28 14:16:36 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Validación inicial bitácora tests.md |
| **Comando** | `ng test -- --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
Option '--' has been specified multiple times. The value '--watch=false' will be used.
Error: Schema validation failed with the following errors:
  Data path "" must NOT have additional properties().
```

---


## Entrada #002 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 14:17:01 UTC-06:00 |
| **Inicio** | 2026-06-28 14:16:49 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Validación bitácora tests.md (path aliases) |
| **Comando** | `ng test --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  12 passed (12) · Tests  32 passed (32) · Duration  4.27s (transform 770ms, setup 3.35s, import 2.00s, tests 1.33s, environment 19.72s) · ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [4.665 seconds] - 2026-06-28T20:16:56.136Z


 RUN  v4.1.6 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  12 passed (12)
      Tests  32 passed (32)
   Start at  14:16:57
   Duration  4.27s (transform 770ms, setup 3.35s, import 2.00s, tests 1.33s, environment 19.72s)


Loaded  vitest@4.1.6  and  @vitest/coverage-v8@4.1.8 .
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.
ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #003 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 14:21:04 UTC-06:00 |
| **Inicio** | 2026-06-28 14:20:50 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Validación pnpm test:all |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  12 passed (12) · Tests  32 passed (32) · Duration  6.34s (transform 341ms, setup 5.32s, import 2.14s, tests 2.51s, environment 24.66s) · ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [4.613 seconds] - 2026-06-28T20:20:57.082Z


 RUN  v4.1.6 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  12 passed (12)
      Tests  32 passed (32)
   Start at  14:20:57
   Duration  6.34s (transform 341ms, setup 5.32s, import 2.14s, tests 2.51s, environment 24.66s)


Loaded  vitest@4.1.6  and  @vitest/coverage-v8@4.1.8 .
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.
ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #004 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 14:21:23 UTC-06:00 |
| **Inicio** | 2026-06-28 14:21:05 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Validación pnpm test:all |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  12 passed (12) · Tests  32 passed (32) · Duration  6.14s (transform 344ms, setup 4.37s, import 1.48s, tests 1.16s, environment 39.85s) · ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [7.517 seconds] - 2026-06-28T20:21:15.549Z


 RUN  v4.1.6 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  12 passed (12)
      Tests  32 passed (32)
   Start at  14:21:16
   Duration  6.14s (transform 344ms, setup 4.37s, import 1.48s, tests 1.16s, environment 39.85s)


Loaded  vitest@4.1.6  and  @vitest/coverage-v8@4.1.8 .
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.
ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #005 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 14:23:34 UTC-06:00 |
| **Inicio** | 2026-06-28 14:23:24 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Ejecución local de tests |
| **Script detonador** | `pnpm test` |
| **Comando** | `ng test` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-EYYCXRM3.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-D2JG4E4G.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [4.869 seconds] - 2026-06-28T20:23:30.618Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.6 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 54[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 42[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 132[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 22[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 199[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 260[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 173[2mms[22m[39m

[2m Test Files [22m [1m[32m12 passed[39m[22m[90m (12)[39m
[2m      Tests [22m [1m[32m32 passed[39m[22m[90m (32)[39m
[2m   Start at [22m 14:23:31
[2m   Duration [22m 3.52s[2m (transform 789ms, setup 2.82s, import 1.80s, tests 917ms, environment 17.71s)[22m


[33mLoaded [7m[33m vitest@4.1.6 [33m[27m and [7m[33m @vitest/coverage-v8@4.1.8 [33m[27m.
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.[39m
ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #006 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 14:24:22 UTC-06:00 |
| **Inicio** | 2026-06-28 14:24:12 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Tests con cobertura (`pnpm test:coverage` o `--coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [3.670 seconds] - 2026-06-28T20:24:17.505Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.6 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 43[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 35[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 135[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 14[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 268[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 426[2mms[22m[39m
     [33m[2m✓[22m[39m should render dashboard heading and events [33m 422[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[33m 373[2mms[22m[39m

[2m Test Files [22m [1m[32m12 passed[39m[22m[90m (12)[39m
[2m      Tests [22m [1m[32m32 passed[39m[22m[90m (32)[39m
[2m   Start at [22m 14:24:17
[2m   Duration [22m 4.05s[2m (transform 360ms, setup 3.94s, import 1.35s, tests 1.32s, environment 21.11s)[22m


[33mLoaded [7m[33m vitest@4.1.6 [33m[27m and [7m[33m @vitest/coverage-v8@4.1.8 [33m[27m.
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.[39m
ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #007 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 14:25:03 UTC-06:00 |
| **Inicio** | 2026-06-28 14:24:52 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Suite `pnpm test:all` — ejecución base de tests |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [3.596 seconds] - 2026-06-28T20:24:57.612Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.6 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 78[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 29[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 115[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 41[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 225[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 444[2mms[22m[39m
     [33m[2m✓[22m[39m should render dashboard heading and events [33m 441[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[33m 425[2mms[22m[39m
     [33m[2m✓[22m[39m should render sign up by default [33m 323[2mms[22m[39m

[2m Test Files [22m [1m[32m12 passed[39m[22m[90m (12)[39m
[2m      Tests [22m [1m[32m32 passed[39m[22m[90m (32)[39m
[2m   Start at [22m 14:24:58
[2m   Duration [22m 5.11s[2m (transform 644ms, setup 6.02s, import 2.79s, tests 1.39s, environment 22.29s)[22m


[33mLoaded [7m[33m vitest@4.1.6 [33m[27m and [7m[33m @vitest/coverage-v8@4.1.8 [33m[27m.
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.[39m
ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #008 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 14:25:17 UTC-06:00 |
| **Inicio** | 2026-06-28 14:25:04 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Suite `pnpm test:all` — cobertura + lcov |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [4.973 seconds] - 2026-06-28T20:25:12.017Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.6 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 54[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 121[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 48[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 22[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 14[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 247[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 384[2mms[22m[39m
     [33m[2m✓[22m[39m should render dashboard heading and events [33m 382[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[33m 392[2mms[22m[39m
     [33m[2m✓[22m[39m should render sign up by default [33m 315[2mms[22m[39m

[2m Test Files [22m [1m[32m12 passed[39m[22m[90m (12)[39m
[2m      Tests [22m [1m[32m32 passed[39m[22m[90m (32)[39m
[2m   Start at [22m 14:25:12
[2m   Duration [22m 4.75s[2m (transform 729ms, setup 3.76s, import 1.82s, tests 1.31s, environment 28.72s)[22m


[33mLoaded [7m[33m vitest@4.1.6 [33m[27m and [7m[33m @vitest/coverage-v8@4.1.8 [33m[27m.
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.[39m
ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #009 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:33:35 UTC-06:00 |
| **Inicio** | 2026-06-28 17:33:26 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Suite `pnpm test:all` — ejecución base de tests |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [3.171 seconds] - 2026-06-28T23:33:31.449Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.6 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 39[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 77[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 39[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 159[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 236[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 230[2mms[22m[39m

[2m Test Files [22m [1m[32m12 passed[39m[22m[90m (12)[39m
[2m      Tests [22m [1m[32m32 passed[39m[22m[90m (32)[39m
[2m   Start at [22m 17:33:32
[2m   Duration [22m 3.27s[2m (transform 559ms, setup 3.03s, import 1.26s, tests 827ms, environment 17.83s)[22m


[33mLoaded [7m[33m vitest@4.1.6 [33m[27m and [7m[33m @vitest/coverage-v8@4.1.8 [33m[27m.
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.[39m
ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #010 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:33:44 UTC-06:00 |
| **Inicio** | 2026-06-28 17:33:36 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Suite `pnpm test:all` — cobertura + lcov |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [3.300 seconds] - 2026-06-28T23:33:41.174Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.6 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 71[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 93[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 192[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 242[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 238[2mms[22m[39m

[2m Test Files [22m [1m[32m12 passed[39m[22m[90m (12)[39m
[2m      Tests [22m [1m[32m32 passed[39m[22m[90m (32)[39m
[2m   Start at [22m 17:33:41
[2m   Duration [22m 2.62s[2m (transform 670ms, setup 2.59s, import 1.39s, tests 897ms, environment 11.43s)[22m


[33mLoaded [7m[33m vitest@4.1.6 [33m[27m and [7m[33m @vitest/coverage-v8@4.1.8 [33m[27m.
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.[39m
ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #011 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:36:58 UTC-06:00 |
| **Inicio** | 2026-06-28 17:36:48 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Ejecución única (`--watch=false` o CI) |
| **Script detonador** | `pnpm test` |
| **Comando** | `ng test --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  12 passed (12) · Tests  32 passed (32) · Duration  3.69s (transform 932ms, setup 3.64s, import 1.89s, tests 886ms, environment 17.63s) · ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [3.571 seconds] - 2026-06-28T23:36:53.722Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  12 passed (12)
      Tests  32 passed (32)
   Start at  17:36:54
   Duration  3.69s (transform 932ms, setup 3.64s, import 1.89s, tests 886ms, environment 17.63s)


ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #012 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:40:27 UTC-06:00 |
| **Inicio** | 2026-06-28 17:40:18 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Ejecución única (`--watch=false` o CI) |
| **Script detonador** | `pnpm test` |
| **Comando** | `ng test --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  12 passed (12) · Tests  32 passed (32) · Duration  3.17s (transform 815ms, setup 2.91s, import 1.36s, tests 711ms, environment 21.20s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [3.393 seconds] - 2026-06-28T23:40:23.438Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai


 Test Files  12 passed (12)
      Tests  32 passed (32)
   Start at  17:40:23
   Duration  3.17s (transform 815ms, setup 2.91s, import 1.36s, tests 711ms, environment 21.20s)
```

---


## Entrada #013 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:40:37 UTC-06:00 |
| **Inicio** | 2026-06-28 17:40:28 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  12 passed (12) · Tests  32 passed (32) · Duration  3.53s (transform 657ms, setup 3.28s, import 1.63s, tests 1000ms, environment 15.97s) · ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [3.219 seconds] - 2026-06-28T23:40:33.533Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  12 passed (12)
      Tests  32 passed (32)
   Start at  17:40:33
   Duration  3.53s (transform 657ms, setup 3.28s, import 1.63s, tests 1000ms, environment 15.97s)


ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #014 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:40:53 UTC-06:00 |
| **Inicio** | 2026-06-28 17:40:45 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  12 passed (12) · Tests  32 passed (32) · Duration  3.48s (transform 692ms, setup 3.29s, import 1.52s, tests 819ms, environment 17.52s) · ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [3.094 seconds] - 2026-06-28T23:40:49.641Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  12 passed (12)
      Tests  32 passed (32)
   Start at  17:40:50
   Duration  3.48s (transform 692ms, setup 3.29s, import 1.52s, tests 819ms, environment 17.52s)


ERROR: Coverage for functions (57.43%) does not meet global threshold (80%)
```

---


## Entrada #015 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:42:31 UTC-06:00 |
| **Inicio** | 2026-06-28 17:42:24 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Suite `pnpm test:all` — ejecución base de tests |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [3.237 seconds] - 2026-06-28T23:42:28.782Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 49[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 75[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 159[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 208[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 226[2mms[22m[39m

[2m Test Files [22m [1m[32m12 passed[39m[22m[90m (12)[39m
[2m      Tests [22m [1m[32m32 passed[39m[22m[90m (32)[39m
[2m   Start at [22m 17:42:29
[2m   Duration [22m 2.47s[2m (transform 713ms, setup 2.22s, import 1.24s, tests 767ms, environment 15.05s)[22m
```

---


## Entrada #016 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:42:40 UTC-06:00 |
| **Inicio** | 2026-06-28 17:42:32 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Suite `pnpm test:all` — cobertura + lcov |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

ERROR: Coverage for functions (58.78%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                  | Names                                             |  Raw size
spec-app-features-auth-auth-page.js                  | spec-app-features-auth-auth-page                  |  83.28 kB | 
styles.css                                           | styles                                            |  41.16 kB | 
spec-app-features-events-events-dashboard-page.js    | spec-app-features-events-events-dashboard-page    |  32.75 kB | 
chunk-SWISU4SX.js                                    | -                                                 |  16.20 kB | 
spec-app-features-session-session-page.js            | spec-app-features-session-session-page            |  11.33 kB | 
spec-app-core-config-resolve-environment.js          | spec-app-core-config-resolve-environment          |   7.11 kB | 
chunk-6ICJDUDN.js                                    | -                                                 |   5.96 kB | 
chunk-RSTWSNOR.js                                    | -                                                 |   4.75 kB | 
chunk-4UH573US.js                                    | -                                                 |   4.22 kB | 
chunk-DZQU75WU.js                                    | -                                                 |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js | spec-app-features-fallback-fallback-redirect-page |   3.24 kB | 
chunk-X3POIJ47.js                                    | -                                                 |   2.89 kB | 
spec-app-core-appwrite-appwrite-auth.service.js      | spec-app-core-appwrite-appwrite-auth.service      |   2.81 kB | 
chunk-C63VX33E.js                                    | -                                                 |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js           | spec-app-core-appwrite-appwrite.service           |   1.90 kB | 
spec-app-core-auth-guest.guard.js                    | spec-app-core-auth-guest.guard                    |   1.75 kB | 
spec-app-app.js                                      | spec-app-app                                      |   1.73 kB | 
spec-app-core-auth-auth.guard.js                     | spec-app-core-auth-auth.guard                     |   1.70 kB | 
chunk-J4FHUBTC.js                                    | -                                                 |   1.69 kB | 
spec-app-features-events-events.model.js             | spec-app-features-events-events.model             |   1.39 kB | 
init-testbed.js                                      | init-testbed                                      |   1.21 kB | 
vitest-mock-patch.js                                 | vitest-mock-patch                                 | 969 bytes | 
spec-app-shared-ui-password-strength.util.js         | spec-app-shared-ui-password-strength.util         | 878 bytes | 
chunk-RDSJJ3EL.js                                    | -                                                 | 859 bytes | 

                                                     | Initial total                                     | 235.88 kB

Application bundle generation complete. [2.774 seconds] - 2026-06-28T23:42:36.465Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 65[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 84[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 180[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 285[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 294[2mms[22m[39m

[2m Test Files [22m [1m[32m12 passed[39m[22m[90m (12)[39m
[2m      Tests [22m [1m[32m32 passed[39m[22m[90m (32)[39m
[2m   Start at [22m 17:42:36
[2m   Duration [22m 2.91s[2m (transform 593ms, setup 2.78s, import 1.58s, tests 976ms, environment 12.71s)[22m


ERROR: Coverage for functions (58.78%) does not meet global threshold (80%)
```

---


## Entrada #017 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:45:48 UTC-06:00 |
| **Inicio** | 2026-06-28 17:45:43 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Application bundle generation failed. [3.598 seconds] - 2026-06-28T23:45:48.696Z


✘ [ERROR] TS2339: Property 'click' does not exist on type 'Element'. [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts:49:10:
      49 │     link?.click();
         ╵           ~~~~~


✘ [ERROR] TS2339: Property 'click' does not exist on type 'Element'. [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts:67:18:
      67 │     forgotButton?.click();
         ╵                   ~~~~~


✘ [ERROR] TS2339: Property 'click' does not exist on type 'Element'. [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts:52:10:
      52 │     link?.click();
         ╵           ~~~~~
```

---


## Entrada #018 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:46:07 UTC-06:00 |
| **Inicio** | 2026-06-28 17:45:58 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  4 failed | 12 passed (16) · Tests  4 failed | 59 passed (63) · Duration  3.79s (transform 639ms, setup 3.02s, import 1.69s, tests 1.97s, environment 24.61s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                 | Names                                                            |  Raw size
styles.css                                                          | styles                                                           |  41.16 kB | 
spec-app-features-auth-auth-page.js                                 | spec-app-features-auth-auth-page                                 |  36.39 kB | 
spec-app-features-events-events-dashboard-page.js                   | spec-app-features-events-events-dashboard-page                   |  36.05 kB | 
chunk-BZHVEPYL.js                                                   | -                                                                |  25.66 kB | 
chunk-DCVFY7NA.js                                                   | -                                                                |  16.12 kB | 
chunk-JLYHZH3S.js                                                   | -                                                                |  15.20 kB | 
spec-app-features-session-session-page.js                           | spec-app-features-session-session-page                           |  11.96 kB | 
chunk-SQY356KL.js                                                   | -                                                                |   8.17 kB | 
spec-app-core-config-resolve-environment.js                         | spec-app-core-config-resolve-environment                         |   7.62 kB | 
chunk-RSTWSNOR.js                                                   | -                                                                |   4.75 kB | 
chunk-UJCHV22L.js                                                   | -                                                                |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                     | spec-app-core-appwrite-appwrite-auth.service                     |   4.32 kB | 
chunk-4UH573US.js                                                   | -                                                                |   4.22 kB | 
chunk-DZQU75WU.js                                                   | -                                                                |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js                | spec-app-features-fallback-fallback-redirect-page                |   3.24 kB | 
chunk-X3POIJ47.js                                                   | -                                                                |   2.89 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js     | spec-app-shared-ui-organisms-auth-login-form-auth-login-form     |   2.27 kB | 
chunk-C63VX33E.js                                                   | -                                                                |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js                          | spec-app-core-appwrite-appwrite.service                          |   1.90 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form |   1.80 kB | 
spec-app-core-auth-guest.guard.js                                   | spec-app-core-auth-guest.guard                                   |   1.75 kB | 
spec-app-app.js                                                     | spec-app-app                                                     |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                    | spec-app-core-auth-auth.guard                                    |   1.70 kB | 
chunk-J4FHUBTC.js                                                   | -                                                                |   1.69 kB | 
chunk-ESJ6SOP5.js                                                   | -                                                                |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                 | spec-app-features-admin-admin-navigation.service                 |   1.41 kB | 
spec-app-features-events-events.model.js                            | spec-app-features-events-events.model                            |   1.39 kB | 
init-testbed.js                                                     | init-testbed                                                     |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                       | spec-app-core-appwrite-appwrite-auth-error                       |   1.13 kB | 
chunk-RBN4S7O6.js                                                   | -                                                                |   1.10 kB | 
vitest-mock-patch.js                                                | vitest-mock-patch                                                | 969 bytes | 
chunk-QJQ2R3K6.js                                                   | -                                                                | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                        | spec-app-shared-ui-password-strength.util                        | 878 bytes | 
chunk-RDSJJ3EL.js                                                   | -                                                                | 859 bytes | 

                                                                    | Initial total                                                    | 252.50 kB

Application bundle generation complete. [3.597 seconds] - 2026-06-28T23:46:03.467Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8

 ❯ |eventflow-asistido-ai| src/app/features/session/session-page.spec.ts (3 tests | 1 failed) 206ms
     × should navigate via admin layout 29ms
 ❯ |eventflow-asistido-ai| src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts (3 tests | 1 failed) 181ms
     × should emit switchToSignUp when link is pressed 69ms
 ❯ |eventflow-asistido-ai| src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts (2 tests | 1 failed) 193ms
     × should emit switchToLogin when link is pressed 69ms
 ❯ |eventflow-asistido-ai| src/app/features/events/events-dashboard-page.spec.ts (7 tests | 1 failed) 572ms
     × should filter events by status 84ms

 Test Files  4 failed | 12 passed (16)
      Tests  4 failed | 59 passed (63)
     Errors  1 error
   Start at  17:46:04
   Duration  3.79s (transform 639ms, setup 3.02s, import 1.69s, tests 1.97s, environment 24.61s)



⎯⎯⎯⎯⎯⎯⎯ Failed Tests 4 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |eventflow-asistido-ai| src/app/features/events/events-dashboard-page.spec.ts > EventsDashboardPage > should filter events by status
AssertionError: expected 'EventFlowEvents4 totalPublished 3 (75…' not to contain 'Closed'

Expected: "Closed"
Received: "EventFlowEvents4 totalPublished 3 (75%) Create Event  All  Published  Closed Intro to Hand Lettering: Beginner Workshop Published  Mar 24, 2026 · 10:00 AM Studio 3, Harbor HouseTickets left: 12 Edit  Attendees Pottery Night: Wheel Throwing Basics Published  Apr 12, 2026 · 7:00 PM Makers LabTickets left: 6 Edit  Attendees Sunrise Yoga in the Park Published  May 01, 2026 · 6:00 AM Riverside ParkTickets left: 20 Edit  Attendees  Dash  Events  Account "

 ❯ src/app/features/events/events-dashboard-page.spec.ts:48:38
     46|
     47|     const compiled = fixture.nativeElement as HTMLElement;
     48|     expect(compiled.textContent).not.toContain('Closed');
       |                                      ^
     49|   });
     50|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/4]⎯

 FAIL  |eventflow-asistido-ai| src/app/features/session/session-page.spec.ts > SessionPage (profile) > should navigate via admin layout
AssertionError: expected "navigate" to be called with arguments: [ 'events' ]

Number of calls: 0

 ❯ src/app/features/session/session-page.spec.ts:90:25
     88|     eventsButton?.click();
     89|
     90|     expect(navigateSpy).toHaveBeenCalledWith('events');
       |                         ^
     91|   });
     92| });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/4]⎯

 FAIL  |eventflow-asistido-ai| src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts > AuthLoginForm > should emit switchToSignUp when link is pressed
AssertionError: expected "vi.fn()" to be called once, but got 0 times
 ❯ src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts:53:28
     51|     link?.click();
     52|
     53|     expect(switchToSignUp).toHaveBeenCalledOnce();
       |                            ^
     54|   });
     55|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/4]⎯

 FAIL  |eventflow-asistido-ai| src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts > AuthSignUpForm > should emit switchToLogin when link is pressed
AssertionError: expected "vi.fn()" to be called once, but got 0 times
 ❯ src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts:56:27
     54|     link?.click();
     55|
     56|     expect(switchToLogin).toHaveBeenCalledOnce();
       |                           ^
     57|   });
     58| });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/4]⎯

⎯⎯⎯⎯⎯⎯ Unhandled Errors ⎯⎯⎯⎯⎯⎯

Vitest caught 1 unhandled error during the test run.
This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.

⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯
Error: NG04002: Cannot match any routes. URL Segment: 'session'
 ❯ Recognizer.noMatchError node_modules/.pnpm/@angular+router@21.2.13_@angular+common@21.2.13_@angular+core@21.2.13_@angular+compiler_3a63d3eb80a3a395ad0c90972845f556/node_modules/@angular/router/fesm2022/_router-chunk.mjs:2923:12
 ❯ Recognizer.match node_modules/.pnpm/@angular+router@21.2.13_@angular+common@21.2.13_@angular+core@21.2.13_@angular+compiler_3a63d3eb80a3a395ad0c90972845f556/node_modules/@angular/router/fesm2022/_router-chunk.mjs:2957:20
 ❯ processTicksAndRejections node:internal/process/task_queues:105:5
 ❯ Recognizer.recognize node_modules/.pnpm/@angular+router@21.2.13_@angular+common@21.2.13_@angular+core@21.2.13_@angular+compiler_3a63d3eb80a3a395ad0c90972845f556/node_modules/@angular/router/fesm2022/_router-chunk.mjs:2930:9
 ❯ node_modules/.pnpm/@angular+router@21.2.13_@angular+common@21.2.13_@angular+core@21.2.13_@angular+compiler_3a63d3eb80a3a395ad0c90972845f556/node_modules/@angular/router/fesm2022/_router-chunk.mjs:3187:9

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { code: 4002 }
This error originated in "src/app/features/events/events-dashboard-page.spec.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
The latest test that might've caused the error is "should navigate to session from admin header". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- If the error occurred after the test had been completed, this was the last documented test before it was thrown.
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
```

---


## Entrada #019 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:46:30 UTC-06:00 |
| **Inicio** | 2026-06-28 17:46:20 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  16 passed (16) · Tests  63 passed (63) · Duration  4.13s (transform 717ms, setup 3.37s, import 2.08s, tests 2.04s, environment 27.20s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                 | Names                                                            |  Raw size
styles.css                                                          | styles                                                           |  41.16 kB | 
spec-app-features-auth-auth-page.js                                 | spec-app-features-auth-auth-page                                 |  36.39 kB | 
spec-app-features-events-events-dashboard-page.js                   | spec-app-features-events-events-dashboard-page                   |  36.19 kB | 
chunk-BZHVEPYL.js                                                   | -                                                                |  25.66 kB | 
chunk-DCVFY7NA.js                                                   | -                                                                |  16.12 kB | 
chunk-JLYHZH3S.js                                                   | -                                                                |  15.20 kB | 
spec-app-features-session-session-page.js                           | spec-app-features-session-session-page                           |  11.95 kB | 
chunk-SQY356KL.js                                                   | -                                                                |   8.17 kB | 
spec-app-core-config-resolve-environment.js                         | spec-app-core-config-resolve-environment                         |   7.62 kB | 
chunk-RSTWSNOR.js                                                   | -                                                                |   4.75 kB | 
chunk-UJCHV22L.js                                                   | -                                                                |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                     | spec-app-core-appwrite-appwrite-auth.service                     |   4.32 kB | 
chunk-4UH573US.js                                                   | -                                                                |   4.22 kB | 
chunk-DZQU75WU.js                                                   | -                                                                |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js                | spec-app-features-fallback-fallback-redirect-page                |   3.24 kB | 
chunk-X3POIJ47.js                                                   | -                                                                |   2.89 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js     | spec-app-shared-ui-organisms-auth-login-form-auth-login-form     |   2.35 kB | 
chunk-C63VX33E.js                                                   | -                                                                |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js                          | spec-app-core-appwrite-appwrite.service                          |   1.90 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form |   1.87 kB | 
spec-app-core-auth-guest.guard.js                                   | spec-app-core-auth-guest.guard                                   |   1.75 kB | 
spec-app-app.js                                                     | spec-app-app                                                     |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                    | spec-app-core-auth-auth.guard                                    |   1.70 kB | 
chunk-J4FHUBTC.js                                                   | -                                                                |   1.69 kB | 
chunk-ESJ6SOP5.js                                                   | -                                                                |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                 | spec-app-features-admin-admin-navigation.service                 |   1.41 kB | 
spec-app-features-events-events.model.js                            | spec-app-features-events-events.model                            |   1.39 kB | 
init-testbed.js                                                     | init-testbed                                                     |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                       | spec-app-core-appwrite-appwrite-auth-error                       |   1.13 kB | 
chunk-RBN4S7O6.js                                                   | -                                                                |   1.10 kB | 
vitest-mock-patch.js                                                | vitest-mock-patch                                                | 969 bytes | 
chunk-QJQ2R3K6.js                                                   | -                                                                | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                        | spec-app-shared-ui-password-strength.util                        | 878 bytes | 
chunk-RDSJJ3EL.js                                                   | -                                                                | 859 bytes | 

                                                                    | Initial total                                                    | 252.78 kB

Application bundle generation complete. [3.619 seconds] - 2026-06-28T23:46:25.360Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  16 passed (16)
      Tests  63 passed (63)
   Start at  17:46:25
   Duration  4.13s (transform 717ms, setup 3.37s, import 2.08s, tests 2.04s, environment 27.20s)
```

---


## Entrada #020 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:52:24 UTC-06:00 |
| **Inicio** | 2026-06-28 17:52:16 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Suite `pnpm test:all` — ejecución base de tests |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                 | Names                                                            |  Raw size
styles.css                                                          | styles                                                           |  41.16 kB | 
spec-app-features-auth-auth-page.js                                 | spec-app-features-auth-auth-page                                 |  36.39 kB | 
spec-app-features-events-events-dashboard-page.js                   | spec-app-features-events-events-dashboard-page                   |  36.19 kB | 
chunk-B5JFTEDJ.js                                                   | -                                                                |  25.66 kB | 
chunk-6KYY7KAY.js                                                   | -                                                                |  16.12 kB | 
chunk-JLYHZH3S.js                                                   | -                                                                |  15.20 kB | 
spec-app-features-session-session-page.js                           | spec-app-features-session-session-page                           |  11.95 kB | 
chunk-4A4EE6SZ.js                                                   | -                                                                |   8.17 kB | 
spec-app-core-config-resolve-environment.js                         | spec-app-core-config-resolve-environment                         |   7.62 kB | 
chunk-RSTWSNOR.js                                                   | -                                                                |   4.75 kB | 
chunk-UJCHV22L.js                                                   | -                                                                |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                     | spec-app-core-appwrite-appwrite-auth.service                     |   4.32 kB | 
chunk-4UH573US.js                                                   | -                                                                |   4.22 kB | 
chunk-DZQU75WU.js                                                   | -                                                                |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js                | spec-app-features-fallback-fallback-redirect-page                |   3.24 kB | 
chunk-X3POIJ47.js                                                   | -                                                                |   2.89 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js     | spec-app-shared-ui-organisms-auth-login-form-auth-login-form     |   2.35 kB | 
chunk-EYYCXRM3.js                                                   | -                                                                |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js                          | spec-app-core-appwrite-appwrite.service                          |   1.90 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form |   1.87 kB | 
spec-app-core-auth-guest.guard.js                                   | spec-app-core-auth-guest.guard                                   |   1.75 kB | 
spec-app-app.js                                                     | spec-app-app                                                     |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                    | spec-app-core-auth-auth.guard                                    |   1.70 kB | 
chunk-D2JG4E4G.js                                                   | -                                                                |   1.69 kB | 
chunk-ESJ6SOP5.js                                                   | -                                                                |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                 | spec-app-features-admin-admin-navigation.service                 |   1.41 kB | 
spec-app-features-events-events.model.js                            | spec-app-features-events-events.model                            |   1.39 kB | 
init-testbed.js                                                     | init-testbed                                                     |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                       | spec-app-core-appwrite-appwrite-auth-error                       |   1.13 kB | 
chunk-RBN4S7O6.js                                                   | -                                                                |   1.10 kB | 
vitest-mock-patch.js                                                | vitest-mock-patch                                                | 969 bytes | 
chunk-QJQ2R3K6.js                                                   | -                                                                | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                        | spec-app-shared-ui-password-strength.util                        | 878 bytes | 
chunk-RDSJJ3EL.js                                                   | -                                                                | 859 bytes | 

                                                                    | Initial total                                                    | 252.78 kB

Application bundle generation complete. [3.536 seconds] - 2026-06-28T23:52:21.456Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 163[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 184[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 190[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 22[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 20[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 441[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 441[2mms[22m[39m

[2m Test Files [22m [1m[32m16 passed[39m[22m[90m (16)[39m
[2m      Tests [22m [1m[32m63 passed[39m[22m[90m (63)[39m
[2m   Start at [22m 17:52:21
[2m   Duration [22m 3.00s[2m (transform 848ms, setup 2.73s, import 1.66s, tests 1.52s, environment 22.71s)[22m
```

---


## Entrada #021 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 17:52:34 UTC-06:00 |
| **Inicio** | 2026-06-28 17:52:25 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-custom-paths` |
| **Razón de ejecución** | Suite `pnpm test:all` — cobertura + lcov |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                 | Names                                                            |  Raw size
styles.css                                                          | styles                                                           |  41.16 kB | 
spec-app-features-auth-auth-page.js                                 | spec-app-features-auth-auth-page                                 |  36.39 kB | 
spec-app-features-events-events-dashboard-page.js                   | spec-app-features-events-events-dashboard-page                   |  36.19 kB | 
chunk-BZHVEPYL.js                                                   | -                                                                |  25.66 kB | 
chunk-DCVFY7NA.js                                                   | -                                                                |  16.12 kB | 
chunk-S37D53VO.js                                                   | -                                                                |  15.20 kB | 
spec-app-features-session-session-page.js                           | spec-app-features-session-session-page                           |  11.95 kB | 
chunk-SQY356KL.js                                                   | -                                                                |   8.17 kB | 
spec-app-core-config-resolve-environment.js                         | spec-app-core-config-resolve-environment                         |   7.62 kB | 
chunk-RSTWSNOR.js                                                   | -                                                                |   4.75 kB | 
chunk-UJCHV22L.js                                                   | -                                                                |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                     | spec-app-core-appwrite-appwrite-auth.service                     |   4.32 kB | 
chunk-4UH573US.js                                                   | -                                                                |   4.22 kB | 
chunk-DZQU75WU.js                                                   | -                                                                |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js                | spec-app-features-fallback-fallback-redirect-page                |   3.24 kB | 
chunk-X3POIJ47.js                                                   | -                                                                |   2.89 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js     | spec-app-shared-ui-organisms-auth-login-form-auth-login-form     |   2.35 kB | 
chunk-C63VX33E.js                                                   | -                                                                |   2.26 kB | 
spec-app-core-appwrite-appwrite.service.js                          | spec-app-core-appwrite-appwrite.service                          |   1.90 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form |   1.87 kB | 
spec-app-core-auth-guest.guard.js                                   | spec-app-core-auth-guest.guard                                   |   1.75 kB | 
spec-app-app.js                                                     | spec-app-app                                                     |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                    | spec-app-core-auth-auth.guard                                    |   1.70 kB | 
chunk-J4FHUBTC.js                                                   | -                                                                |   1.69 kB | 
chunk-ESJ6SOP5.js                                                   | -                                                                |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                 | spec-app-features-admin-admin-navigation.service                 |   1.41 kB | 
spec-app-features-events-events.model.js                            | spec-app-features-events-events.model                            |   1.39 kB | 
init-testbed.js                                                     | init-testbed                                                     |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                       | spec-app-core-appwrite-appwrite-auth-error                       |   1.13 kB | 
chunk-RBN4S7O6.js                                                   | -                                                                |   1.10 kB | 
vitest-mock-patch.js                                                | vitest-mock-patch                                                | 969 bytes | 
chunk-QJQ2R3K6.js                                                   | -                                                                | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                        | spec-app-shared-ui-password-strength.util                        | 878 bytes | 
chunk-RDSJJ3EL.js                                                   | -                                                                | 859 bytes | 

                                                                    | Initial total                                                    | 252.78 kB

Application bundle generation complete. [3.285 seconds] - 2026-06-28T23:52:30.276Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 200[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 225[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 226[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 30[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 18[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 47[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 51[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 906[2mms[22m[39m
     [33m[2m✓[22m[39m should render dashboard heading and events [33m 335[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 933[2mms[22m[39m

[2m Test Files [22m [1m[32m16 passed[39m[22m[90m (16)[39m
[2m      Tests [22m [1m[32m63 passed[39m[22m[90m (63)[39m
[2m   Start at [22m 17:52:30
[2m   Duration [22m 3.66s[2m (transform 698ms, setup 2.86s, import 2.10s, tests 2.69s, environment 17.16s)[22m
```

---


## Entrada #022 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 18:10:57 UTC-06:00 |
| **Inicio** | 2026-06-28 18:10:45 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/event-register` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  18 passed (18) · Tests  69 passed (69) · Duration  4.30s (transform 900ms, setup 3.19s, import 2.30s, tests 2.73s, environment 28.08s) · ERROR: Coverage for functions (78.94%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                 | Names                                                            |  Raw size
spec-app-features-events-event-registration-page.js                 | spec-app-features-events-event-registration-page                 |  59.43 kB | 
styles.css                                                          | styles                                                           |  43.37 kB | 
spec-app-features-events-events-dashboard-page.js                   | spec-app-features-events-events-dashboard-page                   |  34.10 kB | 
spec-app-features-auth-auth-page.js                                 | spec-app-features-auth-auth-page                                 |  34.00 kB | 
chunk-ROWGMQVX.js                                                   | -                                                                |  20.16 kB | 
chunk-JLYHZH3S.js                                                   | -                                                                |  15.20 kB | 
spec-app-features-session-session-page.js                           | spec-app-features-session-session-page                           |  11.95 kB | 
chunk-ODRWNFAD.js                                                   | -                                                                |  10.06 kB | 
chunk-6Z6SBMMV.js                                                   | -                                                                |   8.17 kB | 
spec-app-core-config-resolve-environment.js                         | spec-app-core-config-resolve-environment                         |   7.62 kB | 
chunk-NMOTKRLY.js                                                   | -                                                                |   6.05 kB | 
chunk-IG5O6RZF.js                                                   | -                                                                |   5.41 kB | 
chunk-EYREIOUK.js                                                   | -                                                                |   5.34 kB | 
chunk-RSTWSNOR.js                                                   | -                                                                |   4.75 kB | 
chunk-UJCHV22L.js                                                   | -                                                                |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                     | spec-app-core-appwrite-appwrite-auth.service                     |   4.32 kB | 
chunk-DZQU75WU.js                                                   | -                                                                |   3.81 kB | 
spec-app-features-fallback-fallback-redirect-page.js                | spec-app-features-fallback-fallback-redirect-page                |   3.24 kB | 
chunk-X3POIJ47.js                                                   | -                                                                |   2.89 kB | 
chunk-STQC3UUX.js                                                   | -                                                                |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js     | spec-app-shared-ui-organisms-auth-login-form-auth-login-form     |   2.41 kB | 
chunk-ZSYPUIDD.js                                                   | -                                                                |   2.37 kB | 
chunk-C63VX33E.js                                                   | -                                                                |   2.26 kB | 
spec-app-features-events-event-registration.model.js                | spec-app-features-events-event-registration.model                |   1.92 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form |   1.90 kB | 
spec-app-core-appwrite-appwrite.service.js                          | spec-app-core-appwrite-appwrite.service                          |   1.90 kB | 
spec-app-core-auth-guest.guard.js                                   | spec-app-core-auth-guest.guard                                   |   1.75 kB | 
spec-app-app.js                                                     | spec-app-app                                                     |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                    | spec-app-core-auth-auth.guard                                    |   1.70 kB | 
chunk-J4FHUBTC.js                                                   | -                                                                |   1.69 kB | 
chunk-ESJ6SOP5.js                                                   | -                                                                |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                 | spec-app-features-admin-admin-navigation.service                 |   1.41 kB | 
spec-app-features-events-events.model.js                            | spec-app-features-events-events.model                            |   1.39 kB | 
init-testbed.js                                                     | init-testbed                                                     |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                       | spec-app-core-appwrite-appwrite-auth-error                       |   1.13 kB | 
chunk-RBN4S7O6.js                                                   | -                                                                |   1.10 kB | 
chunk-SACBZIG5.js                                                   | -                                                                |   1.06 kB | 
vitest-mock-patch.js                                                | vitest-mock-patch                                                | 969 bytes | 
chunk-QJQ2R3K6.js                                                   | -                                                                | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                        | spec-app-shared-ui-password-strength.util                        | 878 bytes | 
chunk-RDSJJ3EL.js                                                   | -                                                                | 859 bytes | 

                                                                    | Initial total                                                    | 318.83 kB

Application bundle generation complete. [4.306 seconds] - 2026-06-29T00:10:52.004Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  18 passed (18)
      Tests  69 passed (69)
   Start at  18:10:52
   Duration  4.30s (transform 900ms, setup 3.19s, import 2.30s, tests 2.73s, environment 28.08s)


ERROR: Coverage for functions (78.94%) does not meet global threshold (80%)
```

---


## Entrada #023 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 18:11:38 UTC-06:00 |
| **Inicio** | 2026-06-28 18:11:27 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/event-register` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  1 failed | 18 passed (19) · Tests  1 failed | 74 passed (75) · Duration  4.24s (transform 965ms, setup 2.91s, import 2.26s, tests 3.41s, environment 28.93s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
styles.css                                                                      | styles                                                                       |  43.37 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  36.55 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  34.50 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.03 kB | 
chunk-F24LY2TM.js                                                               | -                                                                            |  23.93 kB | 
chunk-FBCW5UBQ.js                                                               | -                                                                            |  20.19 kB | 
chunk-JLYHZH3S.js                                                               | -                                                                            |  15.20 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  11.95 kB | 
chunk-CLQFJA5G.js                                                               | -                                                                            |  10.06 kB | 
chunk-2KI5VIRT.js                                                               | -                                                                            |   8.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-DZQU75WU.js                                                               | -                                                                            |   3.81 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-X3POIJ47.js                                                               | -                                                                            |   2.89 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.93 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.39 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 

                                                                                | Initial total                                                                | 322.63 kB

Application bundle generation complete. [3.831 seconds] - 2026-06-29T00:11:33.199Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8

 ❯ |eventflow-asistido-ai| src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts (3 tests | 1 failed) 194ms
     × should show phone validation error for invalid numbers 70ms

 Test Files  1 failed | 18 passed (19)
      Tests  1 failed | 74 passed (75)
   Start at  18:11:33
   Duration  4.24s (transform 965ms, setup 2.91s, import 2.26s, tests 3.41s, environment 28.93s)



⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |eventflow-asistido-ai| src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts > EventRegistrationForm > should show phone validation error for invalid numbers
AssertionError: expected 'Register for this event Secure your s…' to contain 'Invalid phone number format'

Expected: "Invalid phone number format"
Received: "Register for this event Secure your spot — fields marked with * are required FreeFull name *Email * We'll send your ticket to this email Phone (optional)I agree to the event terms and privacy policy Formato de teléfono no válido. Register Save for later  By registering you agree to our TermsPrivacy"

 ❯ src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts:51:64
     49|     fixture.detectChanges();
     50|
     51|     expect((fixture.nativeElement as HTMLElement).textContent).toConta…
       |                                                                ^
     52|       'Invalid phone number format',
     53|     );

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
```

---


## Entrada #024 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 18:11:55 UTC-06:00 |
| **Inicio** | 2026-06-28 18:11:46 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/event-register` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  19 passed (19) · Tests  75 passed (75) · Duration  3.63s (transform 837ms, setup 2.98s, import 2.29s, tests 2.92s, environment 20.03s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
styles.css                                                                      | styles                                                                       |  43.37 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  36.55 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  34.50 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.03 kB | 
chunk-F24LY2TM.js                                                               | -                                                                            |  23.93 kB | 
chunk-FBCW5UBQ.js                                                               | -                                                                            |  20.19 kB | 
chunk-JLYHZH3S.js                                                               | -                                                                            |  15.20 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  11.95 kB | 
chunk-CLQFJA5G.js                                                               | -                                                                            |  10.06 kB | 
chunk-2KI5VIRT.js                                                               | -                                                                            |   8.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-DZQU75WU.js                                                               | -                                                                            |   3.81 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-X3POIJ47.js                                                               | -                                                                            |   2.89 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.93 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.39 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 

                                                                                | Initial total                                                                | 322.64 kB

Application bundle generation complete. [3.391 seconds] - 2026-06-29T00:11:51.178Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  19 passed (19)
      Tests  75 passed (75)
   Start at  18:11:51
   Duration  3.63s (transform 837ms, setup 2.98s, import 2.29s, tests 2.92s, environment 20.03s)
```

---


## Entrada #025 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 20:42:24 UTC-06:00 |
| **Inicio** | 2026-06-28 20:42:14 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/event-register` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  19 passed (19) · Tests  76 passed (76) · Duration  4.17s (transform 893ms, setup 2.93s, import 2.20s, tests 2.92s, environment 28.13s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
styles.css                                                                      | styles                                                                       |  43.37 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  38.24 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  34.53 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.03 kB | 
chunk-F24LY2TM.js                                                               | -                                                                            |  23.93 kB | 
chunk-FBCW5UBQ.js                                                               | -                                                                            |  20.19 kB | 
chunk-EO4RMSEE.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  11.98 kB | 
chunk-CLQFJA5G.js                                                               | -                                                                            |  10.06 kB | 
chunk-2KI5VIRT.js                                                               | -                                                                            |   8.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-DZQU75WU.js                                                               | -                                                                            |   3.81 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-X3POIJ47.js                                                               | -                                                                            |   2.89 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.93 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.39 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 

                                                                                | Initial total                                                                | 324.37 kB

Application bundle generation complete. [3.696 seconds] - 2026-06-29T02:42:19.774Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  19 passed (19)
      Tests  76 passed (76)
   Start at  20:42:20
   Duration  4.17s (transform 893ms, setup 2.93s, import 2.20s, tests 2.92s, environment 28.13s)
```

---


## Entrada #026 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 20:45:59 UTC-06:00 |
| **Inicio** | 2026-06-28 20:45:47 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/event-register` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  19 passed (19) · Tests  77 passed (77) · Duration  5.53s (transform 893ms, setup 4.70s, import 2.26s, tests 4.02s, environment 37.26s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  47.04 kB | 
styles.css                                                                      | styles                                                                       |  46.36 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  34.53 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.06 kB | 
chunk-JJBCERZY.js                                                               | -                                                                            |  23.93 kB | 
chunk-FBCW5UBQ.js                                                               | -                                                                            |  20.19 kB | 
chunk-YFGQIPRM.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-CLQFJA5G.js                                                               | -                                                                            |  10.06 kB | 
chunk-5D7EYNMI.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-X3POIJ47.js                                                               | -                                                                            |   2.89 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.39 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 

                                                                                | Initial total                                                                | 336.30 kB

Application bundle generation complete. [4.169 seconds] - 2026-06-29T02:45:53.533Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  19 passed (19)
      Tests  77 passed (77)
   Start at  20:45:54
   Duration  5.53s (transform 893ms, setup 4.70s, import 2.26s, tests 4.02s, environment 37.26s)
```

---


## Entrada #027 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-28 20:53:10 UTC-06:00 |
| **Inicio** | 2026-06-28 20:52:57 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/event-register` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  19 passed (19) · Tests  79 passed (79) · Duration  4.85s (transform 899ms, setup 3.31s, import 3.04s, tests 3.61s, environment 32.64s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
styles.css                                                                      | styles                                                                       |  46.36 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  46.30 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.77 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.06 kB | 
chunk-JJBCERZY.js                                                               | -                                                                            |  23.93 kB | 
chunk-FBCW5UBQ.js                                                               | -                                                                            |  20.19 kB | 
chunk-EO4RMSEE.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-CLQFJA5G.js                                                               | -                                                                            |  10.06 kB | 
chunk-5D7EYNMI.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-EEGGP3AU.js                                                               | -                                                                            |   3.23 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 

                                                                                | Initial total                                                                | 338.53 kB

Application bundle generation complete. [5.794 seconds] - 2026-06-29T02:53:04.707Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  19 passed (19)
      Tests  79 passed (79)
   Start at  20:53:05
   Duration  4.85s (transform 899ms, setup 3.31s, import 3.04s, tests 3.61s, environment 32.64s)
```

---


## Entrada #028 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-29 09:08:47 UTC-06:00 |
| **Inicio** | 2026-06-29 09:08:34 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/event-detail` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  21 passed (21) · Tests  86 passed (86) · Duration  4.75s (transform 984ms, setup 3.51s, import 2.56s, tests 3.65s, environment 35.68s) · ERROR: Coverage for functions (77.2%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  57.33 kB | 
styles.css                                                                      | styles                                                                       |  49.16 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.78 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.06 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-SNFMFL6A.js                                                               | -                                                                            |  23.93 kB | 
chunk-2N6UIYP4.js                                                               | -                                                                            |  20.19 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-EO4RMSEE.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-677ZFUDP.js                                                               | -                                                                            |  10.06 kB | 
chunk-FKYSUM3B.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-EEGGP3AU.js                                                               | -                                                                            |   3.23 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 

                                                                                | Initial total                                                                | 406.04 kB

Application bundle generation complete. [4.339 seconds] - 2026-06-29T15:08:41.482Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  21 passed (21)
      Tests  86 passed (86)
   Start at  09:08:42
   Duration  4.75s (transform 984ms, setup 3.51s, import 2.56s, tests 3.65s, environment 35.68s)


ERROR: Coverage for functions (77.2%) does not meet global threshold (80%)
```

---


## Entrada #029 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-29 09:09:25 UTC-06:00 |
| **Inicio** | 2026-06-29 09:09:12 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/event-detail` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  21 passed (21) · Tests  88 passed (88) · Duration  5.20s (transform 994ms, setup 4.04s, import 3.04s, tests 5.93s, environment 31.17s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
styles.css                                                                      | styles                                                                       |  49.16 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.78 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.06 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-F24LY2TM.js                                                               | -                                                                            |  23.93 kB | 
chunk-ERTHN6UT.js                                                               | -                                                                            |  20.19 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-YFGQIPRM.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-4KFNAJJU.js                                                               | -                                                                            |  10.06 kB | 
chunk-PF4UHYUF.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-EEGGP3AU.js                                                               | -                                                                            |   3.23 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-EYYCXRM3.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-D2JG4E4G.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 

                                                                                | Initial total                                                                | 407.70 kB

Application bundle generation complete. [4.287 seconds] - 2026-06-29T15:09:18.721Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  21 passed (21)
      Tests  88 passed (88)
   Start at  09:09:19
   Duration  5.20s (transform 994ms, setup 4.04s, import 3.04s, tests 5.93s, environment 31.17s)
```

---


## Entrada #030 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-29 09:13:54 UTC-06:00 |
| **Inicio** | 2026-06-29 09:13:45 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `feat/event-detail` |
| **Razón de ejecución** | Suite `pnpm test:all` — ejecución base de tests |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
styles.css                                                                      | styles                                                                       |  49.20 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.78 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.06 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-F24LY2TM.js                                                               | -                                                                            |  23.93 kB | 
chunk-ERTHN6UT.js                                                               | -                                                                            |  20.19 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-EO4RMSEE.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-4KFNAJJU.js                                                               | -                                                                            |  10.06 kB | 
chunk-PF4UHYUF.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-EEGGP3AU.js                                                               | -                                                                            |   3.23 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 

                                                                                | Initial total                                                                | 407.74 kB

Application bundle generation complete. [3.548 seconds] - 2026-06-29T15:13:50.317Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 159[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 101[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 468[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 42[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 508[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 554[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 51[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 839[2mms[22m[39m
     [33m[2m✓[22m[39m should register successfully and show confirmation [33m 437[2mms[22m[39m

[2m Test Files [22m [1m[32m21 passed[39m[22m[90m (21)[39m
[2m      Tests [22m [1m[32m88 passed[39m[22m[90m (88)[39m
[2m   Start at [22m 09:13:50
[2m   Duration [22m 3.37s[2m (transform 968ms, setup 3.37s, import 1.91s, tests 2.80s, environment 27.86s)[22m
```

---


## Entrada #031 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-29 09:14:04 UTC-06:00 |
| **Inicio** | 2026-06-29 09:13:54 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `feat/event-detail` |
| **Razón de ejecución** | Suite `pnpm test:all` — cobertura + lcov |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
styles.css                                                                      | styles                                                                       |  49.20 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.78 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.06 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-SNFMFL6A.js                                                               | -                                                                            |  23.93 kB | 
chunk-2N6UIYP4.js                                                               | -                                                                            |  20.19 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-EO4RMSEE.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-677ZFUDP.js                                                               | -                                                                            |  10.06 kB | 
chunk-FKYSUM3B.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-EEGGP3AU.js                                                               | -                                                                            |   3.23 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 

                                                                                | Initial total                                                                | 407.74 kB

Application bundle generation complete. [3.506 seconds] - 2026-06-29T15:13:59.612Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 207[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 127[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 519[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 80[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 596[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 26[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 618[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 90[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 910[2mms[22m[39m
     [33m[2m✓[22m[39m should register successfully and show confirmation [33m 454[2mms[22m[39m

[2m Test Files [22m [1m[32m21 passed[39m[22m[90m (21)[39m
[2m      Tests [22m [1m[32m88 passed[39m[22m[90m (88)[39m
[2m   Start at [22m 09:14:00
[2m   Duration [22m 3.87s[2m (transform 938ms, setup 2.70s, import 2.23s, tests 3.24s, environment 26.62s)[22m
```

---


## Entrada #032 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-29 23:06:17 UTC-06:00 |
| **Inicio** | 2026-06-29 23:06:07 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `feat/event-detail` |
| **Razón de ejecución** | Suite `pnpm test:all` — ejecución base de tests |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
styles.css                                                                      | styles                                                                       |  49.20 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.78 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.06 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-F24LY2TM.js                                                               | -                                                                            |  23.93 kB | 
chunk-ERTHN6UT.js                                                               | -                                                                            |  20.19 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-EO4RMSEE.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-4KFNAJJU.js                                                               | -                                                                            |  10.06 kB | 
chunk-2CPLJIKM.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-EEGGP3AU.js                                                               | -                                                                            |   3.23 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 

                                                                                | Initial total                                                                | 407.74 kB

Application bundle generation complete. [3.993 seconds] - 2026-06-30T05:06:13.167Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 180[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 113[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 485[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 51[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 21[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 543[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 594[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 99[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 854[2mms[22m[39m
     [33m[2m✓[22m[39m should register successfully and show confirmation [33m 449[2mms[22m[39m

[2m Test Files [22m [1m[32m21 passed[39m[22m[90m (21)[39m
[2m      Tests [22m [1m[32m88 passed[39m[22m[90m (88)[39m
[2m   Start at [22m 23:06:13
[2m   Duration [22m 3.45s[2m (transform 1.15s, setup 2.71s, import 2.20s, tests 3.01s, environment 29.80s)[22m
```

---


## Entrada #033 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-29 23:06:27 UTC-06:00 |
| **Inicio** | 2026-06-29 23:06:17 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `feat/event-detail` |
| **Razón de ejecución** | Suite `pnpm test:all` — cobertura + lcov |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
styles.css                                                                      | styles                                                                       |  49.20 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.78 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.06 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-F24LY2TM.js                                                               | -                                                                            |  23.93 kB | 
chunk-ERTHN6UT.js                                                               | -                                                                            |  20.19 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-EO4RMSEE.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-4KFNAJJU.js                                                               | -                                                                            |  10.06 kB | 
chunk-PF4UHYUF.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-EEGGP3AU.js                                                               | -                                                                            |   3.23 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
chunk-ZSYPUIDD.js                                                               | -                                                                            |   2.37 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 

                                                                                | Initial total                                                                | 407.74 kB

Application bundle generation complete. [3.813 seconds] - 2026-06-30T05:06:22.947Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 221[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 556[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 133[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 66[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 26[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 658[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 712[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 94[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 20[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 14[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 976[2mms[22m[39m
     [33m[2m✓[22m[39m should register successfully and show confirmation [33m 463[2mms[22m[39m

[2m Test Files [22m [1m[32m21 passed[39m[22m[90m (21)[39m
[2m      Tests [22m [1m[32m88 passed[39m[22m[90m (88)[39m
[2m   Start at [22m 23:06:23
[2m   Duration [22m 4.10s[2m (transform 973ms, setup 3.44s, import 2.40s, tests 3.53s, environment 23.49s)[22m
```

---


## Entrada #034 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 09:35:38 UTC-06:00 |
| **Inicio** | 2026-06-30 09:35:20 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/attendee-list` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  23 passed (23) · Tests  97 passed (97) · Duration  5.22s (transform 1.15s, setup 3.92s, import 3.17s, tests 4.76s, environment 38.50s) · ERROR: Coverage for functions (78.41%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  51.81 kB | 
styles.css                                                                      | styles                                                                       |  50.68 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  38.84 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.09 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-F24LY2TM.js                                                               | -                                                                            |  23.93 kB | 
chunk-TMLSQBHQ.js                                                               | -                                                                            |  16.99 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-ND4EU5DA.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-S44GCDOT.js                                                               | -                                                                            |  10.06 kB | 
chunk-KLH4A3HC.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-AMDTI4M3.js                                                               | -                                                                            |   3.57 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-EEGGP3AU.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.47 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 

                                                                                | Initial total                                                                | 465.99 kB

Application bundle generation complete. [8.380 seconds] - 2026-06-30T15:35:31.700Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  23 passed (23)
      Tests  97 passed (97)
   Start at  09:35:32
   Duration  5.22s (transform 1.15s, setup 3.92s, import 3.17s, tests 4.76s, environment 38.50s)


ERROR: Coverage for functions (78.41%) does not meet global threshold (80%)
```

---


## Entrada #035 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 09:36:06 UTC-06:00 |
| **Inicio** | 2026-06-30 09:35:53 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/attendee-list` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  23 passed (23) · Tests  99 passed (99) · Duration  5.22s (transform 1.30s, setup 3.80s, import 2.79s, tests 5.66s, environment 33.23s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  53.28 kB | 
styles.css                                                                      | styles                                                                       |  50.68 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  38.84 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.09 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-F24LY2TM.js                                                               | -                                                                            |  23.93 kB | 
chunk-TMLSQBHQ.js                                                               | -                                                                            |  16.99 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-ND4EU5DA.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.02 kB | 
chunk-S44GCDOT.js                                                               | -                                                                            |  10.06 kB | 
chunk-KLH4A3HC.js                                                               | -                                                                            |   8.21 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   7.62 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   4.32 kB | 
chunk-AMDTI4M3.js                                                               | -                                                                            |   3.57 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.24 kB | 
chunk-EEGGP3AU.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.47 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-C63VX33E.js                                                               | -                                                                            |   2.26 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.79 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.75 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.70 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 

                                                                                | Initial total                                                                | 467.46 kB

Application bundle generation complete. [5.227 seconds] - 2026-06-30T15:36:00.242Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  23 passed (23)
      Tests  99 passed (99)
   Start at  09:36:00
   Duration  5.22s (transform 1.30s, setup 3.80s, import 2.79s, tests 5.66s, environment 33.23s)
```

---


## Entrada #036 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 09:43:13 UTC-06:00 |
| **Inicio** | 2026-06-30 09:43:05 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/attendee-list` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Application bundle generation failed. [5.542 seconds] - 2026-06-30T15:43:13.803Z


✘ [ERROR] TS2740: Type '{ $id: string; $createdAt: string; $updatedAt: string; name: string; email: string; registration: string; status: true; labels: never[]; prefs: {}; accessedAt: string; }' is missing the following properties from type 'User<Preferences>': passwordUpdate, phone, emailVerification, phoneVerification, and 2 more. [plugin angular-compiler]

    src/app/core/appwrite/appwrite-auth.service.ts:62:6:
      62 │       return MOCK_SESSION_USER;
         ╵       ~~~~~~


✘ [ERROR] TS1360: Type '{ $id: string; $createdAt: string; $updatedAt: string; name: string; email: string; registration: string; status: true; labels: never[]; prefs: {}; accessedAt: string; }' does not satisfy the expected type 'User<Preferences>'.
  Type '{ $id: string; $createdAt: string; $updatedAt: string; name: string; email: string; registration: string; status: true; labels: never[]; prefs: {}; accessedAt: string; }' is missing the following properties from type 'User<Preferences>': passwordUpdate, phone, emailVerification, phoneVerification, and 2 more. [plugin angular-compiler]

    src/mock/session.mock.ts:18:2:
      18 │ } satisfies Models.User<Models.Preferences>;
         ╵   ~~~~~~~~~
```

---


## Entrada #037 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 09:44:02 UTC-06:00 |
| **Inicio** | 2026-06-30 09:43:56 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/attendee-list` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Application bundle generation failed. [4.879 seconds] - 2026-06-30T15:44:02.857Z


✘ [ERROR] TS2352: Conversion of type '{ $id: string; $createdAt: string; $updatedAt: string; name: string; email: string; registration: string; status: true; labels: never[]; prefs: {}; accessedAt: string; }' to type 'User<Preferences>' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type '{ $id: string; $createdAt: string; $updatedAt: string; name: string; email: string; registration: string; status: true; labels: never[]; prefs: {}; accessedAt: string; }' is missing the following properties from type 'User<Preferences>': passwordUpdate, phone, emailVerification, phoneVerification, and 2 more. [plugin angular-compiler]

    src/mock/session.mock.ts:7:33:
      7 │ export const MOCK_SESSION_USER = {
        ╵                                  ^
```

---


## Entrada #038 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 09:44:53 UTC-06:00 |
| **Inicio** | 2026-06-30 09:44:38 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/attendee-list` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  23 passed (23) · Tests  100 passed (100) · Duration  5.21s (transform 1.24s, setup 3.64s, import 3.07s, tests 5.44s, environment 35.73s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  53.35 kB | 
styles.css                                                                      | styles                                                                       |  50.68 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  38.90 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-SNFMFL6A.js                                                               | -                                                                            |  23.93 kB | 
chunk-ZZIAKU5O.js                                                               | -                                                                            |  16.99 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-ND4EU5DA.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.08 kB | 
chunk-QOU5I4FI.js                                                               | -                                                                            |  10.06 kB | 
chunk-NLYSOIIV.js                                                               | -                                                                            |   8.21 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-AMDTI4M3.js                                                               | -                                                                            |   3.57 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.47 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 470.80 kB

Application bundle generation complete. [4.808 seconds] - 2026-06-30T15:44:47.402Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  23 passed (23)
      Tests  100 passed (100)
   Start at  09:44:48
   Duration  5.21s (transform 1.24s, setup 3.64s, import 3.07s, tests 5.44s, environment 35.73s)
```

---


## Entrada #039 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 09:48:32 UTC-06:00 |
| **Inicio** | 2026-06-30 09:48:15 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/attendee-list` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  23 passed (23) · Tests  100 passed (100) · Duration  6.49s (transform 1.35s, setup 5.36s, import 3.11s, tests 5.06s, environment 49.83s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  51.70 kB | 
styles.css                                                                      | styles                                                                       |  50.68 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  38.90 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.12 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-JJBCERZY.js                                                               | -                                                                            |  23.93 kB | 
chunk-OV4XMKSD.js                                                               | -                                                                            |  20.59 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-VDT5ZM3W.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.08 kB | 
chunk-VWVPCGND.js                                                               | -                                                                            |  10.06 kB | 
chunk-OFDMRNWT.js                                                               | -                                                                            |   8.21 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 469.10 kB

Application bundle generation complete. [6.025 seconds] - 2026-06-30T15:48:24.594Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  23 passed (23)
      Tests  100 passed (100)
   Start at  09:48:25
   Duration  6.49s (transform 1.35s, setup 5.36s, import 3.11s, tests 5.06s, environment 49.83s)
```

---


## Entrada #040 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 09:52:58 UTC-06:00 |
| **Inicio** | 2026-06-30 09:52:45 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/attendee-list` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  24 passed (24) · Tests  105 passed (105) · Duration  4.84s (transform 1.71s, setup 3.25s, import 3.68s, tests 4.69s, environment 35.64s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
styles.css                                                                      | styles                                                                       |  50.68 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  50.58 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.48 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.12 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-JJBCERZY.js                                                               | -                                                                            |  23.93 kB | 
chunk-OV4XMKSD.js                                                               | -                                                                            |  20.59 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-VDT5ZM3W.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.08 kB | 
chunk-VWVPCGND.js                                                               | -                                                                            |  10.06 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |   9.29 kB | 
chunk-OFDMRNWT.js                                                               | -                                                                            |   8.21 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
chunk-XNDK6QX4.js                                                               | -                                                                            |   1.88 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 479.74 kB

Application bundle generation complete. [4.991 seconds] - 2026-06-30T15:52:52.368Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  24 passed (24)
      Tests  105 passed (105)
   Start at  09:52:52
   Duration  4.84s (transform 1.71s, setup 3.25s, import 3.68s, tests 4.69s, environment 35.64s)
```

---


## Entrada #041 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 09:56:58 UTC-06:00 |
| **Inicio** | 2026-06-30 09:56:44 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/attendee-list` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  25 passed (25) · Tests  111 passed (111) · Duration  5.92s (transform 1.31s, setup 4.42s, import 2.82s, tests 5.53s, environment 46.64s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  52.40 kB | 
styles.css                                                                      | styles                                                                       |  50.85 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  47.83 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  34.19 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.12 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
chunk-JJBCERZY.js                                                               | -                                                                            |  23.93 kB | 
chunk-OV4XMKSD.js                                                               | -                                                                            |  20.59 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-VDT5ZM3W.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.08 kB | 
chunk-L5CZELUP.js                                                               | -                                                                            |  10.06 kB | 
chunk-S3CWT2RD.js                                                               | -                                                                            |   8.21 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-5EYBIMR5.js                                                               | -                                                                            |   5.32 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
spec-app-features-events-event-edit.model.js                                    | spec-app-features-events-event-edit.model                                    |   1.61 kB | 
chunk-7THLESIE.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 521.50 kB

Application bundle generation complete. [5.146 seconds] - 2026-06-30T15:56:51.048Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  25 passed (25)
      Tests  111 passed (111)
   Start at  09:56:51
   Duration  5.92s (transform 1.31s, setup 4.42s, import 2.82s, tests 5.53s, environment 46.64s)
```

---


## Entrada #042 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 10:00:08 UTC-06:00 |
| **Inicio** | 2026-06-30 09:59:53 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/attendee-list` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  24 passed (24) · Tests  106 passed (106) · Duration  6.08s (transform 1.24s, setup 3.23s, import 3.42s, tests 6.76s, environment 40.18s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  58.99 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  52.40 kB | 
styles.css                                                                      | styles                                                                       |  50.74 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.48 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.12 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  32.65 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  27.58 kB | 
chunk-JJBCERZY.js                                                               | -                                                                            |  23.93 kB | 
chunk-OV4XMKSD.js                                                               | -                                                                            |  20.59 kB | 
chunk-FX5YJH67.js                                                               | -                                                                            |  13.69 kB | 
chunk-VDT5ZM3W.js                                                               | -                                                                            |  12.71 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.08 kB | 
chunk-VWVPCGND.js                                                               | -                                                                            |  10.06 kB | 
chunk-OFDMRNWT.js                                                               | -                                                                            |   8.21 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.27 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 498.01 kB

Application bundle generation complete. [5.358 seconds] - 2026-06-30T16:00:01.387Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  24 passed (24)
      Tests  106 passed (106)
   Start at  10:00:02
   Duration  6.08s (transform 1.24s, setup 3.23s, import 3.42s, tests 6.76s, environment 40.18s)
```

---


## Entrada #043 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 13:22:36 UTC-06:00 |
| **Inicio** | 2026-06-30 13:22:20 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-svg-images` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  26 passed (26) · Tests  109 passed (109) · Duration  6.08s (transform 1.18s, setup 4.88s, import 2.82s, tests 7.06s, environment 45.05s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.11 kB | 
styles.css                                                                      | styles                                                                       |  50.74 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.12 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.74 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.02 kB | 
chunk-GXHPJ6JH.js                                                               | -                                                                            |  21.23 kB | 
chunk-OV4XMKSD.js                                                               | -                                                                            |  20.59 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.14 kB | 
chunk-SIT3L5DU.js                                                               | -                                                                            |  10.98 kB | 
chunk-VWVPCGND.js                                                               | -                                                                            |  10.06 kB | 
chunk-64TBRVIX.js                                                               | -                                                                            |   9.50 kB | 
chunk-S3CWT2RD.js                                                               | -                                                                            |   8.21 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-EIEOZBFV.js                                                               | -                                                                            |   6.26 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-HI7Y6J7K.js                                                               | -                                                                            |   3.92 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 888 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 491.52 kB

Application bundle generation complete. [5.975 seconds] - 2026-06-30T19:22:28.786Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  26 passed (26)
      Tests  109 passed (109)
   Start at  13:22:29
   Duration  6.08s (transform 1.18s, setup 4.88s, import 2.82s, tests 7.06s, environment 45.05s)
```

---


## Entrada #044 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 13:46:07 UTC-06:00 |
| **Inicio** | 2026-06-30 13:45:53 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `refactor-svg-images` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  26 passed (26) · Tests  109 passed (109) · Duration  6.61s (transform 1.24s, setup 3.94s, import 3.45s, tests 10.17s, environment 40.94s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  50.74 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.12 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-M4NA7FM4.js                                                               | -                                                                            |  21.23 kB | 
chunk-OV4XMKSD.js                                                               | -                                                                            |  20.59 kB | 
chunk-SY2DJPKE.js                                                               | -                                                                            |  20.20 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.14 kB | 
chunk-G6DA2RXW.js                                                               | -                                                                            |  10.99 kB | 
chunk-L5CZELUP.js                                                               | -                                                                            |  10.06 kB | 
chunk-POLWSX2A.js                                                               | -                                                                            |   9.51 kB | 
chunk-S3CWT2RD.js                                                               | -                                                                            |   8.21 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-FZ3EFD3P.js                                                               | -                                                                            |   1.64 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 821 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 503.22 kB

Application bundle generation complete. [4.985 seconds] - 2026-06-30T19:45:59.880Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  26 passed (26)
      Tests  109 passed (109)
   Start at  13:46:00
   Duration  6.61s (transform 1.24s, setup 3.94s, import 3.45s, tests 10.17s, environment 40.94s)
```

---


## Entrada #045 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 13:57:56 UTC-06:00 |
| **Inicio** | 2026-06-30 13:57:43 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-svg-images` |
| **Razón de ejecución** | Suite `pnpm test:all` — ejecución base de tests |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  50.74 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.12 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-FKIDV2R7.js                                                               | -                                                                            |  21.23 kB | 
chunk-AOGWZJQX.js                                                               | -                                                                            |  20.59 kB | 
chunk-SY2DJPKE.js                                                               | -                                                                            |  20.20 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.14 kB | 
chunk-OQXNHDIK.js                                                               | -                                                                            |  10.99 kB | 
chunk-OS4HLB6F.js                                                               | -                                                                            |  10.06 kB | 
chunk-POLWSX2A.js                                                               | -                                                                            |   9.51 kB | 
chunk-OHV7HR47.js                                                               | -                                                                            |   8.21 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-FZ3EFD3P.js                                                               | -                                                                            |   1.64 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 821 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 503.22 kB

Application bundle generation complete. [4.639 seconds] - 2026-06-30T19:57:49.607Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 1198[2mms[22m[39m
     [33m[2m✓[22m[39m should render event detail for a known event [33m 389[2mms[22m[39m
     [33m[2m✓[22m[39m should navigate to registration from action bar [33m 380[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 1583[2mms[22m[39m
     [33m[2m✓[22m[39m should validate sign up fields [33m 390[2mms[22m[39m
     [33m[2m✓[22m[39m should ignore invalid tab ids [33m 322[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 1652[2mms[22m[39m
     [33m[2m✓[22m[39m should render registration details for a known event [33m 414[2mms[22m[39m
     [33m[2m✓[22m[39m should navigate back to events from header back button [33m 450[2mms[22m[39m
     [33m[2m✓[22m[39m should register successfully and show confirmation [33m 521[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 255[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 124[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 186[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 69[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 27[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 183[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/attendees.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/icon/icon.registry.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m12 tests[22m[2m)[22m[33m 2156[2mms[22m[39m
     [33m[2m✓[22m[39m should render dashboard heading and events [33m 386[2mms[22m[39m
     [33m[2m✓[22m[39m should show edit only on events owned by the active user [33m 460[2mms[22m[39m
     [33m[2m✓[22m[39m should react to filter chip clicks and create event button [33m 401[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-attendees-page.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[33m 2103[2mms[22m[39m
     [33m[2m✓[22m[39m should render attendees for an owned event [33m 871[2mms[22m[39m
     [33m[2m✓[22m[39m should show read-only check-in status badges [33m 337[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/icon/icon.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 98[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-edit-page.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[33m 438[2mms[22m[39m

[2m Test Files [22m [1m[32m26 passed[39m[22m[90m (26)[39m
[2m      Tests [22m [1m[32m109 passed[39m[22m[90m (109)[39m
[2m   Start at [22m 13:57:50
[2m   Duration [22m 6.29s[2m (transform 1.56s, setup 2.83s, import 3.42s, tests 10.15s, environment 66.80s)[22m
```

---


## Entrada #046 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 13:58:14 UTC-06:00 |
| **Inicio** | 2026-06-30 13:57:57 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `refactor-svg-images` |
| **Razón de ejecución** | Suite `pnpm test:all` — cobertura + lcov |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  50.74 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.12 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-M4NA7FM4.js                                                               | -                                                                            |  21.23 kB | 
chunk-OV4XMKSD.js                                                               | -                                                                            |  20.59 kB | 
chunk-SY2DJPKE.js                                                               | -                                                                            |  20.20 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  12.14 kB | 
chunk-G6DA2RXW.js                                                               | -                                                                            |  10.99 kB | 
chunk-VWVPCGND.js                                                               | -                                                                            |  10.06 kB | 
chunk-POLWSX2A.js                                                               | -                                                                            |   9.51 kB | 
chunk-OFDMRNWT.js                                                               | -                                                                            |   8.21 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.44 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
chunk-TYEPQGER.js                                                               | -                                                                            |   2.02 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.96 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-FZ3EFD3P.js                                                               | -                                                                            |   1.64 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 821 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 503.22 kB

Application bundle generation complete. [6.141 seconds] - 2026-06-30T19:58:05.465Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 1420[2mms[22m[39m
     [33m[2m✓[22m[39m should render event detail for a known event [33m 566[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 1746[2mms[22m[39m
     [33m[2m✓[22m[39m should render registration details for a known event [33m 673[2mms[22m[39m
     [33m[2m✓[22m[39m should register successfully and show confirmation [33m 542[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 1601[2mms[22m[39m
     [33m[2m✓[22m[39m should render sign up by default [33m 406[2mms[22m[39m
     [33m[2m✓[22m[39m should switch to login tab [33m 309[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 164[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 177[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-edit-page.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[33m 520[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/icon/icon.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 36[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m12 tests[22m[2m)[22m[33m 1957[2mms[22m[39m
     [33m[2m✓[22m[39m should render dashboard heading and events [33m 602[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-attendees-page.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[33m 1986[2mms[22m[39m
     [33m[2m✓[22m[39m should render attendees for an owned event [33m 730[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 106[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 64[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 25[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 18[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 211[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 103[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/attendees.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/icon/icon.registry.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m

[2m Test Files [22m [1m[32m26 passed[39m[22m[90m (26)[39m
[2m      Tests [22m [1m[32m109 passed[39m[22m[90m (109)[39m
[2m   Start at [22m 13:58:06
[2m   Duration [22m 7.46s[2m (transform 1.65s, setup 5.69s, import 3.44s, tests 10.20s, environment 53.02s)[22m
```

---


## Entrada #047 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:39:23 UTC-06:00 |
| **Inicio** | 2026-06-30 17:39:15 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Application bundle generation failed. [5.750 seconds] - 2026-06-30T23:39:23.478Z


✘ [ERROR] TS18046: 'button' is of type 'unknown'. [plugin angular-compiler]

    src/app/features/session/session-page.spec.ts:62:6:
      62 │       button.textContent?.includes('Edit Profile'),
         ╵       ~~~~~~


✘ [ERROR] TS2339: Property 'click' does not exist on type '{}'. [plugin angular-compiler]

    src/app/features/session/session-page.spec.ts:64:16:
      64 │     editButton?.click();
         ╵                 ~~~~~


✘ [ERROR] TS18046: 'button' is of type 'unknown'. [plugin angular-compiler]

    src/app/features/session/session-page.spec.ts:80:6:
      80 │       button.textContent?.includes('Logout'),
         ╵       ~~~~~~


✘ [ERROR] TS2339: Property 'click' does not exist on type '{}'. [plugin angular-compiler]

    src/app/features/session/session-page.spec.ts:82:18:
      82 │     logoutButton?.click();
         ╵                   ~~~~~


✘ [ERROR] NG5002: Unexpected closing block. The block may have been closed earlier. If you meant to write the `}` character, you should use the "&#125;" HTML entity instead. [plugin angular-compiler]

    src/app/shared/ui/atoms/icon/icon.ts:291:6:
      291 │       }
          ╵       ^
```

---


## Entrada #048 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:39:54 UTC-06:00 |
| **Inicio** | 2026-06-30 17:39:40 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  1 failed | 28 passed (29) · Tests  1 failed | 115 passed (116) · Duration  6.59s (transform 1.63s, setup 4.53s, import 3.96s, tests 8.02s, environment 49.02s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  51.70 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  50.41 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-DYXR6NTQ.js                                                               | -                                                                            |  23.94 kB | 
chunk-SZAMGVTG.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |  19.70 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |  17.11 kB | 
chunk-P5XWQ3KA.js                                                               | -                                                                            |  13.47 kB | 
chunk-2TAZXRE4.js                                                               | -                                                                            |  10.99 kB | 
chunk-T6XLTPLU.js                                                               | -                                                                            |  10.37 kB | 
chunk-RIFDKBR5.js                                                               | -                                                                            |  10.14 kB | 
chunk-C43VIEZA.js                                                               | -                                                                            |   9.51 kB | 
chunk-SOCKWXPC.js                                                               | -                                                                            |   7.63 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-X4W5HMW3.js                                                               | -                                                                            |   1.80 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      | 979 bytes | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 889 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 593.99 kB

Application bundle generation complete. [5.442 seconds] - 2026-06-30T23:39:47.465Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8

 ❯ |eventflow-asistido-ai| src/app/features/profile/profile-edit-page.spec.ts (2 tests | 1 failed) 189ms
     × should render edit profile form 98ms

 Test Files  1 failed | 28 passed (29)
      Tests  1 failed | 115 passed (116)
   Start at  17:39:48
   Duration  6.59s (transform 1.63s, setup 4.53s, import 3.96s, tests 8.02s, environment 49.02s)



⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |eventflow-asistido-ai| src/app/features/profile/profile-edit-page.spec.ts > ProfileEditPage > should render edit profile form
AssertionError: expected 'EventFlowEdit ProfileUpdate your publ…' to contain 'Jane Doe'

Expected: "Jane Doe"
Received: "EventFlowEdit ProfileUpdate your public details and photo JD  Change photo JPG or PNG · preview only until storage is connectedFull nameEmailPhoneRoleLocationCancelSave changes Dash  Events  Account "

 ❯ src/app/features/profile/profile-edit-page.spec.ts:29:64
     27|
     28|     expect((fixture.nativeElement as HTMLElement).textContent).toConta…
     29|     expect((fixture.nativeElement as HTMLElement).textContent).toConta…
       |                                                                ^
     30|   });
     31|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
```

---


## Entrada #049 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:40:19 UTC-06:00 |
| **Inicio** | 2026-06-30 17:40:05 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  29 passed (29) · Tests  116 passed (116) · Duration  6.31s (transform 1.22s, setup 5.30s, import 3.20s, tests 7.59s, environment 43.65s) · ERROR: Coverage for functions (76.02%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  51.70 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  50.41 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-DYXR6NTQ.js                                                               | -                                                                            |  23.94 kB | 
chunk-SZAMGVTG.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |  19.79 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |  17.11 kB | 
chunk-P5XWQ3KA.js                                                               | -                                                                            |  13.47 kB | 
chunk-2TAZXRE4.js                                                               | -                                                                            |  10.99 kB | 
chunk-T6XLTPLU.js                                                               | -                                                                            |  10.37 kB | 
chunk-RIFDKBR5.js                                                               | -                                                                            |  10.14 kB | 
chunk-3CFOO4TO.js                                                               | -                                                                            |   9.51 kB | 
chunk-SOCKWXPC.js                                                               | -                                                                            |   7.63 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-X4W5HMW3.js                                                               | -                                                                            |   1.80 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      | 979 bytes | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 889 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 594.08 kB

Application bundle generation complete. [5.309 seconds] - 2026-06-30T23:40:12.390Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  29 passed (29)
      Tests  116 passed (116)
   Start at  17:40:12
   Duration  6.31s (transform 1.22s, setup 5.30s, import 3.20s, tests 7.59s, environment 43.65s)


ERROR: Coverage for functions (76.02%) does not meet global threshold (80%)
```

---


## Entrada #050 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:40:45 UTC-06:00 |
| **Inicio** | 2026-06-30 17:40:28 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  29 passed (29) · Tests  116 passed (116) · Duration  8.21s (transform 1.60s, setup 6.84s, import 4.29s, tests 9.60s, environment 58.64s) · ERROR: Coverage for functions (76.02%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  51.70 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  50.41 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-DYXR6NTQ.js                                                               | -                                                                            |  23.94 kB | 
chunk-SZAMGVTG.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |  19.79 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |  17.11 kB | 
chunk-ZMTJBRVV.js                                                               | -                                                                            |  13.47 kB | 
chunk-C652TEQF.js                                                               | -                                                                            |  10.99 kB | 
chunk-LEJGEOUK.js                                                               | -                                                                            |  10.37 kB | 
chunk-JX4NCPKR.js                                                               | -                                                                            |  10.14 kB | 
chunk-C43VIEZA.js                                                               | -                                                                            |   9.51 kB | 
chunk-SOCKWXPC.js                                                               | -                                                                            |   7.63 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-X4W5HMW3.js                                                               | -                                                                            |   1.80 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      | 979 bytes | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 889 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 594.08 kB

Application bundle generation complete. [5.689 seconds] - 2026-06-30T23:40:35.960Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  29 passed (29)
      Tests  116 passed (116)
   Start at  17:40:36
   Duration  8.21s (transform 1.60s, setup 6.84s, import 4.29s, tests 9.60s, environment 58.64s)


ERROR: Coverage for functions (76.02%) does not meet global threshold (80%)
```

---


## Entrada #051 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:41:12 UTC-06:00 |
| **Inicio** | 2026-06-30 17:40:58 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  29 passed (29) · Tests  116 passed (116) · Duration  6.21s (transform 1.26s, setup 4.28s, import 3.32s, tests 8.13s, environment 41.88s) · ERROR: Coverage for functions (76.02%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  51.70 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  50.41 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-DYXR6NTQ.js                                                               | -                                                                            |  23.94 kB | 
chunk-SZAMGVTG.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |  19.79 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |  17.11 kB | 
chunk-ZMTJBRVV.js                                                               | -                                                                            |  13.47 kB | 
chunk-NGBINMX2.js                                                               | -                                                                            |  10.99 kB | 
chunk-SQBIGDIO.js                                                               | -                                                                            |  10.37 kB | 
chunk-6BWQJQQJ.js                                                               | -                                                                            |  10.14 kB | 
chunk-3CFOO4TO.js                                                               | -                                                                            |   9.51 kB | 
chunk-SOCKWXPC.js                                                               | -                                                                            |   7.63 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-X4W5HMW3.js                                                               | -                                                                            |   1.80 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      | 979 bytes | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 889 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 594.08 kB

Application bundle generation complete. [5.235 seconds] - 2026-06-30T23:41:05.053Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  29 passed (29)
      Tests  116 passed (116)
   Start at  17:41:05
   Duration  6.21s (transform 1.26s, setup 4.28s, import 3.32s, tests 8.13s, environment 41.88s)


ERROR: Coverage for functions (76.02%) does not meet global threshold (80%)
```

---


## Entrada #052 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:42:06 UTC-06:00 |
| **Inicio** | 2026-06-30 17:41:51 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  31 passed (31) · Tests  124 passed (124) · Duration  6.64s (transform 1.12s, setup 4.44s, import 3.74s, tests 9.29s, environment 44.81s) · ERROR: Coverage for functions (78.2%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  51.70 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.48 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-DYXR6NTQ.js                                                               | -                                                                            |  23.94 kB | 
chunk-GXRPZFFW.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |  19.86 kB | 
chunk-ZMTJBRVV.js                                                               | -                                                                            |  13.47 kB | 
chunk-UGSCEHRU.js                                                               | -                                                                            |  10.99 kB | 
chunk-ELHRRZUK.js                                                               | -                                                                            |  10.53 kB | 
chunk-SQBIGDIO.js                                                               | -                                                                            |  10.37 kB | 
chunk-6BWQJQQJ.js                                                               | -                                                                            |  10.14 kB | 
chunk-3CFOO4TO.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.00 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-X4W5HMW3.js                                                               | -                                                                            |   1.80 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 889 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 599.60 kB

Application bundle generation complete. [5.719 seconds] - 2026-06-30T23:41:58.671Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  31 passed (31)
      Tests  124 passed (124)
   Start at  17:41:59
   Duration  6.64s (transform 1.12s, setup 4.44s, import 3.74s, tests 9.29s, environment 44.81s)


ERROR: Coverage for functions (78.2%) does not meet global threshold (80%)
```

---


## Entrada #053 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:43:50 UTC-06:00 |
| **Inicio** | 2026-06-30 17:43:34 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  1 failed | 31 passed (32) · Tests  1 failed | 130 passed (131) · Duration  7.35s (transform 1.62s, setup 4.77s, import 3.82s, tests 9.53s, environment 60.36s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  51.70 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.48 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-DYXR6NTQ.js                                                               | -                                                                            |  23.94 kB | 
chunk-SZAMGVTG.js                                                               | -                                                                            |  21.23 kB | 
chunk-ZMTJBRVV.js                                                               | -                                                                            |  13.47 kB | 
chunk-3CD5FZIU.js                                                               | -                                                                            |  12.85 kB | 
chunk-NGBINMX2.js                                                               | -                                                                            |  10.99 kB | 
chunk-UVNOLK6K.js                                                               | -                                                                            |  10.53 kB | 
chunk-SQBIGDIO.js                                                               | -                                                                            |  10.37 kB | 
chunk-JX4NCPKR.js                                                               | -                                                                            |  10.14 kB | 
chunk-C43VIEZA.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   7.74 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.00 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.06 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-X4W5HMW3.js                                                               | -                                                                            |   1.80 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 889 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 604.95 kB

Application bundle generation complete. [5.883 seconds] - 2026-06-30T23:43:42.367Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8

 ❯ |eventflow-asistido-ai| src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.spec.ts (5 tests | 1 failed) 464ms
     × should populate fields from profile input 179ms

 Test Files  1 failed | 31 passed (32)
      Tests  1 failed | 130 passed (131)
   Start at  17:43:43
   Duration  7.35s (transform 1.62s, setup 4.77s, import 3.82s, tests 9.53s, environment 60.36s)



⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |eventflow-asistido-ai| src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.spec.ts > ProfileEditForm > should populate fields from profile input
AssertionError: expected null to be 'Jane Doe' // Object.is equality

- Expected:
"Jane Doe"

+ Received:
null

 ❯ src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.spec.ts:30:81
     28|
     29|     const compiled = fixture.nativeElement as HTMLElement;
     30|     expect(compiled.querySelector('#profile-full-name')?.getAttribute(…
       |                                                                                 ^
     31|     expect(compiled.querySelector('#profile-email')?.getAttribute('val…
     32|     expect(compiled.textContent).toContain('JD');

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
```

---


## Entrada #054 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:44:18 UTC-06:00 |
| **Inicio** | 2026-06-30 17:44:01 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  1 failed | 31 passed (32) · Tests  1 failed | 130 passed (131) · Duration  7.34s (transform 1.69s, setup 4.46s, import 4.32s, tests 10.33s, environment 54.11s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  51.70 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.48 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-DYXR6NTQ.js                                                               | -                                                                            |  23.94 kB | 
chunk-GXRPZFFW.js                                                               | -                                                                            |  21.23 kB | 
chunk-ZMTJBRVV.js                                                               | -                                                                            |  13.47 kB | 
chunk-W2QRE6O2.js                                                               | -                                                                            |  12.85 kB | 
chunk-UGSCEHRU.js                                                               | -                                                                            |  10.99 kB | 
chunk-ELHRRZUK.js                                                               | -                                                                            |  10.53 kB | 
chunk-SQBIGDIO.js                                                               | -                                                                            |  10.37 kB | 
chunk-6BWQJQQJ.js                                                               | -                                                                            |  10.14 kB | 
chunk-3CFOO4TO.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   7.74 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.00 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.11 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-X4W5HMW3.js                                                               | -                                                                            |   1.80 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 889 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 604.99 kB

Application bundle generation complete. [6.555 seconds] - 2026-06-30T23:44:10.415Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8

 ❯ |eventflow-asistido-ai| src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.spec.ts (5 tests | 1 failed) 515ms
     × should populate fields from profile input 232ms

 Test Files  1 failed | 31 passed (32)
      Tests  1 failed | 130 passed (131)
   Start at  17:44:11
   Duration  7.34s (transform 1.69s, setup 4.46s, import 4.32s, tests 10.33s, environment 54.11s)



⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |eventflow-asistido-ai| src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.spec.ts > ProfileEditForm > should populate fields from profile input
AssertionError: expected '' to be 'Jane Doe' // Object.is equality

- Expected
+ Received

- Jane Doe

 ❯ src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.spec.ts:32:33
     30|     const fullNameInput = compiled.querySelector('#profile-full-name')…
     31|     const emailInput = compiled.querySelector('#profile-email') as HTM…
     32|     expect(fullNameInput.value).toBe('Jane Doe');
       |                                 ^
     33|     expect(emailInput.value).toBe('jane@example.com');
     34|     expect(compiled.textContent).toContain('JD');

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
```

---


## Entrada #055 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:44:45 UTC-06:00 |
| **Inicio** | 2026-06-30 17:44:30 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  32 passed (32) · Tests  131 passed (131) · Duration  7.27s (transform 1.72s, setup 4.75s, import 4.28s, tests 10.66s, environment 46.79s) · ERROR: Coverage for functions (79.41%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  51.70 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.48 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-DYXR6NTQ.js                                                               | -                                                                            |  23.94 kB | 
chunk-SZAMGVTG.js                                                               | -                                                                            |  21.23 kB | 
chunk-P5XWQ3KA.js                                                               | -                                                                            |  13.47 kB | 
chunk-3CD5FZIU.js                                                               | -                                                                            |  12.85 kB | 
chunk-2TAZXRE4.js                                                               | -                                                                            |  10.99 kB | 
chunk-UV5N2GWT.js                                                               | -                                                                            |  10.53 kB | 
chunk-T6XLTPLU.js                                                               | -                                                                            |  10.37 kB | 
chunk-RIFDKBR5.js                                                               | -                                                                            |  10.14 kB | 
chunk-C43VIEZA.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   7.74 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.00 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-X4W5HMW3.js                                                               | -                                                                            |   1.80 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 889 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 605.06 kB

Application bundle generation complete. [5.676 seconds] - 2026-06-30T23:44:37.074Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  32 passed (32)
      Tests  131 passed (131)
   Start at  17:44:37
   Duration  7.27s (transform 1.72s, setup 4.75s, import 4.28s, tests 10.66s, environment 46.79s)


ERROR: Coverage for functions (79.41%) does not meet global threshold (80%)
```

---


## Entrada #056 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-06-30 17:45:45 UTC-06:00 |
| **Inicio** | 2026-06-30 17:45:27 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/user-profile` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  32 passed (32) · Tests  135 passed (135) · Duration  8.32s (transform 1.66s, setup 4.46s, import 4.35s, tests 12.81s, environment 51.45s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.93 kB | 
styles.css                                                                      | styles                                                                       |  51.70 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  39.55 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  34.15 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  26.04 kB | 
chunk-DYXR6NTQ.js                                                               | -                                                                            |  23.94 kB | 
chunk-SZAMGVTG.js                                                               | -                                                                            |  21.23 kB | 
chunk-ZMTJBRVV.js                                                               | -                                                                            |  13.47 kB | 
chunk-3CD5FZIU.js                                                               | -                                                                            |  12.85 kB | 
chunk-NGBINMX2.js                                                               | -                                                                            |  10.99 kB | 
chunk-UVNOLK6K.js                                                               | -                                                                            |  10.53 kB | 
chunk-SQBIGDIO.js                                                               | -                                                                            |  10.37 kB | 
chunk-JX4NCPKR.js                                                               | -                                                                            |  10.14 kB | 
chunk-C43VIEZA.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   9.29 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.60 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-UJCHV22L.js                                                               | -                                                                            |   4.51 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-X4W5HMW3.js                                                               | -                                                                            |   1.80 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 889 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 607.66 kB

Application bundle generation complete. [6.401 seconds] - 2026-06-30T23:45:35.091Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  32 passed (32)
      Tests  135 passed (135)
   Start at  17:45:36
   Duration  8.32s (transform 1.66s, setup 4.46s, import 4.35s, tests 12.81s, environment 51.45s)
```

---


## Entrada #057 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 10:56:02 UTC-06:00 |
| **Inicio** | 2026-07-01 10:55:54 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/edit-event` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Application bundle generation failed. [6.044 seconds] - 2026-07-01T16:56:02.455Z


✘ [ERROR] NG8008: Required input 'value' from component SegmentedControl must be specified. [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-card/auth-card.ts:11:7:
      11 │       <ef-segmented-control
         ╵        ~~~~~~~~~~~~~~~~~~~~


✘ [ERROR] NG8002: Can't bind to 'activeId' since it isn't a known property of 'ef-segmented-control'.
1. If 'ef-segmented-control' is an Angular component and it has 'activeId' input, then verify that it is included in the '@Component.imports' of this component.
2. If 'ef-segmented-control' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message.
3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@Component.schemas' of this component. [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-card/auth-card.ts:13:8:
      13 │         [activeId]="activeTab()"
         ╵         ~~~~~~~~~~~~~~~~~~~~~~~~


✘ [ERROR] TS2345: Argument of type 'Event' is not assignable to parameter of type 'string'. [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-card/auth-card.ts:15:45:
      15 │         (activeChange)="activeTabChange.emit($event)"
         ╵                                              ~~~~~~


✘ [ERROR] TS2314: Generic type 'SegmentedOption<T>' requires 1 type argument(s). [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-card/auth-card.ts:31:24:
      31 │   readonly tabs = input<SegmentedOption[]>([
         ╵                         ~~~~~~~~~~~~~~~


✘ [ERROR] NG8008: Required input 'htmlFor' from component Label must be specified. [plugin angular-compiler]

    src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts:125:11:
      125 │           <ef-label>Status</ef-label>
          ╵            ~~~~~~~~


✘ [ERROR] NG8008: Required input 'htmlFor' from component Label must be specified. [plugin angular-compiler]

    src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts:164:13:
      164 │             <ef-label>Spots left</ef-label>
          ╵              ~~~~~~~~


✘ [ERROR] NG8008: Required input 'htmlFor' from component Label must be specified. [plugin angular-compiler]

    src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts:173:11:
      173 │           <ef-label>Map preview</ef-label>
          ╵            ~~~~~~~~
```

---


## Entrada #058 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 10:56:17 UTC-06:00 |
| **Inicio** | 2026-07-01 10:56:09 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/edit-event` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Application bundle generation failed. [5.990 seconds] - 2026-07-01T16:56:17.824Z


✘ [ERROR] NG8008: Required input 'value' from component SegmentedControl must be specified. [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-card/auth-card.ts:11:7:
      11 │       <ef-segmented-control
         ╵        ~~~~~~~~~~~~~~~~~~~~


✘ [ERROR] NG8002: Can't bind to 'activeId' since it isn't a known property of 'ef-segmented-control'.
1. If 'ef-segmented-control' is an Angular component and it has 'activeId' input, then verify that it is included in the '@Component.imports' of this component.
2. If 'ef-segmented-control' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message.
3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@Component.schemas' of this component. [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-card/auth-card.ts:13:8:
      13 │         [activeId]="activeTab()"
         ╵         ~~~~~~~~~~~~~~~~~~~~~~~~


✘ [ERROR] TS2345: Argument of type 'Event' is not assignable to parameter of type 'string'. [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-card/auth-card.ts:15:45:
      15 │         (activeChange)="activeTabChange.emit($event)"
         ╵                                              ~~~~~~


✘ [ERROR] TS2314: Generic type 'SegmentedOption<T>' requires 1 type argument(s). [plugin angular-compiler]

    src/app/shared/ui/organisms/auth-card/auth-card.ts:31:24:
      31 │   readonly tabs = input<SegmentedOption[]>([
         ╵                         ~~~~~~~~~~~~~~~


✘ [ERROR] NG8008: Required input 'htmlFor' from component Label must be specified. [plugin angular-compiler]

    src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts:125:11:
      125 │           <ef-label>Status</ef-label>
          ╵            ~~~~~~~~


✘ [ERROR] NG8008: Required input 'htmlFor' from component Label must be specified. [plugin angular-compiler]

    src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts:164:13:
      164 │             <ef-label>Spots left</ef-label>
          ╵              ~~~~~~~~


✘ [ERROR] NG8008: Required input 'htmlFor' from component Label must be specified. [plugin angular-compiler]

    src/app/shared/ui/organisms/event-edit-form/event-edit-form.ts:173:11:
      173 │           <ef-label>Map preview</ef-label>
          ╵            ~~~~~~~~
```

---


## Entrada #059 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 10:56:55 UTC-06:00 |
| **Inicio** | 2026-07-01 10:56:38 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/edit-event` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  2 failed | 32 passed (34) · Tests  2 failed | 140 passed (142) · Duration  7.99s (transform 1.52s, setup 6.72s, import 4.18s, tests 10.30s, environment 64.26s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  53.87 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.93 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
chunk-VN6UPMCE.js                                                               | -                                                                            |  37.08 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.88 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  29.09 kB | 
chunk-ZETQQZXJ.js                                                               | -                                                                            |  28.29 kB | 
chunk-IADSF5LN.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  19.19 kB | 
chunk-P5XWQ3KA.js                                                               | -                                                                            |  13.47 kB | 
chunk-QALQ7IQB.js                                                               | -                                                                            |  12.85 kB | 
chunk-N4YMS5VR.js                                                               | -                                                                            |  10.99 kB | 
chunk-4QNFE26L.js                                                               | -                                                                            |  10.53 kB | 
chunk-PPRIP7JR.js                                                               | -                                                                            |  10.37 kB | 
chunk-JZ65X27K.js                                                               | -                                                                            |  10.14 kB | 
chunk-O5FMJ32O.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   9.29 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.60 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-G7756IGY.js                                                               | -                                                                            |   5.14 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-XX7HZUMK.js                                                               | -                                                                            |   4.86 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-EKV3QFBV.js                                                               | -                                                                            |   4.06 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-2GSKHIVY.js                                                               | -                                                                            |   2.65 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-event-edit-form-event-edit-form.js                 | spec-app-shared-ui-organisms-event-edit-form-event-edit-form                 |   2.54 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
chunk-X44B6F3M.js                                                               | -                                                                            |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-event-edit.model.js                                    | spec-app-features-events-event-edit.model                                    |   1.36 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 961 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 653.04 kB

Application bundle generation complete. [5.816 seconds] - 2026-07-01T16:56:46.343Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8

 ❯ |eventflow-asistido-ai| src/app/features/auth/auth-page.spec.ts (9 tests | 1 failed) 1032ms
     × should switch to login tab 129ms
 ❯ |eventflow-asistido-ai| src/app/features/events/event-edit-page.spec.ts (5 tests | 1 failed) 1002ms
     × should render edit form for an owned event 223ms

 Test Files  2 failed | 32 passed (34)
      Tests  2 failed | 140 passed (142)
   Start at  10:56:47
   Duration  7.99s (transform 1.52s, setup 6.72s, import 4.18s, tests 10.30s, environment 64.26s)



⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |eventflow-asistido-ai| src/app/features/auth/auth-page.spec.ts > AuthPage > should switch to login tab
TypeError: Cannot read properties of null (reading 'click')
 ❯ src/app/features/auth/auth-page.spec.ts:52:14
     50|       '[role="tab"][aria-selected="false"]',
     51|     ) as HTMLButtonElement;
     52|     loginTab.click();
       |              ^
     53|     fixture.detectChanges();
     54|     await fixture.whenStable();

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯

 FAIL  |eventflow-asistido-ai| src/app/features/events/event-edit-page.spec.ts > EventEditPage > should render edit form for an owned event
AssertionError: expected 'EventFlowEdit EventUpdate event detai…' to contain 'Design Systems Workshop'

Expected: "Design Systems Workshop"
Received: "EventFlowEdit EventUpdate event details and publish changesEvent bannerRecommended size: 1280×720 · JPG or PNG Replace Event detailsTitleDescriptionSupports Markdown · 146/1500PreviewScheduleDateTimeStatus Published  Draft  Closed Location & capacityLocationCapacitySpots left 12 Map preview Static map preview Registration summary Live stats Registered28Available12Capacity40Registrations over timeLast updated By Rachel Kim · Jun 12, 2026 at 09:14 AM Version 3Save changesCancel Delete event  Changes are saved locally. For full audit logs visit Admin — Activity · Need help? contact support@eventflow.com Dash  Events  Account "

 ❯ src/app/features/events/event-edit-page.spec.ts:64:34
     62|
     63|     expect(compiled.textContent).toContain('Edit Event');
     64|     expect(compiled.textContent).toContain('Design Systems Workshop');
       |                                  ^
     65|     expect(compiled.textContent).toContain('Event details');
     66|     expect(compiled.textContent).toContain('Save changes');

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯
```

---


## Entrada #060 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 10:57:19 UTC-06:00 |
| **Inicio** | 2026-07-01 10:57:03 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/edit-event` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  2 failed | 32 passed (34) · Tests  2 failed | 140 passed (142) · Duration  7.33s (transform 1.37s, setup 3.91s, import 4.11s, tests 12.17s, environment 47.64s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  53.87 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.93 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
chunk-3V6FR4HG.js                                                               | -                                                                            |  37.08 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.88 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  29.09 kB | 
chunk-ZETQQZXJ.js                                                               | -                                                                            |  28.29 kB | 
chunk-IADSF5LN.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  19.19 kB | 
chunk-ZMTJBRVV.js                                                               | -                                                                            |  13.47 kB | 
chunk-QALQ7IQB.js                                                               | -                                                                            |  12.85 kB | 
chunk-CI6KLDEP.js                                                               | -                                                                            |  10.99 kB | 
chunk-I3CUJ7HZ.js                                                               | -                                                                            |  10.53 kB | 
chunk-RGDJJLV3.js                                                               | -                                                                            |  10.37 kB | 
chunk-YM6WDXKJ.js                                                               | -                                                                            |  10.14 kB | 
chunk-O5FMJ32O.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   9.29 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.60 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-G7756IGY.js                                                               | -                                                                            |   5.14 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-XX7HZUMK.js                                                               | -                                                                            |   4.86 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-EKV3QFBV.js                                                               | -                                                                            |   4.06 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-2GSKHIVY.js                                                               | -                                                                            |   2.65 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-event-edit-form-event-edit-form.js                 | spec-app-shared-ui-organisms-event-edit-form-event-edit-form                 |   2.54 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
chunk-X44B6F3M.js                                                               | -                                                                            |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-event-edit.model.js                                    | spec-app-features-events-event-edit.model                                    |   1.36 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 961 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 653.04 kB

Application bundle generation complete. [6.236 seconds] - 2026-07-01T16:57:11.215Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8

 ❯ |eventflow-asistido-ai| src/app/features/auth/auth-page.spec.ts (9 tests | 1 failed) 1310ms
     × should switch to login tab 124ms
 ❯ |eventflow-asistido-ai| src/app/features/events/event-edit-page.spec.ts (5 tests | 1 failed) 908ms
     × should render edit form for an owned event 200ms

 Test Files  2 failed | 32 passed (34)
      Tests  2 failed | 140 passed (142)
   Start at  10:57:11
   Duration  7.33s (transform 1.37s, setup 3.91s, import 4.11s, tests 12.17s, environment 47.64s)



⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |eventflow-asistido-ai| src/app/features/auth/auth-page.spec.ts > AuthPage > should switch to login tab
TypeError: Cannot read properties of null (reading 'click')
 ❯ src/app/features/auth/auth-page.spec.ts:52:14
     50|       '[role="tab"][aria-selected="false"]',
     51|     ) as HTMLButtonElement;
     52|     loginTab.click();
       |              ^
     53|     fixture.detectChanges();
     54|     await fixture.whenStable();

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯

 FAIL  |eventflow-asistido-ai| src/app/features/events/event-edit-page.spec.ts > EventEditPage > should render edit form for an owned event
AssertionError: expected 'EventFlowEdit EventUpdate event detai…' to contain 'Design Systems Workshop'

Expected: "Design Systems Workshop"
Received: "EventFlowEdit EventUpdate event details and publish changesEvent bannerRecommended size: 1280×720 · JPG or PNG Replace Event detailsTitleDescriptionSupports Markdown · 146/1500PreviewScheduleDateTimeStatus Published  Draft  Closed Location & capacityLocationCapacitySpots left 12 Map preview Static map preview Registration summary Live stats Registered28Available12Capacity40Registrations over timeLast updated By Rachel Kim · Jun 12, 2026 at 09:14 AM Version 3Save changesCancel Delete event  Changes are saved locally. For full audit logs visit Admin — Activity · Need help? contact support@eventflow.com Dash  Events  Account "

 ❯ src/app/features/events/event-edit-page.spec.ts:64:34
     62|
     63|     expect(compiled.textContent).toContain('Edit Event');
     64|     expect(compiled.textContent).toContain('Design Systems Workshop');
       |                                  ^
     65|     expect(compiled.textContent).toContain('Event details');
     66|     expect(compiled.textContent).toContain('Save changes');

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯
```

---


## Entrada #061 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 10:57:48 UTC-06:00 |
| **Inicio** | 2026-07-01 10:57:30 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/edit-event` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **ERROR** |
| **Exit code** | 1 |

### Resumen breve

Test Files  34 passed (34) · Tests  142 passed (142) · Duration  7.46s (transform 1.29s, setup 3.89s, import 3.49s, tests 11.62s, environment 60.43s) · ERROR: Coverage for functions (78.65%) does not meet global threshold (80%)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  53.87 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.93 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
chunk-JJXKNVRD.js                                                               | -                                                                            |  37.08 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.88 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  29.14 kB | 
chunk-ZETQQZXJ.js                                                               | -                                                                            |  28.29 kB | 
chunk-IADSF5LN.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  19.22 kB | 
chunk-ZMTJBRVV.js                                                               | -                                                                            |  13.47 kB | 
chunk-QALQ7IQB.js                                                               | -                                                                            |  12.85 kB | 
chunk-CI6KLDEP.js                                                               | -                                                                            |  10.99 kB | 
chunk-I3CUJ7HZ.js                                                               | -                                                                            |  10.53 kB | 
chunk-RGDJJLV3.js                                                               | -                                                                            |  10.37 kB | 
chunk-EVSDK4CF.js                                                               | -                                                                            |  10.14 kB | 
chunk-O5FMJ32O.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   9.29 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.60 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-G7756IGY.js                                                               | -                                                                            |   5.14 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-XX7HZUMK.js                                                               | -                                                                            |   4.86 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-EKV3QFBV.js                                                               | -                                                                            |   4.06 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-2GSKHIVY.js                                                               | -                                                                            |   2.65 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-event-edit-form-event-edit-form.js                 | spec-app-shared-ui-organisms-event-edit-form-event-edit-form                 |   2.54 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
chunk-X44B6F3M.js                                                               | -                                                                            |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-event-edit.model.js                                    | spec-app-features-events-event-edit.model                                    |   1.36 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 961 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 653.12 kB

Application bundle generation complete. [6.477 seconds] - 2026-07-01T16:57:39.439Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  34 passed (34)
      Tests  142 passed (142)
   Start at  10:57:40
   Duration  7.46s (transform 1.29s, setup 3.89s, import 3.49s, tests 11.62s, environment 60.43s)


ERROR: Coverage for functions (78.65%) does not meet global threshold (80%)
```

---


## Entrada #062 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 10:59:02 UTC-06:00 |
| **Inicio** | 2026-07-01 10:58:44 UTC-06:00 |
| **Ejecutor** | 🤖 Agent (`agent`) |
| **Rama** | `feat/edit-event` |
| **Razón de ejecución** | Tests con cobertura y umbral 80 % (`pnpm test:coverage` / `--configuration=coverage`) |
| **Script detonador** | `pnpm test:coverage` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Test Files  35 passed (35) · Tests  149 passed (149) · Duration  8.55s (transform 1.43s, setup 5.50s, import 3.72s, tests 14.64s, environment 62.34s)

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  53.87 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.93 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
chunk-VN6UPMCE.js                                                               | -                                                                            |  37.08 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.88 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  29.14 kB | 
chunk-ZETQQZXJ.js                                                               | -                                                                            |  28.29 kB | 
chunk-IADSF5LN.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  18.49 kB | 
chunk-ZMTJBRVV.js                                                               | -                                                                            |  13.47 kB | 
chunk-QALQ7IQB.js                                                               | -                                                                            |  12.85 kB | 
chunk-N4YMS5VR.js                                                               | -                                                                            |  10.99 kB | 
chunk-I3CUJ7HZ.js                                                               | -                                                                            |  10.53 kB | 
chunk-RGDJJLV3.js                                                               | -                                                                            |  10.37 kB | 
chunk-EVSDK4CF.js                                                               | -                                                                            |  10.14 kB | 
chunk-O5FMJ32O.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   9.29 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.60 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-G7756IGY.js                                                               | -                                                                            |   5.14 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-XX7HZUMK.js                                                               | -                                                                            |   4.86 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-EKV3QFBV.js                                                               | -                                                                            |   4.06 kB | 
spec-app-shared-ui-organisms-event-edit-form-event-edit-form.js                 | spec-app-shared-ui-organisms-event-edit-form-event-edit-form                 |   4.01 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-2GSKHIVY.js                                                               | -                                                                            |   2.65 kB | 
chunk-FUKGSFWR.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
chunk-X44B6F3M.js                                                               | -                                                                            |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-LOWEHMO5.js                                                               | -                                                                            |   1.72 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-D2JG4E4G.js                                                               | -                                                                            |   1.69 kB | 
spec-app-features-events-event-edit-state.service.js                            | spec-app-features-events-event-edit-state.service                            |   1.66 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-event-edit.model.js                                    | spec-app-features-events-event-edit.model                                    |   1.36 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 961 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 657.25 kB

Application bundle generation complete. [6.511 seconds] - 2026-07-01T16:58:52.922Z


 RUN  v4.1.8 /Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai
      Coverage enabled with v8


 Test Files  35 passed (35)
      Tests  149 passed (149)
   Start at  10:58:53
   Duration  8.55s (transform 1.43s, setup 5.50s, import 3.72s, tests 14.64s, environment 62.34s)
```

---


## Entrada #063 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 20:49:34 UTC-06:00 |
| **Inicio** | 2026-07-01 20:49:22 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `feat/edit-event` |
| **Razón de ejecución** | Suite `pnpm test:all` — ejecución base de tests |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  53.87 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.93 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
chunk-VN6UPMCE.js                                                               | -                                                                            |  37.08 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.88 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  29.14 kB | 
chunk-ZETQQZXJ.js                                                               | -                                                                            |  28.29 kB | 
chunk-IADSF5LN.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  18.49 kB | 
chunk-P5XWQ3KA.js                                                               | -                                                                            |  13.47 kB | 
chunk-QALQ7IQB.js                                                               | -                                                                            |  12.85 kB | 
chunk-N4YMS5VR.js                                                               | -                                                                            |  10.99 kB | 
chunk-4QNFE26L.js                                                               | -                                                                            |  10.53 kB | 
chunk-PPRIP7JR.js                                                               | -                                                                            |  10.37 kB | 
chunk-JZ65X27K.js                                                               | -                                                                            |  10.14 kB | 
chunk-O5FMJ32O.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   9.29 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.60 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-G7756IGY.js                                                               | -                                                                            |   5.14 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-XX7HZUMK.js                                                               | -                                                                            |   4.86 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-EKV3QFBV.js                                                               | -                                                                            |   4.06 kB | 
spec-app-shared-ui-organisms-event-edit-form-event-edit-form.js                 | spec-app-shared-ui-organisms-event-edit-form-event-edit-form                 |   4.01 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-2GSKHIVY.js                                                               | -                                                                            |   2.65 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
chunk-X44B6F3M.js                                                               | -                                                                            |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-LOWEHMO5.js                                                               | -                                                                            |   1.72 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
spec-app-features-events-event-edit-state.service.js                            | spec-app-features-events-event-edit-state.service                            |   1.66 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-event-edit.model.js                                    | spec-app-features-events-event-edit.model                                    |   1.36 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 961 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 657.25 kB

Application bundle generation complete. [4.806 seconds] - 2026-07-02T02:49:29.151Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 600[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 632[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m12 tests[22m[2m)[22m[33m 855[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-attendees-page.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[33m 884[2mms[22m[39m
     [33m[2m✓[22m[39m should render attendees for an owned event [33m 419[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 1003[2mms[22m[39m
     [33m[2m✓[22m[39m should register successfully and show confirmation [33m 457[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/change-password-form/change-password-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 74[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 268[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 83[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 27[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m6 tests[22m[2m)[22m[33m 610[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-edit-form/event-edit-form.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 508[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 107[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/icon/icon.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/profile/profile-change-password-page.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 281[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-edit-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 811[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/profile/profile.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-edit-state.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 61[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/profile/profile-edit-page.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 342[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-edit.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/icon/icon.registry.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/attendees.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/avatar/avatar.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m

[2m Test Files [22m [1m[32m35 passed[39m[22m[90m (35)[39m
[2m      Tests [22m [1m[32m149 passed[39m[22m[90m (149)[39m
[2m   Start at [22m 20:49:29
[2m   Duration [22m 4.50s[2m (transform 1.45s, setup 3.54s, import 2.77s, tests 7.24s, environment 50.59s)[22m
```

---


## Entrada #064 — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | 2026-07-01 20:49:46 UTC-06:00 |
| **Inicio** | 2026-07-01 20:49:34 UTC-06:00 |
| **Ejecutor** | 👤 Developer (`developer`) |
| **Rama** | `feat/edit-event` |
| **Razón de ejecución** | Suite `pnpm test:all` — cobertura + lcov |
| **Script detonador** | `pnpm test:all` |
| **Comando** | `ng test --configuration=coverage --watch=false` |
| **Status** | **OK** |
| **Exit code** | 0 |

### Resumen breve

Sin resumen parseable; ver salida completa.

### Salida completa

```text
❯ Building...
✔ Building...
Initial chunk files                                                             | Names                                                                        |  Raw size
spec-app-features-events-event-detail-page.js                                   | spec-app-features-events-event-detail-page                                   |  56.13 kB | 
styles.css                                                                      | styles                                                                       |  53.87 kB | 
spec-app-features-session-session-page.js                                       | spec-app-features-session-session-page                                       |  51.93 kB | 
spec-app-features-events-event-attendees-page.js                                | spec-app-features-events-event-attendees-page                                |  48.33 kB | 
chunk-JJXKNVRD.js                                                               | -                                                                            |  37.08 kB | 
spec-app-features-events-events-dashboard-page.js                               | spec-app-features-events-events-dashboard-page                               |  36.88 kB | 
spec-app-features-events-event-registration-page.js                             | spec-app-features-events-event-registration-page                             |  30.76 kB | 
spec-app-features-auth-auth-page.js                                             | spec-app-features-auth-auth-page                                             |  29.14 kB | 
chunk-ZETQQZXJ.js                                                               | -                                                                            |  28.29 kB | 
chunk-IADSF5LN.js                                                               | -                                                                            |  21.23 kB | 
spec-app-features-events-event-edit-page.js                                     | spec-app-features-events-event-edit-page                                     |  18.49 kB | 
chunk-P5XWQ3KA.js                                                               | -                                                                            |  13.47 kB | 
chunk-QALQ7IQB.js                                                               | -                                                                            |  12.85 kB | 
chunk-N4YMS5VR.js                                                               | -                                                                            |  10.99 kB | 
chunk-4QNFE26L.js                                                               | -                                                                            |  10.53 kB | 
chunk-PPRIP7JR.js                                                               | -                                                                            |  10.37 kB | 
chunk-JZ65X27K.js                                                               | -                                                                            |  10.14 kB | 
chunk-O5FMJ32O.js                                                               | -                                                                            |   9.51 kB | 
spec-app-features-profile-profile-edit-page.js                                  | spec-app-features-profile-profile-edit-page                                  |   9.29 kB | 
spec-app-features-profile-profile-change-password-page.js                       | spec-app-features-profile-profile-change-password-page                       |   7.60 kB | 
chunk-GK3HSQDH.js                                                               | -                                                                            |   6.56 kB | 
chunk-NMOTKRLY.js                                                               | -                                                                            |   6.05 kB | 
spec-app-core-appwrite-appwrite-auth.service.js                                 | spec-app-core-appwrite-appwrite-auth.service                                 |   5.89 kB | 
chunk-EYREIOUK.js                                                               | -                                                                            |   5.34 kB | 
chunk-G7756IGY.js                                                               | -                                                                            |   5.14 kB | 
chunk-ZTK7D5D5.js                                                               | -                                                                            |   4.88 kB | 
chunk-XX7HZUMK.js                                                               | -                                                                            |   4.86 kB | 
chunk-RSTWSNOR.js                                                               | -                                                                            |   4.75 kB | 
chunk-3HIPXRDB.js                                                               | -                                                                            |   4.44 kB | 
spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form.js             | spec-app-shared-ui-organisms-profile-edit-form-profile-edit-form             |   4.17 kB | 
spec-app-core-config-resolve-environment.js                                     | spec-app-core-config-resolve-environment                                     |   4.09 kB | 
chunk-EKV3QFBV.js                                                               | -                                                                            |   4.06 kB | 
spec-app-shared-ui-organisms-event-edit-form-event-edit-form.js                 | spec-app-shared-ui-organisms-event-edit-form-event-edit-form                 |   4.01 kB | 
chunk-AK544H3O.js                                                               | -                                                                            |   3.85 kB | 
chunk-ERTP6FUW.js                                                               | -                                                                            |   3.35 kB | 
spec-app-features-fallback-fallback-redirect-page.js                            | spec-app-features-fallback-fallback-redirect-page                            |   3.30 kB | 
chunk-B45NHUNC.js                                                               | -                                                                            |   3.23 kB | 
chunk-M6633B2W.js                                                               | -                                                                            |   2.79 kB | 
chunk-54DL4LMV.js                                                               | -                                                                            |   2.71 kB | 
chunk-2GSKHIVY.js                                                               | -                                                                            |   2.65 kB | 
chunk-3CILTWPH.js                                                               | -                                                                            |   2.62 kB | 
spec-app-shared-ui-organisms-auth-login-form-auth-login-form.js                 | spec-app-shared-ui-organisms-auth-login-form-auth-login-form                 |   2.50 kB | 
chunk-22JDNN2H.js                                                               | -                                                                            |   2.46 kB | 
chunk-STQC3UUX.js                                                               | -                                                                            |   2.45 kB | 
spec-app-shared-ui-organisms-change-password-form-change-password-form.js       | spec-app-shared-ui-organisms-change-password-form-change-password-form       |   2.38 kB | 
spec-app-shared-ui-organisms-event-registration-form-event-registration-form.js | spec-app-shared-ui-organisms-event-registration-form-event-registration-form |   2.33 kB | 
chunk-NSZB3PAA.js                                                               | -                                                                            |   2.03 kB | 
spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form.js             | spec-app-shared-ui-organisms-auth-sign-up-form-auth-sign-up-form             |   1.99 kB | 
chunk-X44B6F3M.js                                                               | -                                                                            |   1.99 kB | 
spec-app-features-events-event-registration.model.js                            | spec-app-features-events-event-registration.model                            |   1.92 kB | 
spec-app-core-appwrite-appwrite.service.js                                      | spec-app-core-appwrite-appwrite.service                                      |   1.90 kB | 
spec-app-features-events-events.model.js                                        | spec-app-features-events-events.model                                        |   1.82 kB | 
spec-app-core-auth-guest.guard.js                                               | spec-app-core-auth-guest.guard                                               |   1.81 kB | 
chunk-HDPX4BTV.js                                                               | -                                                                            |   1.79 kB | 
chunk-W3LRIBVL.js                                                               | -                                                                            |   1.78 kB | 
spec-app-core-auth-auth.guard.js                                                | spec-app-core-auth-auth.guard                                                |   1.76 kB | 
spec-app-app.js                                                                 | spec-app-app                                                                 |   1.73 kB | 
chunk-LOWEHMO5.js                                                               | -                                                                            |   1.72 kB | 
spec-app-features-profile-profile.model.js                                      | spec-app-features-profile-profile.model                                      |   1.71 kB | 
chunk-J4FHUBTC.js                                                               | -                                                                            |   1.69 kB | 
spec-app-features-events-event-edit-state.service.js                            | spec-app-features-events-event-edit-state.service                            |   1.66 kB | 
chunk-N35RK2VI.js                                                               | -                                                                            |   1.49 kB | 
chunk-ESJ6SOP5.js                                                               | -                                                                            |   1.46 kB | 
chunk-5NUKCOTF.js                                                               | -                                                                            |   1.43 kB | 
spec-app-features-admin-admin-navigation.service.js                             | spec-app-features-admin-admin-navigation.service                             |   1.41 kB | 
spec-app-features-events-event-edit.model.js                                    | spec-app-features-events-event-edit.model                                    |   1.36 kB | 
spec-app-shared-ui-atoms-icon-icon.js                                           | spec-app-shared-ui-atoms-icon-icon                                           |   1.30 kB | 
spec-app-shared-ui-atoms-avatar-avatar.js                                       | spec-app-shared-ui-atoms-avatar-avatar                                       |   1.25 kB | 
init-testbed.js                                                                 | init-testbed                                                                 |   1.21 kB | 
spec-app-core-appwrite-appwrite-auth-error.js                                   | spec-app-core-appwrite-appwrite-auth-error                                   |   1.13 kB | 
chunk-RBN4S7O6.js                                                               | -                                                                            |   1.10 kB | 
chunk-SACBZIG5.js                                                               | -                                                                            |   1.06 kB | 
spec-app-features-events-attendees.model.js                                     | spec-app-features-events-attendees.model                                     |   1.04 kB | 
chunk-BO3UIMU6.js                                                               | -                                                                            | 974 bytes | 
vitest-mock-patch.js                                                            | vitest-mock-patch                                                            | 969 bytes | 
spec-app-shared-ui-atoms-icon-icon.registry.js                                  | spec-app-shared-ui-atoms-icon-icon.registry                                  | 961 bytes | 
chunk-QJQ2R3K6.js                                                               | -                                                                            | 909 bytes | 
spec-app-shared-ui-password-strength.util.js                                    | spec-app-shared-ui-password-strength.util                                    | 878 bytes | 
chunk-RDSJJ3EL.js                                                               | -                                                                            | 859 bytes | 
spec-app-features-events-event-detail.model.js                                  | spec-app-features-events-event-detail.model                                  | 774 bytes | 
chunk-OWTV64UV.js                                                               | -                                                                            | 627 bytes | 

                                                                                | Initial total                                                                | 657.25 kB

Application bundle generation complete. [4.600 seconds] - 2026-07-02T02:49:40.523Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/Users/tw1ttt3r/tw1ttt3r/own/eventflow-asistido-ai[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/auth/auth-page.spec.ts [2m([22m[2m9 tests[22m[2m)[22m[33m 802[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events-dashboard-page.spec.ts [2m([22m[2m12 tests[22m[2m)[22m[33m 972[2mms[22m[39m
     [33m[2m✓[22m[39m should render dashboard heading and events [33m 360[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 1128[2mms[22m[39m
     [33m[2m✓[22m[39m should render registration details for a known event [33m 327[2mms[22m[39m
     [33m[2m✓[22m[39m should register successfully and show confirmation [33m 494[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-attendees-page.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[33m 1089[2mms[22m[39m
     [33m[2m✓[22m[39m should render attendees for an owned event [33m 436[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-edit-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 1216[2mms[22m[39m
     [33m[2m✓[22m[39m should render edit form for an owned event [33m 446[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/profile/profile-change-password-page.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 206[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail-page.spec.ts [2m([22m[2m7 tests[22m[2m)[22m[33m 405[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/profile/profile-edit-page.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 352[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-registration-form/event-registration-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 108[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/event-edit-form/event-edit-form.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 518[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/session/session-page.spec.ts [2m([22m[2m6 tests[22m[2m)[22m[33m 706[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-login-form/auth-login-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 88[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth.service.spec.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 35[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/avatar/avatar.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/profile-edit-form/profile-edit-form.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 221[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-edit-state.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/auth-sign-up-form/auth-sign-up-form.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 63[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/icon/icon.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite.service.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/organisms/change-password-form/change-password-form.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 94[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/admin/admin-navigation.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/auth.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 14[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/auth/guest.guard.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/fallback/fallback-redirect-page.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/config/resolve-environment.spec.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/app.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-registration.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/events.model.spec.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-edit.model.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/profile/profile.model.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/attendees.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/password-strength.util.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/shared/ui/atoms/icon/icon.registry.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 1[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/core/appwrite/appwrite-auth-error.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[43m eventflow-asistido-ai [49m[39m src/app/features/events/event-detail.model.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 1[2mms[22m[39m

[2m Test Files [22m [1m[32m35 passed[39m[22m[90m (35)[39m
[2m      Tests [22m [1m[32m149 passed[39m[22m[90m (149)[39m
[2m   Start at [22m 20:49:41
[2m   Duration [22m 5.47s[2m (transform 1.13s, setup 2.99s, import 3.15s, tests 8.14s, environment 39.64s)[22m
```

---

