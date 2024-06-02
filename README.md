# User Management System

## Overview

This project is a User Management System built using Node.js and MongoDB. It leverages the Mongoose package for object data modeling and includes a logger middleware for logging activities. The project follows the MVC (Model-View-Controller) architecture pattern to ensure a structured and scalable codebase.

## Features
- **User Profile Management**: CRUD operations for user profiles.
- **Logging**: Middleware for logging requests and responses.
- **MVC Architecture**: Organized codebase following MVC principles.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling for Node.js.

## Installation

### Prerequisites

- Node.js
- MongoDB

### API Endpoints
## Users
Get All Users: GET /api/users
Get User by ID: GET /api/users/:id
Create User: POST /api/users
Update User: PUT /api/users/:id
Delete User: DELETE /api/users/:id

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/user-management-system.git
   cd user-management-system
   npm run dev
