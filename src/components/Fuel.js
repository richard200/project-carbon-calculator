import React,{useState} from "react";

function Fuel (){

    const[fuelSourceType, setFuelSourceType]=useState("")
    const[fuelSourceUnit, setFuelSourceUnit]= useState("")
    const[fuelSourceValue, setFuelSourceValue] = useState("")

    //Api variables and api key variables
    const apiKey = "NmCnfoh59UDZ70zUwlJyw"
    const apiUrl = "https://www.carboninterface.com/api/v1/estimates"

    const submission=(e)=>{

        fetch(apiUrl, {
            method: 'POST',
            headers : {
                'Authorization': 'Bearer' + apiKey,
                'content-Type' : 'application/json'
            }
        })
            .then((res)=> res.json())
            .then(data=>{
                console.log(data);
                //setFuelSourceType(data)
            })
            .catch(error=>{
                console.error('Error:', error)
            })

    }


    return(
        <div>
            <form action>

                <div>
                    <input type="text" value={fuelSourceType} onChange={(e)=>{setFuelSourceType(e.target.value)}} placeholder="Fuel Source Type"/>
                    <input type="text" value={fuelSourceUnit} onChange={(e)=>{setFuelSourceUnit(e.target.value)}} placeholder=""/>
                    <input type="text" value={fuelSourceValue} onChange={(e)=>{setFuelSourceValue(e.target.value)}}/>
                </div>
            </form>
        </div>
    )
}

export default Fuel