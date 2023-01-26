import React from "react";

function FuelDisplayEstimate ({estimateInGrams, estimateInKilograms, estimateInPounds}) {


    return (
        <div id="estimateCarbon">
            <p> <strong> Carbon Emissions Estimate </strong></p> <br />
            <p>Carbon Estimate in Grams: {estimateInGrams}</p> 
            <p>Carbon Estimate in Kilograms: {estimateInKilograms}</p>
            <p>Carbon Estimate in Pounds: {estimateInPounds}</p>
        </div>
    )
}

export default FuelDisplayEstimate