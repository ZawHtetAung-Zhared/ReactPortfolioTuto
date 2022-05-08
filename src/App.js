import React from 'react'
import Header from "./Component/Head/Header";
import "./App.css";
import Home from "./Component/Hero/Home";
import Features from "./Component/Features/Features";
import Portfolio from "./Component/Portfolio/Portfolio";
import Resume from './Component/Resume/Resume';

const App = () => {
  return (
    <>
    <Header />
    <Home />
    <Features />
    <Portfolio />
    <Resume />
    </>
  )
}

export default App