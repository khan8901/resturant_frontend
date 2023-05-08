import styles from "../styles/globals.css";
import Navbar from "./Navbar";
import PizzaList from "./PizzaList";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";

function Home() {
    return (



        <div className={styles.body}>


           
            <ImageSlider />
            <PizzaList />
     

        </div>









    );
}

export default Home;
