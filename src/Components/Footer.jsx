import { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import '../Styles/index.css'
import '../Styles/App.css'

function Footer() {
  const [loginMessage, setloginMessage] = useState('')

   return (
  
    <footer>
      <h5>© Copyright 2023 ServiceConnect.com</h5>     
      <div id="SocialMedia" className="image-container">            
          <img src="/Images/emailicon.png" alt="Send email to us" height="40px"/>        
          <img src="/Images/twittericon.png" alt="Visit our Twitter page" height="40px"/>
          <img src="/Images/fbicon.png" alt="Visit our facebook page" height="40px"/> 
          <img src="/Images/instagramicon.png" alt="Visit our instagram page" height="40px"/>
      </div>

    </footer>  
    
  )
}

export default Footer
