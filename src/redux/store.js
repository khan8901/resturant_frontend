import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice"; 
import  ordersReducer  from "./orderSlice";


export default configureStore({
    reducer: {
      cart: cartReducer,
      product:productReducer, 
      order: ordersReducer
      

    },
  });
