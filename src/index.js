const express = require('express');
const morgan = require('morgan');
const handlebar = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes');


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebar.engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/Views'));

// Route
route(app);

// 127.0.0.1 - localhost
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))