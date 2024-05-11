import React from 'react';
import { Route, Routes } from 'react-router-dom';


//------------ Pages
import Profile from '../pages/HOD/Profile';
import ChangePassword from '../pages/HOD/ChangePassword';
import HODSidebar from '../components/HOD/HODSidebar';
import ECAPress from '../pages/HOD/ECAPress';
import Department from '../pages/HOD/Department';
import StudentCorner from '../pages/HOD/StudentCorner';
import Placement from '../pages/HOD/Placement';

const HODPageRoutes = () => {
    
    
    return (
            <Routes>
                <Route path="/profile" element={<HODSidebar content={<Profile />} />} />
                <Route path="/change-password" element={<HODSidebar content={<ChangePassword />} />} />

                <Route path="/departments" element={<HODSidebar content={<Department />} />} />
                <Route path="/student-corner" element={<HODSidebar content={<StudentCorner />} />} />
                <Route path="/placement" element={<HODSidebar content={<Placement />} />} />
                <Route path="/eca-press" element={<HODSidebar content={<ECAPress />} />} />

            </Routes>
    );
}

export default HODPageRoutes;