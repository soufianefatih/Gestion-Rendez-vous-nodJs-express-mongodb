import { useState} from 'react'
import React from "react";
import axios from "axios";
import App from '../../../App';


function Update_cars({data, Close}) {  

  const [onecars, set_onecars] = useState(
   data
    
    );
    const [error, setError] = useState("") 
    const APP_URL = "http://localhost:5500/api/location/cars/update";
  
    const update =async(e)=>{  
        e.preventDefault();
        try{

          axios.post(`${APP_URL}/${onecars.id}`, onecars).then((res) => {
              
        console.log(onecars)
              Close();
          });
        }catch (error) {
          if (error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500 
          ){
            setError(error.response.data.message)
    
          }
        }
         
      }
    
      const handelInput = ({ currentTarget: input })=>{
  
          set_onecars({ ...onecars, [input.name] : input.value})
          console.log(onecars)
      }

    // if (!onecategory) return "No onecategory !"

  return (

    <>
     <form className="p-2"  onSubmit={update}>
  
    <div className="form-group ">
      <label htmlFor="name">marque</label>
      <input type="text" onChange={handelInput} name="marque"  className="form-control" value={onecars.marque}  />
    </div>
    <div className="form-group ">
      <label htmlFor="description">Model</label>
      <input type="text" onChange={handelInput} name="model"  className="form-control" value={onecars.model} />
    </div>
    <div className="form-group ">
      <label htmlFor="description">Price</label>
      <input type="text" onChange={handelInput} name="price"  className="form-control" value={onecars.price} />
    </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit"  className="btn btn-primary">Update</button>
</form>
      
    </>
  )
}

export default Update_cars
