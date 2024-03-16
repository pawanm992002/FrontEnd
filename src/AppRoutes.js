import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//----------- Components Specific Stuff
import Layout from "./components/Layout/Layout";

//----------- Pages Specific Stuff
import Home from "./pages/Home";
import Error from "./pages/Error";
import Department from "./pages/departments/Department";
import AboutPageRoutes from "./pages/About/AboutPageRoutes";

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
                  <Home />{" "}
                </Layout>
              }
            />
           
               {/* ------------------- About pages route ---------------X */}
               {AboutPageRoutes}

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
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

     

      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
