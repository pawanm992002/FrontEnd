import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

export const deleteCellsRow = async (_id, val, setRefresh=null) => {
  try {
    const { data } = await AdminApiInstance.delete(`/cells/${val}/${_id}`);
    toast.success(data?.message);
    setRefresh(Math.random())
  } catch (error) {
    toast.error(error?.response?.data?.error);
  }
};

export const fetchAlumni = async (setRefresh=null) => {
  try {
    const { data } = await axios.get(`${url}/cells/alumni`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: val.srNo,
        Section: val.section,
        Title: val.title,
        Created_At: new Date(val.createdAt).toDateString(),
        Notice: (
          <Link to={val.notice}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button onClick={() => deleteCellsRow(val?._id, "alumni-circular", setRefresh)}>
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    toast.error(error?.response?.data?.error);

  }
};
