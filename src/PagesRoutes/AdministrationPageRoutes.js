import { Route } from 'react-router-dom'


import Layout from '../components/Layout/Layout'

//---------- Administration pages routes 
import Principal from '../pages/Administration/Principal'
import Accounts from '../pages/Administration/Accounts'
import ExaminationSection from '../pages/Administration/ExaminationSection'
import Proctor from '../pages/Administration/Proctor'
import Registrar from '../pages/Administration/Registrar'
import BOG from '../pages/Administration/BOG'

const AdministrationPageRoutes = [
    <Route exact path='/administration/accounts' element={<Accounts />} />,
    <Route exact path='/administration/principal' element={<Principal />} />,
    <Route exact path='/administration/examinationSection' element={<ExaminationSection />} />,
    <Route exact path='/administration/proctor' element={<Proctor />} />,
    <Route exact path='/administration/registrar' element={<Registrar />} />,
    <Route exact path='/administration/bog' element={<BOG />} />,
]

export default AdministrationPageRoutes
