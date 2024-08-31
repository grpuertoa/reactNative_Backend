# 1. Image base node
FROM node:18

# 2. Work directory for the container
WORKDIR /app

# 3. Copy package to the work folder
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy all code
COPY . .

# 6. Port
EXPOSE 3000

# 7. Command to start the app
CMD ["npm", "start"]
