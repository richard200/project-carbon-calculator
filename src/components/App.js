import Shipping from "./Shipping";
import Flight from "./Flight";
import "./App.css";
import Fuel from "./Fuel";
import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Electricity from "./Electricity";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electricity" element={<Electricity />} />
        <Route path="/fuel" element={<Fuel />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/flight" element={<Flight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
