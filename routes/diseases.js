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
    ROUTES.ADD_DISEASES_PATH,
    diseaseController.getAddDiseasesPage,
);

router.post(
    ROUTES.ADD_DISEASES_PATH,
    (req, res, next) => {
        res.json({ disease: req.body});
});

module.exports = router;