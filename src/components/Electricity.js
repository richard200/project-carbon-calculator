/*  import { useState, useEffect } from "react"; 
 import React from "react";

function Electricity() {
  const API_KEY = "VhbhVz6EnGMdEngZexCMfA";
  const API_URL = "https://www.carboninterface.com/api/v1/estimates";

  const headers = new Headers({
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  });

  const data = {
    type: "electricity",
    electricity_unit: "mwh",
    electricity_value: 42,
    country: "us",
    state: "fl",
  };

  const [carbonData, setCarbonData] = useState();
  const [userInput, setUserInput] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    const request = new Request(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    });
    fetch(request)
      .then((response) => response.json())
      .then((data) => {
        setCarbonData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (carbonData) {
        setResult(carbonData.carbon_kg * userInput);
    }
  }, [carbonData, userInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="electricForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label id="unitValue" >Enter your unit value:</label>
          <input className="input"
            type="number"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <button id="btn" type="submit">Calculate</button>
      </form>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default Electricity;  



/* function Electricity() {
  const API_KEY = "Q6iFLA4c4lwxp0gbwlKg";
  const API_URL = "https://www.carboninterface.com/api/v1/estimates";

  const headers = new Headers({
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  });

  const data = {
    "type": "electricity",
    "electricity_unit": "mwh",
    "electricity_value": 42,
    "country": "us",
    "state": "fl"
  };

  const request = new Request(API_URL, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  });

  fetch(request)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      })
      
      .catch(function(error) {
      console.error(error);
    })
}

export default Electricity; */ 