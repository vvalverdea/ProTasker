# Etapa 1: Construcción
FROM node:18 as build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración y de dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación Angular para producción
RUN npm run build -- --output-path=dist/client --configuration=production

# Etapa 2: Servidor de producción
FROM nginx:alpine

# Copiar los archivos de la app construida en Nginx
COPY --from=build /app/dist/client/browser /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para correr Nginx
CMD ["nginx", "-g", "daemon off;"]
