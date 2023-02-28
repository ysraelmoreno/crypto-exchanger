FROM node AS development

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY . .

RUN yarn

EXPOSE 5173

ENTRYPOINT ["/entrypoint.sh"]

CMD ["yarn", "dev"]
