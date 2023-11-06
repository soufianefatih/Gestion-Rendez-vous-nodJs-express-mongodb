const express = require("express");
const checkEmailExistence= require("../validator/checkEmailExistence");
const authController = require('../controller/authController')

const routerUser = express.Router();





routerUser 

    .post("/register", checkEmailExistence, authController.register)






module.exports = routerUser;
