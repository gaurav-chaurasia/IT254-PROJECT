const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MedicineSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    diseases: [
        { 
            type: String, 
            required: true,
        },
    ],
    scores: [
        { 
            type: Number, 
            required: true,
        },
    ],
    // uses: [
    //     {
    //         disease: { type: String, lowercase: true, required: true },
    //         scores: { type: Number, required: true },
    //     },
    // ]
}, {
    timestamps: true
});


module.exports = mongoose.model('Medicine', MedicineSchema);