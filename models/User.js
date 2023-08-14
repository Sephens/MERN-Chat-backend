const mongoose = require('mongoose');


// define a schema
const UserSchema = new mongoose.Schema({
  username: {type:String, unique:true},
  password: String,
}, {timestamps: true});

// define the model
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;