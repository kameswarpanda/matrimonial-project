# Matrimonial Project

Welcome to the Matrimonial Project! This repository contains the code for a comprehensive matrimonial web application designed to connect individuals seeking marriage partners. The project utilizes Angular for the frontend, Spring Boot for the backend, MySQL for the database, and Bootstrap for responsive design.

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **User Registration and Authentication:** Secure registration and login system with email verification.
- **Profile Management:** Users can create, update, and manage their profiles, including adding photos and personal details.
- **Search Functionality:** Advanced search filters to help users find compatible matches based on various criteria.
- **Match Recommendations:** Automated match suggestions based on user preferences and profile details.
- **Messaging System:** Private messaging feature for users to communicate with potential matches.
- **Admin Panel:** Administrative interface for managing users, monitoring activities, and ensuring platform security.

## Architecture
- **Frontend:** Angular, Bootstrap
- **Backend:** Spring Boot
- **Database:** MySQL

## Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Angular CLI** (v17 or higher)
- **Java** (JDK 19 or higher)
- **Maven** (v3.6 or higher)
- **MySQL** (v5.7 or higher)

## Installation

### Backend (Spring Boot)

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kameswarpanda/matrimonial-project.git
   cd matrimonial-project/backend
   ```
2. **Configure MySQL Database:**
- Create a database named matrimonial_db.
- Update the database configuration in src/main/resources/application.properties:
   ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/matrimonial_db
    spring.datasource.username=your_mysql_username
    spring.datasource.password=your_mysql_password
    spring.jpa.hibernate.ddl-auto=update
   ```
3. **Build and Run the Backend:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   The backend server will run at http://localhost:8080.

### Frontend (Angular)

1. **Navigate to Frontend Directory:**
   ```bash
   cd ../frontend
   ```
2. **Install Dependencies:**
   ```bash
    npm install
   ```
3. **Run the Frontend:**
   ```bash
   ng serve
   ```
   The frontend application will be available at http://localhost:4200.

### Running the Application
To run the entire application, follow these steps:

1. **Start the backend server (Spring Boot) by running:**

   ```bash
   mvn spring-boot:run
   ```
2. **Start the frontend application (Angular) by running:**
   ```bash
    ng serve
   ```
## Usage
- **Register:** Create a new account using your email address.
- **Create Profile:** Complete your profile with personal details and photos.
- **Search Matches:** Use the search filters to find potential matches.
- **Communicate:** Send and receive messages from other users.
- **Admin Panel:**  (For admins) Access the admin panel to manage the platform.

### Contributing
We welcome contributions! Follow these steps to contribute:

1. **Fork the Repository:** Click the "Fork" button on the top right corner of this repository.
2. **Clone Your Fork:**

   ```bash
   git clone https://github.com/kameswarpanda/matrimonial-project.git
   ```
3. **Create a Branch:**
   ```bash
    git checkout -b feature/your-feature-name
   ```
4. **Make Changes:**Implement your feature or bugfix.**
5. **Commit Changes:
   ```bash
   git commit -m 'Add some feature'

   ```
6. **Push to the Branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request:** Open a pull request to the main repository.

## Contact
For any inquiries or feedback, please contact:

- Email: support@matrimonialproject.com
- GitHub Issues: Create an Issue

Thank you for using the Matrimonial Project! We hope you find it helpful in your search for a life partner.