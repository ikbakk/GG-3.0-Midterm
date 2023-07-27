const { Product } = require('../models');
const { validateVideoId } = require('../services/videos');
const { BadRequestError } = require('../utils/customErrors');

const getProductByVideoId = async videoId => {
  await validateVideoId(videoId);
  const products = await Product.find({ videoId });
  return products;
};

const createNewProductInstances = async (title, price, urlProduct, videoId) => {
  if (!title || !price || !urlProduct || !videoId) {
    throw new BadRequestError('Missing required attributes');
  }

  await validateVideoId(videoId);
  const product = new Product({
    title,
    price,
    urlProduct,
    videoId
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
  createNewProductInstances
};
