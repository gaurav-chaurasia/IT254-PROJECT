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
mongoose
  .connect(config.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('Connected Successfully to Database!'));

mongoose.connection.on('error', (err) => {
  console.log('Database connection error:' + err);
});
