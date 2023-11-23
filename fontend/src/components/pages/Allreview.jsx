import "./landingpage.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { Button} from 'react-bootstrap';
import {getAllReviewuser,Deletereview } from './../../../src/services/ReviewService';

const Review = ()=>{

    const [reviews, setReview] = useState([]);
    useEffect(() => {
     getAllReviewuser().then((res) => {
        setReview(res.data);
        console.log(res.data)
      }).catch(err =>{
          console.log(err)
      })
    }, []);

    const deletereview = async(id)=>{
      try {
          let delet = await Deletereview(id);
          console.log("deleteButton:", delet);
          alert("review is deleted!");
          window.location = "/profile/review";

      } catch (e) {
          console.error(e);
          
      }
      }
  

    return (
    
        <div className= "landingpage mt-5">
        <Navbar />
        <section className="dishes mt-2" id="dishes">
          <h3 className="sub-heading mt-5"> our Review</h3>
          <h1 className="heading"> All Review </h1>
          <div className="box-container">
          
         
        
          
           <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Text</th>
      <th scope="col">Status</th>
      <th scope="col"  className="text-center">Action</th>
    </tr>
  </thead>
  {reviews.map((review) => (
  <tbody>
  
    <tr>
      <th scope="row">{review.id}</th>
      <td>{review.texte}</td>
      <td>{review.status == 0 ?<p className=" btn btn-warning btn-sm" >Pending</p>:<p className=" btn btn-success btn-sm" >Confirmed</p>}</td>
      <td className="text-center">
                               
                                  <Button className=" btn btn-danger btn-sm" onClick={() => deletereview (review.id)} > <i class="far fa-trash-alt"></i></Button>

                                </td>
    </tr>

  </tbody>
             ))    } 

</table>
          </div>
        </section>
    
    </div>
  

      );

}




export default Review;



