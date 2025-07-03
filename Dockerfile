# Stage 1: Build React App with pnpm
FROM node:18-alpine AS build

# Install corepack and enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

# Copy rest of the source
COPY . .

# Run the build
RUN pnpm run deploy-build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
