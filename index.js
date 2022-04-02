// lib
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const pug = require('pug')
PORT = 3000;



//setup template engine
app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})
app.get('/sam', (req, res) => {
    res.render('sam')
})




app.listen(PORT, () => console.log('connected'));
