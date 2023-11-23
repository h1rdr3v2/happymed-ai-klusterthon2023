# Use Node.js as the base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to workdir
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose port 3000 (or the port your React app runs on)
EXPOSE 3000

# Set the start command
CMD ["npm", "start"]
