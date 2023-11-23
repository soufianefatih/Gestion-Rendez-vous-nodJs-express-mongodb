import React from "react";
import Navbar from '../layouts/navbar';
import Siderbar from '../layouts/siderbar';
import Cards from '../layouts/cards';
import Tabls from '../layouts/table';
import Header from '../layouts/header';
import CardDash from '../layouts/carddash';
import Forms from '../layouts/forms';
import ModelCards  from '../layouts/modalcard';






class Dashboard extends React.Component {
  render() {
    return (
        
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

             <Navbar />
             <div class="app-main">
             <Siderbar />
             <div class="app-main__outer">
                 <div className="container mt-5">
              
                 <Header />
                 <Cards />
                 <Tabls />
                 <CardDash />
                 <Forms />
                 <ModelCards />



                 </div>

                 </div>
                 </div>

        </div>

    );
  }
}

export default Dashboard;
