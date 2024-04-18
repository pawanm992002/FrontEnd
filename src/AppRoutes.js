import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

//----------- Components Specific Stuff
import Layout from "./components/Layout/Layout";

//----------- Pages Specific Stuff
import Home from "./pages/Home";
import Error from "./pages/Error";

//---------- Routes Specific Stuff
import AboutPageRoutes from "./PagesRoutes/AboutPageRoutes";
import AdministrationPageRoutes from "./PagesRoutes/AdministrationPageRoutes";
import AcademicsPageRoutes from "./PagesRoutes/AcademicsPageRoutes";
import GrievancePageRoutes from "./PagesRoutes/GrievancePageRoutes";
import StudentCornerRoutes from "./PagesRoutes/StudentCornerRoutes";
import Admin from "./PagesRoutes/Admin";
import DepartmentsRoutes from "./PagesRoutes/DepartmentsRoutes";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <AuthContext>
          <Layout>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />

                {/* ------------------- About pages route ---------------X */}
                {AboutPageRoutes}

                {/* ----------- Administration Pages routes ------------- X */}
                {AdministrationPageRoutes}

                {/* --------------- Academic Pages Routes ----------------- X */}
                {AcademicsPageRoutes}

                {/* ------------ Grievance Pages Routes ------------------ X  */}
                {GrievancePageRoutes}

                {/* ------------ Student Corner Pages Routes ------------------ X  */}
                {StudentCornerRoutes}

                {/* ------------ Departments Pages Routes ------------------ X  */}
                {DepartmentsRoutes}

                {/* ------------ Admin Pages Routes ------------------ X  */}
                <Route path="/admin/*" element={<Admin />} />

                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </Layout>
        </AuthContext>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
