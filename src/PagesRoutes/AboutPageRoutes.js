import { Route } from 'react-router-dom'


//---------- About pages routes 
import History from '../pages/About/History'
import Vision from '../pages/About/Vision'
import PEOs from '../pages/About/PEOs'
import Contact from '../pages/About/Contact'
import SightSeeing from '../pages/About/SightSeeing'
import HowToReach from '../pages/About/HowToReach'

const AboutPageRoutes = [
    <Route exact path='/about/History' element={<History />} />,
    <Route exact path='/about/vision' element={<Vision />} />,
    <Route exact path='/contact' element={<Contact />} />,
    <Route exact path='/about/Sightseeing' element={<SightSeeing />} />,
    <Route exact path='/about/HowtoReach' element={<HowToReach />} />,
    <Route exact path='/about/peo' element={<PEOs />} />
]

export default AboutPageRoutes
