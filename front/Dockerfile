FROM node:alpine as builder

WORKDIR /usr/src/app


COPY . .

RUN \
  yarn; \
  yarn build:prod;

FROM nginx:alpine
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx/conf.d /etc/nginx/conf.d/default.conf