FROM docker.etna.io/node
COPY index.js /data/
COPY package.json /data/
WORKDIR /data
RUN npm i
CMD ["npm","start"]