/* -------------------------------------------------------------------------- */
/*                               app|| Config                                 */
/* -------------------------------------------------------------------------- */




const express = require("express");
const app = express();

//* global midleware for not router
app.use((req, res) => {
  res.status(404).json({ message: "Root Not Found" });
});

module.exports = app;
