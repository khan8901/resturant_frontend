import React from "react";
import styles from "../styles/ImageGallery.module.css"; // Import the CSS module

const ImageGallery = () => {
  const images = [
    require("../assets/menu/one.jpg"),
    require("../assets/menu/two.jpg"),
    require("../assets/menu/three.jpg"),
    require("../assets/menu/four.jpg"),
    require("../assets/menu/five.jpg"),
    require("../assets/menu/six.jpg"),
    require("../assets/menu/seven.jpg"),
    require("../assets/menu/eight.jpg"),
    require("../assets/menu/nine.jpg"),
    require("../assets/menu/ten.jpg"),
  ];

  return (
    <div className={styles.imageGallery}>
      {" "}
      {/* Apply CSS module class */}
      <div className={styles.imageGalleryContainer}>
        {" "}
        {/* Apply CSS module class */}
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            {" "}
            {/* Apply CSS module class */}
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={styles.image}
            />{" "}
            {/* Apply CSS module class */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
