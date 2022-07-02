#!/usr/bin/env bash
docker run -e HELLO="Hello Etna" docker.etna.io/ubuntu:latest bash -c 'apt-get update; apt-get install figlet; figlet "$HELLO"'