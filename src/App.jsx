import React from 'react';
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/portfolio";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';

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
    </>
  )
} 
export default App;