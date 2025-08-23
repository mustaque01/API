# Node.js + MongoDB REST API

A simple RESTful API built with **Node.js, Express, and MongoDB**.
This project demonstrates **CRUD operations (Create, Read, Update, Delete)** using MongoDB as the database.

---

## 📌 Features

* ➕ Create new users
* 📖 Fetch all users
* ✏️ Update user by ID
* ❌ Delete user by ID
* 🌱 Seed 50 dummy users using Faker.js

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB, Mongoose
* **Others:** Dotenv, CORS, Faker.js, Nodemon

---

## 📂 Project Structure

```
node-mongo-api/
│
├── server.js             # Main entry point
├── seed.js               # Seeder script for dummy users
├── .env                  # Environment variables
├── package.json          
│
├── config/
│   └── db.js             # Database connection
│
├── models/
│   └── User.js           # Mongoose schema
│
├── routes/
│   └── userRoutes.js     # API routes
│
└── controllers/
    └── userController.js # API logic
```

---

## ⚙️ Installation & Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/mustaque01/API.git
   cd node-mongo-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add a `.env` file in the root with the following:

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/node_api
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

---

## 🌱 Seed Dummy Data

To generate **50 random users**, run:

```bash
node seed.js
```

Now check `users` collection in MongoDB Compass.

---

## 📌 API Endpoints

### ➕ Create User

```http
POST /api/users
```

Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

### 📖 Get All Users

```http
GET /api/users
```

### ✏️ Update User

```http
PUT /api/users/:id
```

### ❌ Delete User

```http
DELETE /api/users/:id
```

---

## 🙌 Acknowledgements

* [Express.js](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* [Faker.js](https://fakerjs.dev/)
* [MongoDB](https://www.mongodb.com/)

---
