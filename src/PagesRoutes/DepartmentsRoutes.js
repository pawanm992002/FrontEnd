import { Route } from "react-router-dom";
import Department from "../pages/departments/Department";
import Alumni from "../pages/Alumni/Alumni";
import Layout from "../components/Layout/Layout";

const DepartmentsRoutes = [
  <Route
    path="computer"
    element={ <Layout>
        <Department comp="computer" />
    </Layout>}
  />,
  <Route
    path="electrical"
    element={ <Layout>
        <Department comp="electrical" />
    </Layout>}
  />,
  <Route
    path="civil"
    element={ <Layout>
        <Department comp="civil" />
    </Layout>}
  />,
  <Route
    path="EIC"
    element={ <Layout>
        <Department comp="EIC" />
    </Layout>}
  />,
  <Route
    path="ECE"
    element={ <Layout>
        <Department comp="ECE" />
    </Layout>}
  />,
  <Route
    path="mechanical"
    element={ <Layout>
        <Department comp="mechanical" />
    </Layout>}
  />,
  <Route
    path="electrical"
    element={ <Layout>
        <Department comp="electrical" />
    </Layout>}
  />,
  <Route
    path="mca"
    element={ <Layout>
        <Department comp="mca" />
    </Layout>}
  />,
  <Route
    path="mba"
    element={ <Layout>
        <Department comp="mba" />
    </Layout>}
  />,
  <Route
    path="physics"
    element={ <Layout>
        <Department comp="physics" />
    </Layout>}
  />,
  <Route
    path="chemistry"
    element={ <Layout>
        <Department comp="chemistry" />
    </Layout>}
  />,
  <Route
    path="maths"
    element={ <Layout>
        <Department comp="maths" />
    </Layout>}
  />,
  <Route
    path="english"
    element={ <Layout>
        <Department comp="english" />
    </Layout>}
  />,
  <Route
    path="economics"
    element={ <Layout>
        <Department comp="economics" />
    </Layout>}
  />,
  <Route
    path="alumni"
    element={ <Layout>
        <Alumni />
    </Layout>}
  />,
];

export default DepartmentsRoutes;
