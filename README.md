## reactNative_Backend Setup Guide

This guide will help you set up the backend for this project. Follow the steps below to get everything running on your local machine.

### 1. Install Node.js and npm

Before setting up the backend, you need to have Node.js and npm (Node Package Manager) installed. You can download and install them from the following links:

-   [Download Node.js](https://nodejs.org/)


### 2. Clone the Repository

Clone the backend repository to your local machine:

```bash
git clone https://github.com/grpuertoa/reactNative_Backend.git
cd reactNative_Backend 
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project. This file will store sensitive information and environment variables. having in mind this is just a test app and the following env works for en Android emulator. 
Use the following template to create your `.env` file:

```bash
PORT=3000
MONGO_URL=mongodb://mongo:27017/tasksdb
```

### 4. Install Dependencies

Run the following command to install the necessary dependencies:
```bash
npm install
```

### 5. Configure Docker

Make sure Docker and Docker Compose are installed on your machine. You can download and install them from the following links:

-   Download Docker [official website](https://www.docker.com/products/docker-desktop)
-   Download Docker Compose [official website](https://docs.docker.com/compose/install/)

### 6. Start Docker Containers

Use Docker Compose to build and start the containers for the backend and MongoDB. Run the following command in the root directory of the project:

```bash
docker-compose up
```

This command will start the MongoDB container and the backend container. MongoDB will be accessible at `mongodb://localhost:27017/tasksdb` from the backend.

### 7. Verify the Setup

Once Docker Compose has started the containers, the backend should be running and accessible on `http://localhost:3000`.

To verify that everything is working correctly, you can test the API endpoints using a tool like Postman or insomnia.

For testing fetch:

GET http://localhost:3000/api/tasks
__________________________________

For testing Create:

POST http://localhost:3000/api/tasks

body json:
{
  "title": "Nueva tarea test",
  "description": "Descripción de la nueva tarea",
  "completed": false
}
__________________________________

### Unitary test

To run unitary tests with Jest make sure to install:

```bash
npm install --save-dev jest
```
Then run the tests
```bash
npm test
```

### Troubleshooting

-   **Docker Issues**: Ensure Docker is running and that you have enough resources allocated (e.g., memory and CPU) for the containers.
-   **Environment Variables**: Make sure your `.env` file is correctly configured and located in the root directory.
