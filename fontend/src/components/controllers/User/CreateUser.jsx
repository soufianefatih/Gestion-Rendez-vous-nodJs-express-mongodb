import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import {createuser } from './../../../services/UserService';
import React, { useState } from "react";

const Createuser = ()=>{

   
    const[name , setName]= useState("")
    const[email , setEmail]= useState("")
    const[password , setPassword]= useState("")
    const[role, setRole]= useState("")
    const[status, setStatus]= useState("")

    const handleCreateuser = async (e) => {
      e.preventDefault();
      try {
        await createuser(name,email, password,role,status).then(
          (response) => {
              console.log("Create user successfully", response);
              window.location = "/dashboard/user";
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
    };








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
              <div>All Users
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
                  </span><a  className="text-decoration-none text-white" href='/dashboard/user/create'>Create user</a>
                </button>
               
              </div>
            </div>  </div>
                       </div>
       
        {/* :::::::::::::::::create categorys::::::::::::::::::::: */}
        <div className='container'>
       <div className=' card text-white bg-light 'style={{maxWidth: '100rem'}} >
      <div className="card-header text-dark">Create User</div>
      <div className="card-body">
      <div>
                    <form onSubmit={handleCreateuser} >
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">Name</label>
                            <input type="text"  class="form-control" id="exampleInputName1"  value={name}  onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputImage1" class="form-label">Email</label>
                            <input type="text" class="form-control" id="exampleInputImage1" multiple="multiple" value={email}  onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputImage1" class="form-label"> password</label>
                            <input type="text"  class="form-control" id="exampleInputImage1" multiple="multiple"  value={password}  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="mb-3">
                                <select for="exampleInputImage1" class="form-control form-select" value={role}  onChange={(e) => setRole(e.target.value)} required>
                                    <option >Role</option>
    
                                    <option value='client'>Client</option>
                                    <option value="agence">Agence</option>
                                </select>
                        </div>
                        <div class="mb-3">
                            <select for="exampleInputImage1" class="form-control form-select" value={status}  onChange={(e) => setStatus(e.target.value)}  required>
                                    <option >Status</option>
    
                                    <option value='0'>0</option>
                                    <option value="1">1</option>
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

export default Createuser;