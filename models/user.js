const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const ROLE = [
    'USER',
    'DOCTOR',
    'ADMIN'
];

const GENDERS = [
    'MALE',
    'FEMALE',
    'TRANS',
    'AGENDER',
    'OTHER'
];

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
        required: true
    },
    profilePicUrl: {
        type: String,
        trim: true
    },
    resetPasswordToken: {
        type: String
    },
	resetPasswordExpires: {
        type: Date
    },
    role: {
        type: String,
        enum: ROLE,
        default: 'USER'
    },
    verified: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: false
    },
    dob: {
        type: Date
    }
}, {
    timestamps: true
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);