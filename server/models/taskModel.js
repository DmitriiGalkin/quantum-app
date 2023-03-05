'use strict';
var dbConn = require('../db.config');

var Task = function(task){
    this.title = task.first_name;
    this.points = task.last_name;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Task.findAll = function (result) {
    dbConn.query("Select * from tasks", function (err, res) {
        if (err) result(null, err);
        result(null, res);
    });
};
Task.findById = function (id, result) {
    dbConn.query("Select * from tasks where id = ? ", id, function (err, res) {
        if (err) result(err, null);
        result(null, res);
    });
};

module.exports = Task;