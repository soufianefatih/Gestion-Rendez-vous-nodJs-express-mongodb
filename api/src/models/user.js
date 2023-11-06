const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "User",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    }
  },
  { versionKey: false, timestamps: true }
);


userSchema.methods.comparePassword = comparePassword;

userSchema.methods.signToken = signToken;

userSchema.pre("save", hashPassword);


const User = model("user", userSchema);

module.exports = User;
