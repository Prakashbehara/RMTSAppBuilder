'use strict';
var mysql = require('mysql');
var Task={
 
getAllTasks:function(callback){
  var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'rmts_app',
      debug   : false
    });
 
    connection.connect();
    console.log('about to invoke data from DB');
 var response = connection.query("select * from rmts_app.employee",callback);
console.log('Completed data from DB');

 connection.end();
return response;
 
},
 getTaskById:function(id,callback){
 
return db.query("select * from task where Id=?",[id],callback);
 },
 addTask:function(Task,callback){
 return '';
 },
 deleteTask:function(id,callback){
  return '';
 },
 updateTask:function(id,Task,callback){
  return '';
 }
 
};
 module.exports=Task;