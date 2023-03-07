'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'quantum'
});
// const dbConn = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'dima',
//     password : 'dima1234',
//     database : 'quantum',
//     port: 3306
// });
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;