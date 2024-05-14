import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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

        {/* Login button with Link component */}
        <Link to="/login">
          <button className={classes.loginButton}>LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
