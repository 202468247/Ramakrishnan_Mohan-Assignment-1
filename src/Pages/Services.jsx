import React, { useState } from 'react';

const Services = () => {

  const paragraphStyle = {
    color: "#f9f3f3" // Change 'blue' to your desired color
};

    return (
      <main className="mainsection">
      <main1>
        <h1>Services Offered</h1>
        <h4>Under a service referral program, the services offered could vary widely based on the nature of the business 
        or organization running the program. However, here's a generalized list of services that are commonly offered 
        under such programs:</h4>
        
        <p style={paragraphStyle}><b>Discounted Services: </b>Customers who refer others may receive discounts on their own purchases or services as a reward for their referrals.</p>

        <p style={paragraphStyle}><b>Exclusive Promotions: </b>Referrers might gain access to exclusive promotions, such as buy-one-get-one-free deals, limited-time offers, or special packages.</p>

        <p style={paragraphStyle}><b>Bonus Points or Credits: </b>Referrers could earn bonus points or credits for each successful referral, which can be redeemed for future purchases or services.</p>

        <p style={paragraphStyle}><b>Extended Trials or Free Trials: </b>Referrals might receive extended trial periods or free trials for certain services to encourage them to try out the offerings.</p>

        <p style={paragraphStyle}><b>Cash Rewards or Gift Cards: </b>Referrers may receive cash rewards or gift cards for each successful referral, providing them with tangible benefits for their efforts.</p>

        <p style={paragraphStyle}><b>VIP or Premium Benefits: </b>Referrers might be granted VIP or premium benefits, such as priority service, dedicated support, or access to exclusive events.</p>

        <p style={paragraphStyle}><b>Upgrade Discounts: </b>Referrers may be eligible for discounts on upgrades or premium features of the services they're already using.</p>

        <p style={paragraphStyle}><b>Referral Tiers or Levels: </b>Referrers could be categorized into different tiers or levels based on the number or quality of their referrals, with each tier offering increasingly valuable rewards.</p>

        <p style={paragraphStyle}><b>Partner Programs: </b>Referrers might have the opportunity to join partner programs or affiliate programs, where they earn commissions or recurring revenue for referrals that lead to sales.</p>
                  
      </main1>

      <main2>
      <div className="blank-image-space"></div>
      <img id="mainimage" src="/Images/Services1.jpg" alt="Image of Percentage conversion of service referrals" width="300px" height="300px"/>
      <div className="blank-image-space"></div>
      <img id="mainimage" src="/Images/Services2.jpg" alt="Image of Percentage conversion of service referrals" width="300px" height="300px"/>
      <div className="blank-image-space"></div>
      </main2>
     
      </main>  
      );

}

export default Services;