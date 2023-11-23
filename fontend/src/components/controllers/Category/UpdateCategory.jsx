import { useState} from 'react'
import React from "react";
import axios from "axios";
import App from '../../../App';


function Update_category({data, Close}) {  

  const [onecategory, set_onecategory] = useState(
   data
    
    );
    const [error, setError] = useState("") 
    const APP_URL = "http://localhost:5500/api/location/category/update";
  
    const update =async(e)=>{  
        e.preventDefault();
        try{

          axios.post(`${APP_URL}/${onecategory.id}`, onecategory).then((res) => {
              
        console.log(onecategory)
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
  
          set_onecategory({ ...onecategory, [input.name] : input.value})
          console.log(onecategory)
      }

    // if (!onecategory) return "No onecategory !"

  return (

    <>
     <form className="p-2"  onSubmit={update}>
  
    <div className="form-group ">
      <label htmlFor="name">name</label>
      <input type="text" onChange={handelInput} name="name"  className="form-control" value={onecategory.name}  />
    </div>
    <div className="form-group ">
      <label htmlFor="description">type</label>
      <input type="text" onChange={handelInput} name="type"  className="form-control" value={onecategory.type} />
    </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit"  className="btn btn-primary">Update</button>
</form>
      
    </>
  )
}

export default Update_category
