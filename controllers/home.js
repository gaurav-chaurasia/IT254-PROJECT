// ----------------------------------------
// import node modules
// ----------------------------------------


// ----------------------------------------
// import local node modules
// ----------------------------------------
const { ROUTES } = require('../config/ROUTES');
const Medicine = require('../models/medicine');
const Disease = require('../models/disease');

const getMain = async (req, res) => {
    try {
        const topDisease = await Disease.find({}, { _id: 0 })
                                        .sort({'updatedAt': -1})
                                        .limit(5);
        const topMedicine = await Medicine.find({}, { _id: 0 })
                                          .sort({'updatedAt': -1})
                                          .limit(5);
        res.render(
            'home/main', 
            {
                topDisease: topDisease,
                topMedicine: topMedicine
            }
        );
    } catch (err) {
        req.flash(
            'info', 
            'Opps! Somthing went wrong, couldn\'t get all requied info!'
        );
        res.render(
            'home/main', 
            {
                topDisease: null,
                topMedicine: null
            }
        );
    }
};

module.exports = {
    getMain
}