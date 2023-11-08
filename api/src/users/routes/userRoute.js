const express = require("express");
const checkEmailExistence= require("../validator/checkEmailExistence");
const authController = require('../controller/authController')

const route = express.Router();





route
    .route('/register')
    .post(checkEmailExistence, authController.register)

route     
    .route('/login')
    .post(authController.login)







module.exports = route;
