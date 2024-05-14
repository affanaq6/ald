/*
import React from "react";
import styles from "./Contactform.module.css"; // Import CSS module

const ContactForm = () => {
  return (
    <section className={styles.contactSection}>
      <div className="left-container">
        <div className="left-inner-container">
          <h2>Let's Chat</h2>
          <p>Whether you have a question, want to start a project, or simply want to connect.</p>
          <p>Feel free to send me a message in the contact form</p>
        </div>
      </div>
      <div className={styles.formcarryContainer}>
        <form action="https://formcarry.com/s/CGNSNY682Wl" method="POST" encType="multipart/form-data">
          <div className={styles.formcarryBlock}>
            <label htmlFor="fc-generated-1-name">Full Name</label>
            <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
          </div>

          <div className={styles.formcarryBlock}>
            <label htmlFor="fc-generated-1-email">Your Email Address</label>
            <input type="email" name="email" id="fc-generated-1-email" placeholder="john@doe.com" />
          </div>

          <div className={styles.formcarryBlock}>
            <label htmlFor="fc-generated-1-message">Your message</label>
            <textarea name="message" id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
          </div>

          <div className={styles.formcarryBlock}>  
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;



// ContactForm.jsx

import React from 'react';
import styles from './Contactform.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
        <p>+1 012 3456 789</p>
        <p>demo@gmail.com</p>
      </div>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4"></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;

*/

import React from 'react';
import styles from './Contactform.module.css';

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await fetch('https://formcarry.com/s/CGNSNY682Wl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObject)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle success
      console.log('Form submitted successfully');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p>ALD, High court gate 4</p>
        <p>+91 9090909090</p>
        <p>ald@info.com</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" name="message"></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;

