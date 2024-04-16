import { Route } from 'react-router-dom'

//---------- Academics pages routes 
import TimeTables from '../pages/Academics/TimeTables'
import FirstYear from '../pages/Academics/FirstYear'
import Research from '../pages/Academics/Research'
import PGCourses from '../pages/Academics/PGCourses'
import UGCourses from '../pages/Academics/UGCourses'
import AcademicSection from '../pages/Academics/AcademicSection'

const AcademicsPageRoutes = [
    <Route exact path='/academics/timeTables' element={<TimeTables />} />,
    <Route exact path='/academics/firstYear' element={<FirstYear />} />,
    <Route exact path='/academics/research' element={<Research />} />,
    <Route exact path='/academics/PGCourses' element={<PGCourses />} />,
    <Route exact path='/academics/UGCourses' element={<UGCourses />} />,
    <Route exact path='/academics/section' element={<AcademicSection />} />,
]

export default AcademicsPageRoutes
