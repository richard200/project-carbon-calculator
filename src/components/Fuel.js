import React, { useState } from "react";
import FuelDisplayEstimate from "../FuelDisplayEstimate";

function Fuel() {

  const [estimateInGrams, setEstimateInGrams] = useState(0)
  const [estimateInKilograms, setEstimateInKilograms] = useState(0)
  const [estimateInPounds, setEstimateInPounds] = useState(0)

  const [fuel_source_type, setFuelSourceType] = useState("");
  const [fuel_source_unit, setFuelSourceUnit] = useState("");
  const [fuel_source_value, setFuelSourceValue] = useState("");
  const [type, setType] = useState("");

  //Api variables and api key variables
  // const apiKey = "NmCnfoh59UDZ70zUwlJyw"
  const apiUrl = "https://www.carboninterface.com/api/v1/estimates";

  const submission = (e) => {
    e.preventDefault();

   fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer NmCnfoh59UDZ70zUwlJyw",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        type : type,
        fuel_source_type: fuel_source_type,
        fuel_source_unit: fuel_source_unit,
        fuel_source_value: fuel_source_value,
      }),
    })
      .then(resp => resp.json())
      .then(resp =>{
        fetch("https://www.carboninterface.com/api/v1/estimates/" + resp.data.id, {
            method: "GET",
            headers: {
                "Authorization": "Bearer NmCnfoh59UDZ70zUwlJyw",
                "Content-Type": "application/json"
              },
        })
        .then(response=>response.json())
        .then((data)=> {

          setEstimateInGrams(data.data.attributes.carbon_g)
          setEstimateInKilograms(data.data.attributes.carbon_kg)
          setEstimateInPounds(data.data.attributes.carbon_lb)
          
        
       
          })

          
        })
      
   
      

    };
    // .catch(error=>{
    //     console.error('Error:', error)
    // })

  

  return (
    <div>
      <form onSubmit={submission}>
        <div>
          <input
            type="text"
            value={fuel_source_type}
            onChange={(e) => setFuelSourceType(e.target.value)}
            placeholder="Fuel Source Type"
            name="fuel_source_type"
          />
          <input
            type="text"
            value={fuel_source_unit}
            onChange={(e) => setFuelSourceUnit(e.target.value)}
            placeholder="Fuel Source Unit"
            name="fuel_source_unit"
          />
          <input
            type="text"
            value={fuel_source_value}
            onChange={(e) => setFuelSourceValue(e.target.value)}
            placeholder="Fuel Source Value"
            name="fuel_source_value"
          />
        <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Type"
            name="type"
          />
        </div>
        <button className="submit-button" type="submit">
          Estimate
        </button>
      </form>

   
      {/* <table>

        <thead>
          <tr>
          <th>carbon_g</th>
          <th>carbon_lb</th>
          <th>carbon_kg</th>
          <th>carbon_mt</th>
          </tr>
        </thead>
        <tbody>
        {
          estimate
        }
        </tbody>
      </table> */}

      <FuelDisplayEstimate estimateInGrams={estimateInGrams} estimateInKilograms={estimateInKilograms} estimateInPounds={estimateInPounds}/>
    </div>
  );
}

export default Fuel;
 