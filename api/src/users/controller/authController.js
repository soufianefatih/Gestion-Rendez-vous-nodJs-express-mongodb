const { User } = require("../../models");
const { registerSchema} = require("../schema");
const asyncHandler = require('express-async-handler')
const AppError = require('../../utils/HttpError');



exports.registera = asyncHandler(async (req, res) => {
  try{ 
  const { value, error } =  registerSchema.validate(req.body, {
    abortEarly: false,
  });
  
  console.log('value',{ value, error });

  const { name, email, password} = value;
  
      if (error) {
        return res.status(400).json({ message: "Validation error", errors: error.details });      // throw  BadRequestError(error )
      }   
  
  
    const result = await User.create({
      name,
      email,
      password,
    });
  
      res.status(201).json(result);

  }catch (error) {
    if (error.status === 409) {
      return res.status(409).json({ message: error.message});

    } else {
      return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  }
 
});

exports.register = async (req, res, next) => {
  const { value, error } = registerSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    // Extract error details for better handling
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    const err = new AppError(`Validation error: ${errorMessage}`, 400);
    return next(err);
  }

  const { name, email, password } = value || {};

  try {
    const result = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json(result);
  } catch (err) {
    // Handle other errors
    console.error(err);
    const internalError = new AppError('Internal Server Error', 500);
    return next(internalError);
  }
};

  






