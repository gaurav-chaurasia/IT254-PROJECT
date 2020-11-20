// ----------------------------------------
// import node modules
// ----------------------------------------
const express = require('express');
const router = express.Router();

// ----------------------------------------
// import local node modules
// ----------------------------------------
/**
 * @param { auth } @containes authentication and autherization functions
 * @param { ROUTES } @has all routes for application
 */
const auth = require('../auth/authenticate');
const { ROUTES } = require('../config/ROUTES');
const medicineController = require('../controllers/medicines');

router.get(
    ROUTES.MEDICINES_PATH,
    medicineController.getAllMedicines,
);

router.get(
    ROUTES.ADD_MEDICINES_PATH,
    auth.authenticateUser,
    auth.authorizeDoctor,
    medicineController.getAddMedicinesPage,
);

router.post(
    ROUTES.ADD_MEDICINES_PATH,
    auth.authenticateUser,
    auth.authorizeDoctor,
    medicineController.addMedicinesToMedicineCollection,
);

module.exports = router;