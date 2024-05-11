import React from 'react';
import { Route, Routes } from 'react-router-dom';

//------------- Pages
import Sidebar from '../components/Faculty/FacultySideBar';

import Login from '../pages/Faculty/Login';
import Profile from '../pages/Faculty/Profile';
import Notes from '../pages/Faculty/Notes';
import ForgetPassword from '../pages/Faculty/ForgetPassword';
import ChangePassword from '../pages/Faculty/ChangePassword';
import ResetPassword from '../pages/Faculty/ResetPassword';


const Faculty = () => {
    return (
        <Routes>
            <Route path="/profile" element={<Sidebar content={<Profile />} />} />
            <Route path="/notes" element={<Sidebar content={<Notes />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/change-password" element={<Sidebar content={<ChangePassword />} />} />

        </Routes>
    );
}

export default Faculty;