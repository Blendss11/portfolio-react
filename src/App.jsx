import React from "react";
import "./App.css"
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import Skills from "./component/skills/Skills";
import WorkExperience from "./workexperience/WorkExperience";
import ContactMe from "./contactMe/ContactMe";
import Footer from "./footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import Sertifikat from "./sertikat/Sertifikat";



const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Sertifikat/>
        <ContactMe/>
      </div>
      <Footer/>
    </>
  );
};

export default App;
