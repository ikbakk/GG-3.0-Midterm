require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectToDB = require('./utils/database');
const { commentsRouter, videosRouter, productsRouter } = require('./routes');

const { unknownEndpoint } = require('./utils/middleware');

const app = express();
const databaseUrl = process.env.DB_URL ?? '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/comments', commentsRouter);
app.use('/api/videos', videosRouter);
app.use('/api/products', productsRouter);
app.use(unknownEndpoint);

connectToDB(databaseUrl);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
