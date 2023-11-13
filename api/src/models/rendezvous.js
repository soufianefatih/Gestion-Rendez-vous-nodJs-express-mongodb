const { Schema, model,mongoose } = require("mongoose");
const {handleMongooseError} = require("../users/helpers");


const rdvSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    number: {
      type:Number,
      required: [true, "Number is required"],
    },
    date: { 
     type: Date, required: true

    },
    confirm: { type: Boolean, defaulf : false},

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
     }, 
    
  },
  { versionKey: false, timestamps: true }
);

rdvSchema.post("save", handleMongooseError);

const Rdv = model("rdv", rdvSchema );

module.exports = Rdv;
