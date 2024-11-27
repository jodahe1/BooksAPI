
 📚 Books Collection API

This project is a RESTful API for managing a collection of books. It allows users to perform CRUD operations (Create, Read, Update, Delete) on books, with proper data validation and database integration using **MongoDB Atlas**.


 🚀 Features

- Fetch all books.
- Add a new book with validation for title, author, ISBN, and published year.
- Update an existing book by ID.
- Delete a book by ID.
- Custom endpoints:
  - **GET /books/recommendations**: Suggests a random book.
  - **POST /books/favorite**: Marks a book as a favorite.

🛠️ Technologies

- **Node.js**
- **Express.js**
- **MongoDB Atlas** with **Mongoose**
- **dotenv** for environment variables
- **Joi** for request validation



📂 Folder Structure


📁 books-api
├── 📂 config
│   └── db.js                # MongoDB connection setup
├── 📂 controllers
│   └── bookController.js    # Business logic for book routes
├── 📂 models
│   └── bookModel.js         # Mongoose schema and model
├── 📂 routes
│   └── bookRoutes.js        # API endpoints for books
│   
├── .env                     # Environment variables
├── server.js                # Entry point of the application
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation


 ⚙️ Setup and Usage
 Prerequisites
- Node.js installed (v16 or higher recommended)
- MongoDB Atlas cluster set up (or a local MongoDB instance)
- **Insomnia** or **Postman** for API testing

 Clone the Repository
```bash
git clone https://github.com/jodahe1/BooksAPI.git
cd books-api
```

 Install Dependencies
```bash
npm install
```
Configure Environment Variables
1. Create a `.env` file in the root directory.
2. Add the following:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/booksDB?retryWrites=true&w=majority
   PORT=3000
   ```
   Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

Run the Server
```bash
npm run dev
```
- The API will be accessible at `http://localhost:3000`.

---

📋 API Endpoints
 Base URL
```
http://localhost:3000
```

 Routes

| Method | Endpoint                   | Description                        |
|--------|----------------------------|------------------------------------|
| GET    | `/books`                   | Fetch all books                   |
| POST   | `/books`                   | Add a new book                    |
| PUT    | `/books/:id`               | Update a book by ID               |
| DELETE | `/books/:id`               | Delete a book by ID               |
| GET    | `/books/recommendations`   | Suggest a random book             |
| POST   | `/books/favorite`          | Mark a book as favorite           |

🧪 Testing the API

1. Open **Insomnia** (or Postman).
2. Use the following endpoints with appropriate HTTP methods:
   - **GET /books**:
     - No body required.
   - **POST /books**:
     ```json
     {
       "title": "Clean Code",
       "author": "Robert C. Martin",
       "isbn": "9780132350884",
       "publishedYear": 2008
     }
     ```
   - **PUT /books/:id**:
     ```json
     {
       "title": "The Pragmatic Programmer",
       "author": "Andrew Hunt",
       "isbn": "9780201616224",
       "publishedYear": 1999
     }
     ```
   - **DELETE /books/:id**:
     - No body required.
   - **GET /books/recommendations**:
     - No body required.
   - **POST /books/favorite**:
     ```json
     {
       "id": "60d21b4667d0d8992e610c85"
     }
     ```

🖥️ Deployment

1. Deploy the API on a public hosting platform like Render, Vercel, or Fly.io.
2. Update the connection string in the `.env` file to use the production MongoDB cluster.

---

🛡️ Error Handling

- Invalid requests return **400 Bad Request** with a detailed error message.
- Non-existent resources return **404 Not Found**.
- Server errors return **500 Internal Server Error**.

Thank You!!!!!!!!!!!!!!!!!!!!!!!!