import React from "react";
import "./landingpage.css";
import logo  from './../../../src/components/images/logo.jpg';

const Home = ()=>{

    return (

        <section className="home" id="home">
          
        <div className="swiper-container home-slider">
          <div className="swiper-wrapper wrapper">
      
            <div className="swiper-slide slide">
              <div className="content">
           <div className="shape shape-2 " />
           <div className="shape shape-3 mt-2" />
       
                <span>Confiane Car</span>
                <h3>Rent <spam className ='delivery'>Car</spam></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                <a href="#" className="btnn">order now</a>
              <section className="socialmedia   media">
        {/* Facebook */}
        <a href> <i className="fab fa-facebook-f" /></a> 
        {/* Twitter */}
        <a href><i className="fab fa-twitter" /></a>
        {/* Google */}
        <a href><i className="fab fa-google" /></a>  
        {/* Instagram */}
        <a href> <i className="fab fa-instagram" /></a>
        {/* Linkedin */}
        <a href> <i className="fab fa-linkedin-in" /></a>
        {/* Github */}
        <a href>    <i className="fab fa-github" /> </a>
      </section>
      
          
        <div className="shape shape-7 mt-3" />
       
              </div> 
              <div>                  <div className="shape shape-4" />
      </div>
      
              <div className="image">
              <div className="shape shape-1" />
              <div className="shape shape-7" />
      
      
                <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/3609227-location-voiture-bail-auto-signer-document-et-proprietaire-donner-cle-automobile-au-client-contrat-de-location-voiture-conduite-vector-illustration-vectoriel.jpg" alt />
              </div>
              <div>        <div className="shape shape-8" />
      </div>
      
            </div>
           
          </div>
          
          <div className="swiper-pagination" />
        </div>
      </section>
      
  

      );

}



export default Home;



