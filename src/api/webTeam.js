import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const deleteWebTeamRow = async (_id, setRefresh) => {
    try {
      const { data } = await AdminApiInstance.delete(`/web-team/${_id}`);
      toast.success(data?.message);
      setRefresh(_id)
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

      export const fetchTeamMember = async (setRefresh=null) => {
        try {
          const { data } = await axios.get(`${url}/web-team`);
          const temp = data.result.map((val, i) => {
            return {
              SR_NO: i+1,
              Name: val.name,
              Picture: (<img src={`${val.image}`} style={{borderRadius: '50%'}} />),
              Branch: val.branch,
              Duration: val.duration,
              Delete: (
                <Button onClick={() => deleteWebTeamRow(val?._id, setRefresh)}>
                  Delete
                </Button>
              ),
            };
          });
          return temp
        } catch (error) {
          toast.error(error?.response?.data?.error);

        }
      }