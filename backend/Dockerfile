# Dockerfile for Strapi Backend
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Development image
FROM base AS development
WORKDIR /app
ENV NODE_ENV=development

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 1337
CMD ["npm", "run", "develop"]

# Builder image
FROM base AS builder
WORKDIR /app
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS production
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 strapi

COPY --from=builder --chown=strapi:nodejs /app/dist ./dist
COPY --from=builder --chown=strapi:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=strapi:nodejs /app/public ./public
COPY --from=builder --chown=strapi:nodejs /app/package*.json ./
COPY --from=builder --chown=strapi:nodejs /app/favicon.png ./

USER strapi

EXPOSE 1337

CMD ["npm", "run", "start"]
