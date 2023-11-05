// middleware/errorMiddleware.js

// const handleGlobalErrors = (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';

//   if (process.env.NODE_ENV === 'development') {
//     // In development, send detailed error information
//     res.status(err.statusCode).json({
//       status: err.status,
//       message: err.message,
//       error: err,
//       stack: err.stack,
//     });
//   } else {
//     // In production, send a more user-friendly error message
//     res.status(err.statusCode).json({
//       status: err.status,
//       message: err.message,
//     });
//   }
// };
// middleware/errorHandler.js
// const handleGlobalErrors = (err, req, res, next) => {
//   // Log the error for debugging purposes
//   console.error(err);

//   // Handle AppError instances
//   if (err instanceof AppError) {
//     return res.status(err.statusCode).json({
//       status: err.status,
//       message: err.message,
//     });
//   }

//   // Handle other errors
//   return res.status(500).json({
//     status: 'error',
//     message: 'Internal Server Error',
//   });
// };
const handleGlobalErrors = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  };

module.exports = handleGlobalErrors;





