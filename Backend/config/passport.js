'use strict';
//var db = require('../app/db');
var Model = require('../../Kafka-Backend/Models/userDetails');
//var config = require('./settings');
const secret = "secret";

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const opts = {};
//const User = require("../models/User");
//const User = mongoose.model("User");
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log("hello");
      console.log(jwt_payload);
      console.log(jwt_payload._id);
      console.log("payload:" + jwt_payload.id);
      Model.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            console.log(user);
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => {
          console.log("err" + err);
        });
    })
  );
};
