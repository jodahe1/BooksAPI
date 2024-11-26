require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const booksRoutes = require('./routes/books');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to database
connectDB();

// Routes
app.use('/books', booksRoutes);

// Use PORT from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
