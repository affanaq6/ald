import React from "react";
import styles from "./SidePanel.module.css";

function SidePanel() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.panelOutline}>
        {" "}
        {/* Assuming you have an outline style defined */}
        <div className={styles.subcontainer}>
          <div className={styles.subitem}>
            <div className={styles.rectanglesubjectindex}></div>
            SUBJECT INDEX
          </div>
          {/* Adding search bars for ACT, SECTION, SUB SECTION, and SEARCH RESULTS */}
          <div className={styles.subitem}>
            <input
              type="text"
              placeholder="ACT"
              className={styles.searchInput}
            />
          </div>
          <div className={styles.subitem}>
            <input
              type="text"
              placeholder="SECTION"
              className={styles.searchInput}
            />
          </div>
          <div className={styles.subitem}>
            <input
              type="text"
              placeholder="SUB SECTION"
              className={styles.searchInput}
            />
          </div>
          <div className={styles.subitem}>
            <input
              type="text"
              placeholder="SEARCH RESULTS"
              className={styles.searchInput}
            />
          </div>
        </div>
        {/* Additional indices are listed outside of the search bar container */}
        <div className={styles.item}>
          <div className={styles.rectangle}></div>
          TOPIC INDEX
        </div>
        <div className={styles.item}>
          <div className={styles.rectangle}></div>
          CITATION INDEX
        </div>
        <div className={styles.item}>
          <div className={styles.rectangle}></div>
          NOMINAL INDEX
        </div>
        <div className={styles.item}>
          <div className={styles.rectangle}></div>
          CASE NO INDEX
        </div>
        <div className={styles.item}>
          <div className={styles.rectangle}></div>
          JUDGE INDEX
        </div>
        <div className={styles.item}>
          <div className={styles.rectangle}></div>
          ADVOCATE INDEX
        </div>
        <div className={styles.item}>
          <div className={styles.rectangle}></div>
          EQUIVALENT INDEX
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
