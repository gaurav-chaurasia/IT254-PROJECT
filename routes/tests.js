// ----------------------------------------
// import node modules
// ----------------------------------------
const express = require('express');
const router = express.Router();

// ----------------------------------------
// import local node modules
// ----------------------------------------
const auth = require('../auth/authenticate');
const { ROUTES } = require('../config/ROUTES');
const testController = require('../controllers/tests');

router.get(
	ROUTES.TESTS_PATH,
	auth.authenticateUser,
	auth.authorizeDoctor,
	testController.test
);

module.exports = router;