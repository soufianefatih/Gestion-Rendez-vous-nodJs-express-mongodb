const { Schema, model,mongoose } = require("mongoose");


const rdvSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    phone: {
      type:String,
      required: [true, "Number is required"],
    },
    date: { 
     type: Date, required: true

    },
    confirm: { type: Boolean, required: true },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
     }, 
    
  },
  { versionKey: false, timestamps: true }
);


const Rdv = model("rdv", rdvSchema );

module.exports = Rdv;
