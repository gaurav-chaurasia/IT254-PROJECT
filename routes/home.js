// ----------------------------------------
// import node modules
// ----------------------------------------
const express = require('express');
const router = express.Router();

// ----------------------------------------
// import local node modules
// ----------------------------------------
/**
 * @param { auth } @containes authentication and autherization functions
 * @param { ROUTES } @has all routes for application
 */
const { ROUTES } = require('../config/ROUTES');
const homeController = require('../controllers/home');

router.get(
	ROUTES.ROOT_PATH,
	homeController.getMain	
);

module.exports = router;