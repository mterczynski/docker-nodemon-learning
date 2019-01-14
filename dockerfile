FROM node:8

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000

RUN node .