import React from 'react'

//------- Component Specific Stuff
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
        <>
            {/* ------- Navbar Component  */}
            <Navbar />

            {/* ------- Our page content  */}
            {children}

            {/* ----- Footer Component  */}
            <Footer />

        </>
    )
}

export default Layout
