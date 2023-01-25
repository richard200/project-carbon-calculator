import React from "react";
import Flights from "./flights";

function FlightLists({transactions}) {
        let flightLists = transactions.map((item)=> {
          return <Flights 
          key={item.id} 
          type={item.type} 
          passengers={item.passengers}
          departure_airport={item.departure_airport}
          destination_airport={item.destination_airport} />;
        })
        return (
          <table className="table">
            <tbody>
              <tr>
                <th>
                  <h3 className="type">Type</h3>
                </th>
                <th>
                  <h3 className="passengers">Passengers</h3>
                </th>
                <th>
                  <h3 className="departure">Departure</h3>
                </th>
                <th>
                  <h3 className="destination">Destination</h3>
                </th>
              </tr>
              {flightLists}
            </tbody>
          </table>
        );
      }
    
export default FlightLists