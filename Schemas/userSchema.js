const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: [4, "username must be atleast 4 characters"],
      maxlength: [15, "username must have atmost 15 characters"],
      unique:[true,"username has to be unique"],
      validate: {
        validator: function (value) {
          return /^\S*$/.test(value); 
        },
        message: (props) => `Username should not contain spaces!`,
      },
    },
    password: {
        type: String,
        minlength: [8, "Password must be atleast 4 characters"],
        maxlength: [15, "Password must have atmost 15 characters"],
        validate: {
          validator: function (value) {
            return /^\S*$/.test(value);
          },
          message: (props) => `Password should not contain spaces!`,
        },
      },
  },
  {
    timestamps: true,
  }
);
const Users = mongoose.model("users", userSchema);
module.exports = Users;
