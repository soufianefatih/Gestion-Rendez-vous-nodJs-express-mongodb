const { Rdv } = require('../../models'); // Replace with the correct path to your User model
const AppError = require('../../utils/HttpError');


const checkRdvExistence = async (req, res, next) => {

  try {
    const existingUser = await Rdv.findById();

    if (!existingUser) {
        const err = new AppError('rdv not exist', 409);
       return next(err); // Pass the error to the next middleware
    }

    // If the user doesn't exist, proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error checking rdv:", error);
    const err = new AppError('Internal Server Error', 500);
     return next(err); // Pass the error to the next middleware

  }
};

module.exports =checkRdvExistence;
