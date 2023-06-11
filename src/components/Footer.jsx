import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>WE SERVE AUTHENTIC INDAIN FOOD </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR TAKEAWAY</h1>
          <p className={styles.text}>
            <br /> 15 Lawrence Ave, Awsworth, Nottingham NG16 2SN
            <br /> 0115 917 7064
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Open 6 DAYS A WEEK (MONDAY CLOSED)</h1>
          <p className={styles.text}>
            Tuesday UNTIL Sunday
            <br /> 5:00 pm – 11:00 pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
