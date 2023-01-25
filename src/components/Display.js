import React from "react";

function Display({carbonGrams, carbonKgs}){
return(
<div className="header">
    <h3>Carbon Emmission</h3>
   <h4>Your Estimated Carbon Emission is: </h4>

    <h2>
         {carbonGrams} grams</h2>
    <h2> {carbonKgs} kgs</h2>


    
  </div>
)
}

export default Display