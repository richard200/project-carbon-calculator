import React, {useEffect, useState} from "react";
import "./style.css"

export default function VehiclesEstimate() {
    const [vehicleMakes,setVehicleMake] = useState([])


    const apiKey = 'u8TPQKqcBzfO0x55sphWiw';
    const apiUrl = "https://www.carboninterface.com/api/v1/vehicle_makes";

    useEffect(() => {
        fetch(apiUrl,{
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + apiKey
            }
        })
        .then(res => res.json())
        .then(data =>{
            setVehicleMake(data)
            console.log(data[0].data.attributes.name)
        })
    },[])





  return (
    <div className="container">
        <form >
            <div className="form-group">
            <label htmlFor="Car-make">Search for a Vehicle_make : </label>
            <br/>
            {/* <input 
            type="text" 
            className="form-control"
            placeholder="search for a car make"
            /> */}
            <br/>
            <select name="car-make" id="car-make" className="form-control">
                <option value=""></option>
                {vehicleMakes.map((make, index) => 
                    <option key={index} value={make.data.attributes.name}>{make.data.attributes.name}</option>)}
            </select>
            </div>
           
            <br/>
            
            <div className="form-group">

            <label htmlFor="Car-make">Search for a Vehicle_model : </label>
            <br/>
            <input 
            type="text" 
            className="form-control"
            placeholder="search for a car make"
            /><br/>
            <select name="car-make" id="car-make" className="form-control custom-select ">
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