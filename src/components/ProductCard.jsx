// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/ProductCard.module.css';


const ProductCard = ({ product }) => {
  // Settings for image slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (

    <div className={styles.container}>
      <Link to={`/product`}  state={{ product }} >
        {product.images.length > 1 ? (
          <Slider {...sliderSettings}>
            {product.images.map((image, index) => (
              <div key={index}>
                <div   className={styles.imgcontainer} >
                  <img
                  className={styles.images}
                    src={image}
                    alt="Uploaded Image"

                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          // Single image
          <div   className={styles.imgcontainer} >
            <img
              src={product.images[0]}
              alt="Uploaded Image"
              className={styles.images}

            />
          </div>)}    </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.prices[0]}</span>
      <p className={styles.desc}>{product.description}</p>
    </div>
  );
};

export default ProductCard;
