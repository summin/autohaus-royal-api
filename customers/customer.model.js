const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customerRef: { type: String, unique: true, required: true },
    customerFirstName: { type: String, required: true },
    customerLastName: { type: String, required: true },
    customerGender: { type: String, required: true },
    customerStreet: { type: String, required: true },
    customerPostCode: { type: String, required: true },
    customerCity: { type: String, required: true },
    customerCreatedDate: { type: Date, required: true, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Customer', schema);