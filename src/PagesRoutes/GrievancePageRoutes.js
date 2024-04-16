import { Route } from 'react-router-dom'

//----------- Grievance routes
import Category from '../pages/Grievance/Category'
import ParentsMeetings from '../pages/Grievance/ParentsMeetings'


//---------- Grievance pages routes 
const GrievancePageRoutes = [
    <Route exact path='/grievance/category' element={<Category />} />,
    <Route exact path='/grievance/parentsmeets' element={<ParentsMeetings />} />,
]

export default GrievancePageRoutes
