const Joi = require("joi");

  
const updateSchema = Joi.object({
  fullName: Joi.string()
      .required(),
  
  number: Joi.number()
      .required(),

  date: Joi.date()
      .required(),

  confirm: Joi.boolean()

  });

  
  module.exports = updateSchema;