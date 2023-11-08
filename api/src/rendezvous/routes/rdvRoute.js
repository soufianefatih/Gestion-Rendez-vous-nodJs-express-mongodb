const express = require("express");
// const checkEmailExistence= require("../validator/checkEmailExistence");
const rdvController = require('../controller/rdvController')
const{virifylogin}= require('../../middleware')


const routerUser = express.Router();





routerUser 
    .route('/create')
    .post( virifylogin,rdvController.create)








module.exports = routerUser;
