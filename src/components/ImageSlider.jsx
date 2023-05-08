// ImageSlider.js
import React, { useState, useEffect } from 'react';
import styles from '../styles/ImageSlider.module.css';


const ImageSlider = () => {


    const images = [ 
        require("../assets/featured.png"),
        require("../assets/featured.png"),
        require("../assets/featured.png"),
   
    ]


    





    const    interval = 3000
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, interval);

    return () => {
      clearTimeout(slideTimer);
    };
  }, [currentSlide, images.length, interval]);

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
