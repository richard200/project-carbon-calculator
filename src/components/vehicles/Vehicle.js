import React, { useState } from "react";

export default function Vehiclesfetch(){
    const [vehicleModels, setVehicleModels] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
   

    const apiKey = 'u8TPQKqcBzfO0x55sphWiw';
    // const apiUrl = "https://www.carboninterface.com/api/v1/vehicle_makes/4c1e16e1-7967-4394-b3cb-15f4577dffa1/vehicle_models";
    const apiUrl = "https://www.carboninterface.com/api/v1/vehicle_makes";

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setVehicleModels(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
  }


  const filteredModels = vehicleModels.filter(model => model.data.attributes.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
    <input type="text" placeholder="Search for vehicle models" onChange={handleSearch} value={searchQuery} />
    <select>
      {filteredModels.map((model, i) => (
        <option key={i} value={model.data.attributes.name}>
          {model.data.attributes.name}
        </option>
      ))}
    </select>
  </div>)
}