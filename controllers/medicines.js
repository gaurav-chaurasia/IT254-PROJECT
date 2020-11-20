// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const { ROUTES } = require('../config/ROUTES');
const Medicine = require('../models/medicine');
const Disease = require('../models/disease');


const getAddMedicinesPage = async (req, res) => {
    try {
        const diseases = await Disease.find({}, {name:1, scores: 1, _id: 0});
        res.render(
            'medicines/add', {
            diseases: diseases
        });
    } catch (err) {
        req.flash(
            'danger', 
            'Opps! somthing went wrong, couldn\'t retrive requierd details'
        );
        res.redirect(ROUTES.ROOT_PATH);
    }
};

const getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find({}).sort({'updatedAt': -1});
        res.render(
            'medicines/index', {
                medicines: medicines
        });
    } catch (err) {
        req.flash(
            'danger', 
            'Opps! somthing went wrong, couldn\'t retrive requierd details'
        );
        res.redirect(ROUTES.ROOT_PATH);
    }
};

const addMedicinesToMedicineCollection = async (req, res, next) => {
    try {
        const newMedicine = await Medicine.create(req.body);
        if (newMedicine) {
            req.flash(
                'success', 
                'Medicine successfully added to the collection'
            );
            res.redirect(ROUTES.MEDICINES_PATH);
        }
    } catch (err) {
        req.flash(
            'danger', 
            'Somthing went wrong please try aging!'
        );
        res.redirect(ROUTES.ADD_MEDICINES_PATH);
    }
}

module.exports = {
    getAllMedicines,
    getAddMedicinesPage,
    addMedicinesToMedicineCollection,
}