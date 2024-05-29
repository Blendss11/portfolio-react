import React, { useRef } from 'react';
import Slider from 'react-slick'; // Pastikan untuk mengimpor Slider
 // Ganti dengan library yang Anda gunakan untuk ikon
import "./sertifikat.css";
import { SERTIFIKAT } from '../utils/data';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import SertifikatCard from './sertifikatCard/SertifikatCard';


const Sertifikat = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className='sertifikat-container'>
      <h5>My Certificate</h5>
      <div className="sertifikat-content">
        <div className="arrow-right" onClick={slideRight}>
          <span><ArrowRight /></span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span><ArrowLeft /></span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {SERTIFIKAT.map((item) => (
            <SertifikatCard key={item.title} details={item} image={item.image} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sertifikat;
