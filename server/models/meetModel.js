'use strict';
var dbConn = require('../db.config');

// Main object create
var Meet = function(employee){
    this.first_name     = employee.first_name;
    this.last_name      = employee.last_name;
    this.email          = employee.email;
    this.phone          = employee.phone;
    this.organization   = employee.organization;
    this.designation    = employee.designation;
    this.salary         = employee.salary;
    this.status         = employee.status ? employee.status : 1;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};

Meet.findAll = function (result) {
    dbConn.query("Select * from meets", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Meet.findById = function (id, result) {
    dbConn.query("Select * from meets where  id = ? ", id, function (err, res) {
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

Meet.findByProjectId = function (id, result) {
    dbConn.query("Select * from meets where projectId = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else { result(null, res); }
    });
};

module.exports = Meet;