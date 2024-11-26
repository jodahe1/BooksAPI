require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const booksRoutes = require('./routes/books');

const app = express();


app.use(bodyParser.json());


connectDB();


app.use('/books', booksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
