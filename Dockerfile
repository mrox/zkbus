FROM node:alpine

RUN mkdir -p /usr/src/node-app 

WORKDIR /usr/src/node-app

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

RUN npm install pm2 -g


EXPOSE 3000
