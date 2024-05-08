import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const deleteStudentCornerRow = async (_id, val, setRefresh = null) => {
  console.log("......... gal", _id, val);
  try {
    const { data } = await AdminApiInstance.delete(
      `/student-corner/${val}/${_id}`
    );
    toast.success(data?.message);
    setRefresh(_id)
  } catch (error) {
    console.log(".......... del", error);
    toast.error(error?.response?.data?.error);
  }
};

// for creative circular
export const fetchCreativeCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/student-corner/circular/creative`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: val.srNo,
        Title: val.title,
        Section: val.section,
        Created_At: new Date(val.createdAt).toDateString(),
        Notice: (
          <Link to={val.notice}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() =>
              deleteStudentCornerRow(val?._id, "creative-art-circular", setRefresh)
            }
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {}
};

// for creative gallery
export const fetchCreativeGallery = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/student-corner/gallery/creative`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: i,
        Created_At: new Date(val.createdAt).toDateString(),
        Image: (
          <Link to={val.image}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() =>
              deleteStudentCornerRow(val?._id, "creative-art-gallery", setRefresh)
            }
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log(".......... testttt", error);
  }
};

// for ncc circular
export const fetchNccCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/student-corner/circular/ncc`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: val.srNo,
        Title: val.title,
        Section: val.section,
        Created_At: new Date(val.createdAt).toDateString(),
        Notice: (
          <Link to={val.notice}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() => deleteStudentCornerRow(val?._id, "ncc-circular", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {}
};

// for ncc gallery
export const fetchNccGallery = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/student-corner/gallery/ncc`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: i,
        Created_At: new Date(val.createdAt).toDateString(),
        Image: (
          <Link to={val.image}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() => deleteStudentCornerRow(val?._id, "ncc-gallery", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log(".......... testttt", error);
  }
};

// for hostel circular
export const fetchHostelCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/student-corner/circular/hostel`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: val.srNo,
        Title: val.title,
        Section: val.section,
        Created_At: new Date(val.createdAt).toDateString(),
        Notice: (
          <Link to={val.notice}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() => deleteStudentCornerRow(val?._id, "hostel-circular", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {}
};

// for hostel gallery
export const fetchHostelGallery = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(`${url}/student-corner/gallery/hostel`);
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: i,
        Created_At: new Date(val.createdAt).toDateString(),
        Image: (
          <Link to={val.image}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() => deleteStudentCornerRow(val?._id, "hostel-gallery", setRefresh)}
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {
    console.log(".......... testttt", error);
  }
};

// for transportation circular
export const fetchTransportationCircular = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(
      `${url}/student-corner/circular/transport`
    );
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: val.srNo,
        Title: val.title,
        Section: val.section,
        Created_At: new Date(val.createdAt).toDateString(),
        Notice: (
          <Link to={val.notice}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() =>
              deleteStudentCornerRow(val?._id, "transportation-circulars", setRefresh)
            }
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {}
};

// for student acheivement
export const fetchStudentAchievement = async (setRefresh = null) => {
  try {
    const { data } = await axios.get(
      `${url}/student-corner/student-achievement`
    );
    const temp = data.result.map((val, i) => {
      return {
        SR_NO: i,
        Title: val.title,
        Name: val.name,
        Description: val.description,
        Created_At: new Date(val.createdAt).toDateString(),
        Image: (
          <Link to={val.image}>
            <Button>View</Button>
          </Link>
        ),
        Delete: (
          <Button
            onClick={() =>
              deleteStudentCornerRow(val?._id, "student-achievement", setRefresh)
            }
          >
            Delete
          </Button>
        ),
      };
    });
    return temp;
  } catch (error) {}
};
