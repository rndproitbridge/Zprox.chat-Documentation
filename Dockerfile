FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/docusaurus.config.js /app/sidebars.js ./
COPY --from=build /app/build ./build
EXPOSE 3000
# Bind to 0.0.0.0 so Dokploy's Traefik proxy can reach the container
CMD ["npx", "docusaurus", "serve", "--host", "0.0.0.0", "--port", "3000", "--no-open"]
