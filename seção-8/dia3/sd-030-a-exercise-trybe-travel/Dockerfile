FROM node:16.14

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src src
COPY .editorconfig .
COPY .eslintignore .
COPY .eslintrc.json .
COPY .sequelizerc .
COPY tsconfig.json .
