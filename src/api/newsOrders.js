import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const deleteNewsOrderRow = async (_id, val, setRefresh = null) => {
  try {
    const { data } = await AdminApiInstance.delete(`/${val}/${_id}`);
    setRefresh(_id);
    toast.success(data?.message);
  } catch (error) {
    toast.error(error?.response?.data?.error);
  }
};

export const fetchNewsCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/circular/news`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: val.srNo,
        Section: val.section,
        Title: val.title,
        Notice: (
          <Link to={val.notice}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() =>
              deleteNewsOrderRow(val?._id, "news-circular", setRefresh)
            }
          >
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

export const fetchOrderCircular = async (setRefresh = null) => {
    try {
      const { data } = await axios.get(`${url}/circular/orders`);
      const temp = data.result.map((val, i) => {
        return {
          SR_NO: val.srNo,
          Section: val.section,
          Title: val.title,
          Notice: (
            <Link to={val.notice}>
              <Button>View</Button>
            </Link>
          ),
          Delete: (
            <Button
              onClick={() =>
                deleteNewsOrderRow(val?._id, "orders-circular", setRefresh)
              }
            >
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