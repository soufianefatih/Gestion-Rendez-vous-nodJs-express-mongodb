// middleware/errorMiddleware.js
const AppError = require('./HttpError');

const handleGlobalErrors = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    // In development, send detailed error information
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  } else {
    // In production, send a more user-friendly error message
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
};

module.exports = handleGlobalErrors;
