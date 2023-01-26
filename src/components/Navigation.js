import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function Navigation() {
  return (

    
  
<nav id="navBar" className="navbar navbar-expand-lg ">  
        <Link id="home" className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-start">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Electricity">Electricity</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Flight">Flight</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Fuel">Fuel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Shipping">Shipping</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vehicles/Vehicles">Vehicle</Link>
            </li>
          </ul>
        </div>
      </nav>
     
    

  
  );
}


export default Navigation; 
