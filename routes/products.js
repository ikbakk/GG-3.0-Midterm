const productsRouter = require('express').Router();
const {
  getProducts,
  addProduct,
  searchProducts
} = require('../controllers/products');

productsRouter.get('/', getProducts);
productsRouter.get('/search', searchProducts);
productsRouter.post('/', addProduct);

module.exports = productsRouter;
