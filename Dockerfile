# Stage 1: Build Next.js app
FROM node:18-bullseye AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Run app with Node
FROM node:18-bullseye
WORKDIR /app

COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 80

CMD ["npx", "next", "start", "-p", "80"]
