import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import './App.css';

import 'aos/dist/aos.css';
export default function App() {
  return (
    <>
   <Home/>
   <About/>
   <Products/>
   <Services/>
   </>

  );
}