# Jeevansaathi: Connecting Hearts❤️

# Angular Frontend and Spring API

This repository contains an Angular frontend and a Spring API. Follow the instructions below to set up and run both applications.

## Prerequisites

- Node.js and npm installed on your machine for running the Angular frontend.
- Java Development Kit (JDK) installed for running the Spring API.
- Angular CLI installed globally (`npm install -g @angular/cli`).

## Running the Angular Frontend and Spring API

1. **Angular Frontend:**
   - Navigate to the `frontend` directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the development server:
     ```
     ng serve
     ```
   - Open your browser and navigate to `http://localhost:4200` to view the Angular application.

2. **Spring API:**
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```

     Make sure you have matrimony named database created in mysql application.
     Change the userName and password in application.properties file.
      
   - Build the project (Use cmd):
     ```
     mvnw clean install
     ```
   - Run the Spring Boot application:
     ```
     mvnw spring-boot:run
     ```
   - The Spring API will start running on `http://localhost:8080`.

## Accessing the Application

Once both the frontend and API servers are running, you can access the application by visiting `http://localhost:4200` in your browser. The frontend will communicate with the API running on `http://localhost:8080`.

## Additional Notes

- Make sure that no other services are using ports `4200` and `8080`, as these ports are used by the frontend and API respectively.
- You might need to configure CORS settings on the Spring API if the frontend and API are hosted on different domains in a production environment.
- Ensure that your environment meets all the prerequisites mentioned above before attempting to run the applications.

---
Made with ❤️ during Infosys internship.
