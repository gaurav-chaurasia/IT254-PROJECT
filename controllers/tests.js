// ----------------------------------------
// import node modules
// ----------------------------------------

const { ROUTES } = require("../config/ROUTES");

// ----------------------------------------
// import local node modules
// ----------------------------------------


const test = (req, res, next) => {
    res.render("test");
}

module.exports = {
    test,
}