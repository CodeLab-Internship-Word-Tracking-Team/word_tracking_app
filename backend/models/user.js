const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: {type: String, required: true, unique: true},
    first_name: {type: String},
    last_name: {type: String},
  }
);

const User = mongoose.model('user', UserSchema, 'users');

signupUser = (email, first_name, last_name) =>
  new User({ email, first_name, last_name }).save();

signupUserHelper = async (email) => await User.find({ email: email });
signinUser = async (email) => await User.find({ email: email });

module.exports = {
  signupUser,
  signupUserHelper,
  signinUser
};
