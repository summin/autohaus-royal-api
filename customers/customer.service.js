const config = require('_helpers/config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Customer = db.Customer;

module.exports = {
    submit,
    getByID,
    getByAttr,
    modify,
    _delete
};

// GET

async function get(attr) {
    return await Customer.find( { dbcreatedDate: { $gt: new Date('2019-10-03T13:24:00') } } );
}

async function getByAttr(attr) {
    return await Customer.find( { dbcreatedDate: { $gt: new Date('2019-10-03T13:24:00') } } );
}

async function modify(attr) {
    return await Customer.find( { dbcreatedDate: { $gt: new Date('2019-10-03T13:24:00') } } );
}

async function _delete(attr) {
    return await Customer.find( { dbcreatedDate: { $gt: new Date('2019-10-03T13:24:00') } } );
}

// SUBMIT

async function submit(customerParam) {

    if (await Proposal.findOne({ dbContractReferenceNumber: customerParam.dbContractReferenceNumber })) {
        throw 'Proposal"' + customerParam.dbContractReferenceNumber + '" has already been submitted';
    }

    const customer = new Customer(customerParam);

    await customer.save();
}

async function getByID(id) {
    return await Customer.findById(id).select('-hash');
}
