# Backend - Proyecto Eventos

Backend desarrollado con NestJS que proporciona una API REST para la gestión de eventos.

## 🚀 Tecnologías

- **NestJS** - Framework Node.js para aplicaciones escalables
- **TypeORM** - ORM para TypeScript/JavaScript
- **PostgreSQL** - Base de datos relacional
- **TypeScript** - Lenguaje de programación

## 📋 Requisitos Previos

- Node.js (v22 o superior)
- npm
- PostgreSQL (si ejecutas localmente sin Docker)
- Docker y Docker Compose (opcional, para ejecución con contenedores)

## 🔧 Instalación

1. Clona el repositorio y navega al directorio del backend:
```bash
cd backend
```

2. Instala las dependencias:compose
```

## ⚙️ Configuración

El backend utiliza variables de entorno para la configuración. Puedes crear un archivo `.env` en la raíz del directorio `backend` con las siguientes variables:

```env
DB_HOST=localhost
DB_PORT=5433
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=proyecto_eventos_db
PORT=3000
```

**Nota:** Si no defines estas variables, el backend usará los valores por defecto mostrados arriba.

## 🏃 Ejecución

### Opción 1: Desarrollo Local (sin Docker)

1. Asegúrate de tener PostgreSQL ejecutándose localmente en el puerto 5433 (o ajusta la configuración según tu entorno).

2. Ejecuta el servidor en modo desarrollo:
```bash
npm run start:dev
```

El servidor estará disponible en `http://localhost:3000`

### Opción 2: Con Docker Compose (Recomendado)

Desde la raíz del proyecto, ejecuta:

```bash
docker-compose up backend
```

O para ejecutar todos los servicios (base de datos, backend y frontend):

```bash
docker compose build
docker compose up -d
```

El backend estará disponible en `http://localhost:3000`


## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── eventos/          # Módulo de eventos
│   │   ├── evento.entity.ts
│   │   ├── eventos.controller.ts
│   │   ├── eventos.service.ts
│   │   └── eventos.module.ts
│   ├── app.module.ts     # Módulo principal
│   └── main.ts           # Punto de entrada
├── test/                 # Tests end-to-end
├── dist/                 # Código compilado (generado)
├── Dockerfile            # Configuración Docker
├── package.json
└── tsconfig.json
```
