// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const { ROUTES } = require('../config/ROUTES');


const getMain=(req, res) => {
    res.render(
        'home/main'
    );
};

module.exports = {
    getMain
}