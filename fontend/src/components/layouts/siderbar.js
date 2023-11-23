import React from "react";


const Siderbar = ()=>{

  const logout = ()=> {

    localStorage.clear();
    alert('confirm loguot')
     window.location = "/login";
    }
  let role = window.localStorage.getItem("role");

  return (

    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>    <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Dashboards</li>
            <li>
              <a href="/" className="mm-active text-decoration-none">
                <i className="metismenu-icon pe-7s-home" />
                <i className="fas fa-burger-soda"></i>
                ConfianceCar
              </a>
            </li>
            <li className="app-sidebar__heading">Services</li>


            {
               role === "admin" ?<>
                                <li>
    <a className="text-decoration-none" href="#">
      <i className="metismenu-icon pe-7s-users" />
      Users
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
     
      <li>
        <a  className="text-decoration-none" href="/dashboard/user">
          <i className="metismenu-icon">
          </i>All Users

        </a>
      </li>
      <li>
        <a  className="text-decoration-none" href="/dashboard/agenceuser">
          <i className="metismenu-icon">
          </i>All Agence users

        </a>
      </li>
      <li>
        <a  className="text-decoration-none" href="/dashboard/user/create">
          <i className="metismenu-icon">
          </i> Create User

        </a>
      </li>
   
      
    </ul>
  </li>
               </>: <></>

            }


  <li>
    <a className="text-decoration-none" href="#">
      <i className="metismenu-icon pe-7s-note2" />
      Agence
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
      {
        role == 'admin' ? <li>
        <a  className="text-decoration-none" href="/dashboard/agence">
          <i className="metismenu-icon">
          </i>All Agence
        </a>
      </li> : <></>
      }
     
    
      <li>
        <a  className="text-decoration-none" href="/dashboard/agence/create">
          <i className="metismenu-icon">
          </i>Create Agence
        </a>
      </li>
      <li>
        <a  className="text-decoration-none" href="/dashboard/youragence">
          <i className="metismenu-icon">
          </i> Your Agence
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a className="text-decoration-none" href="#">
      <i className="metismenu-icon pe-7s-note2" />
      Categorys
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
     
      <li>
        <a  className="text-decoration-none" href="/dashboard/category">
          <i className="metismenu-icon">
          </i>All Categorys
        </a>
      </li>
      <li>
        <a  className="text-decoration-none" href="/dashboard/category/create">
          <i className="metismenu-icon">
          </i>Create Category
        </a>
      </li>
      
    </ul>
  </li>
  <li>
    <a className="text-decoration-none" href="#">
      <i className="metismenu-icon pe-7s-menu" />
      Cars
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
     
      <li>
        <a  className="text-decoration-none" href="/dashboard/cars">
          <i className="metismenu-icon">
          </i>All cars
        </a>
      </li>
      <li>
        <a  className="text-decoration-none" href="/dashboard/cars/create">
          <i className="metismenu-icon">
          </i>Create cars
        </a>
      </li>
    
    </ul>
  </li>
  <li>
    <a className="text-decoration-none" href="#">
      <i className="metismenu-icon pe-7s-cart" />
    Booking
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
     
      <li>
        <a  className="text-decoration-none" href="/dashboard/booking">
          <i className="metismenu-icon">
          </i>All Bookings

        </a>
      </li>
   
      
    </ul>
  </li>
  <li>
    <a className="text-decoration-none" href="#">
    <i className="metismenu-icon pe-7s-note2" />
    Review
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
     
      <li>
        <a  className="text-decoration-none" href="/dashboard/review">
        <i className="metismenu-icon">
          </i>All Review

        </a>
      </li>
   
      
    </ul>
  </li>
           <li>
           <a className="text-decoration-none mt-5 btn btn-danger " href="/login"  onClick={()=> logout()}>
    <i className="metismenu-icon pe-7s-close-circle" /> LogOut </a>
            
            </li>
           
          </ul>
        </div>
      </div>
    </div>  
  
  
  
      );

}


export default Siderbar;
