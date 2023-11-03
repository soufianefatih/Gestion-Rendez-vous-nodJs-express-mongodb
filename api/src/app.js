/* -------------------------------------------------------------------------- */
/*                               app|| Config                                 */
/* -------------------------------------------------------------------------- */




const express = require("express");
const app = express();

//* global midleware for not router
app.use((req, res,err) => {
  res.status(404).json({ message: "Root Not Found" });
});

const User = require("./models/user") 

app.post("/user" ,(res,req)=>{
    // let data = req.body;
    // const user = await User.create({
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    
    // });
  
    // res.json(user);
    res.send('hee')

})

module.exports = app;
