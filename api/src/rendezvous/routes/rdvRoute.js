const express = require("express");
const checkEmailExistence= require("../validator/checkEmailExistence");
const authController = require('../controller/authController')

const routerUser = express.Router();





routerUser 
    .route('/register')
    .post(checkEmailExistence, authController.register)

    routerUser     
    .route('/login')
    .post(authController.login)







module.exports = routerUser;
