const Joi = require("joi");

  
const createSchema = Joi.object({
  fullName: Joi.string()
      .required(),
  
  number: Joi.number()
      .required(),

  date: Joi.date()
      .required(),

  confirm: Joi.boolean()

  });

  
  module.exports = createSchema;