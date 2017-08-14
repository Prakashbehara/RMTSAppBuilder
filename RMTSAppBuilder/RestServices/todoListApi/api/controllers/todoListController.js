'use strict';


var mysql = require('mysql');
var Task = require('../models/todoListModel');

exports.list_all_tasks = function(req, res) {
  Task.getAllTasks(function(err, task) {
    console.log('getAllTasks method completed in the model');
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
  
};


exports.read_a_task = function(req, res) {
  
};


exports.update_a_task = function(req, res) {
  
};


exports.delete_a_task = function(req, res) {


  
};