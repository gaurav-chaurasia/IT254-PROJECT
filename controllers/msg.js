// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const { ROUTES } = require('../config/ROUTES');

const getMessengerPage = (req, res) => {
  res.render('msg/index', {
    layout: './layouts/msg',
  });
};

module.exports = {
  getMessengerPage,
};
