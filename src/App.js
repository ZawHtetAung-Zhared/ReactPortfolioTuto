import React from 'react'
import Header from "./Component/Head/Header";
import "./App.css";
import Home from "./Component/Hero/Home";
import Features from "./Component/Features/Features";
import Portfolio from "./Component/Portfolio/Portfolio";


const App = () => {
  return (
    <>
    <Header />
    <Home />
    <Features />
    <Portfolio />
    </>
  )
}

export default App