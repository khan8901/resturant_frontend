import axios from "axios";
import { useState } from "react";
import {link} from "../utils";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);


  const navigate = useNavigate();


  const handleClick = async () => {
    try {
        const  response =  await axios.post(`${link}/users/login`, {
        email,
        password,
      }    );
      navigate("/admin"); 
      
     // router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };


  const handleLogin = () => {
    // Call login API and get user object
    const user = { name: 'John', email: 'john@example.com' };
    // Dispatch loginUser action with user object
  //  dispatch(loginUser(user));
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
