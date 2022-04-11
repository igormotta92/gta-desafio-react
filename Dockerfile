FROM node:16 as build

RUN mkdir code
WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

### STAGE 2 ###
#Server
FROM node:16 as prod

RUN mkdir appserver
WORKDIR /appserver

RUN mkdir front

COPY --from=build  /code/build /appserver/front

RUN npm install serve -g

EXPOSE 3000

ENTRYPOINT ["bash", "-c", "cd front && serve"]