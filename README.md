# 📚 BookNook

**BookNook** is a full-stack web app inspired by Goodreads.  
Users can search for books via the Google Books API, save books to their personal bookshelf, and manage their saved books — all backed by a real database.

---

## 🚀 Live Features

- 🔎 Search for books using Google Books API
- ✅ Save books to your personal bookshelf
- 🗑 Delete books from your bookshelf
- 💾 Full backend database with MongoDB
- 🔗 Full stack integration with React, Express, MongoDB, Axios

## 💡 Next Planned Features
- User accounts & login system
- Private bookshelves per user
- Ratings & reviews
- Deployment to production
  
---

## 🛠 Tech Stack

| Frontend | Backend | Database | Deployment |
|----------|---------|----------|-------------|
| React (Vite) | Node.js + Express | MongoDB Atlas | (local for now) |
| Tailwind CSS | Axios | Mongoose |  |

---

## 📦 Installation & Setup

1️⃣ Clone the repo

```
bash
git clone https://github.com/kittykatkaro/booknook.git
cd booknook
```

2️⃣ Install dependencies

```
cd client
npm install

cd ../server
npm install
```

3️⃣ Create .env file inside /server folder
```
MONGO_URI=your_mongodb_connection_string_here
PORT=5000
```

4️⃣ Start servers

```
# Backend (from /server)
node index.js

# Frontend (from /client)
npm run dev
```

--- 

## 📊 Current Project Status
✅ MVP complete: full CRUD bookshelf functionality
✅ Live API integration with Google Books API
✅ MongoDB database fully functional
🚧 Next up: User authentication & multi-user support

---

🌐 APIs Used
[Google Books API](https://developers.google.com/books/docs/v1/using?hl=de)
