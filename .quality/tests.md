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

