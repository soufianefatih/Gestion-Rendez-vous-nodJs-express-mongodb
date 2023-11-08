const express = require("express");
const checkRdvExistence= require("../validator/checkRdvExistence");
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
    .put( virifylogin,checkRdvExistence,rdvController.update)    

route 
    .route('/find')
    .get( virifylogin,checkRdvExistence,rdvController.findOneById)  




module.exports = route;
