const mongoose = require('mongoose');

const connectToDB = url => {
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.once('connected', () => {
      console.log('Connected to database');
    });
    db.on('error', error => console.log(error.message));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectToDB;
