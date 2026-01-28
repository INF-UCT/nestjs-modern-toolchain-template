# NestJS Template

Template en NestJS moderno.

## Ramas

- `main`: Rama de producción
- `develop`: Rama de desarrollo

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run start:dev
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
npm test

# Tests con coverage
npm run test:cov

# Tests en modo watch
npm run test:watch

# Tests e2e
npm run test:e2e
```

## Linting y Formato

```bash
# Ejecutar linter
npm run lint

# Formatear código
npm run format

# Verificar formato
npm run format:check
```

## Build

```bash
npm run build
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
├── package-lock.json           # Lock de dependencias
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

| Comando             | Descripción                        |
| ------------------- | ---------------------------------- |
| `npm run start:dev` | Inicia servidor en modo desarrollo |
| `npm run build`     | Compila el proyecto                |
| `npm test`          | Ejecuta tests                      |
| `npm run lint`      | Ejecuta linter                     |
| `npm run format`    | Formatea código                    |
