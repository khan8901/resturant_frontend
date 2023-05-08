import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { useHistory } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/product-details/${product.id}`, { product });
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick}>


      <p> Hello</p>
{/*       <div className={styles.imageContainer}>
        {images.length === 1 ? (
          <img src={images[0]} alt={title} className={styles.image} />
        ) : (
          <div className={styles.slider}>
            {images.map((image, index) => (
              <img src={image} alt={`${title}-${index}`} key={index} className={styles.image} />
            ))}
          </div>
        )}
      </div>
      
      
      
      <div className={styles.productInfo}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.price}>{product.prices[0]}</div>
        <div className={styles.seller}>{product.seller}</div>
        <div className={styles.description}>{product.description}</div>
        <button className={styles.addToCart}>Add to Cart</button>
      </div> */}
    </div>
  );
};

export default ProductCard;
