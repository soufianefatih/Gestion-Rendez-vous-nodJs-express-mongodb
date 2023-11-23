import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import {createCategory } from './../../../services/CategoryService';
import {getAllagenceuser} from './../../../services/AgenceService';
import React, { useState, useEffect} from "react";

const CreateCategory = ()=>{

   
    const[name , setName]= useState("")
    const[type , setType]= useState("")
    const[image , setImage]= useState()
    const[agence_id , setAgenceid]= useState("")

    const [agences, setAgence] = useState([]);

    const handleCreateCategory= async (e) => {
      console.log('created');
      e.preventDefault();
      try {
        await createCategory(name,type, image,agence_id).then(
          (response) => {
              console.log("Create category successfully", response);
              window.location = "/dashboard/category";
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
      getAllagenceuser().then((res) => {
        setAgence(res.data);
        console.log(res.data)
      }).catch(err =>{
          console.log(err)
      })
    }, []);








 return (

    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <Navbar />
    <div class="app-main">
    <Siderbar />
    <div class="app-main__outer">
        <div className="container mt-5">
    
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
                </i>
              </div>
              <div>All Category
                <div className="page-title-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
            <div className="page-title-actions">
              <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" className="btn-shadow mr-3 btn btn-dark">
                <i className="fa fa-star" />
              </button>
              <div className="d-inline-block dropdown">
                <button type="button" className="btn-shadow  btn btn-info">
                  <span className="btn-icon-wrapper pr-2 opacity-7">
                  <i class="fas fa-plus-circle"></i>
                  </span><a  className="text-decoration-none text-white" href='/dashboard/category/create'>Create Category</a>
                </button>
               
              </div>
            </div>  </div>
                       </div>
       
        {/* :::::::::::::::::create categorys::::::::::::::::::::: */}
        <div className='container'>
       <div className=' card text-white bg-light 'style={{maxWidth: '100rem'}} >
      <div className="card-header text-dark">Create Category</div>
      <div className="card-body">
      <div>
                    <form onSubmit={handleCreateCategory}   enctype="multipart/form-data"  >
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">Name</label>
                            <input type="text"  class="form-control" id="exampleInputName1"  value={name}  onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputImage1" class="form-label">Type</label>
                            <input type="text" class="form-control" id="exampleInputImage1" multiple="multiple" value={type}  onChange={(e) => setType(e.target.value)} />
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputImage1" class="form-label">Image</label>
                        <input type="file"  class="form-control" id="exampleInputImage1" multiple="multiple" onChange={(e) => setImage(e.target.files[0])} />
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
    
    </div>
    
       
        </div>
        </div>
        </div>
    
    </div>









 )
  

}

export default CreateCategory;