import React, {  useState } from "react";
import Display from "./Display";

function Flight() {
  let [type, setType] = useState("")
  let [passengers, setPassengers] = useState([])
//   let [legs, setLegs] = useState("")
  let [destination_airport, setDestination] = useState([])
  let [departure_airport, setDeparture] = useState([])
  // let [flightData, setFlightData] = useState([])
  let [gramsList, setGramsList] = useState([])
  let [kgList, setKgList] = useState([])


  let [carbonGrams, setCarbonGrams] = useState(0)
  let [carbonKgs, setCarbonKgs] = useState(0)


// useEffect(() => {
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
            passengers: passengers,
            legs:  [
                {departure_airport ,destination_airport},
                // {departure_airport1 ,destination_airport1}
      
            ]
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


    const fg = gramsList.map((value, index) => 
    
    <li key={index}>{value}</li>)

    let kilogram = kgList.map((value, index) => 
    
    <li key={index}>{value}</li>)

  return (
  
  
    <div className="main">
      <h2>Carbon Emission Estimates</h2>
        <p>Kindly Enter Details Below to Calculate Your Carbon Emmission Estimate</p>
      <form onSubmit={handleSubmit} className="form">
        <div className="data">
  
      
          Type: 
        <input value={type} 
          onChange={(e) => setType(e.target.value)} 
          type="types" 
          name="estimatetype" 
          placeholder="Type" 
          required />
         

         Passengers: <input value={passengers}
           onChange={(e) => setPassengers(e.target.value)} 
           type="number"
            name="weight" 
            placeholder="Passengers" 
            required />

         Departure Airport (input either NBO, KIS or WIL ): <input value={departure_airport} 
          onChange={(e) => setDeparture(e.target.value)} 
          type="text" 
          name="departureairport" 
          placeholder="Departure"
           required
           
            />
           

         Destination Airport (input either NBO, KIS or WIL): <input value={destination_airport} 
          onChange={(e) => setDestination(e.target.value)} 
          type="text"
           name="destinationairport" 
           placeholder="Destination"
            step="0.01" required /> 


         
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

 {/* <td>
      {fg}
      {kilogram}
    </td> */}

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

export default Flight

// export {Flights, FlightList}
