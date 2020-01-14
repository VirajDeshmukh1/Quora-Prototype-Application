//var Connection =  require('tedious').Connection;
var mysql = require('mysql'); 
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = mysql.createConnection({
    host: "quora273instance.ckkymcjvc8eq.us-east-2.rds.amazonaws.com",
    port: 3306,
    user: "quoraadmin",
    password: "quora273",
    database: "quora273db"
  });
  
  connection.connect(function(err) {
    if (!err) {
      console.log("Database is connected ... ");
    } else {
      console.log("Error connecting database ... ");
    }
  });


mongoose.connect('mongodb+srv://canvas:canvas@cluster0-llr4m.mongodb.net/Quora?retryWrites=true',
{useNewUrlParser: true})
.then(() => console.log("Mongo COnnected"))
.catch(err => console.log(err));


  module.exports = connection;