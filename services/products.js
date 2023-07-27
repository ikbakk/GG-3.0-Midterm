const { Product } = require('../models');
const { validateVideoId } = require('../services/videos');
const { BadRequestError } = require('../utils/customErrors');

const getProductByVideoId = async videoID => {
  await validateVideoId(videoID);
  const products = await Product.find({ videoID });
  return products;
};

const createNewProduct = async ({ title, price, urlProduct, videoID }) => {
  if (!title || !price || !urlProduct || !videoID) {
    throw new BadRequestError('Missing required attributes');
  }

  await validateVideoId(videoID);
  const product = new Product({
    title,
    price,
    urlProduct,
    videoID
  });
  await product.save();
};

const searchProductsByTitle = async title => {
  if (!title) {
    throw new BadRequestError('Title is required');
  }

  const regex = new RegExp(title, 'i');
  const products = await Product.find({ title: { $regex: regex } });
  return products;
};
module.exports = {
  getProductByVideoId,
  searchProductsByTitle,
  createNewProduct
};
