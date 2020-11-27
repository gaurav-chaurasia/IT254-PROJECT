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
const { find } = require('../models/location');
const Location = require('../models/location');

router.get(
	ROUTES.MAPS_PATH,
	mapController.getMapsIndexPage,
);

// router.post(
// 	ROUTES.ADD_LOCATION_PATH
// 	auth.authenticateUser,
// 	mapController.addLocationToLocationCollection,
// );

router.post(
	ROUTES.ADD_LOCATION_PATH,
	auth.authenticateUser, 
	async (req, res) => {
		try {
			const loc = await Location.find({ user: req.user._id });
			if (loc) {
				const newLoc = await Location.create({
					latitude: req.body.latitude,
					longitude: req.body.longitude,
					accuracy: req.body.accuracy,
					user: req.user._id
				});
				// console.log(newLoc);
				req.flash(
					'success', 
					'Your location is succesfully added!!!'
				);
				res.redirect('/maps');
			} else {
				req.flash(
					'info', 
					'Your location is already in database you can only perform UPDATE/DELETE'
				);
				res.redirect(ROUTES.MAPS_PATH);
			}
		} catch (err) {
			req.flash(
				'info', 
				'Opps! Somthing went wrong please try aging!'
			);
			res.redirect(ROUTES.MAPS_PATH);
		}
	}
);

router.put(
	ROUTES.UPDATE_LOCATION_PATH,
	auth.authenticateUser, 
	async (req, res) => {
		
		try {
			const updatedLoc = await Location.findOneAndUpdate(
				{ user: req.user._id }, 
				{ $set: req.body }, 
				{ new: true });
			console.log(updatedLoc);
			req.flash(
				'success', 
				'Your location is succesfully updated!!!'
			);
			res.redirect(ROUTES.MAPS_PATH);
		} catch (err) {
			req.flash(
				'success', 
				'Your location could not be updated, please try again!!!'
			);
			res.redirect(ROUTES.MAPS_PATH);
		} 
	}
);

router.delete(
	ROUTES.DELETE_LOCATION_PATH,
	auth.authenticateUser, 
	async (req, res) => {
		try {
			const obj = await Location.findOneAndDelete({ user: req.user });
			req.flash(
				'success', 
				'Your location is succesfully removed!!!'
			);
			res.redirect(ROUTES.MAPS_PATH);
		} catch (err) {
			req.flash(
				'info', 
				'Opps! Somthing went wrong please try aging!'
			);
			res.redirect(ROUTES.MAPS_PATH);
		}
	}
);

module.exports = router;