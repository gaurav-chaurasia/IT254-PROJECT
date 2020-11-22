// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const config = require('../config/config')[process.env.NODE_ENV || 'development'];


const getMapsIndexPage = (req, res, next) => {
    res.render(
        'maps/index',
        {
            API_KEY: config.GOOGLE_MAPS_APIKEY
        }
    );
}

module.exports = {
    getMapsIndexPage,
}