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
    <Route exact path='/administration/accounts' element={<Layout><Accounts /></Layout>} />,
    <Route exact path='/administration/principal' element={<Layout><Principal /></Layout>} />,
    <Route exact path='/administration/examinationSection' element={<Layout><ExaminationSection /></Layout>} />,
    <Route exact path='/administration/proctor' element={<Layout><Proctor /></Layout>} />,
    <Route exact path='/administration/registrar' element={<Layout><Registrar /></Layout>} />,
    <Route exact path='/administration/bog' element={<Layout><BOG /></Layout>} />,
]

export default AdministrationPageRoutes
