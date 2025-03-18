# Use an official lightweight Node.js image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY tsconfig.json ./
COPY src ./src

# Compile TypeScript
RUN npm run build

# Copy only the compiled files from dist/
COPY dist ./dist

# Expose the application port
EXPOSE 8000

# Set the default command to start the service
CMD ["npm", "run", "dev"]
