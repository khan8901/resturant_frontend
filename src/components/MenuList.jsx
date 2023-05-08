import styles from "../styles/MenuList.module.css";
import MenuCard from "./MenuCard";



const MenuList = ({  }) => {

   const  menulist = [ 
    "/img/one.jpg",
    "/img/two.jpg",
    "/img/three.jpg",
    "/img/four.jpg",
    "/img/five.jpg",
    "/img/five.jpg"

          
    ]
  return (
    <div className={styles.container}>
      
      <div className={styles.wrapper}>
        {menulist.map((menu,i) => (
          <MenuCard    key={i = i+1}  menu={menu} />
        ))}
    </div>
    </div>
  );
};

export default MenuList;
