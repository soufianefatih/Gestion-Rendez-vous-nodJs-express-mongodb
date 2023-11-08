const Joi = require("joi");

  
const createSchema = Joi.object({
  fullName: Joi.string()
      .required(),
  
  phone: Joi.number()
      .required(),

  date: Joi.date()
      .required(),

  confirm: Joi.boolean()
      .required(),

  });

  
  module.exports = createSchema;