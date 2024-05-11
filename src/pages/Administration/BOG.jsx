import {
  Box,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { SectionSimulator } from "./Principal";

import Members from "../../components/Members";
import { fetchBogMom } from "../../api/adminstration";
import MyTable from "../../components/utilily/MyTable";

const BOG = () => {
  const [active, setActive] = useState("bogs");
  const [BogSociety, setBogSociety] = useState([]);
  const [MeetingMinutes, setMeetingMinutes] = useState([]);

  useEffect(() => {
    (async () => {
      const meetings = await fetchBogMom();
      setMeetingMinutes(
        meetings?.map((val) => {
          return {
            SR_NO: val.SR_NO,
            Title: val.Meeting_No,
            Date: val.Date,
            Minute: val.Minute,
          };
        })
      );
    })();
  }, [active]);

  const BogMembers = [
    {
      name: "Dr. Subhash Garg",
      designation: "Technical Education Minister [President]",
    },
    {
      name: "Prof. N. C. Shivaprakash",
      designation: "Professor, IISC Banglore [Chairman]",
    },
    {
      name: "Sh. N. L. Meena",
      designation:
        "Secretary, Higher & Technical Education, Govt. of Rajasthan [State Government Nominee-Nominated by State Goverment (Member)]",
    },
    {
      name: "Sh. Akhil Arora",
      designation:
        "Principal Secretary, Finance Department, Govt. of Rajasthan [Finance Department nominee (Member)]",
    },
    {
      name: "Prof. R. P. Dahiya",
      designation: "Ex-director, MNIT, Jaipur [AICTE nominee (Member)]",
    },
    {
      name: "Sh. P. C. Makwana",
      designation: "Director, Board of Technical Education, Rajasthan [Member]",
    },
    { name: "Sh. S.K. Bansal", designation: "Dean ,FOEA [BTU]" },
    {
      name: "Dr. V. C. Jain",
      designation:
        "Associate Professor (Chief Proctor) [Faculty of the College Nominated by Principal based on seniority (Member)]",
    },
    {
      name: "Dr. Rekha Mehra",
      designation: "Principal, Engineering College Ajmer [Member Secretary]",
    },
  ];

  return (
    <>
      <Box className="w-80">
        <section id="BOG">
          <SectionSimulator title={"Board Of Governors(BOG)"} />

          {/* <marquee style={{cursor:'pointer'}} >For Any Inquiries Mail to <a href="mailto:draccounts@ecajmer.ac.in">draccounts@ecajmer.ac.in</a> </marquee> */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Box
              onClick={() => setActive("bogs")}
              style={{
                background: `${
                  active === "bogs" ? "var(--main-primary)" : "white"
                }`,
                color: `${active === "bogs" ? "white" : "black"}`,
                margin: "15px 0",
                cursor: "pointer",
                width: "50%",
              }}
            >
              <Typography variant="h6" textAlign={"center"}>
                BoGs Society
              </Typography>
            </Box>

            <Box
              onClick={() => setActive("meetings")}
              style={{
                background: `${
                  active === "meetings" ? "var(--main-primary)" : "white"
                }`,
                color: `${active === "meetings" ? "white" : "black"}`,
                margin: "15px 0",
                cursor: "pointer",
                width: "50%",
              }}
            >
              <Typography variant="h6" textAlign={"center"}>
                Minutes's Meetings
              </Typography>
            </Box>
          </Box>

          <Box sx={{marginBottom:"10px"}}>
            {active === "bogs" ? (
              <Members members={BogMembers} />
            ) : (
              <MyTable data={MeetingMinutes} />
            )}
          </Box>
        </section>
      </Box>
    </>
  );
};

export default BOG;
