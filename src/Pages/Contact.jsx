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
        <ul>
          <li><strong>Email:</strong> <a href="mailto:contact@example.com">contact@example.com</a></li>
          <li><strong>Phone:</strong> +1 (123) 456-7890</li>
          <li><strong>Address:</strong> Company Address, City, State, Zip Code</li>
        </ul>

        <h3>Social Media:</h3>

        <p style={paragraphStyle}>Stay connected with us on social media for updates, promotions, and more:</p>

        <ul>
          <li ><strong>Facebook:</strong> <a href="https://facebook.com/SR">https://facebook.com/SR</a></li>
          <li><strong>Twitter:</strong> <a href="https://twitter.com/sR">https://twitter.com/sR</a></li>
          <li><strong>Instagram:</strong> <a href="https://instagram.com/SR">https://instagram.com/SR</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/SR">https://linkedin.com/SR</a></li>
        </ul>

        <h3>Business Hours:</h3>

        <p style={paragraphStyle}>Our team is available to assist you during the following hours:</p>

        <ul>
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