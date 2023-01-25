import React,{useEffect, useState} from "react";
import "./style.css"

const data = [
  {
    distance_value: 100.0,
    vehicle_make: "Toyota",
    vehicle_model: "Corolla",
    vehicle_year: 1993,
    vehicle_model_id: "7268a9b7-17e8-4c8d-acca-57059252afe9",
    distance_unit: "mi",
    estimated_at: "2021-01-10T15:24:32.568Z",
    carbon_g: 37029,
    carbon_lb: 81.64,
    carbon_kg: 37.03,
    carbon_mt: 0.04
  },
  // other data...
];

export default function InfoData({modelId,vehicleMakeId,distanceUnit,distanceValue}) {

  const apiKey = 'u8TPQKqcBzfO0x55sphWiw';
    const API = "https://www.carboninterface.com/api/v1/estimates";
    const [isFetching,setIsFetching] = useState(false)

    useEffect(() => {
      if(!isFetching) return;
      if(modelId && vehicleMakeId){
      fetch(API, {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
              'Authorization': 'Bearer ' + apiKey
          },
          body: JSON.stringify({
          type: "vehicle",
          distance_unit: distanceUnit,
          distance_value: distanceValue ,
          vehicle_model_id: modelId
          })
          })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        console.log("unit = ",distanceUnit)
        console.log(data.data.attributes)
        setIsFetching(false)
        })
        .catch(error => {
        console.error('Error:', error);
        });}
    },[isFetching,modelId,vehicleMakeId,distanceUnit,distanceValue])

    const handleSubmit = (e) =>{
      e.preventDefault();
  
      setIsFetching(true)
  
      
  }


  return (
    <div className="container">
       <div className="button-container">
              <button className="submit-btn" onClick={handleSubmit}>Submit Data</button>
            </div>
      <table className="table">
        <thead>
          <tr>
            <th>Vehicle Make</th>
            <th>Vehicle Model</th>
            <th>Vehicle Year</th>
            <th>Distance Value</th>
            <th>Distance Unit</th>
            <th>Carbon in g</th>
            <th>Carbon in kg</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.vehicle_model_id}>
              <td>{item.vehicle_make}</td>
              <td>{item.vehicle_model}</td>
              <td>{item.vehicle_year}</td>
              <td>{item.distance_value}</td>
              <td>{item.distance_unit}</td>
              <td>{item.carbon_g}</td>
              <td>{item.carbon_kg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}