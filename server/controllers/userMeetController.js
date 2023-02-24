'use strict';
const UserMeet = require('../models/userMeetModel');

exports.create = function(req, res) {
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
exports.delete = function(req, res) {
    UserMeet.delete( req.params.userId, req.params.meetId, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Employee successfully deleted' });
    });
};

