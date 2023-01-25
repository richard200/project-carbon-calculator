import React,{useEffect} from "react";

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

export default function InfoData() {
  const apiKey = 'u8TPQKqcBzfO0x55sphWiw';
    const vehicleMakeApiUrl = "https://www.carboninterface.com/api/v1/estimates";
    useEffect(() => {
        fetch(vehicleMakeApiUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            }
        })
        .then(res => res.json())
        .then(data =>{
            
            // console.log(data[1])
            console.log(data[0].data.id)
        })
    },[])


  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Vehicle Make</th>
            <th>Vehicle Model</th>
            <th>Vehicle Year</th>
            <th>Distance Value</th>
            <th>Distance Unit</th>
            {/* <th>Estimated at</th> */}
            <th>Carbon in g</th>
            {/* <th>Carbon lb</th> */}
            <th>Carbon in kg</th>
            {/* <th>Carbon mt</th> */}
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
              {/* <td>{item.estimated_at}</td> */}
              <td>{item.carbon_g}</td>
              {/* <td>{item.carbon_lb}</td> */}
              <td>{item.carbon_kg}</td>
              {/* <td>{item.carbon_mt}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}