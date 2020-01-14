const mongoose = require('mongoose');
var Schema = mongoose.Schema;//issue coming

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://canvas:canvas@cluster0-llr4m.mongodb.net/Quora?retryWrites=true');

var Userdetails = mongoose.model('Userdetails', {

_id: mongoose.Schema.Types.ObjectId,

firstName:{type:String},
lastName:{type:String},
email:{type:String},
city:{type:String},
state:{type:String},
zipCode:{type:Number},
ProfileImage:{type:String},
status:{type:Boolean},
    
});

var credentials = mongoose.model('credentials', {

    education : [
    {
        school : { type: String }, 
        concentration : { type: String }, 
        degree : { type: String }, 
        year : { type: String },    
    }
    ],
    employment : [
        {
            position : { type: String }, 
            company : { type: String }, 
            startYear : { type: String }, 
            endYear : { type: String },    
      }
    ],
    topics : [{
        type: String
    }],

    userDetails: [{ user: { type: Schema.Types.ObjectId, ref: "userDetails" } }],

});


module.exports = {
    Userdetails,
    credentials
};

