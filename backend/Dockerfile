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

# Expose the port your Node.js app runs on 
EXPOSE 4000

# Set the start command
CMD ["npm", "start"]
