const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDetails = new Schema ({

    _id: mongoose.Schema.Types.ObjectId,
    
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    city:{type:String},
    state:{type:String},
    zipCode:{type:Number},
    profileImage:{typw:String},
    status:{type:Boolean},
        
    });

    module.exports = mongoose.model("userDetails",userDetails);