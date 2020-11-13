// ----------------------------------------
// import node modules
// ----------------------------------------
const passport = require('passport');

// ----------------------------------------
// import local node modules
// ----------------------------------------
const config = require('../config/config')[process.env.NODE_ENV || 'development'];
const { ROUTES } = require('../config/ROUTES');
const User = require('../models/user');


const getRegistrationPage = (req, res, next) => {
    res.render("auth/register");
}

const getLoginPage = (req, res, next) => {
    res.render("auth/login");
}

const registerUser = (req, res) => {
	User.register(new User({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
		dob: req.body.dob,
		gender: req.body.gender,
    }), req.body.password, (err, user) => {
		if(err) {
			// res.status(500);
			// res.json({err: err});
			req.flash('success', err);
			res.redirect(ROUTES.LOGIN_PATH);
			
		}
		else {
			passport.authenticate('local')(req, res, () => {
				// res.status(200);
				// res.json({success: true, message: 'Registration Successful!'});
				req.flash('success', 'Registration Successful!');
				res.redirect(ROUTES.LOGIN_PATH);
			});
		}
	});
}

const loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
		if (err) 
			return next(err);

		if (!user) {
			// res.status(401);
			// res.json({
            //     success: false, 
            //     message: 'Login Unsuccessful!', 
            //     err: info
			// });
			req.flash('info', info);
			res.redirect(ROUTES.LOGIN_PATH);
		}
		req.logIn(user, (err) => {
			if(err) {
				req.flash('danger', 'Login Unsuccessful!');
				res.redirect(ROUTES.LOGIN_PATH);
			}
			
			req.flash('success', 'You are Successfully logged in!');
			res.redirect(ROUTES.ROOT_PATH);
		});
	}) (req, res, next);
}

const logoutUser = (req, res, next) => {
    if (req.session) {
		req.session.destroy();
		res.clearCookie(config.session);
		res.redirect(ROUTES.ROOT_PATH);
	}
	else {
		var err = new Error('You are not logged in!');
		err.status = 403;
		next(err);
	}
}

module.exports = {
    getRegistrationPage,
    getLoginPage,
    registerUser,
    loginUser,
    logoutUser,
}