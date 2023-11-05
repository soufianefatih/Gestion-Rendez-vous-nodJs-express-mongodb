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

exports.register = async (req, res) => {
      const { value, error } = registerSchema.validate(req.body, {
        abortEarly: false,
      });
  
      console.log('value', { value, error });
  
      if (error) {
        const err = new AppError('Validation error', 400);
        return next(err)
      }
  
      const { name, email, password } = value || {}; // Add this line to handle undefined value
  
      const result = await User.create({
        name,
        email,
        password,
      });
  
      res.status(201).json(result);
   
  };
  
  






