import React from 'react';
import styles from './SubHeader.module.css'; // Ensure this import points to the correct CSS file

function SubHeader() {
  return (
    <div className={styles.frame}>
      <div className={styles.textBlock}>
        <div className={styles.citation}>2024 (1) ALD 596 TS</div>
        <div className={styles.caseTitle}>Usha Mehta v. Government of Andhra Pradesh and others</div>
      </div>
      <button className={styles.fullScreenButton}>
        Full Screen
      </button>
    </div>
  );
}

export default SubHeader;
