/*import React from 'react';
import styles from "./Header.module.css";
import Navbar from './Navbar'; // Make sure the import path is correct

const HEADERCOMPONENT = () => {
  return (
    <div className={styles.headerComponent}>
      <section className={styles.headerComponentInner}>
        <h1 className={styles.titleText}>ALD Online</h1> 
      </section>
      <div className={styles.navBardefaultParent}>
        <Navbar />  
        
      </div>
    </div>
  );
};

export default HEADERCOMPONENT;
*/

import React from "react";
import * as classes from "./Header.module.css";
import Navbar from "./Navbar"; // Import Navbar component

export const HeaderComponent = () => {
  return (
    <div className={classes.headerComponent}>
      {/* Logo or title image */}
      <img
        className={classes.titleImage}
        src="src/components/Header/TITLE.png"
        alt="Title Logo"
      />

      <div className={classes.headerComponentInner}>
        {/* Navbar component for navigation */}
        <Navbar className={classes.navBarDefault} />

        {/* Login button */}
        <button className={classes.loginButton}>LOGIN</button>
      </div>
    </div>
  );
};

export default HeaderComponent;
