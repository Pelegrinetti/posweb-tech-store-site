FROM node:16-buster-slim AS base
  RUN apt update && apt upgrade --yes
  COPY . .
  RUN yarn install

FROM base as development
  CMD [ "yarn", "dev" ]

FROM base as production
  RUN yarn build
  CMD ["yarn", "start"]
