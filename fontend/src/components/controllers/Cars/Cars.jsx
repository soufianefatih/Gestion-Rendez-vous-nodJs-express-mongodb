import { useState, useEffect} from 'react'
import React from "react";
import {getAllcategorycars} from './../../../services/CategoryService';
import {useParams} from  "react-router-dom";
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import CardDash from './../../../components/layouts/carddash';



function Category_cars() {  
    const [cars, setCars] = useState([]);
    const params  = useParams();

    useEffect(() => {
        getAllcategorycars(params.id).then((res) => {
          setCars(res.data.cars);
          console.log(res.data.cars)
        }).catch(err =>{
            console.log(err)
        })
      }, []);


console.log(cars);


  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <Navbar />
    <div className="app-main">
    <Siderbar />
    <div className="app-main__outer">
        <div className="container mt-5 " >
        <CardDash/>
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
                  </span>
                  <a   className="text-decoration-none text-white" href='/dashboard/cars/create'>Create cars</a>
                </button>
               
              </div>
            </div>  </div>
                       </div>
        {/* :::::::::::::::::tables users::::::::::::::::::::: */}
         <div className="row">
    <div className="col-md-12">
      <div className="main-card mb-3 card">
        <div className="card-header">Table cars
          <div className="btn-actions-pane-right">
            <div role="group" className="btn-group-sm btn-group">
              <button className="active btn btn-focus">Create cars</button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="align-middle mb-0 table table-borderless table-striped table-hover">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th >Marque</th>
                <th className="text-center">Image</th>
                <th className="text-center">Model</th>
                <th className="text-center">Price</th>

               

               
              </tr>
            </thead>
            <tbody>
                

{cars.map((car, index) => (
                                <tr  key={index} >
                                <td className="text-center text-muted">{car.id}</td>
                                <td>
                                  <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                      <div className="widget-content-left flex2">
                                        <div className="widget-heading">{car.marque}</div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-center">
                                 <img width={100} height={70}  src={"http://localhost:5500/" + car.image}></img>
                                   </td>
                                <td className="text-center">
                                <div className="widget-heading">{car.model}</div>
                      
                                   </td>
                                   <td className="text-center">
                                <div className="widget-heading">{car.price} DH</div>
                      
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

export default Category_cars
