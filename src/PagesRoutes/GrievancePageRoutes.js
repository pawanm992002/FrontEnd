import React from 'react'
import { Route } from 'react-router-dom'

import Layout from '../components/Layout/Layout'

//----------- Grievance routes
import Category from '../pages/Grievance/Category'
import ParentsMeetings from '../pages/Grievance/ParentsMeetings'


//---------- Grievance pages routes 
const GrievancePageRoutes = [
    <Route exact path='/grievance/category' element={<Layout>  <Category /></Layout>} />,
    <Route exact path='/grievance/parentsmeets' element={<Layout>  <ParentsMeetings /></Layout>} />,
]

export default GrievancePageRoutes
