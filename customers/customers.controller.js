const express = require('express');
const router = express.Router();
const customerService = require('./customer.service');

// routes
router.post('', submit)
router.get('/', getAll);
router.get('/:field=:value', getByAttr);
router.get('/:id', getByID);
// router.get('/kunden?nachname=Schmidt', getByAttr);
router.put('/:id', modify);
router.delete('/:id', _delete);

module.exports = router;

function submit(req, res, next) {
    customerService.submit(req.body)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    customerService.getAll(req.params.attr)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function getByID(req, res, next) {
    console.log(req.params)
    customerService.getByID(req.params.id)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function getByAttr(req, res, next) {
    console.log(req.params)
    customerService.getByAttr(req.params)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function modify(req, res, next) {
    customerService.modify(req.params.attr)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    customerService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}