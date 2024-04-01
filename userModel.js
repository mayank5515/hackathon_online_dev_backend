const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "User must have a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    validator: {
      validate: function (el) {
        return validator.isEmail(el);
      },
      message: "Please provide valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please provide confirmation password!!"],
    validator: {
      validate: function (pwdCnfm) {
        return pwdCnfm === this.password;
      },
      message:
        "Password provided for confirmation does not match password given!",
    },
  },
  role: {
    type: String,
    default: "Student",
    enum: {
      values: ["Student"],
      message: "Role should be  Student ",
    },
  },
  university: String,
  college: String,
  degreeOfSpecialisation: String,
  branch: String,
  graduationYear: Number,
});

const User = mongoose.model("user", userSchema);

//ANY MIDDLEWARES

module.exports = User;
