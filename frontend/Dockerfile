# Use Node.js as the base image
FROM node:latest

# Set working directory
WORKDIR /

# Copy package.json and package-lock.json to workdir
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose port 3000 for the frontend
EXPOSE 3000

# Set the start command
CMD ["npm", "run", "start"]
