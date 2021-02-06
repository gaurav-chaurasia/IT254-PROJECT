// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const MSG        = require('../db/models/msg');
const Connection = require('../db/models/connection');


const getMessengerPage = async (req, res, next) => {
  try {
    const connections = await Connection.find({}).sort({ updatedAt: 1 }).populate('user_id'); 
    res.render('msg/index', {
      layout: './layouts/msg',
      connections: connections
    });
  } catch (err) {
    next(err);
  }
};

const getMessages = async (req, res, next) => {
  try {
    const U1_ID = req.user._id;
    const U2_ID = req.params.uid; 

    const msgs = await MSG.find({
      $or: [
        {
          $and: [{ sender_id: U1_ID }, { receiver_id: U2_ID }],
        },
        {
          $and: [{ sender_id: U2_ID }, { receiver_id: U1_ID }],
        },
      ],
    }).sort({ updatedAt: 1 });

    res.status(200);
    res.json(msgs);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getMessengerPage,
  getMessages,
};
