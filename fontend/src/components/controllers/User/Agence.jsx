import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import CardDash from './../../../components/layouts/carddash';
import React, { useState, useEffect } from "react";
import {getAllagence,ConfirmStatususer} from './../../../services/UserService';
import { handelCatchInAxios } from "../../../services/AxiosCatchService";


const User = ()=>{

    const [user, setUser] = useState([]);
 
    useEffect(() => {
        getAllagence().then((res) => {
          setUser(res.data);
          console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
      }, []);
  

      const confirmstaus = async(id)=>{
        try {
            let confirm = await ConfirmStatususer(id);
            console.log("status:", confirm);
            alert("status is changed!");
            window.location = "dashboard/agenceuser";
        } catch (e) {
            console.error(e);
            handelCatchInAxios(e);
        }
        }

return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <Navbar />
    <div className="app-main">
    <Siderbar />
    <div className="app-main__outer">
        <div className="container mt-5 " >
  
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
                </i>
              </div>
              <div>All Agences users
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
                  </span>
                  <a   className="text-decoration-none text-white" href='/dashboard/user/create'>Create user</a>
                </button>
               
              </div>
            </div>  </div>
                       </div>
        <CardDash/>
        {/* :::::::::::::::::tables users::::::::::::::::::::: */}
         <div className="row">
    <div className="col-md-12">
      <div className="main-card mb-3 card">
        <div className="card-header">Table users
          <div className="btn-actions-pane-right">
            <div role="group" className="btn-group-sm btn-group">
              <button className="active btn btn-focus">Create User</button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="align-middle mb-0 table table-borderless table-striped table-hover">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th >Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Role</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
               
              </tr>
            </thead>
            <tbody>
                

{user.map((users, index) => (
                                <tr  key={index}>
                                <td className="text-center text-muted">{users.id}</td>
                                <td>
                                  <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                     
                                      <div className="widget-content-left flex2">
                                        <div className="widget-heading">{users.name}</div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-center">
                                <div className="widget-heading">{users.email}</div>
                      
                                   </td>
                                   <td className="text-center">
                                <div className="widget-heading">{users.role}</div>
                      
                                   </td>
                                   <td className="text-center">
                                <div className="widget-heading">{users.status == 0 ? <p className=" btn btn-warning btn-sm" >Pending</p>:<p className=" btn btn-success btn-sm" >Confirmed</p>}</div>
                                   </td>
                               
                                <td className="text-center">
                                  <div className=" btn btn-secondary btn-sm" onClick={() => confirmstaus(users.id)} >confirmer</div>
                                </td>
                               
                              </tr>

    ))    } 
 
            </tbody>
          </table>
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



export default User;