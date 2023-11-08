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
     type: Date, required: true 
    },
    confirm: { type: Boolean, required: true },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
     }, 
    
  },
  { versionKey: false, timestamps: true }
);


const Rdv = model("Rdv", rdvSchema );

module.exports = Rdv;
