# base image
FROM node:10

WORKDIR /usr/donomo

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 14441

CMD [ "npm", "start" ]