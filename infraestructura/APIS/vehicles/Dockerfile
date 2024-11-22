FROM node:20

USER root

# Actualiza el sistema y añade herramientas básicas
RUN apt-get update && apt-get install -y wget nano && apt-get clean

# Instala dependencias globales necesarias
RUN npm install -g prisma nodemon

# Crea el directorio de trabajo
WORKDIR /usr/src/app

# Copia las dependencias del proyecto
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos
COPY . .

# Genera el cliente Prisma
RUN npx prisma generate

# Expone el puerto del microservicio
EXPOSE 3001

# Comando para iniciar el microservicio
CMD ["npm", "start"]
