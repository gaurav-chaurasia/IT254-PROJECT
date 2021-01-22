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
const diseaseController = require('../controllers/diseases');


router.get(
    ROUTES.DISEASES_PATH,
    diseaseController.getAllDiseases,
);

router.get(
    ROUTES.RECENT_DISEASES_PATH,
    diseaseController.getRecentDiseases,
);

router.get(
    ROUTES.ADD_DISEASES_PATH,
    auth.authenticateUser,
    auth.authorizeDoctor,
    diseaseController.getAddDiseasesPage,
);

router.post(
    ROUTES.ADD_DISEASES_PATH,
    auth.authenticateUser,
    auth.authorizeDoctor,
    diseaseController.addDiseasesToDiseaseCollection,
);

module.exports = router;