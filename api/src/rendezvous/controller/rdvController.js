const { Rdv} = require("../../models");
const { createSchema,updateSchema} = require("../schema");
const AppError = require('../../utils/HttpError');
const HttpStatusText = require('../../utils/HttpStatusText');




// * create  new rdv
exports.create = async (req, res, next) => {

  const { value, error } = createSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const err = new AppError(error, 404);
    return next(err);
  }

  const { fullName, number, date} = value || {};
  const confirm = false;
  const user = req.user;
  
  const result = await Rdv.create({
    fullName,number, date,confirm,user
  });

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });
};



// * get all rendez-vous
exports.all = async (req, res,next) => {

  const result = await Rdv.find();
  if(!result) {
    const err = new AppError('not found rdv', 404);
    return next(err);
  }

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });
};


// * update rendez-vous
exports.update = async (req, res, next) => {

  const { value, error } = updateSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const err = new AppError(error, 404);
    return next(err);
  }

  const { fullName= newName, number= newNumber, date =newDate} = value || {};
  const confirm = false;
  
  const result = await Rdv.findOneAndUpdate({
    fullName,number, date,confirm
  });

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });
};






  






