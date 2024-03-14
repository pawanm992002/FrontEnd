import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Groups2 from "@mui/icons-material/Groups2";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Description from "@mui/icons-material/Description";
import Badge from "@mui/icons-material/Badge";
import School from "@mui/icons-material/School";
import PersonPinCircle from "@mui/icons-material/PersonPinCircle";

export default function Cards() {
  const cards = [
    {
      icon: <Groups2 sx={{ fontSize: "50px" }} />,
      text: "College ERP",
      link: "https://erp.ecajmer.ac.in/login",
    },
    {
      icon: <AccessAlarmIcon sx={{ fontSize: "50px" }} />,
      text: "Online Fee Submission",
      link: "/Accounts",
    },
    {
      icon: <School sx={{ fontSize: "50px" }} />,
      text: "B.Tech First Year",
      link: "/firstyear",
    },
    {
      icon: <PersonPinCircle sx={{ fontSize: "50px" }} />,
      text: "ECA in Press",
      link: "/media_news",
    },
    {
      icon: <Badge sx={{ fontSize: "50px" }} />,
      text: "Employee Login",
      link: "/facultylogin",
    },
    {
      icon: <Description sx={{ fontSize: "50px" }} />,
      text: "Circulars",
      link: "/Circulars",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "var(--darkBG)",
        padding: "10px 0",
      }}
    >
      <Box sx={{ maxWidth: "var(--maxWidth)" }}>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            justifyContent: "center",
            fontWeight: "bold",
            display: "flex",
            color: "var(--darkText)",
          }}
        >
          ECA Web Portal's
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          {cards.map((val, i) => (
            <Link key={i} to={val.link}>
              <Box
                sx={{
                  bgcolor: "var(--cardBG)",
                  minWidth: "160px",
                  width: "200px",
                  height: "130px",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  padding: "4px 10px",
                  boxShadow: "2px 4px 3px black",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                <Box>{val.icon}</Box>
                <Typography>{val.text}</Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}