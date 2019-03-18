FROM node:10-alpine

WORKDIR /opt/homepage

COPY src/ src
COPY server/ server
COPY package.json package.json

RUN npm install --production

ENTRYPOINT ["node", "server/server.js"]
