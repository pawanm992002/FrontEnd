import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Toaster} from 'react-hot-toast'

//----------- Components Specific Stuff
import Layout from "./components/Layout/Layout";

//----------- Pages Specific Stuff
import Home from "./pages/Home";
import Error from "./pages/Error";
import Department from "./pages/departments/Department";

//---------- Routes Specific Stuff
import AboutPageRoutes from "./PagesRoutes/AboutPageRoutes"; 
import AdministrationPageRoutes from "./PagesRoutes/AdministrationPageRoutes";
import AcademicsPageRoutes from "./PagesRoutes/AcademicsPageRoutes";
import GrievancePageRoutes from "./PagesRoutes/GrievancePageRoutes";
import StudentCornerRoutes from "./PagesRoutes/StudentCornerRoutes";
import Alumni from "./pages/Alumni/Alumni";
import Admin from "./PagesRoutes/Admin";


const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
           
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


            <Route
              path="computer"
              element={
                <Layout>
                  <Department comp="computer" />
                </Layout>
              }
            />
            <Route
              path="electrical"
              element={
                <Layout>
                  <Department comp="electrical" />
                </Layout>
              }
            />
            <Route
              path="civil"
              element={
                <Layout>
                  <Department comp="civil" />
                </Layout>
              }
            />
            <Route
              path="EIC"
              element={
                <Layout>
                  <Department comp="EIC" />
                </Layout>
              }
            />
            <Route
              path="ECE"
              element={
                <Layout>
                  <Department comp="ECE" />
                </Layout>
              }
            />
            <Route
              path="mechanical"
              element={
                <Layout>
                  <Department comp="mechanical" />
                </Layout>
              }
            />
            <Route
              path="electrical"
              element={
                <Layout>
                  <Department comp="electrical" />
                </Layout>
              }
            />
            <Route
              path="mca"
              element={
                <Layout>
                  <Department comp="mca" />
                </Layout>
              }
            />
            <Route
              path="mba"
              element={
                <Layout>
                  <Department comp="mba" />
                </Layout>
              }
            />
            <Route
              path="physics"
              element={
                <Layout>
                  <Department comp="physics" />
                </Layout>
              }
            />
            <Route
              path="chemistry"
              element={
                <Layout>
                  <Department comp="chemistry" />
                </Layout>
              }
            />
            <Route
              path="maths"
              element={
                <Layout>
                  <Department comp="maths" />
                </Layout>
              }
              
            />
            <Route
              path="english"
              element={
                <Layout>
                  <Department comp="english" />
                </Layout>
              }
            />
            <Route
              path="economics"
              element={
                <Layout>
                  <Department comp="economics" />
                </Layout>
              }
            />
            <Route
              path="alumni"
              element={
                <Layout>
                  <Alumni />
                </Layout>
              }
            />
             <Route  path='/admin/*' element={<Admin />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

<Toaster/>
     

      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
