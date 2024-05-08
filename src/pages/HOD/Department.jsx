import React, { useEffect, useState } from "react";
import { Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import CircularCard from "../../components/admin/cards/CircularCard";
import { AdminApiInstance } from "../../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

export const ReturnDepartmentValue = ({department,setDepartmentValue})=>{
  
  if (department === 'Civil Engineering') {
    setDepartmentValue('civil')
  }

  else if (department === ' Computer Science and Engineering') {
    setDepartmentValue('cse')
  }

  else if (department === 'Electrical Engineering') {
    setDepartmentValue('eee');
  }

  else if (department === 'Electronic Instrumentation And Control Engineering') {
    setDepartmentValue('eic')

  }

  else if (department === 'Electronics and Communication Engineering') {
    setDepartmentValue('ece')


  }

  else if (department === 'Mechanical Engineering') {
    setDepartmentValue('mechanical')

  }

  else if (department === 'Computer Applications') {
    setDepartmentValue('mca')

  }

  else if (department === 'Department of Management Studies') {
    setDepartmentValue('mba')
  }

  else if (department === 'Physics Department') {

    setDepartmentValue('physics')

  }

  else if (department === 'Chemistry Department') {
    setDepartmentValue('chemistry')

  }

  else if (department === 'Mathematics Department') {
    setDepartmentValue('maths')

  }

  else if (department === 'English Department') {
    setDepartmentValue('english')

  }

  else if (department === 'Economics Department') {
    setDepartmentValue('economics')
  }
}

const Department = () => {
  const [DepartmentCirculars, setDepartmentCirculars] = useState([]);
  const [DepartmentAchivements, setDepartmentAchivements] = useState([]);
  const [DepartmentMembers, setDepartmentMembers] = useState([]);
  const [DepartmentTimeTable, setDepartmentTimeTable] = useState([]);
  const [DepartmentGallery, setDepartmentGallery] = useState([]);
  const [DepartmentNotes, setDepartmentNotes] = useState([]);

  const [departmentValue, setDepartmentValue] = useState("cse");

  const deleteDepartmentRow = async (_id, val) => {
    console.log("......... gal", _id, val);
    try {
      const { data } = await AdminApiInstance.delete(
        `/department/${val}/${_id}`
      );
      toast.success(data?.message);
    } catch (error) {
      console.log(".......... del", error);
      toast.error(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage?.getItem('userData'));
    console.log('user at sidebar ', user);
    let department = user?.department;

    ReturnDepartmentValue(department,setDepartmentValue);

    // for members
    ; (async () => {
      try {
        const { data } = await axios.get(
          `${url}/department-people/${departmentValue}`
        );
        console.log(".......... members", data);
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i,
            Name: val.name,
            Picture: (<img src={`${val.profile}`} style={{ borderRadius: '50%' }} alt={val?.name} />),
            Email: val.email,
            Designation: val.designation,
            Department: val.department,
            Room_NO: val.roomNo,
            Created_At: new Date(val.createdAt).toDateString(),
            Delete: (
              <Button onClick={() => deleteDepartmentRow(val?._id, "notice")}>
                Delete
              </Button>
            ),
          };
        });
        setDepartmentMembers(temp);
      } catch (error) {
      }
    })();

    // for circulars
    ; (async () => {
      try {
        const { data } = await axios.get(
          `${url}/department-notice/${departmentValue}`
        );
        console.log(".......... circular", data);
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: val.srNo,
            Created_At: new Date(val.createdAt).toDateString(),
            Department: val.department,
            Title: val.title,
            Source: (
              <Link to={val.notice}>
                {" "}
                <Button>View</Button>{" "}
              </Link>
            ),
            Delete: (
              <Button onClick={() => deleteDepartmentRow(val?._id, "notice")}>
                Delete
              </Button>
            ),
          };
        });
        setDepartmentCirculars(temp);
      } catch (error) {
        console.log(".......... circular", error);
      }
    })();

    // for achievements
    ; (async () => {
      try {
        const { data } = await axios.get(
          `${url}/department-achievement/${departmentValue}`
        );
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: val._id,
            Created_At: new Date(val.createdAt).toDateString(),
            Department: val.department,
            Achievement: val.achievement,
            Category: val.category,
            Delete: (
              <Button
                onClick={() => deleteDepartmentRow(val?._id, "achievement")}
              >
                Delete
              </Button>
            ),
          };
        });
        console.log(".......... achivement", data);
        setDepartmentAchivements(temp);
      } catch (error) {
        console.log(".......... achivement", error);
      }
    })();

    // for timetable
    ; (async () => {
      try {
        const { data } = await axios.get(
          `${url}/department-timetable/${departmentValue}`
        );
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: val.srNo,
            Created_At: new Date(val.createdAt).toDateString(),
            Department: val.department,
            Title: val.title,
            Source: (
              <Link to={val.timeTable}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button
                onClick={() => deleteDepartmentRow(val?._id, "timetable")}
              >
                Delete
              </Button>
            ),
          };
        });
        console.log(".......... time table", data);
        setDepartmentTimeTable(temp);
      } catch (error) {
        console.log(".......... achivement", error);
      }
    })();

    // for gallery
    ; (async () => {
      try {
        const { data } = await axios.get(
          `${url}/department-gallery/${departmentValue}`
        );
        console.log(".......... gallery", data.result);
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: val._id,
            Created_At: new Date(val.createdAt).toDateString(),
            Department: val.department,
            Source: (
              <Link to={val.photo}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button onClick={() => deleteDepartmentRow(val?._id, "gallery")}>
                Delete
              </Button>
            ),
          };
        });
        setDepartmentGallery(temp);
      } catch (error) {
        console.log(".......... gallery", error);
      }
    })();

    // for notes
    ; (async () => {
      try {
        const { data } = await axios.get(
          `${url}/department-notes/${departmentValue}`
        );
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: val._id,
            Created_At: new Date(val.createdAt).toDateString(),
            Title: val.title,
            Uploaded_By: val.faculty.name,
            Semester: val.sem,
            Source: (
              <Link to={val.file}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button onClick={() => deleteDepartmentRow(val?._id, "notes")}>
                Delete
              </Button>
            ),
          };
        });
        console.log(".......... notes", data);
        setDepartmentNotes(temp);
      } catch (error) {
        console.log(".......... notes", error);
      }
    })();
  }, [departmentValue]);

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
        <h3 style={{ width: "280px" }}>Department: <b> {departmentValue}</b></h3>
        {/* <Select
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
        </Select> */}
      </div>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {cardData.map((data, i) => {
          return <CircularCard dept_readonly={true}  dept_name={departmentValue} typeOfUser="hod" key={i} data={data} link={"departments"} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Department;
