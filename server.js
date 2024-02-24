const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

// getting database url from .env file
const URL = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);

// create database connection
mongoose
  .connect(URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((con) => {
    console.log('Connected to database!');
  })
  .catch((err) => console.error(err));

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`listening on port: ${port}`);
});
