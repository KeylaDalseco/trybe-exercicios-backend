FROM node:16.19.1-alpine3.17

EXPOSE 3001

WORKDIR /opt/trybe-todo-list-backend

COPY /back-end/package*.json ./

RUN npm install

COPY /back-end ./

ENTRYPOINT [ "npm", "start" ]