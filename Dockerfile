FROM  node:22.4.1-slim
RUN mkdir /app

COPY app/ /app/
WORKDIR /app
RUN npm install
ENTRYPOINT ["npm", "run", "prd"]
