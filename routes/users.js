// ----------------------------------------
// import node modules
// ----------------------------------------
const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../services/auth/oauth');

// ----------------------------------------
// import local node modules
// ----------------------------------------
const auth = require('../services/auth/authenticate');
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


// ----------------------------------------
// passport google oauth 2.0
// ----------------------------------------
router.get(
	ROUTES.GOOGLE_OAUTH_S_PATH,
	auth.authenticateUser,
	(req, res, next) => {
		req.flash(
      'success',
      `Successfully authenticated using Google Accounts`,
    );
		res.redirect(ROUTES.ROOT_PATH);
	}
);

router.get(
	ROUTES.GOOGLE_OAUTH_F_PATH,
	(req, res, next) => {
		req.flash(
			'danger', 
			'somthing went wrong, authentication failed!'
		);
		res.redirect(ROUTES.ROOT_PATH);
	}
);

router.get(
	ROUTES.GOOGLE_OAUTH_PATH,
	passport.authenticate(
		'google', 
		{ 
			scope:[ 'email', 'profile' ] 
		}
	)
);

router.get(
	ROUTES.GOOGLE_OAUTH_CB_PATH,
    passport.authenticate( 
		'google', 
		{
			successRedirect: ROUTES.GOOGLE_OAUTH_S_PATH,
			failureRedirect: ROUTES.GOOGLE_OAUTH_F_PATH
		}
	)
);

module.exports = router;
