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
    genral_symptoms: [ 
        { type: String, required: true },
    ],
    scores: [ 
        { type: Number, required: true },
    ],
    symptoms: [ 
        { type: String, required: true },
    ],
    causes: [
        { type: String },
    ]
}, {
    timestamps: true
});


module.exports = mongoose.model('Disease', DiseaseSchema);