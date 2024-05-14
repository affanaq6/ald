import React from "react";
import styles from "./LoginPage.module.css"; // Ensure this import points to the correct file
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Dash from "../components/LoginTools/LoginDash";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


function LoginForm() {
   return (
    <div className={styles.wrapper}>
      <Dash/>
      <div className={styles.container}>
        <h1> Login </h1>
      <div className={styles.inputbox}>
        <input type="text" className="form-control" placeholder="Enter Userame" /><FaUser className={styles.icon}/>
      </div>n
      <div className={styles.inputbox}>
         <input type="password" className="form-control" placeholder="Enter Password" /><RiLockPasswordFill className={styles.icon} />
      </div>
      <div className={styles.rememberforget}>

        <a href="#" className={styles.forgotpassword}>Forgot Password?</a>
     </div>

        <button className={styles.button}>Submit</button>

        <div className={styles.registerLink}>
          {/* Use Link component for navigation */}
          <span>Dont have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className={styles.Title}>
        <img src="src/Components/LoginForm/Title (1).png" alt="Title" />
        </div>            

      </div>
    </div>
  );
}

export default LoginForm;