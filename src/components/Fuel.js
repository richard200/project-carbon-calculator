import React, { useState } from "react";

function Fuel() {


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
      .then((resp) => resp.json())
      .then((res) => console.log(res));
    // .catch(error=>{
    //     console.error('Error:', error)
    // })
  };

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
    </div>
  );
}

export default Fuel;
