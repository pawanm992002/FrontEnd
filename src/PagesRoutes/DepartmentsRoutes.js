import { Route } from "react-router-dom";
import Department from "../pages/departments/Department";
import Alumni from "../pages/Alumni/Alumni";

const DepartmentsRoutes = [
  <Route
    path="computer"
    element={
        <Department comp="computer" />
    }
  />,
  <Route
    path="electrical"
    element={
        <Department comp="electrical" />
    }
  />,
  <Route
    path="civil"
    element={
        <Department comp="civil" />
    }
  />,
  <Route
    path="EIC"
    element={
        <Department comp="EIC" />
    }
  />,
  <Route
    path="ECE"
    element={
        <Department comp="ECE" />
    }
  />,
  <Route
    path="mechanical"
    element={
        <Department comp="mechanical" />
    }
  />,
  <Route
    path="electrical"
    element={
        <Department comp="electrical" />
    }
  />,
  <Route
    path="mca"
    element={
        <Department comp="mca" />
    }
  />,
  <Route
    path="mba"
    element={
        <Department comp="mba" />
    }
  />,
  <Route
    path="physics"
    element={
        <Department comp="physics" />
    }
  />,
  <Route
    path="chemistry"
    element={
        <Department comp="chemistry" />
    }
  />,
  <Route
    path="maths"
    element={
        <Department comp="maths" />
    }
  />,
  <Route
    path="english"
    element={
        <Department comp="english" />
    }
  />,
  <Route
    path="economics"
    element={
        <Department comp="economics" />
    }
  />,
  <Route
    path="alumni"
    element={
        <Alumni />
    }
  />,
];

export default DepartmentsRoutes;
