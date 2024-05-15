import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

export default function ScreenReader() {
  return (
    <div>
      <Navbar/>
      <h2> Accessibility </h2>
      
      <img src="images/ScreenReader.png" alt="" />
      <h2>Welcome to the official website of Engineering College, Ajmer</h2>
      <p>Engineering College, Ajmer is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines. This website endeavours to confirm to level guidelines of Hon'ble Supreme Court of India regarding Websites Compliant to Accessibility for Persons with Disabilities. These guidelines explain how to make web content more accessible for people with disabilities. Conformance with these guidelines will help make the web more user friendly for all people. This site has been built using code compliant with W3C standards for HTML and CSS. The site displays correctly in current browsers and using standards compliant HTML/CSS code means any future browsers will also display it correctly. We are continually seeking out solutions that will bring all areas of the site up to the same level of overall web accessibility. In the meantime should you experience any difficulty in accessing the website, please don't hesitate to</p>
      <h2>creen Reader Access Links</h2>
      <ul>
      <li>Non Visual Desktop Access (NVDA) - http://www.nvda-project.org</li>
       <li>
       System Access To Go - http://www.satogo.com 
       </li>
       <li>
       Thunder - http://www.screenreader.net 
       </li>
       <li>
       Android App -https://play.google.com/store/apps/details?id=atlab.shineplus&hl=en_IN 
       </li>
      </ul>
      <Footer/>
    </div>
  )
}
