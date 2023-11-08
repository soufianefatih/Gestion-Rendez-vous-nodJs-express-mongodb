const express = require("express");
// const checkEmailExistence= require("../validator/checkEmailExistence");
const rdvController = require('../controller/rdvController')

const routerUser = express.Router();





routerUser 
    .route('/create')
    .post(rdvController.create)








module.exports = routerUser;
