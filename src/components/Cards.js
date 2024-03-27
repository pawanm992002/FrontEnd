import { Link} from "react-router-dom";
import { Box, Typography, Modal, Button } from "@mui/material";
import Groups2 from "@mui/icons-material/Groups2";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Description from "@mui/icons-material/Description";
import Badge from "@mui/icons-material/Badge";
import School from "@mui/icons-material/School";
import PersonPinCircle from "@mui/icons-material/PersonPinCircle";
import { useState } from "react";
import AboutECA from "./Home/AboutECA";


export default function Cards() {
  const cards = [
    {
      icon: <Groups2 sx={{ fontSize: "50px" }} />,
      text: "College ERP",
      link: "https://erp.ecajmer.ac.in/login",
    },
    {
      icon: <School sx={{ fontSize: "50px" }} />,
      text: "About ECA",
      // link: "/firstyear",
    },
    {
      icon: <AccessAlarmIcon sx={{ fontSize: "50px" }} />,
      text: "Alumni",
      // link: "/Accounts",
    },
    {
      icon: <PersonPinCircle sx={{ fontSize: "50px" }} />,
      text: "Placement",
      // link: "/media_news",
    },
    {
      icon: <Badge sx={{ fontSize: "50px" }} />,
      text: "Admission",
      // link: "/facultylogin",
    },
  ];
  const [openAbout, setOpenAbout] = useState(false);
  const handleClick = (comp) => {
    if (comp === "Admission") {
      
    } else if (comp === "About ECA") {
      setOpenAbout(true)
    }
  }
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
          variant="h3"
          sx={{
            justifyContent: "center",
            fontWeight: "bold",
            display: "flex",
            color: "var(--darkText)",
          }}
        >
          Study @ECA
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
          <Modal
            open={openAbout}
            onClose={() => setOpenAbout(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              overflowY: 'auto',
              height: '90%',
              borderRadius: '8px',
              boxShadow: 24,
              maxHeight: '800px',
              display: 'flex',
              flexDirection:'column'
            }} id="modal-modal-description">
              <Button variant="contained" onClick={() => setOpenAbout(false)}>Close</Button>

              <AboutECA />

            </Box>
          </Modal>
          {cards.map((val, i) => (
            <Link to={val?.link} key={i} onClick={() => handleClick(val?.text)}>
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
                  color: "var(--darkBG)",
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