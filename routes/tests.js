// ----------------------------------------
// import node modules
// ----------------------------------------
const express = require('express');
const router = express.Router();

// ----------------------------------------
// import local node modules
// ----------------------------------------
const auth = require('../auth/authenticate');
const testController = require('../controllers/tests');

router.get(
	'/tests',
	auth.authenticateUser,
	auth.authorizeDoctor,
	testController.test
);

module.exports = router;