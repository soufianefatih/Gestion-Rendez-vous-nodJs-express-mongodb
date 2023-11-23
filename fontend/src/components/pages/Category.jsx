import "./landingpage.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import {   getOneagence} from './../../../src/services/AgenceService';
import {useParams} from  "react-router-dom";
import {Link} from "react-router-dom";


const Category = ()=>{

    const [categorys, setCategory] = useState([]);
    const params  = useParams();

    useEffect(() => {
        getOneagence(params.id).then((res) => {
          setCategory(res.data.categorys);
          console.log(res.data.categorys)
        }).catch(err =>{
            console.log(err)
        })
      }, []);


console.log(categorys);


    return (
        <div className="landingpage">
        <Navbar/>
        <section className="dishes mt-2" id="dishes">
          <h3 className="sub-heading mt-5"> our Category</h3>
          <h1 className="heading"> popular Category </h1>
          <div className="box-container">
          
          {categorys.map((category) => (
          <div className="card box " style={{ maxWidth: "22rem" }}>
            <a href="#" className="fas fa-heart" />
            <a
              href="#"
              className="fas fa-eye"
            />
            <img
              className="card-img-top p-3"
              src={"http://localhost:5500/" + category.image}
              height={"150px"}
              alt="Card image cap"
            />
            <div className="card-body">
              <h3 className="card-title">{category.name}</h3>
              <p className="card-title">{category.type} </p>

              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <Link
              to={`/cars/${category.id}`}
                className="btnn"
              >
                view All Cars
              </Link>
            </div>
          </div>
       
       ))    } 
          
          </div>
        </section>
        </div>

    
  
      );

}



export default Category;



