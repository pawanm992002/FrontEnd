import React from 'react'
import { Route } from 'react-router-dom'


//---------- About pages routes 
import History from './History'
import Layout from '../../components/Layout/Layout'
import Vision from './Vision'
import PEOs from './PEOs'
import Contact from './Contact'
import SightSeeing from './SightSeeing'
import HowToReach from './HowToReach'

const AboutPageRoutes = [
    <Route exact path='/about/History' element={<Layout>  <History /></Layout>} />,
    <Route exact path='/about/vision' element={<Layout>  <Vision /></Layout>} />,
    <Route exact path='/contact' element={<Layout>  <Contact /></Layout>} />,
    <Route exact path='/about/Sightseeing' element={<Layout>  <SightSeeing /></Layout>} />,
    <Route exact path='/about/HowtoReach' element={<Layout>  <HowToReach /></Layout>} />,
    <Route exact path='/about/peo' element={<Layout>  <PEOs /></Layout>} />
]

export default AboutPageRoutes
