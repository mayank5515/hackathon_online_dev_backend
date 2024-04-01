const mongoose = require("mongoose");
const validator = require("validator");
const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    unique: true,
    require: [true, "Please provide your email!!"],
    validator: {
      validate: function (el) {
        return validator.isEmail(el);
      },
    },
  },
  password: {
    type: String,
    required: [true, "Please give password!"],
    maxLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please give confirmation password!"],
    validator: {
      validate: function (pwdCnfm) {
        return pwdCnfm === this.password;
      },
      message: "Confirmation password and password given are not same",
    },
  },
  role: {
    type: String,
    default: "Mentor",
  },
  expertiseIn: [String],
  address: {
    type: String,
    required: [true, "Please provide your address"],
  },
  contact: {
    type: Number,
    maxLength: 12,
    required: [true, "Please provide your phone number"],
  },
  workExperience: [String],
  mentorDurationStart: {
    type: Date,
  },
});
