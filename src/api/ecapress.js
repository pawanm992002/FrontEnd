import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const deleteNewCuttingRow = async (_id, setRefresh) => {
  try {
    const { data } = await AdminApiInstance.delete(`/news/${_id}`);
    toast.success(data?.message);
    setRefresh(_id)
  } catch (error) {
    toast.error(error?.response?.data?.error);
  }
};

// for News cutting
export const fetchNewsCutting = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/eca-press/news`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: i + 1,
        title:val?.title,
        Image: (
          <Link to={val.image}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button onClick={() => deleteNewCuttingRow(val?._id, setRefresh)}>Delete</Button>
        ),
      };
    });
    return temp
  } catch (error) {
    toast.error(error?.response?.data?.error);

  }
};
