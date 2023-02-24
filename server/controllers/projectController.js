'use strict';
const Project = require('../models/projectModel');
exports.findAll = function(req, res) {
    let placeId = req.query.placeId;

    Project.findAll({ placeId }, function(err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};

exports.findById = function(req, res) {
    Project.findById(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};
