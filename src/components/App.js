import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Electricity from "./Electricity";
import Vehicles from "./vehicles/Vehicles";



function App() {
  return (
    <BrowserRouter>
   
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/electricity" element={<Electricity />} />""
        <Route path="/vehicles/Vehicles" element={<Vehicles/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
