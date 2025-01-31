const express = require('express');
const hbs = require('hbs')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Road Trip by TEMPLATED',
        heading: 'Road Trip',
        nombre: 'Darwin Perez'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic');
});

app.get('/elements', (req, res) => {
    res.render('elements');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/olds/404.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
