const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 20 },
    { id: 3, name: 'Produit 3', price: 30 },
];

router.get('/', (req, res) => {
    res.render('catalog', { title: 'Catalogue', products});
});

router.get('/product/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.send('Produit non trouvé');
    res.render('product', { title: product.name, product});
});

module.exports = router;