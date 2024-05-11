import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const deleteAdmistrationRow = async (_id, val, setRefresh = null) => {
  try {
    const { data } = await AdminApiInstance.delete(
      `/administration/${val}/${_id}`
    );
    toast.success(data?.message);
    setRefresh(_id);
  } catch (error) {
    console.log(".......... del", error);
    toast.error(error?.response?.data?.error);
  }
};

// for bog mom
export const fetchBogMom = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/administration/bog-mom`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: i,
        Meeting_No: val.meetingNo,
        Date: new Date(val.date).toDateString(),
        Minute: (
          <Link to={val.minute}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() =>
              deleteAdmistrationRow(val?._id, "bog-mom", setRefresh)
            }
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log(".......... circular", error);
  }
};

// for exam circular
export const fetchExamCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(
      `${url}/administration/circular/examination`
    );
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
              deleteAdmistrationRow(
                val?._id,
                "examination-circular",
                setRefresh
              )
            }
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log(".......... circular", error);
  }
};

// for account circular
export const fetchAccountCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/administration/circular/account`);
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
              deleteAdmistrationRow(val?._id, "account-circular", setRefresh)
            }
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log(".......... circular", error);
  }
};

// for proctor circular
export const fetchProctorCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/administration/circular/proctor`);
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
              deleteAdmistrationRow(val?._id, "proctor-circular", setRefresh)
            }
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log(".......... circular", error);
  }
};

// for registrar circular
export const fetchRegistrarCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(
      `${url}/administration/circular/registrar`
    );
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
              deleteAdmistrationRow(val?._id, "registrar-circular", setRefresh)
            }
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log(".......... circular", error);
  }
};
