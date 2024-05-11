import { Route } from 'react-router-dom'

//---------- Academics pages routes 
import TimeTables from '../pages/Academics/TimeTables'
import FirstYear from '../pages/Academics/FirstYear'
import Research from '../pages/Academics/Research'
import PGCourses from '../pages/Academics/PGCourses'
import UGCourses from '../pages/Academics/UGCourses'
import AcademicSection from '../pages/Academics/AcademicSection'
import AcademicCalender from '../pages/Academics/AcademicCalender'
import Layout from '../components/Layout/Layout'

const AcademicsPageRoutes = [
    <Route exact path='/academics/timeTables' element={<Layout><TimeTables /></Layout>} />,
    <Route exact path='/academics/firstYear' element={<Layout><FirstYear /></Layout>} />,
    <Route exact path='/academics/research' element={<Layout><Research /></Layout>} />,
    <Route exact path='/academics/PGCourses' element={<Layout><PGCourses /></Layout>} />,
    <Route exact path='/academics/UGCourses' element={<Layout><UGCourses /></Layout>} />,
    <Route exact path='/academics/section' element={<Layout><AcademicSection /></Layout>} />,
    <Route exact path='/academics/AcademicCalender' element={<Layout><AcademicCalender /></Layout>} />,
]

export default AcademicsPageRoutes
