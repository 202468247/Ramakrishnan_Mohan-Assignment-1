import React, { useState } from 'react';

const Contact = () => {

  const paragraphStyle = {
    color: "#f9f3f3" // Change 'blue' to your desired color
  };

    return (
      <main className="mainsection">
      <main1>
        <h2>Contact Us</h2>
        <p style={paragraphStyle}>Thank you for your interest in our service referral program! If you have any questions, 
        suggestions, or inquiries, please feel free to reach out to us. Our dedicated team is here to assist you.</p>
        
        <h3>Contact Details:</h3>
        <ul style={paragraphStyle}>
          <li style={paragraphStyle}>Email: <a href="mailto:contact@cvksolutions.com">contact@cvksolutions.com</a></li>
          <li>Phone: +1 (647) 456-7890</li>
          <li>Address: 8 Milner Ave, Toronto, ON, L6P 1Z9</li>
        </ul>

        <h3>Social Media:</h3>

        <p style={paragraphStyle}>Stay connected with us on social media for updates, promotions, and more:</p>

        <ul style={paragraphStyle}>
          <li >Facebook: <a href="https://facebook.com/solar331">https://facebook.com/solar331</a></li>
          <li>Twitter: <a href="https://twitter.com/solar331">https://twitter.com/solar331</a></li>
          <li>Instagram: <a href="https://instagram.com/solar331">https://instagram.com/solar331</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/solar331">https://linkedin.com/solar331</a></li>
        </ul>

        <h3>Business Hours:</h3>

        <p style={paragraphStyle}>Our team is available to assist you during the following hours:</p>

        <ul style={paragraphStyle}>
          <li>Monday to Friday: 9:00 AM - 5:00 PM (local time)</li>
          <li>Saturday and Sunday: Closed</li>
        </ul>

        <p style={paragraphStyle}>We look forward to hearing from you and assisting you with any inquiries you may have!</p>
            
      </main1>

        <main2>
          <div className="blank-image-space"></div>
        </main2>
      </main> 
      );

}

export default Contact;