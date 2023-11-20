import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./Works.css";

const Works = ({ project }) => {
  const { title, description, technologies, images } = project;

  const arrowStyle = {
    border: 'none',
    borderRadius: '50px', // Ensure a circular button
    padding: '0.2px', // Adjust padding as needed
    cursor: 'pointer',
  };

  const CustomPrevArrow = (props) => {
    return (
      <button {...props} style={{ ...arrowStyle }}>
        Prev
      </button>
    );
  };
  
  const CustomNextArrow = (props) => {
    return (
      <button {...props} style={{ ...arrowStyle }}>
        Next
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section id="blogs" className="container">
      <div className='container-works'>
        <div className='works-slider'>
          <Slider {...settings} autoplay={true}>
            {images.map((image, index) => (
              <div key={index} className='works-img-container'>
                <img className='works-img' src={image} alt={`Works ${index}`}/>
              </div>
            ))}
          </Slider>
        </div>
        <div className='works-detail'>
          <h1>{title}</h1>
          <br/>
          <p>{description}</p>
          <p>Technologies: </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
