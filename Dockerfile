FROM node:18

WORKDIR /am-react

EXPOSE 3000

COPY ./package*.json .

RUN npm install

COPY . .

CMD [ "npm" , "start" ]