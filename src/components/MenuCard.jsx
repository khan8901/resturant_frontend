import styles from "../styles/MenuCard.module.css";

const MenuCard = ({ menu }) => {
  return (
    <div className={styles.container}>
      <img  width={600} height ={600}  src={menu}  alt ="menu img "/>
    </div>
  );
};

export default MenuCard;
