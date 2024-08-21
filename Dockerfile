FROM node:20-alpine as runner

FROM runner
RUN npm install serve -g
WORKDIR /app

COPY /out .

EXPOSE 3000

CMD serve