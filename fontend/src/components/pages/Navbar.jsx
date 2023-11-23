import React from "react";
import "./landingpage.css";
import { isLogin } from './../../middlewares/AuthMiddleware';

const Navbar = ()=>{

   const logout = ()=> {

    localStorage.clear();
    alert('confirm loguot')
     window.location = "/login";
    }
   
    let role = window.localStorage.getItem("role");

return (

    <header>
    <a href="#" className="logo"><i class="fas fa-car"></i> ConfianceCar.</a>
    <nav className="navbar">
      <a className="active" href="/">home</a>
      <a href="/agence">Agence</a>
      <a href="#menu">service</a>
      <a href="/review">review</a>
      <a href="/about">about</a>
      <a href="/contact">contact</a>

      <div>
{!isLogin() ?<>
<a href="/login">login</a>
<a href="/register">Register</a>
</>: <>{role === "client" ?
<a href="/profile">profile</a>:
<a href="/dashboard/youragence">dashboard</a>
}<a href="/login" onClick={()=> logout()}>logout</a></>

}

</div> 
         
    </nav>
    <div className="icons">
      <i className="fas fa-bars" id="menu-bars" />
      <i className="fas fa-search" id="search-icon" />
      <a href="#" className="fas fa-heart" />
      <a href="/profile/booking/create" className="fas fa-shopping-cart" />
    </div>
  </header>
  
)

}

export default Navbar;