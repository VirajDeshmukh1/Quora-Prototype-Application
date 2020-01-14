const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var message = new Schema ({

    _id: mongoose.Schema.Types.ObjectId,

    from:{type:String},
    to:{type:String},
    sentDate:{type:Date},
    message:{type:String}

    });

    module.exports = mongoose.model("message",message);