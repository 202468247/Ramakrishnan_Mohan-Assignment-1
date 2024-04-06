import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Components/Footer.jsx'
import Header from './Components/header.jsx'
import Mainsection from './Components/Mainsection.jsx'
import './Styles/index.css'
import './Styles/App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Header />
        <Mainsection />
        <Footer />
  </React.StrictMode>,
)
