FROM  node:22.3.0-slim
RUN mkdir /app
COPY app/ /app/

ENTRYPOINT ["node", "server.js"]

