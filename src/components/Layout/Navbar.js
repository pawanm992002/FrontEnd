import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import MenuIcon from "@mui/icons-material/Menu";
import MyDropdown from "../utilily/MyDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Mail, Phone } from "@mui/icons-material";
import Drawer from "../helper/Drawer";

const NavbarDropDownListData = [
  [
    "about us",
    [
      { name: "history", link: "/about/History" },
      { name: "vision & mission", link: "/about/vision" },
      { name: "pos & peos", link: "/about/peo" },
      { name: "how to reach", link: "/about/HowtoReach" },
      { name: "sight seeing", link: "/about/Sightseeing" },
      { name: "contact us", link: "/contact" },
    ],
  ],
  // [
  //   "administration",
  //   [
  //     { name: "bog", link: "/administration/bog" },
  //     { name: "principal", link: "/administration/principal" },
  //     { name: "registrar", link: "/administration/registrar" },
  //     { name: "proctor", link: "/administration/proctor" },
  //     {
  //       name: "examination section",
  //       link: "/administration/examinationSection",
  //     },
  //     { name: "account section", link: "/administration/accounts" },
  //   ],
  // ],
  [
    "academics",
    [
      { name: "academic section", link: "/academics/section" },
      { name: "academic calendar", link: "/academics/calender" },
      { name: "ug courses", link: "/academics/ugCourses" },
      { name: "pg courses", link: "/academics/pgCourses" },
      { name: "research", link: "/academics/research" },
      { name: "first year", link: "/academics/firstYear" },
      {
        name: "syllabus",
        link: "https://btu.ac.in/home/SYLLABUS-FOR-UNDERGRADUATE-PROGRAMME2020-2129",
      },
      {
        name: "time table and class management",
        link: "/academics/timeTables",
      },
    ],
  ],
  [
    "departments",
    [
      { name: "civil engineering", link: "/civil" },
      { name: "electrical engineering", link: "/electrical" },
      { name: "Computer Science and Engineering", link: "/computer" },
      {
        name: "elctronic instrumentation and control engineering",
        link: "/computer",
      },
      { name: "electronics & communication engineering", link: "/computer" },
      { name: "mechanical engineering", link: "/computer" },
      { name: "computer applications", link: "/computer" },
      { name: "managment studies", link: "/computer" },
    ],
  ],

  // [
  //   "greivance",
  //   [
  //     { name: "sc/st/obc", link: "/grievance/category" },
  //     {
  //       name: "student/Parent/Employee grievance cell",
  //       link: "/grievance/parentsmeets",
  //     },
  //   ],
  // ],

  [
    "student corner",
    [
      { name: "scholarship details", link: "/scholarship" },
      { name: "ncc", link: "/ncc" },
      {
        name: "creative art society",
        link: "/society",
      },
      { name: "nss", link: "/nss" },
      { name: "sports", link: "/sports" },
    ],
  ],
  [
    "cell ",
    [
      { name: "alumni cell", link: "/alumni" },
      // { name: "campus development & planning cell", link: "/campusDev" },
      { name: "central library", link: "/centralLibrary" },
      { name: "eap cell", link: "/eapCell" },
    ],
  ],
];

export default function Navbar() {
  const navView = useMediaQuery("(min-width:1100px)");
  const [showNav, setShowNav] = useState(false);

  const [open, setOpen] = useState(false);
  const toggleDrawerOpen = () => setOpen(true);
  const toggleDrawerClose  = () => setOpen(false);


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "var(--darkBG)",
          width: "100%",
          padding: !navView?"5px 0":"",
          flexDirection: "column",
          bgcolor:!navView?"var(--cardBG)":"",
          color:!navView?"white":""
        }}
      >
        <Box
          sx={{
            width:!navView?"100%":"80%",
            display:'flex',
            padding:!navView?"0 5px":"auto",
            justifyContent:'space-between',
            alignItems:'center',
            margin:'auto'
          }}
         >
          <img
            src= {!navView?"/images/mobileLogo.png":"https://www.ecajmer.ac.in/images//white%20logo.png"}
            alt="ecajmer_logo"
            srcset=""
            width= {!navView?"50px":"400px"}
            height={!navView?"50px":"80px"}
            
            style={{borderRadius:!navView?"50%":""}}
          />
          <Box 
            sx={{
              display:'flex',
              gap:2
            }}
          >
          <Box sx={{display:'flex',alignItems:'center',gap:1}}>
           <Mail fontSize={'small'}/>
          <Typography>info@ecajmer.ac.in</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{display:'flex',alignItems:'center',gap:1}}>
          <Phone/>
          <Typography>645948465168</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <ListIcon fontSize="large" sx={{mr:1}} onClick={toggleDrawerOpen} />
          </Box>
        </Box>
        <Drawer open={open} toggleDrawerOpen={toggleDrawerOpen} toggleDrawerClose={toggleDrawerClose} />
       {navView && <Divider flexItem  sx={{bgcolor:'black'}}/> }
        <Box
          sx={{
            // maxWidth: "var(--maxWidth)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navView && 
            <Stack
              direction="row"
              bgcolor="#white"
              sx={{ width: "80%", justifyContent: "center",margin:'auto',alignItems:'center' }}
            >
            <Box sx={{display:"flex",flex:1,alignItems:'baseline'}}>
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                  margin: "8px 6px",
                  transition: "all 150ms ease",
                  cursor: "pointer",
                  marginLeft:20
                  // padding: "8px 6px",
                }}
              >
                Home
              </Link>
              {NavbarDropDownListData?.map((item, i) => (
                <MyDropdown
                  key={i}
                  dropdownName={item[0]}
                  dropdownList={item[1]}
                  
                />
              ))}
</Box>
<Button sx={{ height:45,textTransform:'uppercase',fontSize:'0.8rem' }}>Admission</Button>
              
            </Stack>
              }
        </Box>
      </Box>
    </>
  );
}
