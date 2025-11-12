# Stage 1: Build Next.js app
FROM node:20-bullseye AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Node runtime
FROM node:20-bullseye
WORKDIR /app

COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 80
CMD ["npx", "next", "start", "-p", "80"]
