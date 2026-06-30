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

