'use strict';
var dbConn = require('../db.config');

var Place = function(place){
    this.title = place.title;
    this.description = place.description;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};

Place.findAll = function (result) {
    dbConn.query("Select * from place", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

Place.findByProject = function (project, result) {
    dbConn.query("Select * from place where  id = ? ", project.placeId, function (err, res) {
        if(err) result(err, null);
        result(null, {...project, place: res[0] });
    });
};

Place.findById = function (id, result) {
    dbConn.query("Select * from place where  id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('employees : ', res[0]);
            result(null, res[0]);
        }
    });
};

Place.create = function (place, result) {
    dbConn.query("INSERT INTO place set ?", place, function (err, res) {
        if (err) result(err, null);
        result(null, res.insertId);
    });
};

module.exports = Place;