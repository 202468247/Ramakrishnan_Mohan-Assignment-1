import React, { useState } from 'react';
import Footer from './Components/Footer.jsx'
import Header from './Components/header.jsx'
import Mainsection from './Components/Mainsection.jsx'

import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'

export default App => {
    const [currentPage, setCurrentPage] = useState('MainSection')

    function handlePageChange(page) {
        setCurrentPage(page);
      }

    return (
        <>
            <Header onPageChange={handlePageChange} />
            {currentPage === "Home" && <Mainsection />}
            {currentPage === "About" && <About />}
            {currentPage === "Services" && <Services />}
            {currentPage === "Contact" && <Contact />}
            {currentPage === "Login" && <Login />}
            <Footer />
        </>
    )

}

