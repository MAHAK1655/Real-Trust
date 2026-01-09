# 🏡 Real-Trust – MERN Stack Real Estate Platform

**Real-Trust** is a full-stack real estate web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). The platform enables users to explore property listings, register/login securely, and interact with a modern, responsive UI designed for real-world real estate use cases.


## 🚀 Project Overview

Real-Trust is designed to simulate a **real-world property marketplace**, allowing users to:

* Browse and explore property listings
* Register and log in securely
* View property details
* Experience a responsive and user-friendly interface

This project focuses on **full-stack development**, **authentication**, and **frontend–backend integration**, making it suitable for learning, internships, and portfolio showcasing.


## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* JavaScript (ES6+)
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js

### Tools & Utilities

* Git & GitHub
* Postman (API Testing)
* dotenv (Environment variables)



## ✨ Features

* 🔐 **User Authentication**

  * Secure Register & Login using JWT
  * Password hashing with bcrypt

* 🏠 **Property Listings**

  * View and explore real estate properties
  * Clean and modern UI for browsing

* 📱 **Responsive Design**

  * Fully responsive across devices
  * Tailwind CSS based layout

* 🔄 **Frontend–Backend Integration**

  * RESTful APIs
  * Axios-based data fetching

* ⚡ **Fast Development Setup**

  * Vite for optimized frontend performance



## 📂 Project Structure

```
Real-Trust/
│
├── client/                # Frontend (React + Vite)
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── server/                # Backend (Node + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```



## ⚙️ Environment Variables

Create a `.env` file inside the **server** folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

For frontend (Vite):

```
VITE_BASE_URL=http://localhost:5000
```


## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MAHAK1655/Real-Trust.git
cd Real-Trust
```

### 2️⃣ Install Dependencies

#### Backend

```bash
cd server
npm install
npm run dev
```

#### Frontend

```bash
cd client
npm install
npm run dev
```

## 🌐 API Endpoints (Sample)

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/register` | User registration       |
| POST   | `/api/auth/login`    | User login              |
| GET    | `/api/properties`    | Fetch property listings |

## 🎯 Learning Outcomes

* Hands-on experience with MERN stack
* Understanding authentication workflows
* REST API design and consumption
* Environment configuration using dotenv
* Responsive UI design with Tailwind CSS
* Real-world project structuring

## 🚧 Challenges Faced

* Handling CORS and backend connection issues
* Debugging authentication and JWT token flow
* Managing environment variables in Vite
* Ensuring smooth frontend–backend communication

## 🔮 Future Enhancements

* Property posting by authenticated users
* Admin dashboard
* Image upload using Cloudinary
* Advanced property filters (price, location, type)
* Favorites & saved listings
* Deployment on Render / Vercel

## 👩‍💻 Author

**Mahak Ganveer**
Frontend Developer & Content Writer
🔗 GitHub: [@MAHAK1655](https://github.com/MAHAK1655)
