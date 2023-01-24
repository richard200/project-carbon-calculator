import React, { useState } from "react";

function Flight() {
  let [type, setType] = useState("")
  let [passengers, setPassengers] = useState("")
//   let [legs, setLegs] = useState("")
  let [destination_airport, setDestination] = useState("")
  let [departure_airport, setDeparture] = useState("")
//   let [destination_airport1, setDestination1] = useState("")
//   let [departure_airport1, setDeparture1] = useState("")



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
  .then(res => console.log(res))
//     fetch("https://www.carboninterface.com/api/v1/estimates/" + res.data.id, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer ayfX1YYG9KcujbGrozlBw"
//           },

//     })
// .then(response => response.json())
// .then(resp => console.log(resp.data.attributes))
//   })
}
  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="form">
        <div className="data">
          <input value={type} 
          onChange={(e) => setType(e.target.value)} 
          type="typee" 
          name="estimatetype" 
          placeholder="Type" 
          required />

          <input value={passengers}
           onChange={(e) => setPassengers(e.target.value)} 
           type="number"
            name="weight" 
            placeholder="Passengers" 
            required />

          <input value={departure_airport} 
          onChange={(e) => setDeparture(e.target.value)} 
          type="text" 
          name="departureairport" 
          placeholder="Departure"
           required />

          <input value={destination_airport} 
          onChange={(e) => setDestination(e.target.value)} 
          type="text"
           name="destinationairport" 
           placeholder="Destination"
            step="0.01" required /> 

          {/* <input value={departure_airport1}
           onChange={(e) => setDeparture1(e.target.value)} 
           type="text"
            name="departureairport" 
            placeholder="Departure" required />

          <input value={destination_airport1} 
          onChange={(e) => setDestination1(e.target.value)}
           type="text"
            name="destinationairport"
             placeholder="Destination" step="0.01" required />  */}
         
        </div>
        <button className="submit-button" type="submit">Get Estimate</button>
      </form>
    </div>
  );
}

export default Flight;