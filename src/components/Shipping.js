import React, { useState } from "react";

function Shipping() {
  let [type, setType] = useState("")
  let [weight_value, setWeightValue] = useState("")
  let [weight_unit, setWeightUnit] = useState("")
  let [distance_value, setDistanceValue] = useState("")
  let [distance_unit, setDistanceUnit] = useState("")
  let [transport_method, setTransportMethod] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
   
    fetch("https://www.carboninterface.com/api/v1/estimates", {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer ayfX1YYG9KcujbGrozlBw"
      },
      body: JSON.stringify({
            type: type,
            weight_value: weight_value,
            weight_unit: weight_unit,
            distance_value: distance_value,
            distance_unit: distance_unit,
            transport_method: transport_method
     
    })
  
  }).then(resp => resp.json()).then(res => console.log(res))
}
  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="form">
        <div className="data">
          <input value={type} onChange={(e) => setType(e.target.value)} type="typee" name="estimatetype" placeholder="Type" required />
          <input value={weight_value} onChange={(e) => setWeightValue(e.target.value)} type="text" name="weight" placeholder="Weight" required />
          <input value={weight_unit} onChange={(e) => setWeightUnit(e.target.value)} type="text" name="weightunit" placeholder="Weight Unit" required />
          <input value={distance_value} onChange={(e) => setDistanceValue(e.target.value)} type="number" name="distance" placeholder="Distance" step="0.01" required />
          <input value={distance_unit} onChange={(e) => setDistanceUnit(e.target.value)} type="text" name="distanceunit" placeholder="Distance Unit" required />
          <input value={transport_method} onChange={(e) => setTransportMethod(e.target.value)} type="text" name="method" placeholder="Transport Method" step="0.01" required />
        </div>
        <button className="submit-button" type="submit">Get Estimate</button>
      </form>
    </div>
  );
}

export default Shipping;