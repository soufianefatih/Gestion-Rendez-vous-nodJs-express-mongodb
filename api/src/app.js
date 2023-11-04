/* -------------------------------------------------------------------------- */
/*                               app|| Config                                 */
/* -------------------------------------------------------------------------- */




const express = require("express");
const app = express();
const bodyParser = require("body-parser");

  //* Require Routes
const authRoutes = require("./users/routes/userRoute");
//* Register Our Routes
app.use("/api/users/", authRoutes);

 //* the will let us get data the data form post
 app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());


//* global midleware for not router
app.use((req, res,err) => {
  res.status(404).json({ message: "Root Not Found" });
});

//* global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message});
});
      



module.exports = app;
