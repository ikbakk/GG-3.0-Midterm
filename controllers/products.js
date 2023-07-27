const { errorResponse } = require('../utils/responses');
const {
  getProductByVideoId,
  searchProductsByTitle,
  createNewProductInstances
} = require('../services/products');

const getProducts = async (req, res) => {
  try {
    const { videoId } = req.body;
    const products = await getProductByVideoId(videoId);
    res.status(200).json({ status: 'Success', data: products });
  } catch (err) {
    errorResponse(err, res);
  }
};

const addProduct = async (req, res) => {
  try {
    const { title, price, urlProduct, videoId } = req.body;
    await createNewProductInstances(title, price, urlProduct, videoId);
    res.status(201).json({ status: 'Success' });
  } catch (err) {
    res.status(400).json({ status: 'Failed' });
  }
};

const searchProducts = async (req, res) => {
  try {
    const { title } = req.query;
    const products = await searchProductsByTitle(title);
    res.status(200).json({ status: 'Success', data: products });
  } catch (err) {
    errorResponse(err, res);
  }
};

module.exports = {
  getProducts,
  addProduct,
  searchProducts
};
