# Proyecto Eventos

Aplicación web full-stack para la gestión de eventos, desarrollada con NestJS (backend) y Angular (frontend), containerizada con Docker.

## 📋 Descripción

Este proyecto es una aplicación completa para la gestión de eventos que consta de:

- **Backend**: API REST desarrollada con NestJS y TypeORM, conectada a PostgreSQL
- **Frontend**: Aplicación web desarrollada con Angular y Angular Material
- **Base de Datos**: PostgreSQL 15

Todos los servicios están containerizados con Docker y orquestados mediante Docker Compose.


## 📁 Estructura del Proyecto

```
proyecto-eventos/
├── backend/              # API REST con NestJS
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── frontend/             # Aplicación Angular
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml    # Configuración de orquestación
└── README.md
```

## 🚀 Ejecución del Proyecto

### Opción 1: Ejecución Completa con Docker Compose (Recomendado)

Este es el método más sencillo para ejecutar todo el proyecto:

```bash
# Construir y levantar todos los servicios
docker compose up --build
```

Para ejecutar en segundo plano (modo detached):

```bash
docker compose up --build -d
```

### Opción 2: Comandos Paso a Paso

Si prefieres ejecutar los servicios de forma más controlada:

```bash
# 1. Construir las imágenes
docker compose build

# 2. Iniciar los servicios
docker compose up

# O iniciar en segundo plano
docker compose up -d
```

## 📡 Acceso a los Servicios

Una vez que los contenedores estén en ejecución, podrás acceder a:

- **Frontend**: http://localhost:4000
- **Backend API**: http://localhost:3000
- **Base de Datos PostgreSQL**: localhost:5433
  - Usuario: `postgres`
  - Contraseña: `postgres`
  - Base de datos: `proyecto_eventos_db`


## 🔧 Configuración

### Variables de Entorno

Las variables de entorno están configuradas en el archivo `docker-compose.yml`:

**Backend:**
- `DB_HOST`: db
- `DB_PORT`: 5432
- `DB_USERNAME`: postgres
- `DB_PASSWORD`: postgres
- `DB_DATABASE`: proyecto_eventos_db
- `PORT`: 3000

**Frontend:**
- `PORT`: 4000

**Base de Datos:**
- `POSTGRES_USER`: postgres
- `POSTGRES_PASSWORD`: postgres
- `POSTGRES_DB`: proyecto_eventos_db

### Puertos

- **Frontend**: 4000
- **Backend**: 3000
- **PostgreSQL**: 5433 (mapeado desde 5432 interno)

Si necesitas cambiar estos puertos, modifica el archivo `docker-compose.yml`.


## 📝 Notas Adicionales

- Los datos de PostgreSQL se persisten en un volumen de Docker llamado `postgres_data`
- El backend espera a que la base de datos esté lista antes de iniciar
- El frontend depende del backend, por lo que se inicia después de que el backend esté listo

## 📚 Tecnologías Utilizadas

- **Backend**: NestJS, TypeORM, PostgreSQL
- **Frontend**: Angular, Angular Material
- **Containerización**: Docker, Docker Compose
- **Base de Datos**: PostgreSQL 15
