// ----------------------------------------
// import node modules
// ----------------------------------------
const express = require('express');
const router = express.Router();

// ----------------------------------------
// import local node modules
// ----------------------------------------
const userController = require('../controllers/users');


/* GET users listing. */
router.get('/', (req, res, next) => {
	res.send('respond with a resource');
});

router.get(
	'/register', 
	userController.getRegistrationPage
);

router.get(
	'/login', 
	userController.getLoginPage
);

router.get(
	'/logout', 
	userController.logoutUser
);


router.post(
	'/register', 
	userController.registerUser
);

router.post(
	'/login', 
	userController.loginUser
);

module.exports = router;
