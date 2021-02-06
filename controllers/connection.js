// ----------------------------------------
// import node modules
// ----------------------------------------

// ----------------------------------------
// import local node modules
// ----------------------------------------
const Connection = require('../db/models/connection');
const { ROUTES } = require('../config/ROUTES');

const insertNewConnection = async (req, res, next) => {
  try {
    const connetion = await Connection.create({
      user_id: req.user._id,
      connetion_id: req.param.c_id,
    });

    res.status(200);
    res.json({ status: 'success' });
  } catch (err) {
    res.json(new Error({ msg: 'Connection could not be created!!!', err: err }));
  }
};

const getConnectionId = async (req, res, next) => {
    try {
        const c_id = Connection.find({ user_id: req.user._id });
        res.status(200);
        res.json(c_id);
    } catch (err) {
        res.json(new Error({ msg: 'Connection could not be created!!!'}));   
    }
};

const removeConnection = async (req, res, next) => {
  try {
    const response = await Connection.findByIdAndDelete({user_id: req.user._id});

    res.status(200);
    res.json({ status: 'success', msg: 'connetion closed success fully!!' });
  } catch (err) {
      next(err);
  }
};

module.exports = {
  insertNewConnection,
  removeConnection,
};
