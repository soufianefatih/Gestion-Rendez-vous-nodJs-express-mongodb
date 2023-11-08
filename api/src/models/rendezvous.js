const { Schema, model } = require("mongoose");


const rdvSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    phone: {
      type: Number,
      required: [true, "Number is required"],
      unique: true,
    },
    date: { 
     type: Number, required: true 
    },
    confirm: { type: Boolean, required: true },
  },
  { versionKey: false, timestamps: true }
);


const Rdv = model("Rdv", rdvSchema );

module.exports = Rdv;
