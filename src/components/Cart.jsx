import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  console.log(cart , "this is cart ")

  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const [request, setRequest]   = useState(false);

  const amount = cart.total;
  const [paymentMethod, setPaymetMethod] = useState("");

   const handleOrderDetailclose = () => { 
       setOpen(false); 
       setCash(false);

   }


  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
       // router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
     const handleCashClick =() => { 
      setCash(true);
      setPaymetMethod("cod");
      setOpen(true);

     }

     const paymentlink  = () => { 
       
      setOpen(true);
      setPaymetMethod("stripe");
     }
     

     const handleRequest = () => { 
      setOpen(true); 
      setRequest(true);

     }


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>extraOptions</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <img
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extraOptions}>
                    {product.extraOptions.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={handleCashClick}
              >
                CASH ON DELIVERY
              </button>
             
            </div>
        
            <button onClick={paymentlink} className={styles.button}>
             PAY NOW
            
              </button>
          
        </div>
      </div>
      {cash && <OrderDetail setOpen={setOpen} total={cart.total}  paymentMethod={paymentMethod} createOrder={createOrder} handleOrderDetailclose={handleOrderDetailclose} handleRequest={handleRequest}/>}
      
      {open && <OrderDetail  setOpen={setOpen} total={cart.total}   paymentMethod={paymentMethod}  createOrder={createOrder}   handleOrderDetailclose={handleOrderDetailclose}  handleRequest={handleRequest} />}
     
      {request && <OrderDetail  setOpen={setOpen} total={cart.total}   paymentMethod={paymentMethod}  createOrder={createOrder}  request={request} handleOrderDetailclose={handleOrderDetailclose} handleRequest={handleRequest}  />}





    </div>
  );
};

export default Cart;
