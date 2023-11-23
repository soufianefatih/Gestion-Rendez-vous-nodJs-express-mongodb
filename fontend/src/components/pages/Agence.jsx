import "./landingpage.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import {getAllagence} from './../../../src/services/AgenceService';
import {Link} from "react-router-dom";


const Agence = ()=>{

  const [agences, setAgence] = useState([]);

  useEffect(() => {
    getAllagence().then((res) => {
      setAgence(res.data);
      console.log(res.data)
    }).catch(err =>{
        console.log(err)
    })
  }, []);

    return (
        <div className="landingpage">
        <Navbar/>
        <section className="dishes mt-2" id="dishes">
          <h3 className="sub-heading mt-5"> our Agence</h3>
          <h1 className="heading"> popular Agence </h1>
          <div className="box-container">
          
          {agences.map((agence) => (
          <div className="card box " style={{ maxWidth: "22rem" }}>
            <a href="#" className="fas fa-heart" />
            <a
              href="#"
              className="fas fa-eye"
            />
            <img
              className="card-img-top p-3"
              src={"http://localhost:5500/" + agence.image}
              height={"150px"}
              alt="Card image cap"
            />
            <div className="card-body">
              <h3 className="card-title">{agence.name}</h3>
              <p className="card-title">{agence.description} </p>

              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <Link
               to={`/category/${agence.id}`}

                className="btnn"
              >
                view All Categorys
              </Link>
            </div>
          </div>
       
       ))    } 
          
          </div>
        </section>
        </div>

    
  
      );

}



export default Agence;



