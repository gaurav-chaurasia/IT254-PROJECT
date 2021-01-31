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

// user with whom logged users has had chat
const getAllKnownUsers = async (req, res, next) => {
  try {
    const users = MSG.find({});
  } catch (err) {

  }
};


module.exports = {
  getMessengerPage,
  getAllKnownUsers,
  main,
};
