import React from 'react';
import logo from './logo.svg';
import "./App.css"
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Intro from './components/Intro';
import Section from './components/Section';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Intro/>
      <Section/>
    </>
  );
}

export default App;
