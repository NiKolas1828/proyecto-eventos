# frontend/Dockerfile
FROM node:20

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

EXPOSE 4000

# Usar el servidor SSR de producción
ENV PORT=4000
CMD ["node", "dist/frontend/server/server.mjs"]