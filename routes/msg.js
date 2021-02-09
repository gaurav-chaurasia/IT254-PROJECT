// ----------------------------------------
// import node modules
// ----------------------------------------
const express = require('express');
const router  = express.Router();

// ----------------------------------------
// import local node modules
// ----------------------------------------
const auth          = require('../services/auth/authenticate');
const msgController = require('../controllers/msg'); 
const { ROUTES }    = require('../config/ROUTES');

router.get(
    ROUTES.MSG_PATH, 
    auth.authenticateUser, 
    msgController.getMessengerPage,
);

router.get(
    ROUTES.MSG_CHAT_PATH,
    auth.authenticateUser,
    msgController.getMessages,
);

module.exports = router;
