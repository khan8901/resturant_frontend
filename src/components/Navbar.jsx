import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [id, setId] = useState(false);
  function showMenu() {
    console.log(id);
    setId(!id);
  }
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <img
          src={require("../assets/logo.png")}
          alt=""
          width="60px"
          height="49px"
        />
      </Link>
      <div className={styles.item} id="contactDetails">
        <div className={styles.callButton}>
          <img
            src={require("../assets/call.png")}
            alt=""
            width="22"
            height="22"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>0115 917 7064</div>
        </div>
      </div>
      <div className={styles.item} id={id ? styles.showMenu : ""}>
        <ul className={styles.list}>
          <Link to="/">
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link to="/menu">
            <li className={styles.listItem}>Menu</li>
          </Link>

          <Link to="/catering">
            <li className={styles.listItem}>Catering</li>
          </Link>
        </ul>
      </div>
      <Link to="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <img
              src={require("../assets/cart.png")}
              alt=""
              width="30px"
              height="30px"
            />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
      <div className={styles.menuBtn}>
        <button onClick={showMenu}>
          <img
            src={require("../assets/menuBtn.png")}
            alt=""
            width="20px"
            height="20px"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
