const express = require('express');
const dotenv = require('dotenv');
// const pool = require('./lib/db');
const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello world!');
});

const productController = require('./product/product.controller');
const userController = require('./user/user.controller');

// Products endpoint
app.use('/products', productController);
// Users endpoint
app.use('/users', userController);

app.listen(port, () => {
  console.log('Server is running well' + port);
});
