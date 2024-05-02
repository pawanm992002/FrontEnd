import React, { useEffect, useState } from "react";
import CircularCard from "../cards/CircularCard";
import { Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AdminApiInstance } from "../../../apis/ApiIntances";
import toast from "react-hot-toast";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const Academics = () => {
  const [AcademicCalender, setAcademicCalender] = useState([]);
  const [FirstYearCircular, setFirstYearCircular] = useState([]);

  const deleteAcademicRow = async (_id, val) => {
    console.log("......... del", _id, val);
    try {
      const { data } = await AdminApiInstance.delete(
        `/academic/${val}/${_id}`
      );
      toast.success(data?.message);
    } catch (error) {
      console.log(".......... del", error);
      toast.error(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    // for calender
    (async () => {
      try {
        const { data } = await axios.get(`${url}/academics/academic-calender`);
        const temp = data?.result.map((val, i) => {
          return {
            SR_NO: i,
            Session: val.session,
            Semester: val.sem,
            Created_At: val.createdAt,
            Calender: (
              <Link to={val.calender}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
                <Button
                  onClick={() => deleteAcademicRow(val?._id, "calender")}
                >
                  Delete
                </Button>
              ),
          };
        });
        console.log(".......... academics", data);
        setAcademicCalender(temp);
      } catch (error) {
        console.log(".......... academics", error);
      }
    })();

    // for first year circular
    (async () => {
      try {
        const { data } = await axios.get(`${url}/academics/first-year-circular`);
        const temp = data?.result.map((val, i) => {
          return {
            SR_NO: val.srNo,
            Section: val.section,
            Title: val.title,
            Created_At: val.createdAt,
            Notice: (
              <Link to={val.notice}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
                <Button
                  onClick={() => deleteAcademicRow(val?._id, "first-year-circular")}
                >
                  Delete
                </Button>
              ),
          };
        });
        console.log(".......... academics", data);
        setFirstYearCircular(temp);
      } catch (error) {
        console.log(".......... academics", error);
      }
    })();
  }, []);

  const cardData = [
    {
      title: "Academic Calender",
      length: AcademicCalender?.length,
      data: AcademicCalender,
    },
    {
      title: "First Year Circular",
      length: FirstYearCircular?.length,
      data: FirstYearCircular,
    },
  ];

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {cardData.map((data, i) => {
          return <CircularCard key={i} link={"academics"} data={data} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Academics;
