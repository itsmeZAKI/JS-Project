var express = require('express');
var router = express.Router();

var authors = require('../author.js');

router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});

router.use('/authors', authors);

module.exports = router;