import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AboutECA() {

  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const UGBranches = [
    {
      text: "Computer Engineering",
      link: "/computer",
    },
    { text: "Electronics & Communication Engineering", link: "/ece" },
    { text: "Electrical Engineering", link: "/electrical" },
    { text: "Electronics & Instrumentation Engineering", link: "/EIC" },
    { text: "Mechanical Engineering", link: "/mechanical" },
    { text: "Civil Engineering", link: "/civil" },
    { text: "Information Technology", link: "/computer" },
    {
      text: "Computer Science & Engineering (Cyber Security)",
      link: "/computer",
    },
  ];
  const PGBranches = [
    {
      text: "M.Tech. (Computer Science and Engineering)",
      link: "",
    },
    { text: "M.Tech. (Information Technology)", link: "" },
    { text: "M.Tech. (Software Engineering)", link: "" },
    { text: "M.Tech. (Digital Communication)", link: "" },
    { text: "M.Tech. (VLSI Design and Embedded Systems)", link: "" },
    { text: "M.Tech. (Power Systems)", link: "" },
    { text: "M.Tech. (Renewable Energy)", link: "" },
    {
      text: "M.Tech. (Production Engineering)",
      link: "",
    },
    {
      text: "Masters in Business Administration (MBA)",
      link: "",
    },
    {
      text: "Master of Computer Applications (MCA)",
      link: "",
    },
  ];
  const PhDResearch = [
    {
      text: "Computer Engineering",
      link: "",
    },
    { text: "Mechanical Engineering", link: "" },
    { text: "Electronics & Communication Engineering", link: "" },
    { text: "Computer Applications", link: "" },
    { text: "Business Administration", link: "" },
  ];
  const EmployeeCorner = [
    {
      text: "SSO Login",
      link: "https://sso.rajasthan.gov.in/signin",
    },
    {
      text: "Paymanager-PRI Login",
      link: "https://pripaymanager.rajasthan.gov.in/",
    },
    {
      text: "National Pension System Login",
      link: "https://cra-nsdl.com/CRA/",
    },
    {
      text: "Faculty Panel Login (BTU Portal)",
      link: "https://btu.ac.in/BTU/faculty/app/login.php",
    },
    {
      text: "BTU Examination System Login",
      link: "https://btu.ucanapply.com/smartexam/public/",
    },
  ];
  return (
    <Box >

      <Typography variant='h5' className='double-line-bottom' sx={{ marginBottom: '20px' }}  >About ECA</Typography>

      <Box sx={{
        maxWidth: "var(--maxWidth)",
        borderRadius: "8px",
        padding: "15px",
        boxShadow: '2px 3px 9px black',
        color:'white'
      }}>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ bgcolor: "var(--main-primary)",color:'white'}}
          >            ECA TOUR     </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "var(--main-primary)" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jSUaKvf4iO0?si=i3K-NqSqscWbHG_E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ bgcolor: "var(--darkBG2)", color: "var(--darkText)" }}
          >
            Undergraduate Courses (B.Tech.)
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "var(--darkBG3)" }}>
            <List
              className="scrollbar-hide"
              sx={{ maxHeight: 250, overflowY: "auto" }}
            >
              {UGBranches.map((val, i) => (
                <ListItem key={i}>
                  <ListItemText
                    primary={
                      <Link style={{ color: "var(--darkText)" }} to={val.link}>
                        {i + 1 + ". " + val.text}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ bgcolor: "var(--darkBG2)", color: "var(--darkText)" }}
          >
            Postgraduate Courses
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "var(--darkBG3)" }}>
            <List
              className="scrollbar-hide"
              sx={{ maxHeight: 250, overflowY: "auto" }}
            >
              {PGBranches.map((val, i) => (
                <ListItem key={i}>
                  <ListItemText
                    primary={
                      <Link style={{ color: "black" }} to={val.link}>
                        {i + 1 + ". " + val.text}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ bgcolor: "var(--darkBG2)", color: "var(--darkText)" }}
          >
            PhD Research Center
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "var(--darkBG3)" }}>
            <List
              className="scrollbar-hide"
              sx={{ maxHeight: 250, overflowY: "auto" }}
            >
              {PhDResearch.map((val, i) => (
                <ListItem key={i}>
                  <ListItemText
                    primary={
                      <Link style={{ color: "var(--darkText)" }} to={val.link}>
                        {i + 1 + ". " + val.text}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ bgcolor: "var(--darkBG2)", color: "var(--darkText)" }}
          >
            Employee Corner
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "var(--darkBG3)" }}>
            <List
              className="scrollbar-hide"
              sx={{ maxHeight: 250, overflowY: "auto" }}
            >
              {EmployeeCorner.map((val, i) => (
                <ListItem key={i}>
                  <ListItemText
                    primary={
                      <Link style={{ color: "var(--darkText)" }} to={val.link}>
                        {i + 1 + ". " + val.text}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
