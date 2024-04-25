import React, { useState } from 'react';

const items = [
  { id: 1, name: 'House in Caledon, 4 bed, 3 bath, 2 Story', discount: 12, price: 1.8 },
  { id: 2, name: 'House in Brampton, 5 bed, 3.5 bath, 2 story', discount: 15, price: 1.65 },
  { id: 3, name: 'House in Whitby, 3 bed, 2 full bath, semi-detached', discount: 20, price: 1.2 },
  { id: 4, name: 'House in Markham, 4 bed, 3 full bath, 2500 sqft', discount: 18, price: 2.4 },
  { id: 5, name: 'House in Richmond hill, 3 bed, 3 bath, 2050 sqft', discount: 11, price: 3 },
];

const SelectItems = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleRadioChange = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleServiceProvider = () => {
    alert("Your information is sent to the Service Provider. Thank you for shopping")
    //window.location.href = '/Login';
  };

  if ((localStorage.getItem('MY-loggedIn'))) {
   return (        
        <div className="checkout-grid">          
          <div className="square-block">
            Select the most suitable offer below and click "Send Request" button that will send the notification to the service provider.
            The service provider will contact you soon and you will be able to get the guranteed discount for your selection.
          </div>          
          <div className="grid-header">
            <div>Description</div>
            <div>Price</div>
            <div>Discount</div>
            <div>Connect</div>
          </div>
          {items.map((item) => (
            <div key={item.id} className="grid-row">
              <div>{item.name}</div>
              <div>${item.price.toFixed(2)} M</div>
              <div>{item.discount.toFixed(2)} %</div>
              <div>
                <input
                  type="radio"
                  id={`item-${item.id}`}
                  name="selectedItem"
                  checked={selectedItemId === item.id}
                  onChange={() => handleRadioChange(item.id)}
                />
              </div>
            </div>         
          ))}
          <br></br>
          <div className="square-button-container">
            <div className="button-container">
              <button onClick={handleServiceProvider}>Send Request</button>
            </div>
          </div>
        </div> 
      );
  }
  else {
    props.onPageChange('Login')
  }
};


export default SelectItems;
