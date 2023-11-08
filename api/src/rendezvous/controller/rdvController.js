const { Rdv} = require("../../models");
const { createSchema} = require("../schema");
const AppError = require('../../utils/HttpError');
const HttpStatusText = require('../../utils/HttpStatusText');




// * create  new rdv
exports.create = async (req, res, next) => {
  console.log('Request body:', req.body); // Add this line for debugging

  const { value, error } = createSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const err = new AppError(error, 404);
    return next(err);
  }

  const { fullName, phone, date} = value || {};

   // Set the confirm  based on the condition (data.type)
  //  const data = req.body
   const confirm = false;
  
  const { _id } = req.user;
  console.log('id',_id);
  
  const result = await Rdv.create({
    fullName, phone, date,confirm,userId:_id
  });

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });
};







  






