import React from 'react'
import { Route } from 'react-router-dom'


//---------- About pages routes 
import Layout from '../components/Layout/Layout'
import Scholarship from '../pages/studentCorner/Scholarship'
import CreativeSociety from '../pages/studentCorner/CreativeSociety'
import NCC from '../pages/studentCorner/NCC'
import NSS from '../pages/studentCorner/NSS'
import StudentActivityCenter from '../pages/studentCorner/StudentActivityCenter'
import StudentAchievement from './StudentAchievements'
import Bank from '../pages/studentCorner/Bank'
import Transportation from '../pages/studentCorner/Transportation'
import Hostel from '../pages/studentCorner/Hostel'

const StudentCornerRoutes = [
    <Route exact path='/scholarship' element={<Layout>  <Scholarship /></Layout>} />,
    <Route exact path='/creativeSociety' element={<Layout>  <CreativeSociety /></Layout>} />,
    <Route exact path='/NCC' element={<Layout>  <NCC /></Layout>} />,
    <Route exact path='/NSS' element={<Layout>  <NSS /></Layout>} />,
    <Route exact path='/StudentActivityCenter' element={<Layout>  <StudentActivityCenter /></Layout>} />,
    <Route exact path='/view_student_achievement' element={<Layout>  <StudentAchievement /></Layout>} />,
    <Route exact path='/Bank' element={<Layout>  <Bank /></Layout>} />,
    <Route exact path='/Transportation' element={<Layout>  <Transportation /></Layout>} />,
    <Route exact path='/Hostel' element={<Layout>  <Hostel /></Layout>} />
]

export default StudentCornerRoutes
