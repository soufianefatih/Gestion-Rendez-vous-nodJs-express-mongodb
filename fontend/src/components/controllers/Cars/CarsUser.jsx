import { useState, useEffect} from 'react'
import React from "react";
import {getAllcarsuser,deletecars} from './../../../services/CarsService';
import App from '../../../App';
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import CardDash from './../../../components/layouts/carddash';
import { Button, Modal,  } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Update_cars from './UpdateCars';



function Cars() {  
    const [cars, setCars] = useState([]);
    const [onecars, set_onecars] = useState();

    const [update, setUpdate] = useState(false);
    const handleCloseU = () => setUpdate(false);

    useEffect(() => {
        getAllcarsuser().then((res) => {
          setCars(res.data);
          console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
      }, [update,set_onecars]);


      const handleUpdate = (onecars) => {
        set_onecars(onecars)
        setUpdate(true)
        };
        const deletecar = async(id)=>{
            try {
                let delet = await deletecars(id);
                console.log("deleteButton:", delet);
                alert("cars is deleted!");
                window.location = "/dashboard/cars";
    
            } catch (e) {
                console.error(e);
            }
            }
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
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
                <th className="text-center">Info</th>

               
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
                                <div className="widget-heading">{car.price}</div>
                                   </td>
                                   
                                   <td className="text-center">
                                <div className="widget-heading">{car.status}</div>
                                   </td>
                               
                                <td className="text-center">
                                  <Button className=" btn btn-warning btn-sm mr-1"onClick={() => handleUpdate(car)} ><i class="far fa-edit"></i></Button>
                                  <Button className=" btn btn-danger btn-sm" onClick={() =>  deletecar (car.id)}  ><i class="far fa-trash-alt"></i></Button>

                                </td>
                                <td className="text-center">
                                  <Link to={`/dashboard/cars/${car.id}`} className=" btn btn-primary btn-sm mr-1" ><i class="far fa-eye"></i></Link>
                            
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


        <Modal show={update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Update_cars data={onecars}  Close={handleCloseU}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </div>

      
      
    
  )
}

export default Cars
