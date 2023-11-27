# STUTERTHON HACKATHON (Symptom Diagnosis)

## Description

The Symptom Diagnosis Hackathon Project is a web application that helps users identify potential health issues based on their symptoms. By inputting their symptoms into the application, users will receive a list of possible diagnoses along with recommendations to consult a doctor for further evaluation.

## Installation

1. Clone the repository.
2. Navigate to the project folder and run `npm install` to install dependencies.

## Usage

1. Start the frontend development server:
    ```bash
    cd frontend
    npm start
    ```

2. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

## Docker

To run the project using Docker, follow these steps:

1. Edit the `docker-compose.yml` file to set the `OPENAI_API_KEY` environment variable to the URL of the backend server.

2. Run the Docker container using Docker Compose:
    ```bash
    docker-compose up
    ```

The frontend will be accessible at `http://localhost:4173` and the backend will be accessible at `http://localhost:3001`.
You can change the port numbers in the `docker-compose.yml` file.

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js

## License

This project is licensed under the [MIT License](LICENSE).
