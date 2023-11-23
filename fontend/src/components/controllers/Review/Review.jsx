import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import CardDash from './../../../components/layouts/carddash';
import React, { useState, useEffect } from "react";
import {getAllReview,statusReview} from './../../../services/ReviewService';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";


const Booking = ()=>{

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        getAllReview().then((res) => {
          setReview(res.data);
          console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
      }, []);

      const confirmreview = async(id)=>{
        try {
            let confirm = await statusReview(id);
            console.log("status:", confirm);
            alert("status is changed!");
            window.location = "/dashboard/review"
        } catch (e) {
            console.error(e);
            
        }
        }

     console.log('all review',reviews)
        
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
              <div>All Review
                <div className="page-title-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
            <div className="page-title-actions">
              <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" className="btn-shadow mr-3 btn btn-dark">
                <i className="fa fa-star" />
              </button>
           
            </div>  </div>
                       </div>
        <CardDash/>
        {/* :::::::::::::::::tables users::::::::::::::::::::: */}
         <div className="row">
    <div className="col-md-12">
      <div className="main-card mb-3 card">
        <div className="card-header">Table Booking
          <div className="btn-actions-pane-right">
            <div role="group" className="btn-group-sm btn-group">
              <button className="active btn btn-focus">Create booking</button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="align-middle mb-0 table table-borderless table-striped table-hover">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th >Texte</th>
                <th className="text-center">status</th>
                <th className="text-center">Action</th>

              </tr>
            </thead>
            <tbody>
    
{reviews.map((review, index) => (
                                <tr  key={index}>
                                <td className="text-center text-muted">{review.id}</td>
                                <td>
                                  <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                      <div className="widget-content-left flex2">
                                        <div className="widget-heading">{review.texte}</div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                               
                                   <td className="text-center">
                                <div className="widget-heading">{review.status == 0 ? <p className=" btn btn-warning btn-sm" >Pending</p>:<p className=" btn btn-success btn-sm" >Confirmed</p>}</div>
                                   </td>
                                <td className="text-center">
                                  <Button className=" btn btn-success btn-sm mr-1" onClick={() => confirmreview(review.id)}  ><i class="fas fa-check-circle"></i> confirmed </Button>
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



export default Booking;