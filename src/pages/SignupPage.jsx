import React from "react";
import styles from "./SignupPage.module.css"; // Ensure this import points to the correct file
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";



function SignUpForm() {
   return (
    <div className={styles.SUwrapper}>
      
      <div className={styles.SUcontainer}>
        <h1 className={styles.SUTitle}> Sign Up </h1>
        <div className={styles.SUinputbox}>
           <input type="text" className={styles.SUinput} placeholder="First Name" />
          <input type="text" className={styles.SUinput} placeholder="Last Name" />
        </div>
      <div className={styles.inputbox}>
        <input type="text" className={styles.SUinput} placeholder="Enter Username" /><FaUser className={styles.SUicon}/>
      </div>

        <div className={styles.SUinputbox}>
           <input type="password" className={styles.SUinput} placeholder="Re-Enter Password" /><RiLockPasswordFill className={styles.SUicon} />
        </div>
        <div className={styles.SUinputbox}>
           <input type="phone" className={styles.SUinput} placeholder="Phone Number" />
        </div>
        <div className={styles.SUinputbox}>
           <input type="email" className={styles.SUinput} placeholder="E-mail" />
        </div>



        <button className={styles.SUbutton}>Submit</button>


        <div className={styles.SUTitle}>
        <img src="src/assets/DASHTitle/Title (1).png" alt="Title" />
        </div>            

      </div>
    </div>
  );
}

export default SignUpForm;