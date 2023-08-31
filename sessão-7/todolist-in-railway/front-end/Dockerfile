FROM node:16.19.1-alpine3.17

EXPOSE 3000

WORKDIR /opt/trybe-todo-list-frontend

COPY /front-end/package*.json ./

RUN npm install

COPY /front-end ./

ENTRYPOINT [ "npm", "start" ]