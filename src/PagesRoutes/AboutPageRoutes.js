import { Route } from 'react-router-dom'


//---------- About pages routes 
import History from '../pages/About/History'
import Vision from '../pages/About/Vision'
import PEOs from '../pages/About/PEOs'
import Contact from '../pages/About/Contact'
import SightSeeing from '../pages/About/SightSeeing'
import HowToReach from '../pages/About/HowToReach'
import Layout from '../components/Layout/Layout'

const AboutPageRoutes = [
    <Route exact path='/about/History' element={<Layout><History /></Layout>} />,
    <Route exact path='/about/vision' element={<Layout><Vision /></Layout>} />,
    <Route exact path='/contact' element={<Layout><Contact /></Layout>} />,
    <Route exact path='/about/Sightseeing' element={<Layout><SightSeeing /></Layout>} />,
    <Route exact path='/about/HowtoReach' element={<Layout><HowToReach /></Layout>} />,
    <Route exact path='/about/peo' element={<Layout><PEOs /></Layout>} />
]

export default AboutPageRoutes
