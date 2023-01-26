import React, { useState } from "react";
import Display from "./Display";
import Navigation from "./Navigation";

function Shipping() {
   
  let [type, setType] = useState("")
  let [weight_value, setWeightValue] = useState("")
  let [weight_unit, setWeightUnit] = useState("")
  let [distance_value, setDistanceValue] = useState("")
  let [distance_unit, setDistanceUnit] = useState("")
  let [transport_method, setTransportMethod] = useState("")
  let [gramsList, setGramsList] = useState([])
  let [kgList, setKgList] = useState([])

  // let [kg, setKg] = useState("")
  // let [g, setG] = useState("")
let [unitType, setUnitType] = useState("")

  let [carbonGrams, setCarbonGrams] = useState(0)
  let [carbonKgs, setCarbonKgs] = useState(0)

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
  
  }).then(resp => resp.json())
  .then ((data) =>  {
    setCarbonGrams(data.data.attributes.carbon_g)
    setCarbonKgs(data.data.attributes.carbon_kg)
    // flightData.push(res.data.attributes)
    gramsList.push(data.data.attributes.carbon_g)
    kgList.push(data.data.attributes.carbon_kg)
  })
}

 

// function handleSelectedOption(e){
//   e.preventDefault()
//   setUnitType(e.target.value)
 

  
// }


// const kilograms = "kg"
// const grams = "g"
// const pounds = "lb"
// const tonnes = "mt"

const fg = gramsList.map((value, index) => 
    
<li key={index}>{value}</li>)

let kilogram = kgList.map((value, index) => 

<li key={index}>{value}</li>)


  return (
    <div className="main">
      <Navigation/>
      <h2>Carbon Emission Estimates</h2>
        <p>Kindly Enter Details Below to Calculate Your Carbon Emmission Estimate</p>
     
      <form onSubmit={handleSubmit} className="form">
        <div className="data">
        Type: <input value={type}
         onChange={(e) => setType(e.target.value)} 
         type="types"
          name="estimatetype" 
          placeholder="Type" required />

        Weight: <input value={weight_value} 
        onChange={(e) => setWeightValue(e.target.value)} 
        type="text"
         name="weight"
          placeholder="Weight" required />

        Weight Unit: (input either kg or g): <input value={weight_unit}
          onChange={(e) => setWeightUnit(e.target.value)} 
          type="text" 
          name="weightunit"
           placeholder="Weight Unit" required />

        Distance: <input value={distance_value}
         onChange={(e) => setDistanceValue(e.target.value)}
          type="number" 
          name="distance" 
          placeholder="Distance"
           step="0.01" required />

        Distance Unit: (input either km or mi): <input value={distance_unit} 
        onChange={(e) => setDistanceUnit(e.target.value)} 
        type="text"
         name="distanceunit" 
         placeholder="Distance Unit" required />

        Transport Method: (input either truck, plane, ship or train):<input value={transport_method} 
        onChange={(e) => setTransportMethod(e.target.value)} 
        type="text"
        name="method" 
        placeholder="Transport Method" step="0.01" required />

          {/* <form> */}
      {/* <select value={unitType} onChange={handleSelectedOption} >
  <option value="">Choose A Unit</option>
  <option value={kilograms}>Kg</option>
  <option value={grams}>g</option>
  <option value={pounds}>lb</option>
  <option value={tonnes}>mt</option>
 
</select> */}
        {/* </form> */}

        </div>
        <button className="submit-button" type="submit">Get Estimate</button>
      </form>

    
     <br>
     </br>
     <br>
     </br>
     <Display carbonGrams={carbonGrams} carbonKgs={carbonKgs}/>
     <br>
     </br>
     <br>
     </br>

     
     <table className="table">
      <tbody>
        <h3>Your Carbon Emission Data </h3>
        <tr>
          <th>
            <h4 className="grams">Grams</h4>
            {fg }
          </th>
          <th>
            <h4 className="kilogram">Kilograms</h4>
            {kilogram} 
          </th>
          </tr>
          
         
          </tbody>

      </table> 
    </div>
  
  );
}

export default Shipping;