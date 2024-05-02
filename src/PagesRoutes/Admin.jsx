import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from '../components/admin/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Administration from '../components/admin/layout/Administration';
import Academics from '../components/admin/layout/Academics';
import Department from '../components/admin/layout/Deparment';
import Event from '../components/admin/layout/Event';
import StudentCorner from '../components/admin/layout/StudentCorner';
import Cells from '../components/admin/layout/Cells';
import Placement from '../components/admin/layout/Placement';
import NewsOrders from '../components/admin/layout/NewsOrders';
import EcaPress from '../components/admin/layout/EcaPress';
import WebTeam from '../components/admin/layout/WebTeam';
import Login from '../components/admin/layout/Login';

const Admin = () => {
    return (
        <ChakraProvider>
            <Routes>
                <Route path="/" element={<Sidebar />} />

                        <Route path="/administration" element={<Sidebar content={<Administration />} />} />

                        <Route path="/academics" element={<Sidebar content={<Academics />} />} />
                        <Route path="/departments" element={<Sidebar content={<Department />} />} />
                        <Route path="/event" element={<Sidebar content={<Event />} />} />
                        <Route path="/student-corner" element={<Sidebar content={<StudentCorner />} />} />
                        <Route path="/cells" element={<Sidebar content={<Cells />} />} />
                        <Route path="/placement" element={<Sidebar content={<Placement />} />} />
                        <Route path="/news-orders" element={<Sidebar content={<NewsOrders />} />} />
                        <Route path="/eca-press" element={<Sidebar content={<EcaPress />} />} />
                        <Route path="/web-team" element={<Sidebar content={<WebTeam />} />} />
                        <Route path="/login" element={<Login />} />

                    </Routes>
                </ChakraProvider>
    );
}

export default Admin;