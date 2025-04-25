FROM node:18-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 🚫 Skip linting & TypeScript checks
ENV NEXT_DISABLE_ESLINT=true
ENV NEXT_PRIVATE_SKIP_TYPECHECK=true

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80 

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 80 

CMD ["npm", "run", "start", "--", "-p", "80"]
