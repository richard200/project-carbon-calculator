import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

function Home() {
  return (

    
    <BrowserRouter>
<nav id="navBar" className="navbar navbar-expand-lg ">  
        <Link id="home" className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-start">
            <li className="nav-item">
              <Link className="nav-link" to="/electricity">Electricity</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flight">Flight</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fuel">Fuel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shipping">Shipping</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vehicle">Vehicle</Link>
            </li>
          </ul>
        </div>
      </nav>
     
    </BrowserRouter>

  
  );
}


export default Home; 








