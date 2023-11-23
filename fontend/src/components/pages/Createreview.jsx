import "./landingpage.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";

import {Createreview} from './../../../src/services/ReviewService';
import {getAllagence} from './../../../src/services/AgenceService';

const CreateReview = ()=>{

    const[texte , setTexte]= useState("")
    const[agence_id , setAgenceid]= useState("")

    const [agences, setAgence] = useState([]);

    const handleCreateReview = async (e) => {
        console.log('created');
        e.preventDefault();
        try {
          await Createreview(texte,agence_id).then(
            (response) => {
                console.log("Create Review successfully", response);
                window.location = "/profile/review";
            },
            (error) => {
              console.log(error);
            }
          );
        } catch (err) {
          console.log(err);
        }
      };
  
  
      useEffect(() => {
        getAllagence().then((res) => {
          setAgence(res.data);
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
          <h1 className="heading"> Create Review </h1>
          <div className="box-container">
          <div className="card-body">
      <div>
                    <form onSubmit={handleCreateReview}     >
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">Text</label>
                            <input type="text"  class="form-control" id="exampleInputName1"  value={texte}  onChange={(e) => setTexte(e.target.value)}/>
                        </div>
       
                    <div class="mb-3">
                            <select for="exampleInputImage1" class="form-control form-select"  required value={agence_id}  onChange={(e) => setAgenceid(e.target.value)}>
                                    <option >Agence Name</option>
                                    {agences.map((agence) => (
                                    <option value={agence.id} > {agence.name} </option>
                                    ))}
                                </select>
                        </div>
    
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
      </div>
         
        
          

          </div>
        </section>
    
    </div>
  

      );

}




export default CreateReview;



