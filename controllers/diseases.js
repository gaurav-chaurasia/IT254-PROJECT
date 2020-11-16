// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const { ROUTES } = require('../config/ROUTES');
const Disease = require('../models/disease');


const getAddDiseasesPage = (req, res, next) => {
    res.render('disease/add');
};

const getAllDiseases = async (req, res, next) => {
    try {
        const disease = await Disease.find({});
        res.render('disease/index', {disease: disease});
    } catch (err) {
        req.flash('danger', 'Opps! somthing went wrong, couldn\'t retrive requierd details');
        res.redirect(ROUTES.ROOT_PATH);
    }
};

module.exports = {
    getAllDiseases,
    getAddDiseasesPage,
}