# Base image
FROM node:22-slim

# Set working directory
WORKDIR /app

# Enable pnpm and install it globally via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package and lock files
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy the rest of the source code
COPY . .

# Expose app port
EXPOSE 8080

# Start the server
CMD ["pnpm", "start"]
