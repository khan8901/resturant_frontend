import React from "react";
import styles from "../styles/Catering.module.css"; // Import the CSS module

const Catering = ( ) => {


    const images = [ 

        require("../assets/cateringthree.png"),
        require("../assets/cateringfour.png"),
        require("../assets/cateringfive.png"),




    ]
  return (
    <div className={styles.imageGallery}> {/* Apply CSS module class */}
      <div className={styles.imageGalleryContainer}> {/* Apply CSS module class */}
        {/* Map the images array and render the images */}
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}> {/* Apply CSS module class */}
            <img src={image} alt={`Image ${index + 1}`} className={styles.image} /> {/* Apply CSS module class */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catering;
