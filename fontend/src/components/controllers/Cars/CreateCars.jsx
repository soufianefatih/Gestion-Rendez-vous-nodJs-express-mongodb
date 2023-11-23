import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import {createCars } from './../../../services/CarsService';
import {getAllcategoryuser} from './../../../services/CategoryService';
import React, { useState, useEffect} from "react";

const CreateCars = ()=>{

   
    const[marque , setMarque]= useState("")
    const[model, setModel]= useState("")
    const[image , setImage]= useState()
    const[price, setPrice]= useState("")
    const[category_id , setCategoryid]= useState("")

    const [categorys, setCategory] = useState([]);
    
    const handleCreateCategory= async (e) => {
      console.log('created');
      e.preventDefault();
      try {
        await createCars(marque,model, image,price,category_id).then(
          (response) => {
              console.log("Create cars successfully", response);
              window.location = "/dashboard/cars";
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
        getAllcategoryuser().then((res) => {
        setCategory(res.data);
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
              <div>All Cars
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
                  </span><a  className="text-decoration-none text-white" href='/dashboard/cars/create'>Create Cars</a>
                </button>
               
              </div>
            </div>  </div>
                       </div>
       
        {/* :::::::::::::::::create categorys::::::::::::::::::::: */}
        <div className='container'>
       <div className=' card text-white bg-light 'style={{maxWidth: '100rem'}} >
      <div className="card-header text-dark">Create Cars</div>
      <div className="card-body">
      <div>
                    <form onSubmit={handleCreateCategory}   enctype="multipart/form-data"  >
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">Marque</label>
                            <input type="text"  class="form-control" id="exampleInputName1"  value={marque}  onChange={(e) => setMarque(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputImage1" class="form-label">Model</label>
                            <input type="text" class="form-control" id="exampleInputImage1" multiple="multiple" value={model}  onChange={(e) => setModel(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputImage1" class="form-label">Price</label>
                            <input type="number" class="form-control" id="exampleInputImage1" multiple="multiple" value={price}  onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputImage1" class="form-label">Image</label>
                        <input type="file"  class="form-control" id="exampleInputImage1" multiple="multiple" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                       
                    <div class="mb-3">
                            <select for="exampleInputImage1" class="form-control form-select"  required value={category_id}  onChange={(e) => setCategoryid(e.target.value)}>
                                    <option >Category Name</option>
                                    {categorys.map((category) => (
                                    <option value={category.id} > {category.name} </option>
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

export default CreateCars;