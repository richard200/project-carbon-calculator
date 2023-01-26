import React from "react";

function FuelDisplayEstimate ({estimateInGrams, estimateInKilograms, estimateInPounds}) {


    return (
        <div>
            <h3> <strong> Carbon Emissions Estimate </strong></h3> <br />
            <p>Carbon Estimate in Grams: {estimateInGrams}</p> 
            <p>Carbon Estimate in Kilograms: {estimateInKilograms}</p>
            <p>Carbon Estimate in Pounds: {estimateInPounds}</p>
        </div>
    )
}

export default FuelDisplayEstimate