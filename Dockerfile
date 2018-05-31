FROM nginx:1.14.0-alpine
LABEL maintainer="Patricio Tapia <ptapia@mapcity.cl>"
COPY . /usr/share/nginx/html
