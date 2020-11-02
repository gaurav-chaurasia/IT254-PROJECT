// ----------------------------------------
// import node modules
// ----------------------------------------
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// ----------------------------------------
// import local node modules
// ----------------------------------------
const User = require('../models/user');


/**
 * @authenticate , @serializeUser , and @deserializeUser are provided on User model by 
 * use of  "passport-local-mongoose" 
*/
exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());

const authenticateUser = (req, res, next) => {
	if (!req.user) {
		var err = new Error('You are not authenticated!');
		err.status = 401;
		return next(err);
	}
	else {
		next();
	}
}

const authorizeDoctor = (req, res, next) => {
    if (req.user.role !== 'DOCTOR') {
        var err = new Error('Access denied! you do not have permission for this operation.');
		err.status = 401;
		return next(err);
    }
    else {
        next();
    }
}

const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'ADMIN') {
        var err = new Error('Access denied! you do not have permission for this operation.');
		err.status = 401;
		return next(err);
    }
    else {
        next();
    }
}

module.exports = {
    authenticateUser,
    authorizeDoctor,
    authorizeAdmin,
}