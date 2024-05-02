import React, { useState, useEffect } from "react";
import CircularCard from "../cards/CircularCard";
import { Button, SimpleGrid } from "@chakra-ui/react";
import MyContext from "../../../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { AdminApiInstance } from "../../../apis/ApiIntances";
import toast from "react-hot-toast";
import axios from "axios";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const Administration = () => {
  const ctx = MyContext();
  const navigate = useNavigate();

  const [BogMom, setBogMom] = useState([]);
  const [ExamCircular, setExamCircular] = useState([]);
  const [AccountCircular, setAccountCircular] = useState([]);
  const [ProctorCircular, setProctorCircular] = useState([]);
  const [RegistrarCircular, setRegistrarCircular] = useState([]);

  const deleteAdmistrationRow = async (_id, val) => {
    console.log("......... gal", _id, val);
    try {
      const { data } = await AdminApiInstance.delete(
        `/administration/${val}/${_id}`
      );
      toast.success(data?.message);
    } catch (error) {
      console.log(".......... del", error);
      toast.error(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    // for bog mom
    (async () => {
      try {
        const { data } = await axios.get(`${url}/administration/bog-mom`);
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i,
            Meeting_No: val.meetingNo,
            Date: new Date(val.date).toDateString(),
            Created_At: new Date(val.createdAt).toDateString(),
            Minute: (
              <Link to={val.minute}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button onClick={() => deleteAdmistrationRow(val?._id, "bog-mom")}>
                Delete
              </Button>
            ),
          };
        });
        setBogMom(temp);
      } catch (error) {
        console.log(".......... circular", error);
      }
    })();

    // for exam circular
    (async () => {
      try {
        const { data } = await axios.get(
          `${url}/administration/circular/examination`
        );
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
              <Button onClick={() => deleteAdmistrationRow(val?._id, "examination-circular")}>
                Delete
              </Button>
            ),
          };
        });
        setExamCircular(temp);
      } catch (error) {
        console.log(".......... circular", error);
      }
    })();

    // for account circular
    (async () => {
      try {
        const { data } = await axios.get(
          `${url}/administration/circular/account`
        );
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
              <Button onClick={() => deleteAdmistrationRow(val?._id, "account-circular")}>
                Delete
              </Button>
            ),
          };
        });
        setAccountCircular(temp);
      } catch (error) {
        //   console.log(".......... circular", error);
      }
    })();

    // for proctor circular
    (async () => {
      try {
        const { data } = await axios.get(
          `${url}/administration/circular/proctor`
        );
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
              <Button onClick={() => deleteAdmistrationRow(val?._id, "proctor-circular")}>
                Delete
              </Button>
            ),
          };
        });
        setProctorCircular(temp);
      } catch (error) {
        //   console.log(".......... circular", error);
      }
    })();

    // for registrar circular
    (async () => {
      try {
        const { data } = await axios.get(
          `${url}/administration/circular/registrar`
        );
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
              <Button onClick={() => deleteAdmistrationRow(val?._id, "registrar-circular")}>
                Delete
              </Button>
            ),
          };
        });
        setRegistrarCircular(temp);
      } catch (error) {
        //   console.log(".......... circular", error);
      }
    })();

  }, []);

  useEffect(() => {
    if (!ctx.isLoggedIn) {
      navigate("/");
    }
  }, []);

  const cardData = [
    {
      title: "Bog Mom",
      length: BogMom?.length,
      data: BogMom,
    },
    {
      title: "Examination Circular",
      length: ExamCircular?.length,
      data: ExamCircular,
    },
    {
      title: "Account Section Circular",
      length: AccountCircular?.length,
      data: AccountCircular,
    },
    {
      title: "Proctor Circular",
      length: ProctorCircular?.length,
      data: ProctorCircular,
    },
    {
      title: "Registrar Circular",
      length: RegistrarCircular?.length,
      data: RegistrarCircular,
    },
  ];

  return (
    <>
      {console.log("pppppppppppp", ctx)}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {cardData.map((data, i) => {
          return <CircularCard link={"administration"} key={i} data={data} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Administration;
