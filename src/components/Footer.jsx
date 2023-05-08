
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
WE SERVE AUTHENTIC INDAIN FOOD           </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            <br />  115 LAWRENCE AVENUE, AWSWRTH NG16 25N
            <br /> 0115 917 7064
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Open 6 DAYS A WEEK (TUESDAY CLOSED)</h1>
          <p className={styles.text}>
            Wednesday UNTIL Monday
            <br /> 5:00 pm – 11:00 pm
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
