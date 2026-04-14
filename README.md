# NestJS Template

Template en NestJS moderno.

## Ramas

- `main`: Rama de producción
- `develop`: Rama de desarrollo

## Requisitos

- Node.js LTS [Instalación](https://nodejs.org/en/download)
- pnpm [Instalación](https://pnpm.io/es/installation)

## Instalación

```bash
pnpm install
```

## Ejecutar en desarrollo

```bash
pnpm run start:dev
```

La API estará disponible en:

- API: http://localhost:3000
- Documentación: http://localhost:3000/docs

## Endpoints

### GET /

Retorna un mensaje de bienvenida.

**Respuesta:**

```json
{
    "Hello": "World"
}
```

### GET /items/:id

Retorna información de un item por ID.

**Parámetros:**

- `id` (path): ID del item
- `q` (query, opcional): Parámetro de búsqueda

**Ejemplo:** `/items/5?q=test`

**Respuesta:**

```json
{
    "item_id": 5,
    "q": "test"
}
```

## Tests

```bash
# Tests unitarios
pnpm test

# Tests con coverage
pnpm run test:cov

# Tests en modo watch
pnpm run test:watch

# Tests e2e
pnpm run test:e2e
```

## Linting y Formato

```bash
# Ejecutar linter
pnpm run lint

# Formatear código
pnpm run format

# Verificar formato
pnpm run format:check
```

## Build

```bash
pnpm run build
```

## Estructura del Proyecto

```
.
├── .github/
│   └── workflows/
│       └── ci.yml              # Configuración de CI/CD
├── .vscode/                    # Configuración de VS Code
├── dist/                       # Código compilado (generado)
├── node_modules/               # Dependencias (generado)
├── src/
│   ├── app.controller.spec.ts  # Tests del controlador principal
│   ├── app.controller.ts       # Controlador principal
│   ├── app.module.ts           # Módulo principal
│   ├── app.service.ts          # Servicio principal
│   └── main.ts                 # Punto de entrada de la aplicación
├── test/
│   └── app.e2e-spec.ts         # Tests end-to-end
├── .gitignore                  # Archivos ignorados por Git
├── .prettierignore             # Archivos ignorados por Prettier
├── .prettierrc                 # Configuración de Prettier
├── eslint.config.mjs           # Configuración de ESLint
├── nest-cli.json               # Configuración de NestJS CLI
├── package.json                # Dependencias y scripts
├── pnpm-lock.yaml              # Lock de dependencias
├── README.md                   # Este archivo
└── tsconfig.json               # Configuración de TypeScript
```

## Tecnologías

- **NestJS** - Framework de Node.js
- **TypeScript** - Lenguaje tipado
- **Jest** - Testing
- **ESLint** - Linter
- **Prettier** - Formateo de código
- **Swagger** - Documentación de API
- **GitHub Actions** - CI/CD

## Scripts Disponibles

| Comando              | Descripción                        |
| -------------------- | ---------------------------------- |
| `pnpm run start:dev` | Inicia servidor en modo desarrollo |
| `pnpm run build`     | Compila el proyecto                |
| `pnpm test`          | Ejecuta tests                      |
| `pnpm run lint`      | Ejecuta linter                     |
| `pnpm run format`    | Formatea código                    |

## Makefile

También puedes usar comandos abreviados con `make`:

```bash
make install
make dev
make lint
make test
make build
```
