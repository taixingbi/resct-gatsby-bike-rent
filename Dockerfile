# BASE IMAGE
FROM node:alpine as builder

# DEPENDENCIES
WORKDIR '/app'

COPY ./package.json ./
RUN npm install

COPY . .

# CMD!
RUN npm install sharp
RUN npm run build


# `nginx` hosting static files
FROM nginx

EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/public /usr/share/nginx/html
