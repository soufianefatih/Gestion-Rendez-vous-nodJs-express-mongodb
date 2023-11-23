import React from "react";
import "./landingpage.css";
import Navbar from "./Navbar";
import logo  from './../../../src/components/images/logo.jpg';

const About = ()=>{

    return (
        <div className= "landingpage mt-5">
        <Navbar/>

     <section className="about mt-5 " id="about">
  <h3 className="sub-heading mt-5 "> about us </h3>
  <h1 className="heading"> why choose us? </h1>
  <div className="rowo">
    <div className="image">
      <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/4341524-leasing-flat-vector-illustration-car-rental-service-vehicle-hire-deal-automobile-purchase-auto-dealership-indonesian-business-isolated-cartoon-concept-on-white-background-vectoriel.jpg" alt />
    </div>
    <div className="content">
      <h3>best Agence in the country</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-shipping-fast" />
          <span>Your Cars</span>
        </div>
        <div className="icons">
          <i className="fas fa-dollar-sign" />
          <span>easy payments</span>
        </div>
        <div className="icons">
          <i className="fas fa-headset" />
          <span>24/7 service</span>
        </div>
      </div>
      <a href="#" className="btnn">learn more</a>
    </div>
  </div>
</section>
</div>

    
  

      );

}



export default About;



