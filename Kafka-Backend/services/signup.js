var Model = require('../DataBaseConnection');
var bcrypt = require('bcrypt-nodejs');
var mongooseTypes = require('mongoose').Types;
var mysql = require('mysql'); 
const mongoose = require('mongoose');
var Schema = mongoose.Schema;//issue coming

function handle_request(message, callback){
    console.log('Inside Kafka Backend Signup');
    console.log('Message: ', message);

        //User creation query

        //Mysql database connection
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "GHE@ta91",
            database : "Luckycmpe273"
          });


// this process will avoid SQL injection attack
//message.emailid = "abc";
let sql = "SELECT emailid FROM userDetails WHERE emailid = ?";
connection.query(sql,message.email, function (error, results, fields) {
if (error){
    console.log(error);
}
else{

    const hashedPassword = bcrypt.hashSync(message.password);
    //hard coded values as FE is not developed well
    message.city = "abc";
    message.state = "xyz";
    message.zipcode = 123;
    message.profileimage = "a";
   //this will avoid SQL injection attack
   let sql = "INSERT INTO userDetails (emailid, password, firstName, lastName, city, state, zipcode, profileImage) VALUES  ? ";
   let inser_vals = [
        [message.email , hashedPassword, message.firstname, message.lastname, message.city, message.state, message.zipcode, message.profileimage]
   ];

   connection.query(sql, [inser_vals], function (error, results, fields) {
  
    if (error || results == null || results.length<1){
        console.log(error);
        res.value = "The User details entered are not valid";
        console.log(res.value);
        callback(null, res);
      }
      else{


    var user = new Model.Userdetails({
        _id: new mongoose.Types.ObjectId(),
        firstName: message.firstname,
        lastName: message.lastname,
        email: message.email,
        city: message.city,
        state: message.state,
        zipCode: message.zipCode,
        profileImage: message.profileImage,
        status: message.status
    });  

      
        
    user.save().then((doc) => {

        console.log("User saved successfully.", doc);
        callback(null, doc);
    
    }, (err) => {
        console.log("Unable to save user details.", err);
        callback(err, null);
    });

      }
    
       });
       connection.end();
   }

});
       
}
  
exports.handle_request = handle_request;