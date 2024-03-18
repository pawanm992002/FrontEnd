import React from 'react'

//------- Component Specific Stuff
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
        <>
            {/* ------- Navbar Component  */}
            <Navbar />

            {/* <Navbar2 /> */}

            {/* ------- Our page content  */}
            {children}

            {/* ----- Footer Component  */}
            <Footer />

        </>
    )
}

export default Layout
