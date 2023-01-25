import React from 'react';
import Navigation from './Navigation';
/* import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; */



function Home() {
  return (
    <div>
      <Navigation/>
      <img id="logo" src="https://53525363.000webhostapp.com/Images/Carbon_cal__1_-removebg-preview.png" alt="Carbon Calculator" />
    <div>
      <p id="save"> Save the planet</p>
      <p id="intro"> Every industry impacts on the environment. <br></br>
        Use Carbon Calculator to calculate your carbon footprint<br></br>
         and go on the road to net-zero emissions.</p>
    </div>
    <img id="img2" src="https://53525363.000webhostapp.com/Images/green_earth_vector_ai_concepts_for_Free_Download___Free_Vector-removebg-preview.png" alt="Carbon Calculator" />

    <div id="secondDiv">
    <h1>HOW IT WORKS</h1>
    <p>There are five ways to calculate carbon emissions:Fuel, Electricity, Flight, Shipping and Vehicle<br></br>
    pick one of the above options, head over to the designated page and fill out the forms present<br></br>
  in the page, then the page will calculate the amount of emissions that you used.</p>
    <p> Calculating emissions
      CarbonAPI will classify the information and through<br></br> different calculations,<br></br>
       it will return your carbon footprint in kg/g of carbon.</p>
       <img id="img3" src="https://53525363.000webhostapp.com/Images/Hands_-_Show-removebg-preview.png" alt="Carbon Calculator" />
    </div> 
    <div id="thirdDiv">
    <h1 id="howItWorks"> Use Cases
      </h1>
    <p id="howItWorks2">We help your industry achieve climate goals and impulse social responsibility in your company.<br></br> According to research, businesses that embrace sustainability are more commercially viable.</p>
      
        <li id="list1">
          Measure carbon emissions from air transport.</li>
         <li>Convert your energy consumption into carbon dioxide emissions data.</li> 
         <li>Calculate the total environmental effect of freight transportation, shipment flows, and logistical energy usage across the whole supply chain.</li> 
        <li> To accomplish your environmental goals and progress toward a cleaner future, CarbonAPI can assist you in calculating your fleet transportation emissions.</li>
        <li> Transform liters of Diesel, Petrol or LPG into CO2 Equivalent in Kg/g.</li> 
       <li>  Calculate carbon emissions via land, marine, and air transportation.</li> 
        
      
    </div>
    </div>
  )

    
  

}


export default Home; 








