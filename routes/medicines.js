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
const auth = require('../services/auth/authenticate');
const { ROUTES } = require('../config/ROUTES');
const medicineController = require('../controllers/medicines');

router.get(
    ROUTES.MEDICINES_PATH,
    medicineController.getAllMedicines,
);

router.get(
    ROUTES.RECENT_MEDICINE_PATH,
    medicineController.getRecentMedicines,
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
    auth.authorizeOnlyDoctor,
    medicineController.addMedicinesToMedicineCollection,
);

module.exports = router;