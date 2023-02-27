'use strict';
const Meet = require('../models/meetModel');
const UserMeet = require('../models/userMeetModel');

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
exports.findByProjectId = function(req, res) {
    Meet.findByProjectId(req.params.id, function(err, arr) {
        if (err)
            res.send(err);
        res.json(arr);
    });
};

exports.create = function(req, res) {
    const meet = new Meet(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Meet.create(meet, function(err, data) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "meet added successfully!", data });
        });
    }
};

exports.createMeetUser = function(req, res) {
    const new_employee = new UserMeet(req.params);
    console.log(req.params, 'req.params')
    if(req.body.constructor === Object && Object.keys(req.params).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        UserMeet.create(new_employee, function(err, employee) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Employee added successfully!",data:employee});
        });
    }
};
exports.deleteMeetUser = function(req, res) {
    UserMeet.delete( req.params.userId, req.params.meetId, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Employee successfully deleted' });
    });
};
