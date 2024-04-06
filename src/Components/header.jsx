import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'

function Header () {
    return (
                            
        <nav class="navigation">
            <img src="/Images/Logo.png" alt="Send email to us" height="80px"/>
            <ul class="ULRow">
                <li>Home</li>
                <li>Services & Deals</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <img id="HumbergerMenu" src="/Images/NavBarImage.jpg"/>
        </nav>         

    )
}

export default Header