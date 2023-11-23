import "./landingpage.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { createBooking } from './../../../src/services/BookingService';


const Cart = () => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        let car = window.localStorage.getItem('product');
        setCars(JSON.parse(car))

    }, []);
    console.log('cars : ', cars)

    const [date_from, setDatefrom] = useState("")
    const [days, setdays] = useState("")

    
    const handleCreatebooking = async (e) => {
        e.preventDefault();
        try {
            await createBooking(date_from, days, cars).then(
                (response) => {
                    console.log("Create booking successfully / ", response);
                    // window.location = "/profile/booking";
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };


    return (

        <div className="landingpage">
            <Navbar />
            <section className="dishes mt-2" id="dishes">
                <h3 className="sub-heading mt-5"> Booking</h3>
                <h1 className="heading"> Create Booking </h1>
                <div className="box-container">
                    {cars.map((car) => (

                        <div key={car.id} className="card box " style={{ maxWidth: "24rem" }}>
                            <div className="card-body">
                                <div className="content">

                                    <h3> Marque : {car.marque}</h3>
                                    <p>Model : {car.model}.</p>

                                    <span className="price">price : $ {car.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <form className="box-container" form onSubmit={handleCreatebooking} enctype="multipart/form-data" >
                    <div className="card box " style={{ maxWidth: "24rem" }}>
                        <div className="card-body">
                            <div class="mb-3">
                                <label for="exampleInputName1" class="form-label">date_from</label>
                                <input type="date" class="form-control" id="exampleInputName1" value={date_from} onChange={(e) => setDatefrom(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputName1" class="form-label">days</label>
                                <input type="number" class="form-control" id="exampleInputName1" value={days} onChange={(e) => setdays(e.target.value)} />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </section >
        </div >


    );

}



export default Cart;



