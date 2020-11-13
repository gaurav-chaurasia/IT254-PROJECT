const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DiseaseSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    symptoms: [ 
        { type: String, required: true },
    ],
    levels: [ 
        {
            score: { type: Number, required: true },
            symptom: { type: String, required: true },
        },
    ],
    causes: [
        { type: String },
    ]
}, {
    timestamps: true
});


module.exports = mongoose.model('Disease', DiseaseSchema);