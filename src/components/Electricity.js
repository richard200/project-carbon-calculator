import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import carbonCalc from './vehicles/carbon-calc.png';
import GreenEarth from './vehicles/green.png';

function Electricity() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [electricityUnit, setElectricityUnit] = useState("mwh");
    const [electricityValue, setElectricityValue] = useState('');
    const [country, setCountry] = useState("us");
    const [state, setState] = useState("fl");
    const [submitted, setSubmitted] = useState(false);
    

    function handleSubmit(event) {
        
      event.preventDefault();
        
        
        const API_URL = 'https://www.carboninterface.com/api/v1/estimates';
        const API_KEY = 'Q6iFLA4c4lwxp0gbwlKg';

        const headers = {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        };

        const data = {
            "type": "electricity",
            "electricity_unit": electricityUnit,
            "electricity_value": electricityValue,
            "country": country,
            "state": state
        };

        setLoading(true);
        fetch(API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
          setSubmitted(true);
      })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }

   
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return (
            <div>
              <Navigation/>
              <div className="image-container">
            <img  id="logo" src={carbonCalc} alt="carbon calc" />
        </div>
          <div className="left-img" style={{ backgroundImage: `url(${GreenEarth})` }}>
            {/* other elements go here */}
          </div>
         
              <div>
                <h1 id="electricValue"> Carbon Emission Estimates</h1>
              </div>
              <form id="Apiform" onSubmit={handleSubmit}>
                <label id="ApiInput1" >
                  Electricity Unit:
                  <input 
                    
                    type="text" 
                    value={electricityUnit} 
                    onChange={(e) => setElectricityUnit(e.target.value)} 
                  />
                </label>
                <br />
                <label id="ApiInput2">
                  Electricity Value:
                  <input 
                     
                    type="number" 
                    value={electricityValue} 
                    onChange={(e) => setElectricityValue(e.target.value)} 
                  />
                </label>
                <br />
                <label id="ApiInput3">
                  Country:
                  <input 
                     
                    type="text" 
                    value={country} 
                    onChange={(e) => setCountry(e.target.value)} 
                  />
                </label>
                <br />
                <label id="ApiInput4">
                  State:
                  <input 
                     
                    type="text"                     value={state} 
                    onChange={(e) => setState(e.target.value)} 
                  />
                </label>
                <br />
                <button id="Apibtn" type="submit">Submit</button>
              </form>
              <div id="fetched-data">
  {renderData(data)}
</div>
              {data && <div>{JSON.stringify(data)}</div>}
            </div>
        );
    }

    function renderData(data) {
      if (!data) {
          return null;
      }
    
      if (typeof data === "object") {
          return Object.keys(data).map((key, index) => (
              <div id="fetched" key={index}>
                  <p id="fetched2"> {key}: {renderData(data[key])}</p>
              </div>
          ));
      }
      return data;
    }
    
    return (
      <div>
        <Navigation/>
        <div className="image-container">
            <img  id="logo" src={carbonCalc} alt="carbon calc" />
        </div>
        <div className="left-img" style={{ backgroundImage: `url(${GreenEarth})` }}>
          {/* other elements go here */}
        </div>
         
        <div>
       <h1 id="electricValue"> Fill in your Electric Value</h1>
              </div>
        <form id="Apiform" onSubmit={handleSubmit}>
                <label id="ApiInput1" >
                  Electricity Unit:
                  <input 
                    
                    type="text" 
                    value={electricityUnit} 
                    onChange={(e) => setElectricityUnit(e.target.value)} 
                  />
                </label>
                <br />
                <label id="ApiInput2">
                  Electricity Value:
                  <input 
                     
                    type="number" 
                    value={electricityValue} 
                    onChange={(e) => setElectricityValue(e.target.value)} 
                  />
                </label>
                <br />
                <label id="ApiInput3">
                  Country:
                  <input 
                     
                    type="text" 
                    value={country} 
                    onChange={(e) => setCountry(e.target.value)} 
                  />
                </label>
                <br />
                <label id="ApiInput4">
                  State:
                  <input 
                     
                    type="text"                     value={state} 
                    onChange={(e) => setState(e.target.value)} 
                  />
                </label>
                <br />
                <button id="Apibtn" type="submit">Submit</button>
              </form>
        {submitted && renderData(data)}
      </div>
    );
}

export default Electricity;

