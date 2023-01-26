<<<<<<< HEAD
 import Shipping from './Shipping';
// import Flight from './Flight';
import './App.css';
=======
import "./App.css";
import Fuel from "./fuel/Fuel";
import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Electricity from "./Electricity";


>>>>>>> da75f07bdf105693f97d63e61e32e13838a767ad


function App() {
  return (
<<<<<<< HEAD
    <div>
      <Shipping/>
      {/* <Flight 
      style={{ backgroundColor: "#EFE6B3"}}
     /> */}

    </div>
  )
  }
=======
    <BrowserRouter>
   
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/electricity" element={<Electricity />} />
        <Route path="/fuel" element={<Fuel />}/>
        </Routes>
    </BrowserRouter>
  )
   
}
>>>>>>> da75f07bdf105693f97d63e61e32e13838a767ad

export default App;

