// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const MSG        = require('../db/models/msg');
const { ROUTES } = require('../config/ROUTES');


const main = (req, res, next) => {};

const getMessengerPage = (req, res) => {
  res.render('msg/index', {
    layout: './layouts/msg',
  });
};


module.exports = {
  getMessengerPage,
  main,
};
