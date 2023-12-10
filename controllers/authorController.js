const express = require('express');
const router = express.Router();

//Mockup des données des auteurs (à remplacer par des données réelles provenant d'une base de données)
const authors = [
 { id: 1, name: 'Author 1' },
 { id: 2, name: 'Author 2' },
 { id: 3, name: 'Author 3' },
];

const Author = require('../model/author.js');

// Récupérer la liste des auteurs
router.get('/', async (req, res) => {
 res.json(authors);
});

// Récupérer un auteur par son ID
router.get('/:id', async (req, res) => {
 const author = authors.find(a => a.id === parseInt(req.params.id));
 if (!author) return res.status(404).send('Author not found');
 res.json(author);
});

// Ajouter un nouvel auteur
router.post('/', async (req, res) => {
 const author = { id: authors.length + 1, name: req.body.name };
 authors.push(author);
 res.status(201).json(author);
});

// Mettre à jour un auteur existant
router.put('/:id', async (req, res) => {
 const author = authors.find(a => a.id === parseInt(req.params.id));
 if (!author) return res.status(404).send('Author not found');
 author.name = req.body.name;
 res.json(author);
});

// Supprimer un auteur
router.delete('/:id', async (req, res) => {
 const author = authors.find(a => a.id === parseInt(req.params.id));
 if (!author) return res.status(404).send('Author not found');
 const index = authors.indexOf(author);
 authors.splice(index, 1);
 res.status(204).send();
});

module.exports = router;