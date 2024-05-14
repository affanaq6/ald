import React from "react";
import styles from "./LatestBooks.module.css";

const Frame = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.title}>Latest Books</div>
      <div className={styles.bookContainer}>
        {/* Book 1 */}
        <div className={styles.book}>
          <img src="src/assets/latest books/image 8.png" alt="Book 1" className={styles.bookImage} />
          <div className={styles.bookDescription}>
            <h3 className={styles.bookTitle}>Book Title 1</h3>
            <p className={styles.bookInfo}>Author: Author Name</p>
            <p className={styles.bookInfo}>Genre: Fiction</p>
            <p className={styles.bookInfo}>Published: January 1, 2024</p>
          </div>
        </div>

        {/* Book 2 */}
        <div className={styles.book}>
          <img src="src/assets/latest books/image 10.png" alt="Book 2" className={styles.bookImage} />
          <div className={styles.bookDescription}>
            <h3 className={styles.bookTitle}>Book Title 2</h3>
            <p className={styles.bookInfo}>Author: Author Name</p>
            <p className={styles.bookInfo}>Genre: Fiction</p>
            <p className={styles.bookInfo}>Published: January 1, 2024</p>
          </div>
        </div>

        {/* Book 3 */}
        <div className={styles.book}>
          <img src="src/assets/latest books/image 11.png" alt="Book 3" className={styles.bookImage} />
          <div className={styles.bookDescription}>
            <h3 className={styles.bookTitle}>Book Title 3</h3>
            <p className={styles.bookInfo}>Author: Author Name</p>
            <p className={styles.bookInfo}>Genre: Fiction</p>
            <p className={styles.bookInfo}>Published: January 1, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
