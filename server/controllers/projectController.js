'use strict';
var async = require("async");

const Project = require('../models/projectModel');
const Meet = require('../models/meetModel');
const Place = require('../models/placeModel');
const User = require('../models/userModel');
const ProjectUser = require('../models/projectUserModel');

exports.findAll = function(req, res) {
    Project.findAll(function(err, projects) {
        if (err)
            res.send(err);
        async.map(projects, Meet.findFirstByProject, function(err, projectsWithMeet) {
            if (err) console.log(err);
            async.map(projectsWithMeet, Place.findByProject, function(err, projectsWithMeetWithPlace) {
                if (err) console.log(err);
                res.send(projectsWithMeetWithPlace);
            });
        });
    });
};
exports.findById = function(req, res) {
    Project.findById(req.params.id, function(err, project) {
        if (err)
            res.send(err);

        Place.findById(project.placeId, function(err, place) {
            if (err)
                res.send(err);
            res.send({ ...project, place });
        });
    });
};
exports.findByPlaceId = function(req, res) {
    Project.findByPlaceId(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.findByUserId = function(req, res) {
    Project.findByUserId(req.params.id, function(err, projects) {
        if (err) res.send(err);

        async.map(projects, Place.findByProject, function(err, projectsWithPlace) {
            if (err) console.log(err);
            async.map(projectsWithPlace, User.findByProject, function(err, projectsWithPlaceWithUsers) {
                if (err) console.log(err);
                res.send(projectsWithPlaceWithUsers);
            });
        });
    });
};


exports.create = function(req, res) {
    const project = new Project(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Project.create(project, function(err, data) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "project added successfully!", data });
        });
    }
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Project.update(req.params.id, new Project(req.body), function(err, user) {
            if (err) { res.send(err);}
            res.json({ error:false, message: 'Проект обновлен' });
        });
    }
};

exports.createProjectUser = function(req, res) {
    const data = new ProjectUser(req.params);
    console.log(req.params, 'req.params')
    if(req.body.constructor === Object && Object.keys(req.params).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        ProjectUser.create(data, function(err, employee) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Employee added successfully!",data:employee});
        });
    }
};
exports.deleteProjectUser = function(req, res) {
    ProjectUser.delete(req.params.projectId, req.params.userId, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Employee successfully deleted' });
    });
};

exports.findAllByUserId = function(req, res) {
    console.log(req.params.id, 'req.params.userId')
    Project.findAllByUserId(req.params.id, function(err, projects) {
        if (err) res.send(err);
        if (projects) {
            console.log(projects,'projects')
            async.map(projects || [], Meet.findFirstByProject, function(err, projectsWithMeet) {
                if (err) console.log(err);
                console.log(projectsWithMeet, 'projectsWithMeet')
                async.map(projectsWithMeet, Place.findByProject, function(err, projectsWithMeetWithPlace) {
                    if (err) console.log(err);
                    async.map(projectsWithMeetWithPlace, User.findByProject, function(err, projectsWithMeetWithPlaceWithUsers) {
                        if (err) console.log(err);
                        res.send(projectsWithMeetWithPlaceWithUsers);
                    });
                });
            });
        } else {
            res.send([])
        }
    });
};

