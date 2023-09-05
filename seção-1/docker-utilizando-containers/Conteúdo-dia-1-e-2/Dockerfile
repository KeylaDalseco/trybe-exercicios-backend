# FROM - INDICA qual imagem queremos usar e qual estage está ( AS ). Se não passar a tag pega a ultima versão
FROM nginx
#COPY copia um arquivo da minha maquina para a rota da image usada - https://hub.docker.com/_/nginx tem documentado na imagem - para a destinada
COPY ./index.html /usr/share/nginx/html
# EXPOSE - porta utilizada 
EXPOSE 3000
#WORKDIR - O diretório onde seu projeto está.
WORKDIR /app
#CMD - Comando utilizado após criar e executar o container. 
CMD ["echo", "Hello Word!"]