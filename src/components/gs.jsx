import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { link } from "../utils";

const Add = ({ setClose }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [extraOptions, setextraOptions] = useState([]);
  const [prices, setPrices] = useState([]);
  const [images, setImages] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);





 const handleextraOptionsChange = (e, index) => {
    const updatedextraOptions = [...extraOptions];
    updatedextraOptions[index] = { ...updatedextraOptions[index], text: e.target.value };
    setextraOptions(updatedextraOptions);
  };

  const handlePricesChange = (e, index) => {
    const updatedPrices = [...prices];
    updatedPrices[index] = { ...updatedPrices[index], price: e.target.value };
    setPrices(updatedPrices);
  };


  const handleImageChange = (e) => {
    const uploadedFiles = Array.from(event.target.files);
    setImages(...selectedImages); 

    
  };


  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload images to backend and get image URLs
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post(`${link}/products/upload`, formData);
      const { success, imageUrls } = response.data;

      if (success) {
        setUploadedImageUrls(imageUrls);

        // Create product with image URLs
        const product = {
          title,
          description,
          extraOptions,
          prices,
          image : imageUrls
        };
             
        console.log(product, " this is product"); 

        // Send product creation request to backend
        const createProductResponse = await axios.post(`${link}/createproduct/createproduct`, product);
        const { success: createProductSuccess, product: createdProduct } = createProductResponse.data;

        if (createProductSuccess) {
          // Handle successful product creation
          console.log('Product created successfully:', createdProduct);
        } else {
          // Handle failed product creation
          console.error('Failed to create product:', createProductResponse.data.error);
        }
      } else {
        // Handle failed image upload
        console.error('Failed to upload images:', response.data.error);
      }
    } catch (error) {
      console.error('Failed to upload images and create product:', error);
    }
  };



  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          
        </span>
        <h1>Add a new Pizza</h1>
        <div className={styles.item}>
       <label htmlFor="fileInput">Upload Files</label>
      <input type="file"  multiple onChange={handleImageChange} />
      {uploadedImageUrls.length > 0 && (
        <div>
          <h4>Selected Files:</h4>
          <ul>
        {uploadedImageUrls.map((file, index) => (
          <li key={index}>
            <span>{file.name}</span>
            <button onClick={() => handleDeleteImage(index)}>Cross Out</button>
          </li>
        ))}
      </ul>
        </div>
      )}
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Description</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Small"
              onChange={(e)=> handlePricesChange(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Medium"
              onChange={(e) => handlePricesChange(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Large"
              onChange={(e) => handlePricesChange(e, 2)}
            />


             <button className={styles.extraButton} onClick={handlePricesChange}>
              Add
            </button>
            <div className={styles.extraItems}>
            {prices.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text} {option.price}
              </span>
            ))}
          </div>
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleextraOptionsChange}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleextraOptionsChange}
            />
            <button className={styles.extraButton} onClick={handleextraOptionsChange}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleSubmit}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
