import React from "react";
import styles from "./FrontDashboard.module.css"; // Import CSS module

function FrontDashboard() {
  const items = [
    "Headnotes",
    "Judgements",
    "Status",
    "Equals",
    "Cited",
    "Notes",
    "-",
    "+",
    "Bookmark",
    "Pad",
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.content}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <button className={styles.textButton}>{item}</button>
            {index < items.length - 1 && (
              <span className={styles.divider}>|</span>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Rectangle with curved edges */}
      <div className={styles.rectangle}></div>
    </div>
  );
}

export default FrontDashboard;
