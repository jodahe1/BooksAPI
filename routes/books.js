const express = require('express');
const Joi = require('joi');
const Book = require('../models/book');

const router = express.Router();


const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string().required(),
    publishedYear: Joi.number().required(),
    favorite: Joi.boolean().optional(),
});


router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


router.post('/', async (req, res) => {
    try {
        const { error } = bookSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { error } = bookSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ error: 'Book not found' });

        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });

        res.status(200).json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


router.get('/recommendations', async (req, res) => {
    try {
        const books = await Book.find();
        if (books.length === 0) return res.status(404).json({ error: 'No books available' });

        const randomBook = books[Math.floor(Math.random() * books.length)];
        res.status(200).json(randomBook);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
