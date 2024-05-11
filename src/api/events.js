import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const deleteEventRow = async (_id, setRefresh) => {
  try {
    const { data } = await AdminApiInstance.delete(`/event/${_id}`);
    toast.success(data?.message);
    setRefresh(_id)
  } catch (error) {
    toast.error(error?.response?.data?.error);
  }
};

// for events
export const fetchEvents = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/event`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: i,
        Title: val?.title,
        Description: val?.description,
        Date: new Date(val.date).toDateString(),
        Source: (
          <Link key={val._id} to={val.image}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button key={val._id} onClick={() => deleteEventRow(val?._id, setRefresh)}>Delete</Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    toast.error(error?.response?.data?.error);

  }
};
