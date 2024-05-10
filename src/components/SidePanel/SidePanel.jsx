import React from 'react';
import PropTypes from 'prop-types';
import './SidePanel.css'; // Import your CSS file for styling

const SidePanel = ({ isOpen, onClose, children }) => {
  return (
    <div className='body'>
<div className={`side-panel ${isOpen ? 'open' : ''}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="panel">
        <button className="close-btn" onClick={onClose}>Close</button>
        {children}

      <div className="container">
      <section>
        <div className="Title">
          <h3>SUBJECT INDEX</h3>
        </div>
        <div className="Contents">
          <div>
            <input type="text" id="name" name="name" placeholder="ACT" maxLength="50" required />
          </div>
          <div>
            <input type="text" id="section" name="section" placeholder="Section" maxLength="50" required />
          </div>
          <div>
            <input type="text" id="sub-section" name="sub-section" placeholder="Sub-Section" maxLength="50" required />
          </div>
          <div>
            <p><i>Search Results</i></p>
          </div>
        </div>
      </section>

      <section>
        <div className="Title">
          <h3>TOPIC INDEX</h3>
        </div>
      </section>

      <section>
        <div className="Title">
          <h3>CITATION INDEX</h3>
        </div>
      </section>

      <section>
        <div className="Title">
          <h3>NOMINAL INDEX</h3>
        </div>
      </section>

      <section>
        <div className="Title">
          <h3>CASE NO INDEX</h3>
        </div>
      </section>

      <section>
        <div className="Title">
          <h3>JUDGE INDEX</h3>
        </div>
      </section>

      <section>
        <div className="Title">
          <h3>ADVOCATE INDEX</h3>
        </div>
      </section>

      <section>
        <div className="Title">
          <h3>EQUALENT INDEX</h3>
        </div>
      </section>
</div>

</div>
</div>
</div>

  );
};

SidePanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SidePanel;
