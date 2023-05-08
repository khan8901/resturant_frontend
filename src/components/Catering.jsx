import React from "react";
import styles from "../styles/Catering.module.css";

const Catering = () => {
  const image = require("../assets/catering1.jpg");
  const image2 = require("../assets/catering2.jpeg");
  const image3 = require("../assets/catering3.jpg");
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.introText}>
          <h1>Catering</h1>
          <h4>
            We are looking for pubs and mirco pubs to introduce curry nights !
            <br />
            <br />
            Give us one or two of your slow nights, and together we can bring
            bums back on your seats. <br />
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
          </h4>
        </div>
        <div className={styles.introImage}>
          <img src={image} alt="img" />
        </div>
      </div>

      <div className={styles.intro}>
        <div className={styles.introText}>
          <h4>
            Welcome to our pub menu! At our establishment, we believe in keeping
            things simple without compromising on quality. We offer a selection
            of our three most popular dishes, all at affordable prices. <br />
            Our menu includes:
          </h4>
          <h3>MEAT: £9.50</h3>
          <h4>
            A meat dish cooked with or without your choice of potatoes, sweet
            potatoes, sweet peas, or chickpeas. You can also add separately
            grilled green peppers and onions to your dish instead of the above
            choices.
          </h4>
          <h3>CHICKEN: £8.50</h3>
          <h4>
            A chicken curry dish cooked with or without your choice of potatoes,
            sweet potatoes, sweet peas, or chickpeas. You can also add
            separately grilled green peppers and onions to your dish instead of
            the above choices.
          </h4>
          <h3>VEGETABLE: £7.50</h3>
          <h4>
            A vegetable masala dish cooked with chickpeas, sweet peas, sweet
            potatoes, green peppers, and onions. <br />
            All of our dishes come with pilau rice and naan bread.
          </h4>
        </div>
        <div className={styles.introImage}>
          <img src={image2} alt="img" />
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.introText}>
          <h4>
            Please note that we require a minimum order of 30 dishes per pub,
            and there is no maximum order. We can also cater for special events,
            corporate events, or any other functions - just contact us to
            discuss your requirements. If you have any specific dietary
            requirements or preferences, please let us know and we will do our
            best to accommodate them. Thank you for choosing our pub - we hope
            you enjoy your meal!
          </h4>
        </div>
        <div className={styles.introImage}>
          <img src={image3} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Catering;
