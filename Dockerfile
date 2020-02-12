FROM node:latest

WORKDIR /web

COPY ./yarn.lock /web

RUN yarn

COPY . /web

EXPOSE ${PORT}

CMD ["yarn", "start:prod"]
