# COLORS Application - LAMP Stack

## Description
The COLORS application is a full-stack color management system developed across three lab sessions for COP 4331. It allows users to authenticate and maintain a personal database of colors through a web interface. The project demonstrates the implementation and deployment of a full LAMP stack on a remote server.

## Development Phases
* **Lab 1 (Infrastructure)**: Provisioned a remote Linux Droplet on Digital Ocean and configured the LAMP environment (Linux, Apache, MySQL, PHP).
* **Lab 2 (Database)**: Designed the relational schema and populated the MySQL database with initial user and color data.
* **Lab 3 (API Endpoints)**: Implemented backend logic through RESTful PHP endpoints for login, adding colors, and searching the database.

## Technologies Used
* **Digital Ocean**: Cloud hosting for the Ubuntu 20.04 server.
* **Apache**: Web server for hosting the frontend and API.
* **MySQL**: Relational database for storing user accounts and color entries.
* **PHP**: Backend scripting for API endpoints.
* **JavaScript**: Frontend logic for asynchronous communication with the API.
* **HTML/CSS**: User interface design and styling.

## Database Schema
The system utilizes three primary tables within the `COP4331` database:
* **Users**: Stores `FirstName`, `LastName`, `Login`, and `Password`.
* **Colors**: Stores color `Name` and the `UserID` of the owner.
* **Contacts**: Stores contact details linked to a specific `UserID`.



## High-Level Setup Instructions

### 1. Database Configuration
Connect to MySQL via terminal (`mysql -u root -p`) and execute the schema creation scripts. Create a dedicated user for the web application to interact with the database safely.

### 2. How to Run
* Open a web browser and navigate to your domain or server IP address.   
* Log in using valid credentials.   
* Use the interface to add new colors or search your existing collection.
