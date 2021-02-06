const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema(
  {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    // accuracy is given in meter
    accuracy: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User',required: true, index: true, unique: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Location', LocationSchema);
