import React from 'react'
import { Route } from 'react-router-dom'


import Layout from '../components/Layout/Layout'

//---------- Academics pages routes 
import TimeTables from '../pages/Academics/TimeTables'
import FirstYear from '../pages/Academics/FirstYear'
import Research from '../pages/Academics/Research'
import PGCourses from '../pages/Academics/PGCourses'
import UGCourses from '../pages/Academics/UGCourses'
import AcademicSection from '../pages/Academics/AcademicSection'

const AcademicsPageRoutes = [
    <Route exact path='/academics/timeTables' element={<Layout>  <TimeTables /></Layout>} />,
    <Route exact path='/academics/firstYear' element={<Layout>  <FirstYear /></Layout>} />,
    <Route exact path='/academics/research' element={<Layout>  <Research /></Layout>} />,
    <Route exact path='/academics/PGCourses' element={<Layout>  <PGCourses /></Layout>} />,
    <Route exact path='/academics/UGCourses' element={<Layout>  <UGCourses /></Layout>} />,
    <Route exact path='/academics/section' element={<Layout>  <AcademicSection /></Layout>} />,
]

export default AcademicsPageRoutes
