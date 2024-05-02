# Netflix CRUD Web API using NestJS and MongoDB

This is a simple Web API built using the NestJS framework and MongoDB database. It allows you to perform CRUD (Create, Read, Update, Delete) operations on movies, subscriptions, and user records.

## Prerequisites
Before running this Web API, ensure you have the following installed on your machine:
- Node.js (version 16 or later)
- npm (version 8 or later)
- MongoDB (version 4 or later)

## Getting Started
Follow these steps to set up and run the Web API:

1. Clone this repository to your local machine.
2. Navigate to the project directory and install dependencies with `npm install`.
3. Start the application with `npm start`.

## API Endpoints
This Web API exposes the following endpoints:

### Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in with username and password.

### Movies
- `GET /movies`: Get a list of all movies.
- `GET /movies/:id`: Get a single movie by ID.
- `POST /movies`: Create a new movie record.
- `PUT /movies/:id`: Update an existing movie record.
- `DELETE /movies/:id`: Delete an existing movie record.

### Subscriptions
- `GET /subscriptions`: Get a list of all subscriptions.
- `GET /subscriptions/:id`: Get a single subscription by ID.
- `POST /subscriptions`: Create a new subscription record.
- `PUT /subscriptions/:id`: Update an existing subscription record.
- `DELETE /subscriptions/:id`: Delete an existing subscription record.

### Users
- `GET /users/:id`: Get a single user by ID.
- `POST /users`: Create a new user record.
- `PUT /users/:id`: Update an existing user record.
- `DELETE /users/:id`: Delete an existing user record.

## Contributing
Contributions to this project are welcome! Follow these steps to contribute:
1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request from your fork to this repository.
