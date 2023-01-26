import React, {useEffect, useState} from "react";
import InfoData from './InfoData';
import Navigation from "../Navigation"
import "./style.css"
import carbonCalc from './carbon-calc.png';
import GreenEarth from './green.png';

export default function Vehicles() {
    const [vehicleMakes,setVehicleMake] = useState([])
    const [vehiclemodel,setVehicleModel] = useState([])
    const [vehicleMakeId, setVehicleMakeId] = useState(null);
    const [modelId, setModelId] = useState(null);
    const [distanceValue, setDistanceValue] = useState(0);
    const [distanceUnit, setDistanceUnit] = useState(null);
   


    const apiKey = 'u8TPQKqcBzfO0x55sphWiw';
    const vehicleMakeApiUrl = "https://www.carboninterface.com/api/v1/vehicle_makes";


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
            // console.log(data[0].data.id)
        })
    },[])
    
    useEffect(() => {
        if(vehicleMakeId){
        const vehicleModelApiUrl = `https://www.carboninterface.com/api/v1/vehicle_makes/${vehicleMakeId}/vehicle_models`

        fetch(vehicleModelApiUrl,{
            method: 'GET',
            headers:{
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            }
        })
        .then(res => res.json())
        .then(data =>{
            if (data instanceof Object) {
                setVehicleModel(data);
                // console.log(data[0].data.id)
            } else {
                console.log("Invalid json data received");
            }
        })}
    },[vehicleMakeId])

   




  return (
    <div>
        <Navigation/>
        <div className="image-container">
            <img  id="logo" src={carbonCalc} alt="carbon calc" />
        </div>
 <div className="left-img" style={{ backgroundImage: `url(${GreenEarth})` }}>
   {/* other elements go here */}
</div>
        <h1 id="h1-vehicles">Vehicles Carbon Estimator</h1>

    <div className="container">
        <form >
            <div className="form-group">
            <label htmlFor="Car-make">Search for a Vehicle_make : </label>
            <br/>
            {/* <input type="text" className="form-control" placeholder="car make"/> */}
            <br/>
            <select name="car-make" id="car-make" className="form-control" onChange={(e)=> {setVehicleMakeId(e.target.value) }}>
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
            <select name="car-model" id="car-model" className="form-control custom-select" onChange={(e)=>{setModelId(e.target.value) }}>
                <option value=""></option>
                {vehiclemodel.map((model)=>                
                <option key={model.data.id} value={model.data.id}>{model.data.attributes.name}</option>)}
                </select>
            </div><br/>

            <label htmlFor="Car-make">Enter the distance of the trip travelled: </label>
            <input 
            type="text" 
            className="form-control"
            placeholder="Enter distance value"
            onChange={(e)=>{setDistanceValue(e.target.value) }}
            />
            <br/>
            <label htmlFor="Car-make">Select distance unit to use: </label>
            <select name="car-model" id="car-model" className="form-control custom-select " onChange={(e)=> {setDistanceUnit(e.target.value)}}>
                <option value="null"></option>
                <option value="km">km</option>
                <option value="mi">mi</option>
            </select><br/>
           
        </form>

        <InfoData vehicleMakeId={vehicleMakeId} modelId={modelId} distanceValue={distanceValue}
  distanceUnit={distanceUnit} />
    
    </div>
    </div>
  );
}