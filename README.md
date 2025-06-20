# 📚 BookNook

BookNook is a full-stack web application inspired by Goodreads.  
Users can search for books using the Google Books API, save books to personal bookshelves, and manage their collection — all with secure login.

---

## ⚙️ Tech Stack

-   Frontend: React, Vite, Tailwind CSS
-   Backend: Node.js, Express.js
-   Database: MongoDB (Atlas) via Mongoose
-   Authentication: JWT
-   External API: Google Books API

---

## 🚀 Current Features

-   🔍 Book search using Google Books API
-   ✅ Save books to your personal bookshelf
-   🗑 Delete saved books
-   🧾 View your saved bookshelf
-   🔐 User registration & login (JWT auth)
-   🔒 Protected routes for saved books (per user)
-   💾 Full CRUD functionality with MongoDB

---

## 🚧 Project Status

✅ Frontend scaffold complete  
✅ Tailwind CSS integrated  
✅ Google Books API connected  
✅ MongoDB integration working  
✅ Authentication implemented  
🚧 Bookshelf linked to user accounts in progress  
🚧 UI polish and review system planned

---

## 🎯 Upcoming Features

-   Filter bookshelves by status (Read / Currently Reading / Want to Read)
-   Edit and update saved book entries
-   User reviews and star ratings
-   Deployment to production (frontend + backend)
-   Responsive UI polish

---

## 🌐 APIs Used

-   [Google Books API](https://developers.google.com/books/docs/v1/using)

---

## 📦 Installation

1. Clone the repository

```
bash
git clone https://github.com/yourusername/booknook.git
```

2. Install dependecnies

```
cd client
npm install

cd ../server
npm install
```

3. Start development servers

```
# Backend
node index.js

# Frontend
cd client
npm run dev
```
