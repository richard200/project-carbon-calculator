import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shipping from "./Shipping";
import Flight from "./Flight";
import Fuel from "./Fuel";
import React from "react";
import Home from "./Home";
import Electricity from "./Electricity";
import Vehicles from "./vehicles/Vehicles";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electricity" element={<Electricity />} />
        <Route path="/fuel" element={<Fuel />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/vehicles/Vehicles" element={<Vehicles/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
