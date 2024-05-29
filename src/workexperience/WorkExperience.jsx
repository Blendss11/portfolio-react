import React, { useRef } from "react";
import "./workexperiance.css";
import { PROJECT } from "../utils/data";
import ExperianceCard from "./ExperiaceCard/ExperianceCard";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Perbaiki di sini
    slidesToScroll: 1, // Perbaiki di sini
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1, // Perbaiki di sini
          slidesToScroll: 1, // Perbaiki di sini
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  }
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  }

  return (
    <section className="experiance-container" id="Project">
      <h5>Project Experiance</h5>
      <div className="experiance-content">
      <div className="arrow-right" onClick={slideRight}>
        <span><ArrowRight /> </span>  
        </div>
        <div className="arrow-left" onClick={slideLeft}>
         <span> <ArrowLeft /></span> 
        </div>
        <Slider ref={sliderRef} {...settings}>
          {PROJECT.map((item) => (
            <ExperianceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
