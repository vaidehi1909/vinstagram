# Stage 1: Build
FROM node:20-slim AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json for efficient layer caching
COPY package*.json ./

# Install dependencies, including dev dependencies for building if needed
RUN npm install --production

# Copy the rest of the application source code
COPY . .

# Build the application (if necessary, e.g., for TypeScript or bundling)
# RUN npm run build

# Stage 2: Runtime
FROM node:20-slim

# Set the working directory for the runtime container
WORKDIR /usr/src/app

# Copy only production dependencies from the builder stage
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy the application source code from the builder stage
COPY --from=builder /usr/src/app .

# Define a build-time argument with a default value
ARG NODE_ENV=development

# Set environment variables for NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Expose the desired port
EXPOSE 4000

# Use a non-root user for security
RUN adduser --disabled-password --gecos "" appuser && chown -R appuser:appuser /usr/src/app
USER appuser

# Start the application
CMD ["npm", "start"]
# CMD ["npx", "nodemon", "index.js"] // for development
