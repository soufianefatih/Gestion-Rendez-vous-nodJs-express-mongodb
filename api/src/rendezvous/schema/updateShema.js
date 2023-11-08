const Joi = require("joi");

  
const updateSchema = Joi.object({
  _id: Joi.string(),
  fullName: Joi.string()
      .required(),
  
  number: Joi.number()
      .required(),

  date: Joi.date()
      .required(),

  confirm: Joi.boolean()

  });

  
  module.exports = updateSchema;