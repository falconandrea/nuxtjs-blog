FROM node:lts
RUN apt-get update
WORKDIR /var/www/blog
COPY . /var/www/blog
RUN npm ci
RUN npm run build
ENV HOST 0.0.0.0
ENV PORT 3030
