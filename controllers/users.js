// ----------------------------------------
// import node modules
// ----------------------------------------
const passport = require('passport');

// ----------------------------------------
// import local node modules
// ----------------------------------------
const config = require('../config/config')[process.env.NODE_ENV || 'development'];
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
    }), req.body.password, (err, user) => {
		if(err) {
			res.status(500);
			res.setHeader('Content-Type', 'application/json');
			res.json({err: err});
		}
		else {
			passport.authenticate('local')(req, res, () => {
				res.status(200);
				res.setHeader('Content-Type', 'application/json');
				res.json({success: true, status: 'Registration Successful!'});
			});
		}
	});
}

const loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
		if (err) 
			return next(err);

		if (!user) {
			res.status(401);
			res.setHeader('Content-Type', 'application/json');
			res.json({
                success: false, 
                status: 'Login Unsuccessful!', 
                err: info
            });
		}
		req.logIn(user, (err) => {
			if(err) {
				res.status(401);
                res.setHeader('Content-Type', 'application/json');
				res.json({
                    success: false, 
                    status: 'Login Unsuccessful!', 
                    err: 'Could not login user'
                });
            }
            
			res.status(200);
			res.json({success: true, status: 'You are Successfully logged in!'});
		});
	}) (req, res, next);
}

const logoutUser = (req, res, next) => {
    if (req.session) {
		req.session.destroy();
		res.clearCookie(config.session);
		res.redirect('/');
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