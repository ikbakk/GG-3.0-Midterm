const { errorResponse } = require('../utils/responses');
const {
  getProductByVideoId,
  searchProductsByTitle,
  createNewProduct
} = require('../services/products');

const getProducts = async (req, res) => {
  try {
    const { videoID } = req.body;
    const products = await getProductByVideoId(videoID);
    res.status(200).json({ status: 'Success', data: products });
  } catch (err) {
    errorResponse(err, res);
  }
};

const addProduct = async (req, res) => {
  try {
    const { title, price, urlProduct, videoID } = req.body;
    const requiredAttributes = {
      title,
      price,
      urlProduct,
      videoID
    };
    await createNewProduct({ ...requiredAttributes });
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
