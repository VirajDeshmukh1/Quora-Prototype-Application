const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://canvas:canvas@cluster0-llr4m.mongodb.net/Canvas?retryWrites=true');

var question = new Schema ({

    _id: mongoose.Schema.Types.ObjectId,

    question:{type:String},
    questionOwner:{type:String},
    topic:{type:String},
    
    followers: [{ user: { type: Schema.Types.ObjectId, ref: "userDetails" } }],

    answer: [{ answer: { type: Schema.Types.ObjectId, ref: "answer" } }],

    postDate:{type:Date},
        
    });

    module.exports = mongoose.model("question",question);