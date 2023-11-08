const express = require("express");
// const checkEmailExistence= require("../validator/checkEmailExistence");
const rdvController = require('../controller/rdvController')
const{virifylogin}= require('../../middleware')


const route = express.Router();


route 
    .route('/create')
    .post( virifylogin,rdvController.create)

route 
    .route('/all')
    .get( virifylogin,rdvController.all)    

route 
    .route('/update')
    .put( virifylogin,rdvController.update)    







module.exports = route;
