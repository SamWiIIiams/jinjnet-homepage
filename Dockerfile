# Stage 1: Build Next.js app
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy rest of the app
COPY . .

# Build static site
RUN npm run build && npm run export

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy static build from previous stage
COPY --from=builder /app/out /usr/share/nginx/html

# Overwrite default Nginx config with SPA-ready config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
