'use strict';
var dbConn = require('../db.config');

var User = function(user){
    this.email = user.email;
    this.password = user.password;
    this.title = user.title;
    this.points = user.points;
    this.created_at = new Date();
    this.updated_at = new Date();
};
User.create = function (user, result) {
    dbConn.query("INSERT INTO users set ?", user, function (err, res) {
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
    dbConn.query("Select * from users LEFT JOIN meet_user ON users.id = meet_user.userId where meetId = ? ORDER BY meet_user.created_at DESC", meet.id, function (err, res) {
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
    dbConn.query("Select * from users LEFT JOIN meet_user ON users.id = meet_user.userId where meetId = ? ORDER BY meet_user.created_at DESC", meet.id, function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, { ...meet, users: res});
        }
    });
};
User.findByProject = function (project, result) {
    dbConn.query("Select * from users LEFT JOIN project_user ON users.id = project_user.userId where projectId = ?", project.id, function (err, users) {
        if(err) result(err, null);
        result(null, { ...project, users });
    });
};
User.findByMeetId = function (id, result) {
    dbConn.query("Select * from users LEFT JOIN meet_user ON users.id = meet_user.userId where meetId = ? ORDER BY meet_user.created_at DESC", id, function (err, res) {
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
User.update = function(id, user, result){
    dbConn.query("UPDATE users SET title=?,points=? WHERE id = ?", [user.title,user.points, id], function (err, res) {
        if(err) result(null, err);
        result(null, res);
    });
};
User.delete = function(id, result){
    dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if(err) result(null, err);
        result(null, res);
    });
};
module.exports = User;