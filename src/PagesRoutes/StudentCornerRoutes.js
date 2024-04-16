import { Route } from 'react-router-dom'


//---------- About pages routes 
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
    <Route exact path='/scholarship' element={<Scholarship />} />,
    <Route exact path='/creativeSociety' element={<CreativeSociety />} />,
    <Route exact path='/NCC' element={<NCC />} />,
    <Route exact path='/NSS' element={<NSS />} />,
    <Route exact path='/StudentActivityCenter' element={<StudentActivityCenter />} />,
    <Route exact path='/view_student_achievement' element={<StudentAchievement />} />,
    <Route exact path='/Bank' element={<Bank />} />,
    <Route exact path='/Transportation' element={<Transportation />} />,
    <Route exact path='/Hostel' element={<Hostel />} />
]

export default StudentCornerRoutes
