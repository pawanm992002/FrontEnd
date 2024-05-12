import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import People from "../../components/Department/People";
import { useMediaQuery } from "@mui/material";
import Lab from "../../components/Department/Lab";
import MyTable from "../../components/utilily/MyTable";
import About from "../../components/Department/About";
import { Link } from "react-router-dom";
import GallerySection from "../../components/Home/GallerySection";
import {
  fetchAchievements,
  fetchCircular,
  fetchGallery,
  fetchMembers,
  fetchTimetable,
} from "../../api/departments";
// import {dept,Student} from '../../Dummydata/dept';
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
  const [hod, setHod] = useState([]);
  const [professor, setProfessor] = useState([]);
  const [assProfessor, setAssProfessor] = useState([]);
  const [departmentAchivement, setDepartmentAchivement] = useState([]);
  const [studentAchivement, setStudentAchivement] = useState([]);
  const [circulars, setCirculars] = useState([]);
  const [timeTable, setTimeTable] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [value, setValue] = useState(0);
  const Mobile = useMediaQuery("(min-width:400px)");
  console.log(".......... comp", comp);
  const medium = useMediaQuery("(max-width:1100px)");


  const styles = {
    myCustomList: {
        '&::-webkit-scrollbar': {
            width: '2px',
            // backgroundColor: '#5f6f9c',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
        },
        overflowY:'auto',
        height:'600px',
    },
};


  useEffect(() => {
    (async () => {
      const members = await fetchMembers(comp);
      setHod(
        members?.filter((val) => {
          return val.Designation === "Head of Department";
        })
      );
      setProfessor(
        members?.filter((val) => {
          return val.Designation === "Professor";
        })
      );
      setAssProfessor(
        members?.filter((val) => {
          return val.Designation === "Assistant Professor";
        })
      );

      const achievements = await fetchAchievements(comp);
      setDepartmentAchivement(
        //  dept  
        achievements?.filter((val) => {
          return val?.Category === "Department";
        })
      );
      setStudentAchivement(
        // Student
        achievements?.filter((val) => {
          return val?.Category === "Students";
        })
      );

      const circulars = await fetchCircular(comp);
      setCirculars(circulars);

      const timetable = await fetchTimetable(comp);
      setTimeTable(timetable);

      const gallery = await fetchGallery(comp);
      setGallery(
        gallery?.map((val) => {
          return val.Source.props.to;
        })
      );
    })();
  }, [comp]);

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

  const announcement = [
    {
      SNO: "1",
      DATE: "24/09/2019",
      ANNOUNCEMENT: "0-1 Knapsack -Dynamic Programing",
      CATEGORY: "Study Material",
      BY: "Dr. Satya Narayan Tazi",
    },
    {
      SNO: "2",
      DATE: "24/09/2019",
      ANNOUNCEMENT: "0-1 Knapsack -Dynamic Programing",
      CATEGORY: "Study Material",
      BY: "Dr. Satya Narayan Tazi",
    },
    {
      SNO: "3",
      DATE: "24/09/2019",
      ANNOUNCEMENT: "0-1 Knapsack -Dynamic Programing",
      CATEGORY: "Study Material",
      BY: "Dr. Satya Narayan Tazi",
    },
    {
      SNO: "4",
      DATE: "24/09/2019",
      ANNOUNCEMENT: "0-1 Knapsack -Dynamic Programing",
      CATEGORY: "Study Material",
      BY: "Dr. Satya Narayan Tazi",
    },
  ];
console.log("department = > ",departmentAchivement)
console.log("Student = > ",studentAchivement)
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
          // maxWidth: "var(--maxWidth)",
          width: '100%'
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
            onChange={(event, newValue) => setValue(newValue)}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: Mobile && 2,
              borderBottom: !Mobile && 2,
              borderColor: "divider",
              width: !Mobile ? "100% " : "180px",
              minWidth: Mobile && "180px",
              scrollbarWidth:'0px'
            }}
          >
            <Tab label="ABOUT" {...a11yProps(0)} />
            <Tab label="PEOPLE" {...a11yProps(1)} />
            <Tab label="LABS" {...a11yProps(2)} />
            <Tab label="ANNOUNCEMENT" {...a11yProps(3)} />
            <Tab label="ACHIEVEMENTS" {...a11yProps(4)} />
            <Tab label="CIRCULARS" {...a11yProps(5)} />
            <Tab label="TIME-TABLES" {...a11yProps(6)} />
            <Tab label="GALLERY" {...a11yProps(7)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <About comp={comp} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box sx={{ overflowY: "auto", height: "600px" }}>
              <Typography variant="h5" fontWeight="bold">
                Head Of Department
              </Typography>
              {hod?.length > 0 &&
                hod?.map((people) => <People people={people} />)}
              <Typography variant="h5" fontWeight="bold">
                Professors
              </Typography>
              {professor?.length > 0 &&
                professor?.map((people) => <People people={people} />)}
              <Typography variant="h5" fontWeight="bold">
                Faculty - Assistant Professors
              </Typography>
              {assProfessor?.length > 0 &&
                assProfessor?.map((people) => <People people={people} />)}
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                overflowY: "auto",
                height: "600px",
              }}
            >
              {labs?.length > 0 &&
                labs?.map((lab) => <Lab key={lab?.id} lab={lab} />)}
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <MyTable data={announcement} styles={{width:medium?"calc(100vw - 250px)":"calc(100vw - 400px)",height:440}}/>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Box sx={styles.myCustomList}>
              <Typography variant="h5" marginY="10px">
                Department Achievements
              </Typography>
              <ul
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  paddingLeft: "18px",
                  marginTop: "10px",
                }}
              >
                {departmentAchivement.map((item, i) => (
                  <li key={i}> {item?.Achievement} </li>
                  // <li key={i}> {item} </li>
                ))}
              </ul>
              <Typography variant="h5" marginY="10px">
                Students Achievements
              </Typography>
              <ul
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  paddingLeft: "18px",
                  marginTop: "10px",
                }}
              >
                {studentAchivement.map((item, i) => (
                  <li key={i}> {item?.Achievement} </li>
                  // <li key={i}> {item} </li>
                ))}
              </ul>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Box sx={{ width: "100%"}} >
              <MyTable data={circulars} styles={{width:medium?"calc(100vw - 250px)":"calc(100vw - 400px)",height:440}}/>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <MyTable data={timeTable} styles={{width:medium?"calc(100vw - 250px)":"calc(100vw - 400px)",height:440}}/>
          </TabPanel>
          <TabPanel value={value} index={7}>
            <GallerySection images={gallery} />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
