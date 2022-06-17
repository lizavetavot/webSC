# ========== BUILD ==========
FROM node:16.15.0-alpine as build

ARG API_URL
ENV REACT_APP_API_URL=${API_URL}

WORKDIR /app

# Install dependencies
COPY sc-app/package.json .
COPY sc-app/package-lock.json .
RUN npm ci

# Copy source
COPY sc-app/ .

# Build React app
RUN npm run build

# ========== RUN ==========
FROM nginx:1.21-alpine

COPY sc-app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /app
