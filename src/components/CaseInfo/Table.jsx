import React from "react";
import styles from "./Table.module.css"; // Ensure this import points to the correct file

function Table() {
  // Define contact information and icons in an array for better structure


  return (
    <div className={styles.tableContainer}>
    <table>
      <thead>
        <tr>
          <th>SL No</th>
          <th>Court</th>
          <th>Date</th>
          <th>Case Type</th>
          <th>Case No</th>
          <th>Case Year</th>
          <th>Judge Name</th>
          <th>Name of Parties</th>
          <th>Citations</th>
          <th>Users</th>
          <th>Status</th>
          <th>DOE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
          <td>Row 1, Cell 4</td>
          <td>Row 1, Cell 5</td>
          <td>Row 1, Cell 6</td>
          <td>Row 1, Cell 7</td>
          <td>Row 1, Cell 8</td>
          <td>Row 1, Cell 9</td>
          <td>Row 1, Cell 10</td>
          <td>Row 1, Cell 11</td>
          <td>Row 1, Cell 12</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
          <td>Row 2, Cell 4</td>
          <td>Row 2, Cell 5</td>
          <td>Row 2, Cell 6</td>
          <td>Row 2, Cell 7</td>
          <td>Row 2, Cell 8</td>
          <td>Row 2, Cell 9</td>
          <td>Row 2, Cell 10</td>
          <td>Row 2, Cell 11</td>
          <td>Row 2, Cell 12</td>
        </tr>
        <tr>
          <td>Row 3, Cell 1</td>
          <td>Row 3, Cell 2</td>
          <td>Row 3, Cell 3</td>
          <td>Row 3, Cell 4</td>
          <td>Row 3, Cell 5</td>
          <td>Row 3, Cell 6</td>
          <td>Row 3, Cell 7</td>
          <td>Row 3, Cell 8</td>
          <td>Row 3, Cell 9</td>
          <td>Row 3, Cell 10</td>
          <td>Row 3, Cell 11</td>
          <td>Row 3, Cell 12</td>
        </tr>
        <tr>
          <td>Row 4, Cell 1</td>
          <td>Row 4, Cell 2</td>
          <td>Row 4, Cell 3</td>
          <td>Row 4, Cell 4</td>
          <td>Row 4, Cell 5</td>
          <td>Row 4, Cell 6</td>
          <td>Row 4, Cell 7</td>
          <td>Row 4, Cell 8</td>
          <td>Row 4, Cell 9</td>
          <td>Row 4, Cell 10</td>
          <td>Row 4, Cell 11</td>
          <td>Row 4, Cell 12</td>
        </tr>
        <tr>
          <td>Row 5, Cell 1</td>
          <td>Row 5, Cell 2</td>
          <td>Row 5, Cell 3</td>
          <td>Row 5, Cell 4</td>
          <td>Row 5, Cell 5</td>
          <td>Row 5, Cell 6</td>
          <td>Row 5, Cell 7</td>
          <td>Row 5, Cell 8</td>
          <td>Row 5, Cell 9</td>
          <td>Row 5, Cell 10</td>
          <td>Row 5, Cell 11</td>
          <td>Row 5, Cell 12</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default Table;
