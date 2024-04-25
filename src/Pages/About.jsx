import React, { useState } from 'react';

const About = () => {

  const paragraphStyle = {
    color: "#f9f3f3" // Change 'blue' to your desired color
};

    return (
      <main className="mainsection">
      <main1>
        <h2>About Our Discounted Service Referral Program</h2>
        <p style={paragraphStyle}>Welcome to our Discounted Service Referral Program! We're thrilled to have you join us on this journey of mutual benefits and rewards.</p>
        
        <h2>Our Mission</h2>
        <p style={paragraphStyle}>Our mission is to provide exceptional services to our customers while fostering a community of satisfied clients who are eager to share their positive experiences with others. Through our referral program, we aim to reward both our loyal customers and their referrals with exclusive discounts and incentives.</p>

        <h2>How It Works</h2>
        <p style={paragraphStyle}><b>Joining the Program: </b>
        When you become a customer of our services, you automatically become eligible to participate in our referral program.</p>
        
        <p style={paragraphStyle}><b>Sharing is Caring: </b>Spread the word about our services to your friends, family, and colleagues. Let them know about the benefits they can enjoy by becoming our customers.</p>
        
        <p style={paragraphStyle}><b>Referral Sign-up: </b>When someone you refer signs up for our services, they'll receive a special discount on their first purchase.</p>

        <p style={paragraphStyle}><b>Rewards for Referrers:</b> As a token of our appreciation for your referral, you'll also receive a discount on your next purchase or enjoy other exclusive rewards.</p>

        <h2>Why Participate?</h2>
        <p style={paragraphStyle}><b>Save Money: </b>Take advantage of discounted rates on our services for yourself and your referrals.</p>
        <p style={paragraphStyle}><b>Support Each Other: </b>Help your friends and loved ones access quality services at affordable prices.</p>
        <p style={paragraphStyle}><b>Build Community: </b>Join a community of satisfied customers who share their positive experiences and recommendations.</p>

        <h2>Get Started Today!</h2>
        <p style={paragraphStyle}>Ready to start saving and earning rewards? Refer your friends and start enjoying the benefits of our Discounted Service Referral Program today!</p>

      </main1>
      <main2>
      <div className="blank-image-space"></div>
      <img id="mainimage" src="/Images/About.jpg" alt="Image of Percentage conversion of service referrals" width="300px" height="300px"/>
      <div className="blank-image-space"></div>
      <img id="mainimage" src="/Images/About2.jpg" alt="Image of Percentage conversion of service referrals" width="300px" height="300px"/>
      <div className="blank-image-space"></div>
      </main2>
  </main>  
      );

}

export default About;