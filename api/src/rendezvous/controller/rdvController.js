const { Rdv } = require("../../models");
const { createSchema} = require("../schema");
const AppError = require('../../utils/HttpError');
const HttpStatusText = require('../../utils/HttpStatusText');




// * create  new rdv
exports.create = async (req, res, next) => {
  // console.log('Request body:', req.body); // Add this line for debugging

  // const { value, error } = createSchema.validate(req.body, {
  //   abortEarly: false,
  // });

     res.send("data")
  
};




  






