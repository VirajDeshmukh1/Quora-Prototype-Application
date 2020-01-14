var express = require('express');
var router = express.Router();
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});
const mongoose = require('mongoose');
var Model = require('../../Kafka-Backend/Models/answer');

router.post('/', requireAuth, function(req,res){
  console.log("Inside answer Post Request");
  //if (req.session.user) {
  console.log("Inside answer Post Request");
  console.log("Req Body : ",req.body);
  
console.log(req.body.question);
req.body.question =  "abc";


    req.body.question = "abc";
    req.body.questionOwner = "Lucky";
    req.body.isAnnonymous = true;
    req.body.topic = "abc";
    req.body.question="5cbf8898e35ac3ef9251d64b";

    var user = new Model({
        _id: new mongoose.Types.ObjectId(),
        answer: req.body.answer,
        answerOwner: req.user.id,
        question: req.body.question,
        isAnnonymous: req.body.isAnnonymous,
        answerDate: Date.now()
    });  

    user.save().then((doc) => {

        console.log("Answer saved successfully.", doc);
        res.value = "Answer saved successfully.";
        res.end(JSON.stringify(res.value));
    
    }, (err) => {

        console.log("Unable to save Answer details.", err);
        res.value = "Unable to save Answer details.";
        res.end(JSON.stringify(res.value));

    });

});

  module.exports = router;