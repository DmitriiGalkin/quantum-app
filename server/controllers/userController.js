'use strict';
const User = require('../models/userModel');
exports.findAll = function(req, res) {
    User.findAll(function(err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};
exports.create = function(req, res) {
    const new_employee = new Employee(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.create(new_employee, function(err, employee) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Employee added successfully!",data:employee});
        });
    }
};
exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, users) {
        if (err)
            res.send(err);
        res.json(users[0]);
    });
};
exports.findUniquesById = function(req, res) {
    User.findUniquesById(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.update(req.params.id, new Employee(req.body), function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Employee successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    User.delete( req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Employee successfully deleted' });
    });
};

exports.findByMeetId = function(req, res) {
    User.findByMeetId(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.findByProjectId = function(req, res) {
    User.findByProjectId(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};
