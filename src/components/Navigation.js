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
        
          <ul className="navbar-nav justify-content-start">
            <li className="nav-item">
              <NavLink className="nav-link" to="/electricity">Electricity</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/flight">Flight</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fuel">Fuel</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shipping">Shipping</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Vehicles/vehicles">Vehicle</NavLink>
            </li>
          </ul>
        
      </nav>
     
    

  
  );
}


export default Navigation; 
