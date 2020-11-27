// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const config   = require('../config/config')[process.env.NODE_ENV || 'development'];
const { ROUTES } = require('../config/ROUTES');
const Location = require('../models/location');

const getMapsIndexPage = async (req, res, next) => {
    try {
        let user_location = null, locations = null;
        if (req.user) {
            user_location = await Location.find({ user: req.user._id }, { _id: 0 });
            locations = await Location.find({ user: { $ne: req.user._id } }, { _id: 0 });
        } else{
            locations = await Location.find({}, { _id: 0 });
        } 

        res.render(
            'maps/index',
            {
                locations: locations,
                user_location: user_location,
                API_KEY: config.GOOGLE_MAPS_APIKEY
            }
        );
    } catch (err) {
        req.flash(
            'info', 
            'Opps! Somthing went wrong please try aging!'
        );
        res.redirect(ROUTES.ROOT_PATH);
    }
}

const addLocationToLocationCollection = async (req, res, next) => {
    console.log(req.body);
    res.redirect(ROUTES.MAPS_PATH);
}

module.exports = {
    getMapsIndexPage,
    addLocationToLocationCollection,
}