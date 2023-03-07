const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const Product = require('./models/inventory');

const db = require('mongoose');

db.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully Connected to MongoDB database');
    }).catch(err => {
        console.log('Error connecting to MongoDB database', err);
    })



app.use(express.json());

app.get('/', (req, res) => {
    res.send('Testing the route')
})


app.post('/product', (req, res) => {
    const { quantity, operation } = req.body;
    const product = new Product({ quantity, operation });
    product.save()
        .then(() => res.json(product))
        .catch(err => res.json(err))
})

app.listen(3000, (err) => {
    if (err) {
        console.log('Error in running the server');
    } else {
        console.log('Server up and running on port 3000');
    }
})
