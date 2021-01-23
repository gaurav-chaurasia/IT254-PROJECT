const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const ROLE = ['USER', 'DOCTOR', 'ADMIN'];
const GENDERS = ['MALE', 'FEMALE', 'TRANS', 'OTHER'];

const UserSchema = new Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true, index: true, unique: true, required: true },
    profile_pic_url: { type: String, trim: true },
    reset_password_token: { type: String },
    reset_password_expires: { type: Date },
    role: { type: String, enum: ROLE, default: 'USER' },
    verified: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    dob: { type: Date },
    gender: { type: String, enum: GENDERS },
    // last_seen on msg
    last_seen: { type: Date, default: Date.now() },
  },
  { timestamps: true },
);

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
