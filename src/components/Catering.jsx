import React from "react";
import styles from "../styles/Catering.module.css";
import image from "../assets/cateringfive.png";

const Catering = () => {
  const image = require("../assets/catering1.jpg");
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.introText}>
          We are looking for pubs and mirco pubs to introduce curry nights !
          <br />
          <br />
          Give us one or two of your slow nights, and together we can bring bums
          back on your seats. <br />
          <br />
          Let's give your customers something new and exciting a night to
          remember.A exciting curry night at their favourite local. If this
          excites you, then get in touch with one of sale representative and
          arrage a meeting get things moving.
          <br />
          <br />
          Let's start bringing your customers an Exciting new Flavour!!!
          <br />
          <br />
          Taste the authentic indian home cuisine at your favourite local pub.
        </div>
        <div className={styles.introImage}>
          <img src={image} alt="img" />
        </div>
      </div>
      
      <div className={styles.intro}>
        <div className={styles.introText}>
          We are looking for pubs and mirco pubs to introduce curry nights !
          <br />
          <br />
          Give us one or two of your slow nights, and together we can bring bums
          back on your seats. <br />
          <br />
          Let's give your customers something new and exciting a night to
          remember.A exciting curry night at their favourite local. If this
          excites you, then get in touch with one of sale representative and
          arrage a meeting get things moving.
          <br />
          <br />
          Let's start bringing your customers an Exciting new Flavour!!!
        </div>
        <div className={styles.introImage}>
          <img src={image} alt="img" />
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.introText}>
          We are looking for pubs and mirco pubs to introduce curry nights !
          <br />
          <br />
          Give us one or two of your slow nights, and together we can bring bums
          back on your seats. <br />
          <br />
          Let's give your customers something new and exciting a night to
          remember.A exciting curry night at their favourite local. If this
          excites you, then get in touch with one of sale representative and
          arrage a meeting get things moving.
          <br />
          <br />
          Let's start bringing your customers an Exciting new Flavour!!!
        </div>
        <div className={styles.introImage}>
          <img src={image} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Catering;
