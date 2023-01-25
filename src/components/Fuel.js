import React, { useState } from "react";

function Fuel() {

  const [estimate, setEstimate] = useState([])

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
        .then((resp)=> {

          estimate.push(resp.data.attributes)
          console.log(estimate);
        
          // setEstimate(estimate)
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

     <p>{setEstimate.attributes}</p>
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
    </div>
  );
}

export default Fuel;
 