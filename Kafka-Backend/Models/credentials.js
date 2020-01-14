const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var credentials = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "userDetails" },
  handle: { type: String, required: true, max: 40 },
  location: { type: String },
  status: { type: String, required: true },
  skills: {
    type: [String]
  },
  bio: { type: String },
  education: [
    {
      school: { type: String, required: true },
      concentration: { type: String },
      degree: { type: String },
      from: { type: Date, required: true },
      to: { type: Date },
      current: { type: Boolean, default: false },
      description: { type: String }
    }
  ],
  city: { type: String },
  state: { type: String },
  zipCode: { type: Number },
  profileImage: { type: String },
  experience: [
    {
      title: { type: String, required: true },
      company: { type: String, required: true },
      location: { type: String },
      from: { type: Date, required: true },
      to: { type: Date },
      current: { type: Boolean, default: false },
      description: { type: String }
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("credentials", credentials);
