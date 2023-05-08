import { useState } from "react";
import styles from "../styles/OrderDetail.module.css"; 
import { link } from "../utils"; 
import axios from "axios";

const OrderDetail = ({ total, createOrder , product ,paymentMethod, request, handleOrderDetailclose, handleRequest}) => {



  
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [totalPrice, setTotalPrice] = useState(""); 
  const [clientSecret, setClientSecret] = useState('');




console.log(paymentMethod,"this is payment pethod");


 const handleIntent = async() =>  { 

  try {  

    console.log(email, " this is total"); 
    const response =  await axios.post(`${link}/orders/create-guest-payment-intent`, {email, total});    
    console.log(response, " this is response"); 
    setClientSecret(response.data.clientSecret);

    if(response.status === 200 ) { 
      handleOrderDetailclose();
      handleRequest();      
    }

  }
     catch(err) { 
      console.log(err)
     }
       

     console.log(request, " this is request from order deails")

 } ; 


 const close = () => { 
  handleOrderDetailclose()
  

 }




  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
<>
    {paymentMethod ==="cod" ? 
    
    
    <div className={styles.container}>

    <div className={styles.wrapper}>
    <button  onClick={close} class={styles.crossbtn}>x</button>


      <h1 className={styles.title}>You will pay ${total} after delivery.</h1>

      <div className={styles.item}>
        <label className={styles.label}>Name Surname</label>
        <input
          placeholder="John Doe"
          type="text"
          className={styles.input}
          onChange={(e) => setCustomer(e.target.value)}
        />
           <input
          placeholder="John Doe"
          type="text"
          className={styles.input}
          onChange={(e) => setCustomer(e.target.value)}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Phone Number</label>
        <input
          type="text"
          placeholder="+1 234 567 89"
          className={styles.input}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Address</label>
        <textarea
          rows={5}
          placeholder="Elton St. 505 NY"
          type="text"
          className={styles.textarea}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={handleClick}>
        Order
      </button>
    </div>
  </div>
  
  
  
   :
  
  
  
   <div className={styles.container}>

   <div className={styles.wrapper}>
   <button  onClick={close} class={styles.crossbtn}>x</button>


     <h1 className={styles.title}>You will pay ${total} after delivery.</h1>

     <div className={styles.item}>
       <label className={styles.label}>Email</label>
       <input
         placeholder="Email"
         type="text"
         className={styles.input}
         onChange={(e) => setEmail(e.target.value)}
       />
    
     </div>
    
    
     <button className={styles.button} onClick={handleIntent}>
         Start Order  
     </button>
   </div>
 </div>


}  

 { request === true ? 

<div className={styles.container}>

<div className={styles.wrapper}>
<button  onClick={close} class={styles.crossbtn}>x</button>


  <h1 className={styles.title}>You will pay ${total} after delivery.</h1>

  <div className={styles.item}>
    <label className={styles.label}>Name Surname</label>
    <input
      placeholder="John Doe"
      type="text"
      className={styles.input}
      onChange={(e) => setCustomer(e.target.value)}
    />
       <input
      placeholder="John Doe"
      type="text"
      className={styles.input}
      onChange={(e) => setCustomer(e.target.value)}
    />
  </div>
  <div className={styles.item}>
    <label className={styles.label}>Phone Number</label>
    <input
      type="text"
      placeholder="+1 234 567 89"
      className={styles.input}
    />
  </div>
  <div className={styles.item}>
    <label className={styles.label}>Address</label>
    <textarea
      rows={5}
      placeholder="Elton St. 505 NY"
      type="text"
      className={styles.textarea}
      onChange={(e) => setAddress(e.target.value)}
    />
  </div>
  <button className={styles.button} onClick={handleClick}>
    Order
  </button>
</div>
</div>



: 

null




}
    </>
  );
};

export default OrderDetail;
