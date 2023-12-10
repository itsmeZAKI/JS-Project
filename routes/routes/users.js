var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
 db.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;
    res.render('users', { title: 'Utilisateurs', users: results });
 });
});

module.exports = router;