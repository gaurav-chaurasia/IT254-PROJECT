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
const userController = require('../controllers/users');


/* GET users listing. */
router.get(
	ROUTES.USERS_PATH, 
	auth.authenticateUser,
	auth.authorizeAdmin,
	(req, res, next) => {
	res.send('respond with a resource');
});

router.get(
	ROUTES.REGISTRATION_PATH, 
	userController.getRegistrationPage
);

router.get(
	ROUTES.LOGIN_PATH, 
	userController.getLoginPage
);

router.get(
	ROUTES.LOGOUT_PATH, 
	userController.logoutUser
);


router.post(
	ROUTES.REGISTRATION_PATH, 
	userController.registerUser
);

router.post(
	ROUTES.LOGIN_PATH, 
	userController.loginUser
);

module.exports = router;
