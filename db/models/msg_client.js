const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgClientSchema = new Schema({
    a_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    b_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
});

module.exports = mongoose.model('MSGClient', msgClientSchema);
