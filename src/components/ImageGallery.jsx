import React from "react";
import styles from "../styles/ImageGallery.module.css"; // Import the CSS module

const ImageGallery = () => {




  const images = [  

    require("../assets/one.jpg"),
    require("../assets/two.jpg"),
    require("../assets/three.jpg"),
    require("../assets/four.jpg"),
    require("../assets/five.jpg"),
    require("../assets/six.jpg"),
  ]






  return (
    <div className={styles.imageGallery}> {/* Apply CSS module class */}
      <div className={styles.imageGalleryContainer}> {/* Apply CSS module class */}
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}> {/* Apply CSS module class */}
            <img src={image} alt={`Image ${index + 1}`} className={styles.image} /> {/* Apply CSS module class */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
