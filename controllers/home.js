// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------

const getMain = (req, res) => {
    res.render('home/main');
};

module.exports = {
    getMain
}