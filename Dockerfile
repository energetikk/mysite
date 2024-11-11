# FROM node:20-alpine AS base

# FROM base as deps

# WORKDIR /app

# COPY package.json package-lock.json ./

# RUN npm install --frozen-lockfile

# FROM base AS builder

# WORKDIR /app

# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# RUN npm run build

# FROM base as runner
# WORKDIR /app

# ENV NODE_ENV production

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# RUN mkdir .next

# RUN chown nextjs:nodejs .next

# # COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER nextjs

# EXPOSE 3000

# CMD ["npm", "start"]


# Build stage
FROM node:18.17.0-alpine AS builder
WORKDIR /app
ENV NODE_ENV production
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Production stage
FROM node:18.17.0-alpine
WORKDIR /app
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["npm", "start"]