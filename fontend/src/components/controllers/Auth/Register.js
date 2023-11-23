import { register} from './../../../services/AuthService';
import "./auth.css";
import React, { useState } from "react";


const Register = ()=>{
  const[name , setName]= useState("")
  const[email , setEmail]= useState("")
  const[password , setPassword]= useState("")
  const[role, setRole]= useState("")
 
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await register(name,email, password,role).then(
        (response) => {
            console.log("Sign up successfully", response);
            window.location = "/login";
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  
return(
  
<div className="login-fg">
  <div className="container-fluid">
  
    <div className="row d-flex justify-content-center ">

    <div class="col-xl-8 col-lg-7 col-md-12 bga">
               
            </div>
      <div className="col-xl-4 col-lg-5 col-md-12 login">
    
    <div className="login-section">
          <div className="logo clearfix">
            <a href="/">
            ConfianceCar

            </a>
          </div>
          <h3>Sign up into your new account</h3>
          <ul className="social">
            <li><a href="#" className="facebook"><i className="fab fa-facebook-f facebook-i" /><span>Facebook</span></a></li>
            <li><a href="#" className="twitter"><i className="fab fa-twitter twitter-i" /><span>Twitter</span></a></li>
            <li><a href="#" className="google"><i className="fab fa-google google-i" /><span>Google</span></a></li>
          </ul>
          <div className="or-login clearfix">
            <span>Or</span>
          </div>
          <div className="form-container">
            <form onSubmit={handleSignup}>

            <div className="form-group form-fg">
                <input type="name" name="name" className="input-text" placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)}/>
                <i className="fas fa-users" />
              </div>
              <div className="form-group form-fg">
                <input type="email" name="email" className="input-text" placeholder="Email Address" value={email}  onChange={(e) => setEmail(e.target.value)} />
                <i className="fa fa-envelope" />
              </div>
              <div className="form-group form-fg">
                <input type="password" name="password" className="input-text" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
                <i className="fa fa-unlock-alt" />

              </div>
              <div className="form-group form-fg">
              <select className="input-text" value={role}  onChange={(e) => setRole(e.target.value)}   required>
                                <option >Role</option>

                                <option value='client'>Client</option>
                                <option value="agence">Agence</option>
                            </select>
                            <i class="fas fa-user-tag"></i>
              </div>
             
              <div className="form-group mt-2">
                <button type="submit" className="btn-md btn-fg btn-block">Register</button>
              </div>
            </form>
          </div>
        </div>
    

    

       
      </div>
    </div>
  </div>
</div>

)

}


export default Register;
