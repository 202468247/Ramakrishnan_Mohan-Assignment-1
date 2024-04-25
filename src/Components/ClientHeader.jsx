import React from 'react'
import ReactDOM from 'react-dom/client'
import '../Styles/index.css'
import '../Styles/App.css'

function ClientHeader (props) {

   /* const menu = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Services', url: '/services' },
        { label: 'Contact', url: '/contact' },
        { label: 'Login', url: '/Login' },
      ]; */

    return (
                            
        <nav className="navigation">
            <img src="/Images/Logo.png" alt="Send email to us" height="80px"/>
            {/*<ul className="ULRow">            
            {menu.map((item, index) => (
                <li key={index} onClick={() => props.onPageChange(item.label)}>
                    {item.label}
                </li>
            ))}
        </ul>*/}
            
            <img id="HumbergerMenu" src="/Images/NavBarImage.jpg"/>
        </nav>         

    )
}

export default ClientHeader