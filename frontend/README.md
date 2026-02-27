# Frontend - Proyecto Eventos

Frontend desarrollado con Angular que proporciona una interfaz de usuario para la gestión de eventos.

## 🚀 Tecnologías

- **Angular** - Framework para aplicaciones web
- **Angular Material** - Componentes UI de Material Design
- **TypeScript** - Lenguaje de programación

## 📋 Requisitos Previos

- Node.js (v20 o superior)
- npm
- Docker y Docker Compose (opcional, para ejecución con contenedores)

## 🔧 Instalación

1. Clona el repositorio y navega al directorio del frontend:
```bash
cd frontend
```

2. Instala las dependencias:
```bash
npm install
```



## 🏃 Ejecución

### Opción 1: Desarrollo Local (sin Docker)

1. Ejecuta el servidor de desarrollo:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200` y se recargará automáticamente cuando modifiques los archivos fuente.

### Opción 2: Con Docker Compose (Recomendado)

Desde la raíz del proyecto, ejecuta:

```bash
docker compose up frontend
```

O para ejecutar todos los servicios (base de datos, backend y frontend):

```bash
docker compose build
docker compose up -d
```

El frontend estará disponible en `http://localhost:4000`


## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/
│   │   ├── eventos/          # Módulo de eventos
│   │   │   ├── eventos.ts
│   │   │   ├── eventos.html
│   │   │   ├── eventos.css
│   │   │   └── eventos.service.ts
│   │   ├── app.ts            # Componente principal
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.config.ts     # Configuración de la aplicación
│   │   └── app.routes.ts     # Rutas de la aplicación
│   ├── server.ts             # Servidor SSR
│   ├── main.ts               # Punto de entrada (cliente)
│   ├── main.server.ts        # Punto de entrada (servidor)
│   └── index.html
├── dist/                     # Código compilado (generado)
├── Dockerfile                # Configuración Docker
├── angular.json
├── package.json
└── tsconfig.json
```
