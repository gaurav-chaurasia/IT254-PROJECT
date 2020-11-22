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
const mapController = require('../controllers/maps');

router.get(
	ROUTES.MAPS_PATH,
	mapController.getMapsIndexPage,
);

router.get(
	ROUTES.ADD_LOCATION_PATH,
	auth.authenticateUser,
	(req, res, next) => {
		req.flash(
			'info', 
			'This route is Under Progress!!!'
		);
		res.redirect(ROUTES.ROOT_PATH);
	}
);

module.exports = router;