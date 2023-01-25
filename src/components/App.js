import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Electricity from "./Electricity";



function App() {
  return (
    <BrowserRouter>
   
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/electricity" element={<Electricity />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
