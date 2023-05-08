import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { link } from "../utils";



const Add = ({ setClose }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);
  const [files, setFiles] = useState([]); 
  const [ images, setImages] = useState([]); 


  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };
  const handleFileUpload = (event) => {
    event.preventDefault();

    const uploadedFiles = Array.from(event.target.files); 
    console.log(uploadedFiles, " these are uploaded files "); 


    setFiles([...files, ...uploadedFiles]);  

    console.log(files, " these are  files "); 

  };


  const handleDeleteFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload images to backend and get image URLs
    const formData = new FormData();
    files.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post(`${link}/products/upload`, formData);
      const { success, imageUrls } = response.data;

      if (success) {
        console.log(imageUrls, " theseare image urls "); 

        setImages(imageUrls);
        
        // Create product with image URLs
        const product = {
          title,
          description,
          extraOptions,
          prices,
          images,
        };
             
        console.log(product, " this is product"); 

        // Send product creation request to backend
        const createProductResponse = await axios.post(`${link}/products/createproduct`, product);
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

  

/* 
  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/djj6r7rmj/image/upload",
        data
      );


      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };
 */
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add a new Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" multiple onChange={handleFileUpload} />
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name}{" "}
            <button onClick={() => handleDeleteFile(index)}>Delete</button>
          </li>
        ))}
      </ul>   </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
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
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
            />
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
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
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
