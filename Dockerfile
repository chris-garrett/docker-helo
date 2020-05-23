FROM node:lts-alpine3.9
MAINTAINER Chris Garrett (https://github.com/chris-garrett/docker-helo)
LABEL description="HELO Server Image"

ADD . /work/app
WORKDIR /work/app

RUN set -x \
    && yarn install --production \
    && chown -R node:node /work

USER node
EXPOSE 3000
CMD ["node", "./src/index.js"]

