exports.ROUTES = {
    'ROOT_PATH': '/',

    'USERS_PATH': '/users',
    'LOGIN_PATH': '/users/login',
    'LOGOUT_PATH': '/users/logout',
    'REGISTRATION_PATH': '/users/register',

    'DISEASES_PATH': '/diseases',               // get all diseases from DB
    'ADD_DISEASES_PATH': '/diseases/add',       // add disease to DB
    'DELETE_DISEASES_PATH': '/diseases/remove', // remove all diseases

    'DISEASE_PATH': '/diseases/:id',                // get specific disease
    'UPDATE_DISEASE_PATH': '/diseases/:id/update',  // update specific disease
    'DELETE_DISEASE_PATH': '/diseases/:id/delete',  // delete specific disease

    'TESTS_PATH': '/tests',
}