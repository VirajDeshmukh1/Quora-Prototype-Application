const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answer = new Schema ({

    _id: mongoose.Schema.Types.ObjectId,
//need reference of question too..check how to add that
    answer: {type:String},
    answerOwner: {type:String},
    isAnnonymous:{type:Boolean},
    question: { question: { type: Schema.Types.ObjectId, ref: "question" } },
  // question:{type:String},
    upVote:[{ user: { type: Schema.Types.ObjectId, ref: "userDetails" } }],
    downVote:[{ user: { type: Schema.Types.ObjectId, ref: "userDetails" } }],
    comment:[{userid:{ type: Schema.Types.ObjectId, ref: "userDetails" } , comment:{type:String}}],
    answerDate: {type:Date}
        
    });

    module.exports = mongoose.model("answer",answer);