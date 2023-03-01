'use strict';
var dbConn = require('../db.config');

var Project = function(project){
    this.title = project.title;
    this.description = project.description;
    this.placeId = project.placeId;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Project.findAll = function (result) {
    dbConn.query(`Select * from projects`, function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Project.findByMeet = function (meet, result) {
    dbConn.query("Select * from projects where  id = ? ", meet.projectId, function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, { ...meet, project: res[0] });
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
            // console.log('employees : ', res[0]);
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

Project.create = function (project, result) {
    dbConn.query("INSERT INTO projects set ?", project, function (err, res) {
        if (err) result(err, null);
        result(null, res.insertId);
    });
};

module.exports = Project;