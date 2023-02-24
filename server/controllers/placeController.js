'use strict';
const Place = require('../models/placeModel');
exports.findAll = function(req, res) {
    Place.findAll(function(err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};

exports.findById = function(req, res) {
    Place.findById(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};
