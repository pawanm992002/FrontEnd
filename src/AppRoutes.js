import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//----------- Components Specific Stuff
import Layout from "./components/Layout/Layout";

//----------- Pages Specific Stuff
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Department from "./pages/departments/Department";

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
            <Route
              path="about"
              element={
                <Layout>
                  <About />{" "}
                </Layout>
              }
            />
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
