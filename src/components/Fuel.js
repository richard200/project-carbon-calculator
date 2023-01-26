import React, { useState } from "react";
import FuelDisplayEstimate from "./FuelDisplayEstimate";
import Navigation from "./Navigation";

function Fuel() {
  const [estimateInGrams, setEstimateInGrams] = useState(0);
  const [estimateInKilograms, setEstimateInKilograms] = useState(0);
  const [estimateInPounds, setEstimateInPounds] = useState(0);

  const [fuel_source_type, setFuelSourceType] = useState("");
  const [fuel_source_unit, setFuelSourceUnit] = useState("");
  const [fuel_source_value, setFuelSourceValue] = useState("");
  const [type, setType] = useState("");

  //Dropdown array

  //Api variables and api key variables
  // const apiKey = "NmCnfoh59UDZ70zUwlJyw"
  const apiUrl = "https://www.carboninterface.com/api/v1/estimates";

  const submission = (e) => {
    e.preventDefault();

    fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer NmCnfoh59UDZ70zUwlJyw",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        type: type,
        fuel_source_type: fuel_source_type,
        fuel_source_unit: fuel_source_unit,
        fuel_source_value: fuel_source_value,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        fetch(
          "https://www.carboninterface.com/api/v1/estimates/" + resp.data.id,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer NmCnfoh59UDZ70zUwlJyw",
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setEstimateInGrams(data.data.attributes.carbon_g);
            setEstimateInKilograms(data.data.attributes.carbon_kg);
            setEstimateInPounds(data.data.attributes.carbon_lb);
          });
      });
  };
  // .catch(error=>{
  //     console.error('Error:', error)
  // })

  return (
    <div>
      <Navigation/>
      <article className="mt-15 p-3">
        <h1 className=" text-2xl mb-3">
          {" "}
          <strong> Fuel Combustion Carbon Calculator</strong>
        </h1>
        <p>
          This particular carbon calculator will provide carbon emissions in
          grams, kilograms and pounds. To be able to calculate a fuel combustion
          carbon emission estimate, provide the following parameters:{" "}
        </p>{" "}
        <br />
        <ul className="mb-3">
          <li>
            {" "}
            <i> Fuel Source Type:</i> &nbsp;&nbsp;&nbsp;&nbsp; Provide the api
            name of the fuel source you want to calculate combustion emissions
            from.
          </li>
          <li>
            {" "}
            <i> Fuel Source Unit:</i> &nbsp;&nbsp;&nbsp;&nbsp; Input the units
            of the fuel source. Units are specific to <em>fuel source type</em>{" "}
            view units in table below
          </li>
          <li>
            {" "}
            <i> Fuel Source Value:</i> &nbsp;&nbsp;&nbsp;&nbsp; Amount of the
            above specific unit and fuel source that you want an emissions
            estimate for.
          </li>
          <li>
            {" "}
            <i> Type:</i> &nbsp;&nbsp;&nbsp;&nbsp; In type input enter{" "}
            <strong>fuel_combustion</strong> given that it is a fuel combustion
            calculator
          </li>
        </ul>
        <center>
          <table className="border-separate border border-slate-400 ... ">
            <tbody>
              <tr>
                <th className="border border-slate-300 ...">
                  Fuel Source name
                </th>
                <th className="border border-slate-300 ...">api_name</th>
                <th className="border border-slate-300 ...">
                  Units(Choose One)
                </th>
              </tr>
              <tr>
                <td>Bituminous Coal</td>
                <td>bit</td>
                <td>btu / short_ton</td>
              </tr>
              <tr>
                <td>Home Heating and Diesel Fuel</td>
                <td>dfo</td>
                <td>btu / gallon</td>
              </tr>
              <tr>
                <td>Jet Fuel</td>
                <td>jf</td>
                <td>btu / gallon</td>
              </tr>
              <tr>
                <td>Kerosene</td>
                <td>ker</td>
                <td>btu / gallon</td>
              </tr>
              {/* <tr>
              <td>Lignite Coal</td>
              <td>lig</td>
              <td>btu / short_ton</td>
            </tr> */}
              <tr>
                <td>Municipal Solid Waste</td>
                <td>msw</td>
                <td>btu / short_ton</td>
              </tr>
              <tr>
                <td>Natural Gas</td>
                <td>ng</td>
                <td>btu / thousand_cubic_feet</td>
              </tr>
              <tr>
                <td>Petroleum Coke</td>
                <td>pc</td>
                <td>btu / gallon</td>
              </tr>
              <tr>
                <td>Propane Gas</td>
                <td>pg</td>
                <td>btu / gallon</td>
              </tr>
              {/* <tr>
              <td>Residual Fuel Oil</td>
              <td>rfo</td>
              <td>btu / gallon</td>
            </tr>
            <tr>
              <td>Subbituminous Coal</td>
              <td>sub</td>
              <td>btu / short_ton</td>
            </tr>
            <tr>
              <td>Tire-Derived Fuel</td>
              <td>tdf</td>
              <td>btu / short_ton</td>
            </tr> */}
              <tr>
                <td>Waste Oil</td>
                <td>wo</td>
                <td>btu / barrel</td>
              </tr>
            </tbody>
          </table>
        </center>
      </article>
      <form onSubmit={submission}>
        <div>
          <input
            className="border border-gray-300 rounded-lg bg-gray-50 mr-10 ml-8 p-3"
            type="text"
            value={fuel_source_type}
            onChange={(e) => setFuelSourceType(e.target.value)}
            placeholder="api_name"
            name="fuel_source_type"
          />

          <input
            className="border border-gray-300 rounded-lg bg-gray-50 mr-10 ml-8 p-3"
            type="text"
            value={fuel_source_unit}
            onChange={(e) => setFuelSourceUnit(e.target.value)}
            placeholder="Enter Unit"
            name="fuel_source_unit"
          />
          <input
            className="border border-gray-300 rounded-lg bg-gray-50 mr-10 ml-8 p-3"
            type="text"
            value={fuel_source_value}
            onChange={(e) => setFuelSourceValue(e.target.value)}
            placeholder="Enter Value"
            name="fuel_source_value"
          />
          <input
            className="border border-gray-300 rounded-lg bg-gray-50 mr-10 ml-8 mt-5 p-3"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Type (fuel_combustion)"
            name="type"
          />
        </div>
        <button
          className="submit-button rounded-md shadow-lg shadow-indigo-500/50 bg-green-600 hover:bg-amber-300 active:bg-green-700 focus:outline-none focus:ring focus:ring-amber-300 ... mt-10 mb-10 p-3"
          type="submit"
        >
          Estimate
        </button>
      </form>

      {/* <table>

        <thead>
          <tr>
          <th>carbon_g</th>
          <th>carbon_lb</th>
          <th>carbon_kg</th>
          <th>carbon_mt</th>
          </tr>
        </thead>
        <tbody>
        {
          estimate
        }
        </tbody>
      </table> */}

      <FuelDisplayEstimate
        estimateInGrams={estimateInGrams}
        estimateInKilograms={estimateInKilograms}
        estimateInPounds={estimateInPounds}
      />
    </div>
  );
}

export default Fuel;
