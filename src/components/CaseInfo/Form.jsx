import React from "react";
import Styles from "./Form.module.css";
import Dash from "./Dash";

import Table from "./Table";
// Ensure this import points to the correct file

function Form() {
  return (
    <div className={Styles.Container}>
      <Dash />
      <div className={Styles.body}>
        <div className={Styles.formContainer}>
          <div className={Styles.formHeader}>
            <h1>
              <i>Case Information</i>
            </h1>
          </div>
          <div className="formBody">
            <div className={Styles.row}>
              <div className={Styles.col}>
                <label>Court Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className={Styles.col}>
                <label>Data</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter Date"
                />
              </div>
              <div className={Styles.col}>
                <label>Judge Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className={Styles.row}>
              <div className={Styles.col}>
                <label>Case Type</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter type"
                />
              </div>
              <div className={Styles.col}>
                <label>Case Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Number"
                />
              </div>
              <div className={Styles.col}>
                <label>Case Year</label>
                <input
                  type="year"
                  className="form-control"
                  placeholder="yyyy"
                />
              </div>
            </div>
            <div className={Styles.row}>
              <div className={Styles.col}>
                <label>Name of Parties</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Names"
                />
              </div>
            </div>
            <div className={Styles.row}>
              <div className={Styles.col}>
                <label>Citations</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Citations"
                />
              </div>
            </div>
            <div className={Styles.row}>
              <div className={Styles.col}>
                <label>From</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className={Styles.col}>
                <label>To</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter Date"
                />
              </div>
              <div className={Styles.col}>
                <label>Status</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Remarks"
                />
              </div>
            </div>
            <div className={Styles.row}>
              <div className={Styles.club}>
                <div className={Styles.button}>Add</div>
                <div className={Styles.button}>Update</div>
              </div>
              <div className={Styles.club}>
                <div className={Styles.button}>Refresh</div>
                <div className={Styles.button}>Clear</div>
              </div>
              <div className={Styles.club}>
                <div className={Styles.button}>Search</div>
                <div className={Styles.button1}>🗑</div>
              </div>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
