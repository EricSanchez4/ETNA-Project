#!/usr/bin/env sh

docker run --name dazzling_robin docker.etna.io/httpd
docker run --name elegant_tony docker.etna.io/mysql-server
docker run --name ginger_jeremie docker.etna.io/php:7.3-cli
