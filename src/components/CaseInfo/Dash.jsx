import React from "react";
import Styles from "./dash.module.css"; // Ensure this import points to the correct file
function Dash() {
  


  return (
  <div className={Styles.container}>
  <div className={Styles.admin}>
    
  </div>
    <div className={Styles.contents}>
      <div className={Styles.admin}>
        <div className={Styles.rectangle}> </div>
        Admin
        <div> maryum@gmail.com </div>

      </div>
    </div>
    <div className={Styles.contents}>ALD Home</div>
    <div className={Styles.contents}>Index</div>
    <div className={Styles.contents}>Case Finder</div>
    <div className={Styles.contents}>Statues</div>
    <div className={Styles.contents}>Accounts</div>
    <div className={Styles.contents}>Settings</div>
  </div>
  );
}

export default Dash;
