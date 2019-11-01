const express = require('express');
const router = express.Router();
const customerService = require('./customer.service');

// routes
router.post('/kunden/:id', submit)
router.get('/kunden/:id', getByID);
router.get('/kunden?nachname=Schmidt', getByAttr);
router.put('/kunden/:id', modify);
router.delete('/kunden/:id', _delete);

module.exports = router;

function submit(req, res, next) {
    customerService.submit(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getByID(req, res, next) {
    customerService.get(req.params.attr)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function getByAttr(req, res, next) {
    customerService.get(req.params.attr)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function modify(req, res, next) {
    customerService.get(req.params.attr)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    customerService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}