const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'routes')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Accueil'});
});


app.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});

app.use('/authors', require('./controllers/authorController'));

var authorController = require('./controllers/authorController');

// Utilisation du contrôleur des auteurs
//app.get('/authors', authorController.getAuthors);


/*const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dev_db_url =
  "mongo:/localhost:127.0.0.1//mydatabase";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}*/