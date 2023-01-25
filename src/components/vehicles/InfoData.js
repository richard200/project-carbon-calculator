import React,{useEffect, useState} from "react";
import "./style.css"



export default function InfoData({modelId,vehicleMakeId,distanceUnit,distanceValue}) {

  const apiKey = 'u8TPQKqcBzfO0x55sphWiw';
    const API = "https://www.carboninterface.com/api/v1/estimates";
    const [isFetching,setIsFetching] = useState(false)
    const [fetchedData,setfetchedData] = useState()

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
          setfetchedData(data)
        console.log(fetchedData.data.attributes.vehicle_make);
        console.log("unit = ",distanceUnit)
        // console.log(data.data.attributes)
        setIsFetching(false)
        })
        .catch(error => {
        console.error('Error:', error);
        });}
    },[fetchedData,isFetching,modelId,vehicleMakeId,distanceUnit,distanceValue])

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
            <tr >
              <td>{fetchedData.data.attributes.vehicle_make}</td>
              <td>{fetchedData.data.attributes.vehicle_model}</td>
              <td>{fetchedData.data.attributes.vehicle_year}</td>
              <td>{fetchedData.data.attributes.distance_value}</td>
              <td>{fetchedData.data.attributes.distance_unit}</td>
              <td>{fetchedData.data.attributes.carbon_g}</td>
              <td>{fetchedData.data.attributes.carbon_kg}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}