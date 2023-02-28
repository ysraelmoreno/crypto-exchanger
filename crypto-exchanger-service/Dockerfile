FROM node AS development

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY package.json  ./
COPY yarn.lock  ./

RUN yarn

COPY . .

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]

CMD ["yarn", "build"]
