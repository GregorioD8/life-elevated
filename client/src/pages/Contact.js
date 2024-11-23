import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="container text-center">
        <h2>Contact Us</h2>
        <p>Ready to elevate your performance? Reach out to us today!</p>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message here"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;