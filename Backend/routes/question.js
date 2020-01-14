var express = require('express');
var router = express.Router();
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});
const mongoose = require('mongoose');
var Model = require('../../Kafka-Backend/Models/question');

router.post('/', requireAuth, function(req,res){
  console.log("Inside question Get Request");
    //if (req.session.user) {
    var finalResult =0;
  console.log("Inside question Get Request");
  console.log("Req Body : ",req.body);
  
console.log(req.body.question);
req.body.question =  "abc";

Model.findOne({
   'question': req.body.email
}, (err, user) => {


  if (err) {
      console.log("Unable to fetch Question details.", err);
      res.end(JSON.stringify(user));
  }

  if(user){

    res.value = "The question is already present in database.";
    res.end(JSON.stringify(res.value));

  }
  else {


    req.body.question = "abc";
    req.body.questionOwner = "Lucky";
    req.body.topic = "topic";
    req.body.postDate = "2019/12/12";

    var user = new Model({
        _id: new mongoose.Types.ObjectId(),
        question: req.body.question,
        questionOwner: req.user.id,
        topic: req.body.topic,
        postDate: Date.now()
    });  


    user.save().then((doc) => {

        console.log("Question saved successfully.", doc);
        res.value = "Question saved successfully.";
        res.end(JSON.stringify(res.value));
    
    }, (err) => {

        console.log("Unable to save Question details.", err);
        res.value = "Unable to save Question details.";
        res.end(JSON.stringify(res.value));

    });

  }

  });

});

  module.exports = router;