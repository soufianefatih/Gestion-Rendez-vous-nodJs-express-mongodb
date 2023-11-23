import "./landingpage.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import {Button} from 'react-bootstrap';
import {getAllBookinguser} from './../../../src/services/BookingService';

const Review = ()=>{

    const [bookings, setBooking] = useState([]);
    useEffect(() => {
        getAllBookinguser().then((res) => {
        setBooking(res.data);
        console.log(res.data)
      }).catch(err =>{
          console.log(err)
      })
    }, []);

   
    return (
    
        <div className= "landingpage mt-5">
        <Navbar />
        <section className="dishes mt-2" id="dishes">
          <h3 className="sub-heading mt-5"> our Booking</h3>
          <h1 className="heading"> All booking </h1>
          <div className="box-container">


 <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">date_from</th>
      <th scope="col">days</th>
      <th scope="col">price</th>
      <th scope="col">status</th>

    </tr>
  </thead>
  {bookings.map((booking) => (
  <tbody>
  
    <tr>
      <th scope="row">{booking.id}</th>
      <td>{booking.date_from}</td>
      <td>{booking.days}</td>
      <td>{booking.total_price}</td>
      <td>{booking.status == 0 ?<p className=" btn btn-warning btn-sm" >Pending</p>:<p className=" btn btn-success btn-sm" >Confirmed</p>}</td>
      <td className="text-center">
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



