/* -------------------------------------------------------------------------- */
/*                               app|| Config                                 */
/* -------------------------------------------------------------------------- */



const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const AppError = require('./utils/HttpError');
const handleGlobalErrors = require('./middleware/ErrorMiddleware');



 //* the will let us get data the data form post
 app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());



//* Require Routes
const authRoutes = require("./users/routes/userRoute");
const rdvRoutes = require("./rendezvous/routes/rdvRoute");

//* Register Our Routes
app.use("/api/users", authRoutes);
app.use("/api/rdv", rdvRoutes);




//* global midleware for not router
app.all('*',(req, res,err) => {
  res.status(404).json({ message: "Root Not Found" });
});



//   global error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: 'Internal Server Error', error: err.message});
// });


// Route handler example
app.get('/example', (req, res, next) => {
  // Some logic that might throw an error
  const err = new AppError('Example error message', 404);
  next(err); // Pass the error to the next middleware
});

// Global error handling middleware (should be the last middleware)
app.use(handleGlobalErrors);     



module.exports = app;
