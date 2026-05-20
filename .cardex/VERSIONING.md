# Versionado SemVer 2.0.0

Fuente de verdad: `.cardex/version.json`

## Reglas

| Segmento | Cuándo sube | Automático |
|----------|-------------|------------|
| **PATCH** | Cada `git commit` | Sí (hook `pre-commit`) |
| **MINOR** | Primera vez que commiteas en una rama nueva | Sí (hook `pre-commit`) |
| **MAJOR** | Cierre de módulo (tú lo indicas) | Manual |

### Detalle

1. **Primera rama del repo** (p. ej. `main`): solo sube PATCH → `0.0.1`, `0.0.2`, …
2. **Rama nueva** (p. ej. `feature/auth`): sube MINOR y reinicia PATCH → `0.1.0`, luego `0.1.1`, …
3. **Misma rama**: solo PATCH en cada commit.
4. **MAJOR**: ejecuta cuando cierres un módulo:

```bash
pnpm version:major
# o con nombre del módulo (queda en el historial):
pnpm version:major -- --module=autenticacion
```

Luego haz commit; el hook no vuelve a subir MAJOR, solo PATCH en ese commit.

## Comandos

```bash
pnpm version:dry-run    # simula el próximo bump sin escribir archivos
pnpm version:bump       # bump manual (misma lógica que el hook)
pnpm version:major      # MAJOR++ y reinicia minor/patch a 0
```

## Archivos sincronizados

- `.cardex/version.json`
- `package.json`
- `src/version.ts`
- `src/environments/environment*.ts`
- `public/manifest.webmanifest` (`version`, `name`, `description`)

## Instalar hooks (otro equipo)

```bash
pnpm install   # ejecuta "prepare" → husky
```
