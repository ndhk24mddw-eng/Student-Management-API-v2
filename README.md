# 🎓 Student Management API

A production-inspired **RESTful Student Management API** built with **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates backend development fundamentals including secure authentication, role-based authorization, CRUD operations, middleware, and REST API architecture.

---

## 🚀 Features

- 🔐 JWT Authentication
- 🔑 Secure Password Hashing using bcrypt
- 👤 Role-Based Authorization (Student, Teacher, Admin)
- 📚 Complete CRUD Operations
- 🌐 RESTful API Design
- 📦 MongoDB Database Integration with Mongoose
- ⚡ Express Middleware
- 🔒 Protected Routes
- 📝 Environment Variable Configuration (.env)
- 🏗 Modular MVC Folder Structure
- 📡 API Testing with Postman
- ⚠️ Proper HTTP Status Codes
- 🛡 Secure Backend Development Practices

---

## 📂 Project Structure

```text
Student-Management-API/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── student.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── authorize.middleware.js
│   │   └── logger.middleware.js
│   │
│   ├── models/
│   │   └── student.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── student.routes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication & Security

- JWT (jsonwebtoken)
- bcrypt

### Development Tools

- Nodemon
- Postman
- VS Code
- Git & GitHub

---

## ⚙ Installation

Clone the repository

```bash
git clone https://github.com/your-username/Student-Management-API.git
```

Move into the project folder

```bash
cd Student-Management-API
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
JWT_SECRET=yourSecretKey
```

---

## ▶ Running the Project

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

Server will run at

```
http://localhost:3000
```

---

# 📡 API Endpoints

## Authentication

### Login

```http
POST /auth/login
```

Body

```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

---

## Students

### Get All Students

```http
GET /students
```

Authentication Required ✅

---

### Get Student by ID

```http
GET /students/:id
```

Authentication Required ✅

---

### Create Student

```http
POST /students
```

Authentication Required ✅

Example

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "age": 20,
  "password": "123456",
  "role": "student"
}
```

---

### Update Student

```http
PUT /students/:id
```

Authentication Required ✅

---

### Delete Student

```http
DELETE /students/:id
```

Authentication Required ✅

Admin Authorization Required ✅

---

# 🔐 Authentication Flow

1. User logs in with email and password.
2. Password is verified using bcrypt.
3. JWT token is generated after successful authentication.
4. Client sends JWT in the Authorization header.
5. Authentication middleware verifies the JWT.
6. Authorization middleware checks the user's role.
7. If authorized, the request proceeds to the controller.

---

# 🛡 Security Features

- Password Hashing using bcrypt
- JWT Authentication
- Role-Based Authorization
- Protected Routes
- Environment Variables
- Secure Middleware Architecture

---

# 📸 API Testing

The API has been tested using **Postman**.


- Login API
- Create Student
- Get Students
- Update Student
- Delete Student
- Unauthorized Request
- Forbidden Request

---

# 🔮 Future Improvements

- Input Validation (Joi / Zod / express-validator)
- Global Error Handling
- Pagination
- Search & Filtering
- Sorting
- File Upload (Multer)
- Email Verification
- Password Reset
- Refresh Tokens
- Docker Support
- Unit Testing
- Swagger API Documentation
- Deployment on Render/Railway
- MongoDB Atlas Integration

---

# 🎯 Learning Outcomes

This project helped me understand:

- REST API Development
- Express.js Architecture
- MongoDB & Mongoose
- JWT Authentication
- bcrypt Password Hashing
- Role-Based Authorization
- Middleware
- CRUD Operations
- Environment Variables
- API Testing with Postman
- Backend Project Structure

---

# 👨‍💻 Author

**Ronak Choupal**

B.Tech Computer Science Engineering

Backend Developer | Node.js | Express.js | MongoDB

GitHub: https://github.com/your-github-username

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
