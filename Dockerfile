# Use an official Node.js runtime as a base image
FROM node:14

# Install gitmoji-cli globally
RUN npm i -g gitmoji-cli

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the entry point to gitmoji-cli
ENTRYPOINT ["gitmoji"]
