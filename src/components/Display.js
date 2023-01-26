import React from "react";

function Display({carbonGrams, carbonKgs}){
return(

    <div className="card">
  <h5 className="card-header">Carbon Emission</h5>
  <div className="card-body">
    <h5 className="card-title">Your Estimated Carbon Emission is: </h5>
    <p className="card-text">{carbonGrams} grams</p>
    <p className="card-text">{carbonKgs} kgs</p>
   
  </div>
</div>
)
}

export default Display