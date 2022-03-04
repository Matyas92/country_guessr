import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Game from './components/Game';
import Countries from './components/Countries';
import Home from './components/Home';

const App = () =>  {

  return (  
    
<>

<Header />

    <div className="">
<Routes>
<Route path="/" element={<Home />} />

<Route path="/game" element={<Game />} />
<Route path="/countries" element={<Countries />} />

</Routes>

  </div>
</>
  )
  }
export default App;
