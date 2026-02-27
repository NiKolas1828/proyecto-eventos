# backend/Dockerfile
FROM node:22

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Compilar el proyecto TypeScript
RUN npm run build

EXPOSE 3000

# Usar el comando de producción
CMD ["npm", "run", "start:prod"]