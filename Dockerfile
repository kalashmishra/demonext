FROM node:18 as build
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .
RUN npm run build
#RUN chmod -R 775 .babelrc
RUN npm install pm2 -g
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
