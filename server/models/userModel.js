'use strict';
var dbConn = require('../db.config');

var User = function(employee){
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
User.create = function (newEmp, result) {
    dbConn.query("INSERT INTO users set ?", newEmp, function (err, res) {
        if (err) result(err, null);
        result(null, res.insertId);
    });
};
User.findById = function (id, result) {
    dbConn.query("Select * from users where id = ? ", id, function (err, res) {
        if(err) result(err, null);
        result(null, res);
    });
};
User.findUniquesById = function (id, result) {
    dbConn.query("Select * from uniques where userId = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

User.findByProjectMeet = function (project, result) {
    dbConn.query("Select * from users LEFT JOIN meet_user ON users.id = meet_user.userId where meetId = ? ", meet.id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, { ...meet, users: res});
        }
    });
};
User.findByMeet = function (meet, result) {
    dbConn.query("Select * from users LEFT JOIN meet_user ON users.id = meet_user.userId where meetId = ? ", meet.id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, { ...meet, users: res});
        }
    });
};
User.findByMeetId = function (id, result) {
    dbConn.query("Select * from users LEFT JOIN meet_user ON users.id = meet_user.userId where meetId = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
User.findByProjectId = function (id, result) {
    dbConn.query("Select * from users LEFT JOIN project_user ON users.id = project_user.userId where projectId = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};


User.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
User.update = function(id, employee, result){
    dbConn.query("UPDATE users SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
User.delete = function(id, result){
    dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports = User;