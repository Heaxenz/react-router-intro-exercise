import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cookie from './Cookie';
import Chips from './Chips.js'
import Home from './Home.js'
import ChocolateBar from './ChocolateBar';
const VendingMachine = () => {
    return (
       <div>
        <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/chips" element={<Chips />}/>
          <Route path="/chocolate-bar" element={<ChocolateBar />}/>
        </Routes>
      </BrowserRouter>
       </div>
    )
}

export default VendingMachine;