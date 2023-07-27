const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  urlProduct: {
    type: String,
    required: true
  },
  videoID: {
    type: mongoose.Types.ObjectId,
    ref: 'Video'
  }
});

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
