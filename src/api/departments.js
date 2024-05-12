import axios from "axios";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../components/admin/apis/ApiIntances";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const url = `${process.env.REACT_APP_BACKEND_URL}`;

const deleteDepartmentRow = async (_id, val, setRefresh=null) => {
  try {
    const { data } = await AdminApiInstance.delete(`/department/${val}/${_id}`);
    toast.success(data?.message);
    setRefresh(Math.random())
  } catch (error) {
    console.log(".......... del", error);
    toast.error(error?.response?.data?.error);
  }
};

// for members
export const fetchMembers = async (departmentValue, setRefresh=null) => {
  try {
    const { data } = await axios.get(
      `${url}/department-people/${departmentValue}`
    );
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: i,
        Name: val.name,
        Picture: <img src={`${val.profile}`} style={{ borderRadius: "50%" }} />,
        Email: val.email,
        Designation: val.designation,
        Department: val.department,
        Room_NO: val.roomNo,
        Delete: (
          <Button
            key={val?._id}
            onClick={() => deleteDepartmentRow(val?._id, "notice", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    // setDepartmentMembers(temp);
    return temp;
  } catch (error) {
    console.log("........ error ........", error);
  }
};

// for circulars
export const fetchCircular = async (departmentValue, setRefresh=null) => {
  try {
    const { data } = await axios.get(
      `${url}/department-notice/${departmentValue}`
    );
    const temp = data?.result?.map((val, i) => {
      return {
        SR_NO: val.srNo,
        Department: val.department,
        Title: val.title,
        Source: (
          <Link key={val?._id} to={val.notice}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            key={val?._id}
            onClick={() => deleteDepartmentRow(val?._id, "notice", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log("........ error ........", error);
  }
};

// for achievements
export const fetchAchievements = async (departmentValue, setRefresh=null) => {
  try {
    console.log('url => ',url)
    const { data } = await axios.get(
      `${url}/department-achievement/${departmentValue}`
    );
    const temp = data?.result?.map((val, i) => {
      return {
        SR_NO: val._id,
        Department: val.department,
        Achievement: val.achievement,
        Category: val.category,
        Delete: (
          <Button
            key={val?._id}
            onClick={() => deleteDepartmentRow(val?._id, "achievement", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log("........ error ........", error);
  }
};

// for timetable
export const fetchTimetable = async (departmentValue, setRefresh=null) => {
  try {
    const { data } = await axios.get(
      `${url}/department-timetable/${departmentValue}`
    );
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: val.srNo,
        Department: val.department,
        Title: val.title,
        Source: (
          <Link key={val?._id} to={val.timeTable}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            key={val?._id}
            onClick={() => deleteDepartmentRow(val?._id, "timetable", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log("........ error ........", error);
  }
};

// for gallery
export const fetchGallery = async (departmentValue, setRefresh=null) => {
  try {
    const { data } = await axios.get(
      `${url}/department-gallery/${departmentValue}`
    );
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: val._id,
        Department: val.department,
        Source: (
          <Link key={val?._id} to={val.photo}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            key={val?._id}
            onClick={() => deleteDepartmentRow(val?._id, "gallery", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log("........ error ........", error);
  }
};

// for notes
export const fetchNotes = async (departmentValue, setRefresh=null) => {
  try {
    const { data } = await axios.get(
      `${url}/department-notes/${departmentValue}`
    );
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: val._id,
        Title: val.title,
        Uploaded_By: val.faculty.name,
        Semester: val.sem,
        Source: (
          <Link key={val?._id} to={val.file}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            key={val?._id}
            onClick={() => deleteDepartmentRow(val?._id, "notes", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log("........ error ........", error);
  }
};
