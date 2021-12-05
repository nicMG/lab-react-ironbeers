import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import { Route, Routes } from 'react-router';
import BeerDetails from './components/BeerDetails';
import BeerRandom from './components/BeerRandom';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers/" element={<AllBeers/>}/>
        <Route path="/beers/:id" element={<BeerDetails/>}/>
        <Route path="/random" element={<BeerRandom/>}/>
        <Route path="" element/>
      </Routes>
    </div>
  );
}

export default App;
