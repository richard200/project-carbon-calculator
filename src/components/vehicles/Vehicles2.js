import React, {useEffect, useState} from "react";
import "./style.css"

export default function VehiclesEstimate() {
    const [vehicleMakes,setVehicleMake] = useState([])
    const [vehiclemodel,setVehicleModel] = useState([])
    const [vehicleMakeId, setVehicleMakeId] = useState(null);


    const apiKey = 'u8TPQKqcBzfO0x55sphWiw';
    const vehicleMakeApiUrl = "https://www.carboninterface.com/api/v1/vehicle_makes";
    const vehicleModelApiUrl = `https://www.carboninterface.com/api/v1/vehicle_make/${vehicleMakeId}/vehicle_models`
    useEffect(() => {
        fetch(vehicleMakeApiUrl,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            }
        })
        .then(res => res.json())
        .then(data =>{
            setVehicleMake(data)
            // console.log(data[1])
            console.log(data[0].data.attributes.name)
        })
    },[])

    useEffect(() => {
        fetch(vehicleModelApiUrl,{
            method: 'GET',
            headers:{
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    },[vehicleMakeId])





  return (
    <div className="container">
        <form >
            <div className="form-group">
            <label htmlFor="Car-make">Search for a Vehicle_make : </label>
            <br/>
            {/* <input type="text" className="form-control" placeholder="car make"/> */}
            <br/>
            <select name="car-make" id="car-make" className="form-control" onChange={(e)=> setVehicleMakeId(e.target.value) }>
                <option value=""></option>
                {vehicleMakes.map((make) => 
                    <option key={make.data.id} value={make.data.id}>{make.data.attributes.name}</option>)}
            </select>
            </div>
           
            <br/>
            
            <div className="form-group">

            <label htmlFor="Car-make">Search for a Vehicle_model : </label>
            <br/>
            {/* <input type="text" className="form-control"placeholder="search for a car make" /><br/> */}
            <select name="car-model" id="car-model" className="form-control custom-select ">
                <option value=""></option>
                <option value="">dd</option>
            </select>
            </div><br/>

            <input 
            type="text" 
            className="form-control"
            placeholder="Enter distance value"
            />
            <br/>
            <div className="button-container">
              <button className="submit-btn">Submit Data</button>
            </div>
        </form>
    
    </div>
  );
}