'use strict';
const Meet = require('../models/meetModel');
exports.findAll = function(req, res) {
    Meet.findAll(function(err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};

exports.findById = function(req, res) {
    Meet.findById(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};
