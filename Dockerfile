FROM node:20.9.0-alpine

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]