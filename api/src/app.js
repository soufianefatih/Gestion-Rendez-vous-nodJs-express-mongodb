/* -------------------------------------------------------------------------- */
/*                               app|| Config                                 */
/* -------------------------------------------------------------------------- */




const express = require("express");
const app = express();
const bodyParser = require("body-parser");


 //* the will let us get data the data form post
 app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());


//* global midleware for not router
app.use((req, res,err) => {
  res.status(404).json({ message: "Root Not Found" });
});



module.exports = app;
