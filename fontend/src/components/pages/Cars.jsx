import "./landingpage.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import {getAllcategorycars} from './../../../src/services/CategoryService';
import {getOnecars} from './../../../src/services/CarsService';

import {useParams} from  "react-router-dom";
import { isLogin } from "./../../middlewares/AuthMiddleware";

const Cars = ()=>{

    const [cars, setCars] = useState([]);
    const params  = useParams();

    useEffect(() => {
        getAllcategorycars(params.id).then((res) => {
          setCars(res.data.cars);
          console.log(res.data.cars)
        }).catch(err =>{
            console.logrs(err)
        })
      }, []);


const infocars = async(id) =>{
  if (isLogin()) {
    try {
      let cars = await getOnecars(id);
      console.log('cars',cars);

      let data = JSON.parse(window.localStorage.getItem("product"))|| [] ;
    //   let array = [];
     data.push(cars.data);
    //   console.log(cars.data.id);
      console.log(data);
      // console.log(array);
      window.localStorage.setItem("product", JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  } else {
    window.location = "/login";
  
  }

}


    



console.log(cars);
    return (
        <div className="landingpage">
        <Navbar/>
        <section className="dishes mt-2" id="dishes">
          <h3 className="sub-heading mt-5"> our Cars</h3>
          <h1 className="heading"> popular Cars </h1>
          <div className="box-container">
          
          {cars.map((car) => (
           <div className="card box " style={{ maxWidth: "24rem" }}>
           <div className="image">
             <img
               className="card-img-top p-3"
               src={"http://localhost:5500/" + car.image}
               height={"150px"}
               alt="Card image cap"
             />

             <a href="#" className="fas fa-heart" />
           </div>

           <div className="card-body">
             <div className="content">
               <div className="stars">
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star-half-alt" />
               </div>
               <h3> Marque : {car.marque}</h3>
               <p>Model : {car.model}.</p>
               <button
                 href="#"
                 className="btnn"
                 onClick={() => infocars(car.id)} 
               >
                 add to cart
               </button>
               <span className="price"> $ {car.price}</span>
             </div>
           </div>
         </div>
       ))    } 
          
          </div>
        </section>
        </div>

    
      );

}



export default Cars;



