import React from "react";
import "./App.css"
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import Skills from "./component/skills/Skills";
import WorkExperience from "./workexperience/WorkExperience";
import ContactMe from "./contactMe/ContactMe";
import Footer from "./footer/Footer";


const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe/>
      </div>
      <Footer/>
    </>
  );
};

export default App;
