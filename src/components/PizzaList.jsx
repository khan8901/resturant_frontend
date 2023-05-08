import styles from "../styles/PizzaList.module.css";
import { useState,useEffect} from "react"; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";



const PizzaList = ({  }) => {


  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
          console.log(products, " these are products from  database in Pizza List componennet")

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
  /*   setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ); */
    
    dispatch(fetchProducts({ searchTerm: '', page: 1, limit: 10 }));




  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setVisibleProducts((prev) => prev + 8);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        {searchTerm && (
          <button className={styles.clearSearch} onClick={handleClearSearch}>
            X
          </button>
        )}
      </div>
      <div className={styles.productList}>
      {/*   {filteredProducts.slice(0, visibleProducts).map((product) => (
          <PizzaCard key={product._id} pizza={product} />
        ))} */}


{products.map((product) => (
      
          <ProductCard  product={product} />
        ))} 
        


        
      </div>
    </div>
  );
};

export default PizzaList;
