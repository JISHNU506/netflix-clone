
import './App.css';
import Home from './pages/Home';
// import Details from './components/SELECTEDPAGE/Details';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from './components/Loginpage/Login';

import axios from 'axios';



import Singlemovie from './pages/Singlemovie';
import { useState } from 'react';
import Ser from './pages/Ser';




function App() {


  return (
    
<>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
         
          <Route path="/Details/:Datname" element={<Singlemovie  />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Ser" element={<Ser/>} />
 
      </Routes>
    </BrowserRouter>
 

</>
  );
}

export default App;
