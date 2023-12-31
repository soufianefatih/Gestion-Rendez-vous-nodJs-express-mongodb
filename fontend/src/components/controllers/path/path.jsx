import React from "react";

const Path = ()=>{
  return (
    <div>
<div className="app-header header-shadow">
<div className="app-header__logo">
<div className="logo-src" />
{/* <div className="dropdown nav-item">Marhaba</div>   */}
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
</div>    <div className="app-header__content">
<div className="app-header-left">
  <div className="search-wrapper">
    <div className="input-holder">
      <input type="text" className="search-input" placeholder="Type to search" />
      <button className="search-icon"><span /></button>
    </div>
    <button className="close" />
  </div>
  <ul className="header-menu nav">
    <li className="nav-item">
      <a href="/" className="nav-link">
        <i className="nav-link-icon fa fa-home"> </i>
        Home
      </a>
    </li>
    <li className="btn-group nav-item">
      <a href="javascript:void(0);" className="nav-link">
        <i className="nav-link-icon fa fa-edit" />
        Projects
      </a>
    </li>
    <li className="dropdown nav-item">
      <a href="javascript:void(0);" className="nav-link">
        <i className="nav-link-icon fa fa-cog" />
        Settings
      </a>
    </li>
  </ul>      </div>
<div className="app-header-right">
  <div className="header-btn-lg pr-0">
    <div className="widget-content p-0">
      <div className="widget-content-wrapper">
        <div className="widget-content-left">
          <div className="btn-group">
            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
              <i className="fa fa-angle-down ml-2 opacity-8" />
            </a>
            <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
              <button type="button" tabIndex={0} className="dropdown-item">User Account</button>
              <button type="button" tabIndex={0} className="dropdown-item">Settings</button>
              <h6 tabIndex={-1} className="dropdown-header">Header</h6>
              <button type="button" tabIndex={0} className="dropdown-item">Actions</button>
              <div tabIndex={-1} className="dropdown-divider" />
              <button type="button" tabIndex={0} className="dropdown-item">Dividers</button>
            </div>
          </div>
        </div>
      </div>
    </div>      </div>
</div>
</div>      
</div>


</div>


);
}


export default Path;
