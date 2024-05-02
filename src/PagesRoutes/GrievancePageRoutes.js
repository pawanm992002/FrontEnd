import { Route } from 'react-router-dom'

//----------- Grievance routes
import Category from '../pages/Grievance/Category'
import ParentsMeetings from '../pages/Grievance/ParentsMeetings'
import Layout from '../components/Layout/Layout'


//---------- Grievance pages routes 
const GrievancePageRoutes = [
    <Route exact path='/grievance/category' element={<Layout><Category /></Layout>} />,
    <Route exact path='/grievance/parentsmeets' element={<Layout><ParentsMeetings /></Layout>} />,
]

export default GrievancePageRoutes
