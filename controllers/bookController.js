const Book = require('../models/book');

let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
  ];

// GET: récupérer tous les livres
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET: récupérer un livre par son ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Livre non trouvé' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST: ajouter un nouveau livre
exports.createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PUT: mettre à jour un livre existant
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            return res.status(404).json({ message: 'Livre non trouvé' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE: supprimer un livre
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Livre non trouvé' });
        }
        res.status(200).json({ message: 'Livre supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};