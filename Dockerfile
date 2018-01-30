FROM node:8.9.4-alpine

RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install --production 

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]
