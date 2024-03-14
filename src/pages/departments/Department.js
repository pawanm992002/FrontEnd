import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import People from "../../components/Department/People";
import { useMediaQuery } from "@mui/material";
import Lab from "../../components/Department/Lab";
import DepTables from "../../components/Department/DepTables";
import About from "../../components/Department/About";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Department({ comp }) {
  console.log(comp);
  const [value, setValue] = useState(0);
  const Mobile = useMediaQuery("(min-width:400px)");

  // koisa bhi department hoga uska data fetch yaha krenge pora
  const PeopleData = {
    HOD: {
      id: 1,
      img: "./images/principal.jpg",
      name: "Dr. Jyoti Gajrani ( Aicte Visvesvaraya Best Teacher Award 2021)",
      post: "Head of Department",
      email: "jyotigajrani@ecajmer.ac.in",
      room: "Room: G-40",
    },
    Professors: [
      {
        id: 2,
        img: "./images/principal.jpg",
        name: "Prakash Meena",
        post: "Assistant Professor",
        email: "prakashmeena@ecajmer.ac.in",
        room: "Room: G-42",
      },
      {
        id: 3,
        img: "./images/principal.jpg",
        name: "Deepak Gupta",
        post: "Assistant Professor",
        email: "deepakgupta@ecajmer.ac.in",
        room: "Room: F 31",
      },
    ],
    Assistant_Professors: [
      {
        id: 4,
        img: "./images/principal.jpg",
        name: "Deepak Gupta",
        post: "Assistant Professor",
        email: "deepakgupta@ecajmer.ac.in",
        room: "Room: F 31",
      },
      {
        id: 5,
        img: "./images/principal.jpg",
        name: "Dr. Vinesh Kumar Jain",
        post: "Assistant Professor",
        email: "vineshjain@ecajmer.ac.in",
        room: "Room: F-7",
      },
    ],
  };

  const labs = [
    {
      id: "1",
      img: "./images/principal.jpg",
      name: "Aryabhata",
      room: "G-31",
      Lab_Incharge: "Mr. Satish Kumar Ray and Mr. Pawan Kumar",
      Lab_Technician: "Sh. Deepankar Das Gupta",
      Lab_Attendent: "Sh. Charan Singh Panwar",
    },
    {
      id: "2",
      img: "./images/principal.jpg",
      name: "C. V. Raman",
      room: "G-23",
      Lab_Incharge: "Ms. Shalini Yadav",
      Lab_Technician: "Sh. Indersain",
      Lab_Attendent: "Sh. Charan Singh Panwar",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "var(--darkBG)",
        padding: "10px 0",
      }}
    >
      <Box
        sx={{
          maxWidth: "var(--maxWidth)",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            alignItems: !Mobile && "center",
            flexDirection: !Mobile ? "column" : "row",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: Mobile && 2,
              borderBottom: !Mobile && 2,
              borderColor: "divider",
              width: !Mobile ? "100% " : "180px",
              minWidth: Mobile && "180px",
            }}
          >
            <Tab label="ABOUT" {...a11yProps(0)} />
            <Tab label="PEOPLE" {...a11yProps(1)} />
            <Tab label="LABS" {...a11yProps(2)} />
            <Tab label="ANNOUNCEMENT" {...a11yProps(3)} />
            <Tab label="ACHIEVEMENTS" {...a11yProps(4)} />
            <Tab label="CIRCULARS" {...a11yProps(5)} />
            <Tab label="TIMME-TABLES" {...a11yProps(6)} />
            <Tab label="NBA" {...a11yProps(7)} />
            <Tab label="GALLERY" {...a11yProps(8)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <About comp={comp} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Head Of Department
              </Typography>
              <People people={PeopleData.HOD} />
              <Typography variant="h5" fontWeight="bold">
                Professors
              </Typography>
              {PeopleData?.Professors?.length > 0 &&
                PeopleData.Professors.map((people) => (
                  <People people={people} />
                ))}
              <Typography variant="h5" fontWeight="bold">
                Faculty - Assistant Professors
              </Typography>
              {PeopleData?.Assistant_Professors?.length > 0 &&
                PeopleData.Assistant_Professors.map((people) => (
                  <People people={people} />
                ))}
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {labs?.length > 0 &&
                labs.map((lab) => <Lab key={lab?.id} lab={lab} />)}
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
            {/* <DepTables /> */}
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
