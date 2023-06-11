import styles from "../styles/globals.css";
import Navbar from "./Navbar";
import PizzaList from "./PizzaList";
import Footer from "./Footer";
import ImageGallery from "./ImageGallery"; 
import ImageSlider from "./ImageSlider"; 





function Home() {
    return (



        <div className={styles.body}>


           
            <ImageSlider />
            <ImageGallery/>
        
     

        </div>









    );
}

export default Home;
