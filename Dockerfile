FROM node:17

WORKDIR /app

COPY ./app/package.json /app
# COPY ./app/package-lock.json /app

RUN yarn install

COPY ./app /app

EXPOSE 3000

CMD ["yarn", "start"]