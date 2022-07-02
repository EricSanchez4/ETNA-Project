#!/usr/bin/env sh

docker run -d docker.etna.io/php:7.3-cli bash -c 'apt-get update; apt-get install php; php -S localhost:8000'