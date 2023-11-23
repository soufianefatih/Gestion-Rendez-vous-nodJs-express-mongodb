import "./landingpage.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";

import {getAllReviewconfirmed} from './../../../src/services/ReviewService';

const Review = ()=>{

    const [reviews, setReview] = useState([]);
    useEffect(() => {
     getAllReviewconfirmed().then((res) => {
        setReview(res.data);
        console.log(res.data)
      }).catch(err =>{
          console.log(err)
      })
    }, []);
  

    return (
    
        <div className= "landingpage mt-5">
        <Navbar />
        <section className="dishes mt-2" id="dishes">
          <h3 className="sub-heading mt-5"> our Review</h3>
          <h1 className="heading"> All Review </h1>
          <div className="box-container">
          
          {reviews.map((review) => (
          <div className="card box " style={{ maxWidth: "24rem" }}>
            <a href="#" className="fas fa-heart" />
            <a
              href="#"
              className="fas fa-eye"
            />
            <img
              className="card-img-top p-3"
              src={"https://static.jobat.be/uploadedImages/grandprofilfb.jpg"}
              height={"120px"} 
              alt="Card image cap"
            />
            <div className="card-body">
              <h3 className="card-title">{review.client.name}</h3>
              
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              
              <p className="card-title">{review.texte}</p>

           
            
            </div>
          </div>
           ))    } 
          
          </div>
        </section>
    
    </div>
  

      );

}




export default Review;



