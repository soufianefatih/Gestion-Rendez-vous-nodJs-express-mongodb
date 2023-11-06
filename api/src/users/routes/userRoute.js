const express = require("express");
const checkUserExistence= require("../validator/checkUserExistence");
const authController = require('../controller/authController')

const routerUser = express.Router();





routerUser 

    .post("/register", checkUserExistence, authController.register)






module.exports = routerUser;
