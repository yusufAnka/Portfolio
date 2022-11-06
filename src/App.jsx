import React from 'react';
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/portfolio";
// import Experience from "./components/Experience/Experience";
// import Education from "./components/Education/Education";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
// import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <Skills /> 
    <Portfolio /> 
    <Testimonial />
    <Contact />
    <Footer />
      
      {/* <Nav />
      
      <Experience />
      
      
      
      <Education /> */}
    
    </>
  )
} 
export default App;