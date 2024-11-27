# Usa la imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración e instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Expone el puerto que el servicio usará
EXPOSE 3001

# Comando para ejecutar el servidor
CMD ["node", "index.js"]
