import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-container"id="Hero" >
      <div className="hero-content" >
        <h2>Building Digital experiences that Inspire</h2>
        <p>Front-end Developer | Mobile Flutter Developer</p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/logo/react.svg" alt="React Logo" />
          </div>
          <img src="./assets/images/potopribadi.png" alt="Personal Photo" />
        </div>

        <div className="tech-icons-row">
          <div className="tech-icon">
            <img src="./assets/images/logo/flutter.svg" alt="Flutter Logo" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/logo/js.svg" alt="JavaScript Logo" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/logo/html.svg" alt="HTML Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  