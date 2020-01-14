//Signup.js - Signup route module
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
//Passport authentication

var passport = require('passport');
var jwt = require('jsonwebtoken');
// Set up middleware

var requireAuth = passport.authenticate('jwt', { session: false });
const secret = "secret";

var connection = require('../../Kafka-Backend/connection');
var Model = require('../../Kafka-Backend/Models/userDetails');
///Users/sachinwaghmode/Desktop/Quora-Team/Kafka-Backend/connection.js
//Kafka
//var kafka = require('../kafka/client');

//Route to handle Post Request Call
router.post('/', function (req, res) {


  console.log("Inside Login Post Request");
  console.log("Req Body : ", req.body);


  // kafka.make_request('login', req.body, function(err, result){

  //   console.log('In results Signup');
  //   console.log('Results: ', result);



  //   if(err){
  //     console.log('Unable to Login to the System.', err.message);
  //     res.writeHead(400, {
  //         'Content-type': 'text/plain'
  //     });
  //     res.end('Error in Login the application');
  //   }
  //   else{
  //     console.log('logged in successfully.', result);
  //     res.writeHead(200,{
  //         'Content-type' : 'application/json'
  //     });
  //     req.session.user = true;
  //     var token = jwt.sign({sjsuid:result.sjsuid}, secret, {
  //       expiresIn: 10080 // in seconds
  //     });
  //     console.log(token);

  //     var data = {
  //       result : result,
  //       Token : token
  //     }

  //     res.end(JSON.stringify(data)); 
  //   }

  //   if(err){
  //       console.log("Unable to fetch user details. Error in Signup.", err);
  //       res.writeHead(400, {
  //           'Content-type': 'text/plain'
  //       });
  //       res.end('Error in fetching user details!');            
  //   }
  // });


  // //Mysql database connection
  // var connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "GHE@ta91",
  //   database : "Luckycmpe273"
  // });

  // this process will avoid SQL injection attack
  let sql = "SELECT emailid,password FROM userDetails WHERE emailid = ?";

  console.log(req.body.email);

  connection.query(sql, req.body.email, function (error, results, fields) {


    // console.log(results[0]);
    if (error || results == null || results.length < 1) {
      console.log(error);
      res.value = "The email and password you entered did not match our records. Please try again.";
      console.log(res.value);
      //  callback(null, res);
    }
    else {
      if (bcrypt.compareSync(req.body.password, results[0].password)) {
        console.log("Valid Credentials");
        res.code = "200";
        res.value = results;
        console.log("login result", results);

        email = req.body.email;
        //Find user Query
        console.log("trying mongo: ", email);
        Model.findOne({
          email: email
        })
          .then(user => {
            console.log("USERRRRRR: ", user);
            if (!user) {
              return res.status(404).json({ email: "User not found" });
            }

            const payload = {
              id: user.id
            };
            //sign Token
            jwt.sign(payload, "secret", { expiresIn: "1h" }, (err, token) => {
              res.json({
                token: "Bearer " + token
              });
              console.log("Bearer " + token);
            });
          }
          );

        //res.status(200).json(doc);
        //  callback(null, res);         
      }
      else {
        console.log("InValid Credentials");
        res.code = "400";

        //callback(null, res);
      }
    }
  });

});

module.exports = router;