const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // userName:String,
  Name: {
    type: String,
    // required: true,
    // lowercase: true,
    // trim: true,
    // minLength: 4,
    // maxLength: 30
},
  emailID: {
    type: String,
    // required: true,
  },
  // email:String,
  // password: String,
  //   userType: String,
  // userType: {
  //   type: String,
  //   // required: true,
  // },
  // phone:Number,
  Mobile: {
    type: String,
    // required: true,
    // minLength:10,
    // maxLength: 12
  },
});
module.exports = mongoose.model("User", UserSchema);
