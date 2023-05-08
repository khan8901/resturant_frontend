import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import styles from "../styles/ProductDetails.module.css"; 
import { useLocation } from "react-router-dom";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductDetails = () => {

   const location = useLocation(); 

  const product = location.state.product;;

  console.log(product, " this is product from Product Details ")


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();


  const handleSize = async (sizeIndex) => {
    const difference =    product.prices[sizeIndex] - product.prices[size];
      await setSize(sizeIndex);
    changePrice(difference);
  };



  const changePrice = async (number) => { 

    await setPrice(price + number); 

    console.log(price); 
};

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {

  let products = {
     productId :  product._id,
     name: product.title, 
     price :price, 
     quantity : quantity, 

  
  }   

/* 
  let extraOptions = { 
     text:extras[0].text,
     price: extras.price[0].price,
     quantity:1

  } */


  console.log(products, " this is the answer")




  dispatch(addProduct({...product,...extras, price, quantity}));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgcontainer}>
        {product.images.length > 1 ? (
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} className={styles.images} alt={`Product Image ${index}`} />
            </div>
          ))}
        </Slider>
      ) : (
        <img src={product.images[0]}  className={styles.imges}   alt="Product Image" />
      )}



      </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{product.description}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
          <button className={styles.button}>Small  </button>
             <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
          <button className={styles.button}>Medium  </button>
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
          <button className={styles.button}>Large  </button>
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {product.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};



export default ProductDetails;
