import React from "react";
import styles from "./JudgesProfile.module.css";

const JudgesProfile = () => {
  return (
    <div>
      {/* Add your content here */}
      <div className={styles.container}>
        <div className={styles.title}>Explore Judges</div>
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
        <div className={styles.foundResults}>Found 1045 Results</div>
        <div className={styles.groupFrame}>
          {/* Frame */}
          <div className={styles.frame}></div>
          {/* Letter "V" */}
          <div className={styles.letterV}>V</div>
          {/* Judge Names for "V" */}
          <div className={styles.judgeColumn}>
            <div className={styles.judgeEntry}>Judge A</div>
            <div className={styles.judgeEntry}>Judge B</div>
            <div className={styles.judgeEntry}>Judge C</div>
          </div>
          <div className={styles.judgeColumn2}>
            <div className={styles.judgeEntry}>Judge A</div>
            <div className={styles.judgeEntry}>Judge B</div>
            <div className={styles.judgeEntry}>Judge C</div>
          </div>
          <div className={styles.judgeColumn3}>
            <div className={styles.judgeEntry}>Judge A</div>
            <div className={styles.judgeEntry}>Judge B</div>
            <div className={styles.judgeEntry}>Judge C</div>
          </div>
          {/* MORE Judges */}
          <div className={styles.MoreJudges}>
            MORE JUDGES <span className={styles.arrow}>➔</span>
          </div>
        </div>
        {/* Add another group frame for letter "Y" */}
        <div className={styles.groupFrameY}>
          {/* Frame */}
          <div className={styles.frameY}></div>
          {/* Letter "Y" */}
          <div className={styles.letterY}>Y</div>
          {/* Judge Names for "Y" */}
          <div className={styles.judgeColumnY}>
            <div className={styles.judgeEntry}>Judge D</div>
            <div className={styles.judgeEntry}>Judge E</div>
            <div className={styles.judgeEntry}>Judge F</div>
          </div>
          <div className={styles.judgeColumn2Y}>
            <div className={styles.judgeEntry}>Judge D</div>
            <div className={styles.judgeEntry}>Judge E</div>
            <div className={styles.judgeEntry}>Judge F</div>
          </div>
          <div className={styles.judgeColumn3Y}>
            <div className={styles.judgeEntry}>Judge D</div>
            <div className={styles.judgeEntry}>Judge E</div>
            <div className={styles.judgeEntry}>Judge F</div>
          </div>
          {/* MORE Judges */}
          <div className={styles.MoreJudgesY}>
            MORE JUDGES <span className={styles.arrow}>➔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgesProfile;
