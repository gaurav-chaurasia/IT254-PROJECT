exports.ROUTES = {
    'ROOT_PATH': '/',

    'USERS_PATH': '/users',
    'LOGIN_PATH': '/users/login',
    'LOGOUT_PATH': '/users/logout',
    'REGISTRATION_PATH': '/users/register',

    'DISEASES_PATH': '/diseases',               // get all diseases from DB
    'ADD_DISEASES_PATH': '/diseases/add',       // add disease to DB
    'DELETE_DISEASES_PATH': '/diseases/delete', // delete all diseases

    'DISEASE_PATH': '/diseases/:id',                // get specific disease
    'UPDATE_DISEASE_PATH': '/diseases/:id/update',  // update specific disease
    'DELETE_DISEASE_PATH': '/diseases/:id/delete',  // delete specific disease

    'MEDICINES_PATH': '/medicines',               // get all medicines from DB
    'ADD_MEDICINES_PATH': '/medicines/add',       // add medicine to DB
    'DELETE_MEDICINES_PATH': '/medicines/delete', // delete all medicines

    'MEDICINE_PATH': '/medicines/:id',                // get specific medicine
    'UPDATE_MEDICINE_PATH': '/medicines/:id/update',  // update specific medicine
    'DELETE_MEDICINE_PATH': '/medicines/:id/delete',  // delete specific medicine

    'MAPS_PATH': '/maps',                     // get map and all points on that
    'ADD_LOCATION_PATH': '/maps/add',         // adds current_user's location to DB
    'UPDATE_LOCATION_PATH': '/maps/update',   // updates current_user's location in DB
    'DELETE_LOCATION_PATH': '/maps/delete',   // deletes current_user's location from DB

    'TESTS_PATH': '/tests',
}