import React from 'react';

import logo from './logo.svg';
import "./App.css"

import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      
    </>
  );
}

export default App;
