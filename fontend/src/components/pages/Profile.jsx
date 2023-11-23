import "./profile.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import {getOneuser} from './../../../src/services/UserService';

// import {getAllReviewconfirmed} from './../../../src/services/ReviewService';

const Profile = ()=>{
    const [user, setUser] = useState({});
    
    useEffect(() => {
    let id = window.localStorage.getItem("id");
     getOneuser(id).then((res) => {
        setUser(res.data);
        console.log(res.data)
      }).catch(err =>{
          console.log(err)
      })
    }, []);


  

    return (
        <div className= "landingpage mt-5">
        <Navbar />
    <div className="containerprofile  mt-5">
  <div className="img-area ">
    <div className="inner-area">
      <img src="https://static.jobat.be/uploadedImages/grandprofilfb.jpg" alt />
    </div>
  </div>
  <div className="name mt-3">Name : {user.name}</div>
  <div className="about">Email: {user.email}</div>
  <div className="social-icons">
    <a href="#" className="fb"><i className="fab fa-facebook-f" /></a>
    <a href="#" className="twitter"><i className="fab fa-whatsapp" /></a>
    <a href="#" className="insta"><i className="fab fa-instagram" /></a>
  </div>
  <div className="buttons">
    <button  className="btnn"><a href="/profile/review" className="insta">All Review</a></button>
    <button  className="btnn"><a href="/profile/review/create" className="insta">Create Review</a></button>
    <button  className="btnn"><a href="/profile/booking" className="insta">All Booking</a></button>

  </div>
</div>
</div>
  

      );

}




export default Profile;



