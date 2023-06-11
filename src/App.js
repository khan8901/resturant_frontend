import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import store from "../src/redux/store";
import styles from "./styles/globals.css";
import Catering from "./components/Catering";
import Cart from "./components/Cart";
import Home from "./components/Home"; 
import Admin from "./components/Admin";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails"; 
import Aboutus from "./components/Aboutus"; 
import Terms from "./components/Terms";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,  
  
  } from 'react-router-dom';
import ImageGallery from "./components/ImageGallery";


function App() {
  return (



   <BrowserRouter>
   <Navbar/>
   <Routes> 
    <Route path="/"   element={<Home/>}/> 
    <Route path="/menu"   element={<ImageGallery/>}/> 
    <Route path="/catering"   element={<Catering/>}/> 
    <Route path="/aboutus"   element={<Aboutus/>}/> 
    <Route path="/terms"   element={<Terms/>}/> 
    <Route path="/cart"   element={<Cart/>}/> 
    <Route path="/login"   element={<Login/>}/>
    <Route path="/admin"   element={<Admin/>}/>
    <Route path="/product"   element={<ProductDetails/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
     
    


  
    
    
  
   
  );
}

export default App;
