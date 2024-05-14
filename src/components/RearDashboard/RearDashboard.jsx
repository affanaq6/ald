import React from "react";
import styles from "./RearDashboard.module.css";

function RearDashboard() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.dateRangeSelector}>
          <label className={styles.dateLabel}>Date</label>
          <input
            className={styles.dateInput}
            type="date"
            placeholder="mm/dd/yyyy"
          />
          <span className={styles.toLabel}>To</span>
          <input
            className={styles.dateInput}
            type="date"
            placeholder="mm/dd/yyyy"
          />
        </div>
        <div className={styles.allSelector}>
          <div className={styles.allInputContainer}>
            <div className={styles.allInput}>All</div>
          </div>
          <div className={styles.allInputContainer}>
            <div className={styles.allInput}>All</div>
          </div>
        </div>
      </header>
      <div className={styles.rectangle}></div> {/* Rectangle with curved edges */}
      <footer className={styles.footer}>
        <div className={styles.pagination}>
          <button className={styles.paginationButton}>First</button>
          <button className={styles.paginationButton}>Prev</button>
          <span className={styles.paginationInfo}>1 of 1</span>
          <button className={styles.paginationButton}>Next</button>
          <button className={styles.paginationButton}>Last</button>
        </div>
        <div className={styles.caseInfo}>2024 ALD 596 TS</div>
        <button className={styles.prevCaseButton}>Prev Case</button>
        <button className={styles.searchButton}>Search</button>
        <div className={styles.searchBar}>
          <input className={styles.searchInput} />
        </div>
        <button className={styles.padButton}>Pad</button>
        <button className={styles.showButton}>Show</button>
      </footer>
    </main>
  );
}

export default RearDashboard;
