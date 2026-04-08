# use lightweight node image
FROM node:18-alpine

# set working directory
WORKDIR /app

#copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "start"]

