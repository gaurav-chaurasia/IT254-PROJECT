// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const { ROUTES } = require('../config/ROUTES');
const Disease = require('../models/disease');


const getAddDiseasesPage = (req, res) => {
    res.render('disease/add');
};

const getAllDiseases = async (req, res) => {
    try {
        const disease = await Disease.find({});
        res.render('disease/index', {disease: disease});
    } catch (err) {
        req.flash('danger', 'Opps! somthing went wrong, couldn\'t retrive requierd details');
        res.redirect(ROUTES.ROOT_PATH);
    }
};

const addDiseasesToDiseaseCollection = async (req, res, next) => {
    try {
        const newDisease = await Disease.create(req.body);
        if (newDisease) {
            req.flash('success', 'Disease successfully added to the collection');
            res.redirect(ROUTES.DISEASES_PATH);
        }
    } catch (err) {
        req.flash('danger', 'Somthing went wrong please try aging!');
        res.redirect(ROUTES.ADD_DISEASES_PATH);
    }
};

module.exports = {
    getAllDiseases,
    getAddDiseasesPage,
    addDiseasesToDiseaseCollection,
}