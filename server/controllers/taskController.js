'use strict';
const Task = require('../models/taskModel');
exports.findAll = function(req, res) {
    Task.findAll(function(err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};
