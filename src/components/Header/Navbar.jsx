import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import styles from "./Navbar.module.css"; // Ensure this points to the correct CSS module file

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to navigate to a path
  const handleNavigation = (path) => () => {
    navigate(path);
  };

  // Function to determine the class name based on active state
  const getClassName = (path) => {
    return window.location.pathname === path
      ? `${styles.navButton} ${styles.active}`
      : styles.navButton;
  };

  return (
    <div className={styles.navBarDefault}>
      <div className={styles.frame}>
        <button onClick={handleNavigation("/")} className={getClassName("/")}>
          HOME
        </button>
        <button
          onClick={handleNavigation("/index")}
          className={getClassName("/index")}
        >
          INDEX
        </button>
        <button
          onClick={handleNavigation("/case-finder")}
          className={getClassName("/case-finder")}
        >
          CASE FINDER
        </button>
        <button
          onClick={handleNavigation("/statutes")}
          className={getClassName("/statutes")}
        >
          STATUTES
        </button>
        <button
          onClick={handleNavigation("/articles")}
          className={getClassName("/articles")}
        >
          ARTICLES
        </button>
        <button
          onClick={handleNavigation("/judges-profile")}
          className={getClassName("/judges-profile")}
        >
          JUDGES PROFILE
        </button>
        <button
          onClick={handleNavigation("/help")}
          className={getClassName("/help")}
        >
          HELP
        </button>
        <button
          onClick={handleNavigation("/caseinfo")}
          className={getClassName("/caseinfo")}
        >
          CASE INFO
        </button>
      </div>
    </div>
  );
};

export default Navbar;
