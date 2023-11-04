const express = require("express");
const {virifylogin} = require("../middleware");
const authController = require('../controller/authController')

const routerUser = express.Router();





routerUser 

    .post("/register", authController.register)






module.exports = routerUser;
