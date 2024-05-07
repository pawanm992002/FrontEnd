import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const deleteAcademicRow = async (_id, val, setRefresh=null) => {
  try {
    const { data } = await AdminApiInstance.delete(`/academic/${val}/${_id}`);
    toast.success(data?.message);
    setRefresh(_id)
  } catch (error) {
    console.log(".......... del", error);
    toast.error(error?.response?.data?.error);
  }
};

// for calender
export const fetchCalender = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/academics/academic-calender`);
    const temp = data?.result.map((val, i) => {
      return {
        SR_NO: i,
        Session: val.session,
        Semester: val.sem,
        Created_At: val.createdAt,
        Calender: (
          <Link key={val._id} to={val.calender}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button key={val._id} onClick={() => deleteAcademicRow(val?._id, "calender", setRefresh)}>
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log(".......... academics", error);
  }
};

// for first year circular
export const fetctFirstYearCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/academics/first-year-circular`);
    const temp = data?.result.map((val, i) => {
      return {
        SR_NO: val.srNo,
        Section: val.section,
        Title: val.title,
        Created_At: val.createdAt,
        Notice: (
          <Link key={val._id} to={val.notice}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button key={val._id}
            onClick={() => deleteAcademicRow(val?._id, "first-year-circular", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp
  } catch (error) {
    console.log(".......... academics", error);
  }
};
