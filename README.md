# 📝 iNotebook – MERN Stack Notes App

iNotebook is a full-stack note-taking web application built using the MERN stack. It allows users to securely create, update, and delete notes with authentication.

---

## 🚀 Features

* 🔐 User Authentication (Signup/Login using JWT)
* 📝 Add, Edit, Delete Notes (CRUD Operations)
* ☁️ Notes stored securely in MongoDB
* ⚡ Fast and responsive UI
* 🔄 Dynamic updates without page reload

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* React Router
* Bootstrap

### Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure

```
iNotebook_react_project/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
├── src/
├── public/
├── package.json
└── README.md
```

---

## ▶️ Run Project Locally

### 1. Clone the repository

```
git clone https://github.com/Prateek8178/iNotebook_react_project.git
cd iNotebook_react_project
```

### 2. Install dependencies

```
npm install
```

### 3. Run frontend + backend together

```
npm run both
```

### 📍 Runs on:

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📦 API Endpoints

### Auth Routes:

* POST `/api/auth/createuser`
* POST `/api/auth/login`

### Notes Routes:

* GET `/api/notes/fetchallnotes`
* POST `/api/notes/addnote`
* PUT `/api/notes/updatenote/:id`
* DELETE `/api/notes/deletenote/:id`

---

## 💡 Key Highlights

* Implemented secure authentication using JWT
* Built RESTful APIs using Express.js
* Integrated MongoDB for persistent storage
* Used React for dynamic UI and state management
* Used concurrently to run frontend and backend together

---

## 🧠 What I Learned

* Full-stack development using MERN stack
* API creation and integration
* Authentication and middleware
* State management in React

---

## 👨‍💻 Author

**Prateek Sahu**
GitHub: https://github.com/Prateek8178

---

## ⭐ Note

This project is currently running locally. Deployment will be added soon.

---
