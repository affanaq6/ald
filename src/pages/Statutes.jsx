import React from "react";
import styles from "./Statutes.module.css";
import FrontDBS from "../components/Statutes/FrontDBS";
import RearDBS from"../components/Statutes/RearDBS";
const Statutes = () => {
  return (
    <div>
      {/* Add your content here */}
      <div className={styles.container}>
        <div className={styles.title}>Statutes</div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={styles.searchIcon}
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
        {/* Found Results */}
        <div className={styles.foundResults}>Found 10 Results</div>
        
      </div>
      <div className={styles.frame}>
      <FrontDBS/>
        <p className={styles.textStyles}>
          SERVICE AND LABOUR LAWS -Suspension-on ground arrest of accused  Per the point system the BPD gang database utilizes, the youth need only earn ten points to be verified as a gang member.
        </p>
        <div className={styles.divider}></div>
      <RearDBS/>
        <p className={styles.textStyles}>
          No Results Found.
        </p>
        <div className={styles.pageCounter}>
          <button className={`${styles.arrow} ${styles.previous}`}>&lt;</button>
          <div className={styles.pageInfo}>
            <span className={styles.currentPage}>1</span>/<span className={styles.totalPages}>10</span>
          </div>
          <button className={`${styles.arrow} ${styles.next}`}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Statutes;
