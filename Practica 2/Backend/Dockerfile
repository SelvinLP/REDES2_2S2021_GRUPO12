FROM node:10-alpine
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 8000
CMD [ "node", "/usr/src/app/index" ]