'use strict';
var dbConn = require('../db.config');

// Main object create
var Project = function(employee){
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

Project.findAll = function (params, result) {
    dbConn.query(`Select * from projects`, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Project.findById = function (id, result) {
    dbConn.query("Select * from projects where  id = ? ", id, function (err, res) {
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
Project.findByPlaceId = function (id, result) {
    dbConn.query('Select * from projects WHERE placeId = ?', id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Project.findByUserId = function (id, result) {
    dbConn.query('Select * from projects LEFT JOIN project_user ON projects.id = project_user.projectId WHERE project_user.userId = ?', id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Project;