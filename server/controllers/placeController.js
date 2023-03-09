'use strict';
const Place = require('../models/placeModel');
const PlaceUser = require('../models/placeUserModel');

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

exports.create = function(req, res) {
    const place = new Place(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Place.create(place, function(err, data) {
            if (err) res.send(err);
            res.send({ error: false, message: "place added successfully!", data });
        });
    }
};

exports.createPlaceUser = function(req, res) {
    const data = new PlaceUser(req.params);
    if(req.body.constructor === Object && Object.keys(req.params).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        PlaceUser.create(data, function(err, data) {
            if (err) res.send(err);
            res.json({error:false,message:"Place_user added successfully!", data});
        });
    }
};
exports.deletePlaceUser = function(req, res) {
    PlaceUser.delete(req.params.placeId, req.params.userId, function(err, employee) {
        if (err) res.send(err);
        res.json({ error:false, message: 'Employee successfully deleted' });
    });
};