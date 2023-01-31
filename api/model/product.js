const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // userName:String,
  productId: {
    type: Number,
    // required: true,
    // lowercase: true,
    // trim: true,
    // minLength: 4,
    // maxLength: 30
},
  productName: {
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
  categoryId: {
    type:Number,
    // required: true,
    // minLength:10,
    // maxLength: 12
  },
  categoryName: {
    type: String,
    // required: true,
    // minLength:10,
    // maxLength: 12
  },
});
module.exports = mongoose.model("User", UserSchema);
