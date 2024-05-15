import React, { useEffect, useState } from "react";
import CircularCard, { tableSection } from "../cards/CircularCard";
import { Button, Select, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../apis/ApiIntances";
import {
  fetchAchievements,
  fetchCircular,
  fetchGallery,
  fetchLabs,
  fetchMembers,
  fetchNotes,
  fetchTimetable,
} from "../../../api/departments";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const Department = () => {
  const navigate = useNavigate()
  const [DepartmentCirculars, setDepartmentCirculars] = useState([]);
  const [DepartmentAchivements, setDepartmentAchivements] = useState([]);
  const [DepartmentMembers, setDepartmentMembers] = useState([]);
  const [DepartmentTimeTable, setDepartmentTimeTable] = useState([]);
  const [DepartmentGallery, setDepartmentGallery] = useState([]);
  const [DepartmentNotes, setDepartmentNotes] = useState([]);
  const [Labs, setLabs] = useState([]);
  const [departmentValue, setDepartmentValue] = useState("cse");
  const [refresh, setRefresh] = useState();

  const [searchParams,setSearchParams] = useSearchParams();
const section = searchParams.get('section');

  useEffect(() => {
    (async () => {
      const members = await fetchMembers(departmentValue, setRefresh);
      setDepartmentMembers(members);

      const achievements = await fetchAchievements(departmentValue, setRefresh);
      setDepartmentAchivements(achievements);

      const circulars = await fetchCircular(departmentValue, setRefresh);
      setDepartmentCirculars(circulars);

      const timetable = await fetchTimetable(departmentValue, setRefresh);
      setDepartmentTimeTable(timetable);

      const gallery = await fetchGallery(departmentValue, setRefresh);
      setDepartmentGallery(gallery);

      const notes = await fetchNotes(departmentValue, setRefresh);
      setDepartmentNotes(notes);

      const labs = await fetchLabs(departmentValue, setRefresh);
      setLabs(labs);
    })();
  }, [departmentValue, refresh,tableSection.includes(section)]);

  const cardData = [
    {
      title: "Faculty Member",
      length: DepartmentMembers?.length,
      data: DepartmentMembers,
    },
    {
      title: "Achievement",
      length: DepartmentAchivements?.length,
      data: DepartmentAchivements,
    },
    {
      title: "Circular",
      length: DepartmentCirculars?.length,
      data: DepartmentCirculars,
    },
    {
      title: "Time Table",
      length: DepartmentTimeTable?.length,
      data: DepartmentTimeTable,
    },
    {
      title: "Gallery",
      length: DepartmentGallery?.length,
      data: DepartmentGallery,
    },
    {
      title: "Notes",
      length: DepartmentNotes?.length,
      data: DepartmentNotes,
    },
    {
      title: "Labs",
      length: Labs?.length,
      data: Labs,
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "5px",
          marginBottom: "10px",
          alignItems: "center",
        }}
      >
        <h3 style={{ width: "280px" }}>Select Department</h3>
        <Select
          value={departmentValue}
          onChange={(e) => setDepartmentValue(e.target.value)}
        >
          <option value="cse">CSE</option>
          <option value="civil">Civil</option>
          <option value="eee">eee</option>
          <option value="eic">eic</option>
          <option value="ece">ece</option>
          <option value="mechanical">mechanical</option>
          <option value="mca">mca</option>
          <option value="mba">mba</option>
          <option value="physics">physics</option>
          <option value="chemistry">chemistry</option>
          <option value="maths">maths</option>
          <option value="english">english</option>
          <option value="economics">economics</option>
        </Select>
      </div>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {cardData.map((data, i) => {
          return <CircularCard key={i} data={data} link={"departments"} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Department;
