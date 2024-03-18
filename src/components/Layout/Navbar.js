import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  Typography,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MyDropdown from "../utilily/MyDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavbarDropDownListData = [
  ["home", []],
  [
    "about us",
    [
      { name: "history", link: "/History" },
      { name: "vision & mission", link: "/vision" },
      { name: "pos & peos", link: "/peo" },
      { name: "how to reach", link: "/HowtoReach" },
      { name: "sight seeing", link: "/Sightseeing" },
      { name: "contact us", link: "contact" },
    ],
  ],
  [
    "administration",
    [
      { name: "bog" },
      { name: "principal" },
      { name: "registrar" },
      { name: "proctor" },
      { name: "examination section" },
      { name: "account section" },
    ],
  ],
  [
    "academics",
    [
      { name: "academic section" },
      { name: "academic calendar" },
      { name: "ug courses" },
      { name: "pg courses" },
      { name: "research" },
      { name: "first year" },
      { name: "syllabus" },
      { name: "time table and class management" },
    ],
  ],
  [
    "departments",
    [
      { name: "civil engineering", link: "/civil" },
      { name: "electrical engineering", link: "/electrical" },
      { name: "Computer Science and Engineering", link: "/computer" },
    ],
  ],
  ["greivance", [{ name: "sc/st/obc" }]],
  ["student corner", [{ name: "scholarship details" }, { name: "ncc" }]],
  ["cells ", [{ name: "aicte cell" }, { name: "alumni cell" }]],
  ["tpo", []],
];

export default function Navbar () {
  const navView = useMediaQuery("(min-width:1100px)");
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "var(--darkBG)",
        }}
      >
        <Box
          sx={{
            maxWidth: "var(--maxWidth)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="https://www.ecajmer.ac.in/images//white%20logo.png"
            alt="ecajmer_logo"
            srcset=""
            width="50%"
            style={{ margin: "auto", minHeight: "100px" }}
          />
          {navView ? (
            <Stack
              direction="row"
              bgcolor="#5bb55b"
              sx={{ width: "100%", justifyContent: "center" }}
            >
              {/* <Button> Home </Button> */}
              {NavbarDropDownListData?.map((item, i) => (
                <MyDropdown
                  key={i}
                  dropdownName={item[0]}
                  dropdownList={item[1]}
                />
              ))}
            </Stack>
          ) : (
            <Box>
              <AppBar position="static" sx={{ bgcolor: "#5bb55b" }}>
                <Toolbar>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    <Link
                      to="/"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src="/images/mobileLogo.png"
                        style={{ width: "50px", borderRadius: "50%" }}
                      />
                      <Typography color="white">ECA</Typography>
                    </Link>
                  </Typography>
                  <IconButton
                    color="inherit"
                    aria-label="menu"
                    sx={{ position: "relative" }}
                    onClick={() => setShowNav(!showNav)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
                {showNav && (
                  <div
                    style={{ position: "absolute", top: "170px", right: "20px" }}
                  >
                    {NavbarDropDownListData?.map((item, i) => (
                      <Accordion style={{ width: "220px", margin:'0px' }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <Typography>{item[0]}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {item[1].map((inItem, j) => (
                            <Link to={inItem.link} style={{color:'black'}}>
                              <Typography key={j}> {inItem.name} </Typography>
                            </Link>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </div>
                )}
              </AppBar>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

