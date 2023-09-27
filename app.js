// Importing Packages

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// initialize express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.urlencoded({ extended: true }));
    
app.use(express.json());

// using routes for products
app.use('/products', require('./routes/products'));

// server to run
app.listen(5000, function(){
    console.log('eCommerce_API is on Live  http://localhost:5000/products');
});