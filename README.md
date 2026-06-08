# iNotebook

iNotebook is a full-stack note-taking web application built with React, Express, MongoDB, and JWT authentication. Users can create an account, log in securely, and manage personal notes with protected CRUD operations.

## Features

- User signup and login with JWT authentication
- Password hashing with bcrypt
- Protected notes API using auth tokens
- Create, read, update, and delete notes
- User-specific notes stored in MongoDB
- Responsive React interface
- Alert messages for login, signup, and note actions
- REST API backend with Express and Mongoose

## Tech Stack

**Frontend**

- React
- React Router
- Tailwind CSS
- Create React App

**Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcrypt
- express-validator

## Project Structure

```text
inotebook/
├── backend/
│   ├── middleware/
│   │   └── fetchuser.js
│   ├── models/
│   │   ├── Note.js
│   │   └── Users.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── notes.js
│   ├── db.js
│   └── index.js
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas connection string or local MongoDB instance

### Installation

Install frontend dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
```

Create a backend environment file:

```bash
cp backend/.env.example backend/.env
```

Then update `backend/.env` with your MongoDB connection string and JWT secret.

### Run the Application

Start the backend server:

```bash
node backend/index.js
```

Start the React frontend in another terminal:

```bash
npm start
```

The frontend runs on:

```text
http://localhost:3000
```

The backend runs on:

```text
http://localhost:5000
```

## API Endpoints

### Auth Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/auth/createUser` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/getuser` | Get logged-in user details |

### Notes Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/notes/fetchallnotes` | Get all notes for logged-in user |
| POST | `/api/notes/addnote` | Add a new note |
| PUT | `/api/notes/updatenote/:id` | Update a note |
| DELETE | `/api/notes/deletenote/:id` | Delete a note |

## Environment Variables

For production, sensitive values should be stored in environment variables instead of hardcoded files.

Recommended variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Resume Summary

Built a full-stack note-taking application using React, Express, MongoDB, and JWT authentication. Implemented secure user registration and login, protected REST APIs, and user-specific CRUD functionality for managing notes.

## Future Improvements

- Add note search and filtering
- Add tags and pinning
- Add loading states and better error handling
- Add a profile page
- Move secrets to `.env`
- Deploy frontend and backend
- Add unit and integration tests
