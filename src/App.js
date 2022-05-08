import React from 'react'
import Header from "./Component/Head/Header";
import "./App.css";
import Home from "./Component/Hero/Home";
import Features from "./Component/Features/Features";
import Portfolio from "./Component/Portfolio/Portfolio";
import Resume from './Component/Resume/Resume';
import Testimonial from './Component/Testimonial/Testimonial';
import Blog from './Component/Blog/Blog';

const App = () => {
  return (
    <>
    <Header />
    <Home />
    <Features />
    <Portfolio />
    <Resume />
    <Testimonial />
    <Blog />
    </>
  )
}

export default App