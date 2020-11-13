const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MedicineSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    uses: [
        {
            disease: { type: String, lowercase: true, required: true },
            score: { type: Number, required: true },
        },
    ]
}, {
    timestamps: true
});


module.exports = mongoose.model('Medicine', MedicineSchema);