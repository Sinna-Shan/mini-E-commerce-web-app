const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRouter');
const app = express();

app.use(express.static(`${__dirname}/uploads`));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use('/api/v1/products', productRouter);

module.exports = app;
