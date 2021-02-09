// ----------------------------------------
// import node modules
// ----------------------------------------
const mongoose = require('mongoose');

// ----------------------------------------
// import local node modules
// ----------------------------------------
const config = require('../config/config')[process.env.NODE_ENV || 'development'];


// ----------------------------------------
// connect database
// ----------------------------------------
class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(config.DATABASE_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error:', err);
      });
  }
}

module.exports = new Database();
