import { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
//import 'src/Styles/index.css'
import './Login/get-user'
import { checkLogin } from './Login/get-user'

function Footer() {
  const [loginMessage, setloginMessage] = useState('')

   return (
  
    <footer>
      <h5>© Copyright 2023 ServiceConnect.com</h5>     
      <div id="SocialMedia">     
          <img src="/Images/emailicon.png" alt="Send email to us" height="40px"/>    
          <img src="/Images/twittericon.png" alt="Visit our Twitter page" height="40px"/>
          <img src="/Images/fbicon.png" alt="Visit our facebook page" height="40px"/> 
          <img src="/Images/instagramicon.png" alt="Visit our instagram page" height="40px"/>
      </div>

     <div className="Login">       
        <label size="10">User Name: </label>
        <input type="text" id="userName" size="10"></input>
        <label size="10">  Password:   </label>
        <input type="text" id="passWord" size="10"></input>
        <button onClick={() => setloginMessage(checkLogin(document.getElementById('userName').value,document.getElementById('passWord').value))} size="100px">Login</button>
        <label id="LoginErrMsg">{loginMessage}</label>
      </div>  

      </footer>  
    
  )
}

export default Footer
