import {
  AddAPhoto,
  AppRegistration,
  BuildTwoTone,
  DashboardSharp,
  IceSkating,
  RequestQuote,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MyTable from "../../components/utilily/MyTable";
import ModalComponent from "../../components/Modal";
import { fetchAlumni } from "../../api/cells";

export default function Alumni() {
  const [ActiveBox, SetActiveBox] = useState(1);
  const [Circulars, setCirculars] = useState([]);

  useEffect(() => {
    (async () => {
      if (ActiveBox === 2) {
        const circulars = await fetchAlumni();
        setCirculars(
          circulars?.map((val) => {
            return {
              SR_NO: val.SR_NO,
              Title: val.Title,
              Section: val.Section,
              Notice: val.Notice,
            };
          })
        );
      }
    })();
  }, [ActiveBox]);
  const [Toggle, SetToggle] = useState(false);
  const ClickHandeller = (data) => {
    SetActiveBox(data);
    console.log(ActiveBox);
  };

  const rows = [
    { Name: "Sh Vinod Kumar Verma", Designation: "Coordinator" },
    { Name: "Dr. Vinesh Jain", Designation: "Member" },
    { Name: "Sh. Dilip Sisodia", Designation: "Member" },
    { Name: "Dr. Manish Badlani", Designation: "Member" },
    { Name: "Sh. Praveen Kumar Gupta", Designation: "Member" },
  ];

  return (
    <>
      <Box sx={{ width: "80%", margin: "auto", position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            gap: "5px",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.4rem",
              color: ActiveBox == 1 ? "white" : "black",
              bgcolor: ActiveBox == 1 ? "#213153EB" : "transparent",
              flex: 1,
              borderRadius: 1,
              opacity: "0.9",
            }}
            onClick={() => {
              ClickHandeller(1);
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4rem",
              color: ActiveBox == 2 ? "white" : "black",
              bgcolor: ActiveBox == 2 ? "#213153EB" : "transparent",
              flex: 1,
              borderRadius: 1,
              opacity: "0.9",
            }}
            onClick={() => {
              ClickHandeller(2);
            }}
          >
            Members
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4rem",
              color: ActiveBox == 3 ? "white" : "black",
              bgcolor: ActiveBox == 3 ? "#213153EB" : "transparent",
              flex: 1,
              borderRadius: 1,
              opacity: "0.9",
            }}
            onClick={() => {
              ClickHandeller(3);
            }}
          >
            Circulars
          </Typography>
        </Box>
        {ActiveBox == 1 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              m: "10px 0",
            }}
          >
            <Typography
              sx={{ lineBreak: "anywhere", lineHeight: 1.8, fontSize: "17px" }}
            >
              Engineering College Ajmer is Engineering college of Rajasthan in
              the Northern India established in 1997. More than 2000 students
              are studying in the institute in B.Tech., M.Tech., MBA, MCA and
              PhD courses at present. Institute's alumni are working in various
              positions in Govt. organisations, Private organisations, MNCs, and
              also self employed (Entrepreneurs).
            </Typography>
            <Typography
              sx={{ lineBreak: "anywhere", lineHeight: 1.8, fontSize: "17px" }}
            >
              More than 10000 alumnus have completed education from the
              institute. Institute's alumni are working in various positions in
              Govt. organisations, Private organisations, MNCs, and also self
              employed (Entrepreneurs).
            </Typography>
            <Typography
              sx={{ lineBreak: "anywhere", lineHeight: 1.8, fontSize: "17px" }}
            >
              Alumni association is formed in the institute. The main aim of the
              association is to maintain the link between Institute and Alumni
              and share details of mutual growth, achievement and advancement in
              various fields.
            </Typography>
            <Typography
              sx={{ lineBreak: "anywhere", lineHeight: 1.8, fontSize: "17px" }}
            >
              Alumni may contact to the Alumni Association on mail id:
              <b
                style={{
                  color: "#213153EB",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                {" "}
                alumni@ecajmer.ac.in{" "}
              </b>
            </Typography>
          </Box>
        ) : ActiveBox == 2 ? (
          <Box sx={{ m: "10px 0" }}>
            {" "}
            <MyTable data={rows} />{" "}
          </Box>
        ) : (
          <Box sx={{ m: "10px 0" }}>
            <MyTable data={Circulars} />
          </Box>
        )}
        <Box
          onClick={() => {
            SetToggle(!Toggle);
          }}
          sx={{
            position: "absolute",
            bottom: 10,
            right: -130,
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            bgcolor: "#213153EB",
            color: "white",
            zIndex: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip>
            <Settings />
          </Tooltip>
        </Box>
        {Toggle && (
          <Box
            position={"absolute"}
            color={"#213153EB"}
            width={"50px"}
            bottom={70}
            right={-130}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={3}
            justifyContent={"center"}
          >
            <Box>
              <Tooltip title="Distinguished Alumni" placement="right">
                <IceSkating />
              </Tooltip>{" "}
            </Box>
            <Box>
              <Tooltip title="Registration" placement="right">
                {" "}
                <AppRegistration />
              </Tooltip>
            </Box>
            <Box>
              {" "}
              <Tooltip title="Appeal To Alumni" placement="right">
                {" "}
                <RequestQuote />
              </Tooltip>{" "}
            </Box>
          </Box>
        )}
      </Box>
      <ModalComponent />
      <ModalComponent />
      <ModalComponent />
    </>
  );
}
