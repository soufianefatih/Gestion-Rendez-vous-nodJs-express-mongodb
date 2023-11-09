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

  const { _id, fullName = newName, number = newNumber, date = newDate } = value || {};
  const confirm = false;

  const result = await Rdv.findOneAndUpdate(
    { _id, confirm }, // Specify the query conditions here
    { fullName, number, date }, // Specify the fields to update
    { new: true, select: "fullName number date confirm" } // Options
  );

  res.status(201).json({ status: HttpStatusText.SUCCESS, data: { result } });
};

// * get one rendez-vous ById
exports.findOneById = async (req, res,next) => {
  const { _id } = req.body;
  console.log(_id);
  const result = await Rdv.findById(_id);
  if(!result) {
    const err = new AppError('not found rdv', 404);
    return next(err);
  }

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });
};

// * get all rendez-vous ById
exports.list = async (req, res,next) => {
  const user = req.user
  const result = await Rdv.find({user});
  if(!result) {
    const err = new AppError('not found rdv', 404);
    return next(err);
  }

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });
};


// * delete rendez-vous ById
exports.delete = async (req, res,next) => {
  const {_id} = req.body
  console.log("Deleting rdv with _id:", _id);
  const result = await Rdv.findByIdAndDelete(_id);
  if(!result) {
    const err = new AppError('not found rdv', 404);
    return next(err);
  }

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: null });
};


// * change status confirm rendez-vous
exports.confirm = async (req, res, next) => {
  const { value, error } = updateSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const err = new AppError(error, 404);
    return next(err);
  }

  const {_id} = value || {};
  const confirm = true;

  const result = await Rdv.findOneAndUpdate(
    { _id, confirm }, // Specify the query conditions here
    { new: true, select: "fullName number date confirm" } // Options
  );

  res.status(201).json({ status: HttpStatusText.SUCCESS, data: { result } });
};





  






