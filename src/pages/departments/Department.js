import { useState } from "react";
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
import { Title } from "@mui/icons-material";
import { Link } from "react-router-dom";
import GallerySection from "../../components/Home/GallerySection";

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

  const circulars = [
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
  const time_table = [
    {
      SNO: "1",
      DATE: "24/09/2019",
      Title: "0-1 Knapsack -Dynamic Programing",
      link: <Link to="/">View</Link>,
    },
    {
      SNO: "2",
      DATE: "24/09/2019",
      Title: "0-1 Knapsack -Dynamic Programing",
      link: <Link to="/">View</Link>,
    },
    {
      SNO: "3",
      DATE: "24/09/2019",
      Title: "0-1 Knapsack -Dynamic Programing",
      link: <Link to="/">View</Link>,
    },
    {
      SNO: "4",
      DATE: "24/09/2019",
      Title: "0-1 Knapsack -Dynamic Programing",
      link: <Link to="/">View</Link>,
    },
  ];

  const dep_achievements = [
    `With the coordination of Govt. Engineering College Ajmer to Ajmer Police, an android app named “Ajmer Police” is developed. The app can be downloaded from play store. The main objective of the app is to make contribution of citizens in avoiding non compliance of traffic rules. A citizen can use the app and upload the pics of various non compliances like without helmet driving, overloading, red light crossing etc. Second feature of app is to fulfil blood required with ease. The needy can post the requirement through the app and donor may donate blood. The third module is for providing help to senior citizen in case of any fear/emergency. The app is developed by a team of students Rohit Kamra, Laxman Mali, Mukesh Bhati in guidance with 3 faculty members Dr. Rakesh Rathi, Sh. Vinesh Jain & Smt. Jyoti Gajrani.`,
    `Sh. Prakash Meena is senior member IEEE and Joint Secretary IEEE Rajasthan Subsection. He is advisor and mentor IEEE student Branch, Ajmer.`,
    `Mrs. Jyoti Gajrani visited University of Bordeaux, France for R&D Work.`,
    `Sh. Atul Choudhary, Sh. H.R. Choudhary, Sh. Dinesh Kr. Khunteta, Sh. V. P. Sharma and Sh. Vinesh Jain have book published for RBSE Board Xth and XIIth for Computer Fundamentals and Programming.`,
    `Sh. Vinesh Jain is member of Board of Studies (CS & IT) at RTU Kota.`,
    `Sh. H. R. Choudhary is member of Board of Studies (CS & IT) at RBSE, Ajmer.`,
    `Mr. Satya narayan Tazi has been awarded certificate of appreciation by Chairman NPTEL for active SPOC based on performance and participation of candidates from Govt. Engineering College Ajmer`,
    `Mr. Vinesh Jain has given certificate of appreciation by INTERNSHALA for helping Govt. Engineering College Ajmer securing an all India rank of 268 out of 2830 college participating in 2019.`,
    `Mr. Satya narayan Tazi is given NVIDIA GPU Grant of Titan Xp for supporting his research.`,
    `Book Titled "Computer Technology and Programming-II" for 12th class (RBSE) written by H. R. Choudhary , V. P. Sharma and Anil Kumar Tailor in 2018-19 is published by Rajasthan State textbook board, Jaipur.`,
    `Department has Cyber Security Club, with eminent external experts from Police department, police university, forensic organizations, Law university, etc.`,
    `Department has Industry consultation committee including experts from Facebook, Apple, Amazon, Infosys etc.`,
    `Department has conducted Ten Days Free Basic Computer Course for Economically Backward Students of Nearby School to College Campus.`,
    `Department has organized Two Days International Conference on Computational Intelligence and Emerging Power System (ICCIPS-2021) 09-10 March 2021 in association with Department of Electrical Engineering. These research papers will be published in the prestigious International Springer book series Algorithms for Intelligent Systems (AIS)`,
    `Student team won 3rd prize of Rs 50000/- in the National level Hackathon held for the last 24 hours as part of HR conclave at Manipal University Jaipur organized by Govt of Rajasthan out of approximately 150 teams participating.`,
    `3 Teams participated from ECA in the National level Hackathon held by Manipal National Hackathon Organized by Dept. Of higher and technical Education, GoR dated 16-17th December 2019 and 1 team stood second position.`,
    `44 students and faculty of CSE department got NPTEL certification in 2019-20.`,
    `Organized Two Days National Level Online Hackathon CODETHON’21 on 17-18 Feb 2021`,
    `Department students ( Shreeyansh Parihar, Mrinal Jain, Avi Saxena, Aniket Kushwaha, Nivesh Singh Chauhan ) under the guidance of Dr. Jyoti Gajrani developed “E-lecture App” for Technical Education Department. This is inaugurated by Mrs. Suchi Sharma, Ex- Secretary Department of Higher & Technical Education, Govt. of Rajasthan.`,
    `Dr Jyoti Gajrani is nominated as member in BOS (Board of Studies) for Computer Science Engineering, Information Technology and Computer Application, Bikaner Technical University, Bikaner.`,
    `Dr Neetu Sharma and Mr Satyanarayan Tazi are nominated for AICTE's Leadership in Trading Excellance (LITE), a nation wide program to equip 50 colleges and 50 schools with leadership in teaching in excellence.`,
    `The students of CS/IT namely Mr Salim Khan Chouhan CS Batch 2012-16, Ms Monika Kharinta IT Batch 2011-15, Mr Bhanu Pratap Singh CS Batch 2007-11 and Mr Mukesh Kumar CS Batch 2006-10 have added feather in college's cap by clearing RAS 2018.`,
  ];

  const stu_achievements = [
    `Piyush Rathi selected for M. Tech at IIT Gandhi Nagar`,
    `Institute Website development Institute Cultural Website development Institute T & P Website development`,
    `Umang Agarwal published one Journal paper published in (sci index IF 3+) ScienceDirect`,
    `4 Students are selected in RAS 2018`,
    `Shivam Kasat selected for M. Tech. at IIIT Allahabad`,
    `Second Position in National level Hackathon held by Manipal University Organized by Dept. Of higher and technical Education, GoR.`,
    `Second Position in National level Hackathon held by RTU Kota.`,
    `12 Students Successfully cleared assessment of Cyber Security conducted by NASSCOM under TEQIP-III`,
    `44 students of CSE department got NPTEL certification in 2019-20.`,
    `Naurat Singh Year and Roll No. secured position in TOP 5% with Elite+Silver in NPTEL Certification course on programming in C++.`,
    `Shadab Khan selected for M. Tech. at MNIT Jaipur, Mukul Dhaka selected for M. Tech. at SVNIT Surat, Kshitiz Abhay selected for M. Tech. at IIIT Pune`,
    `Abraham David Soloman, student of 3rd year CS has secured 3rd position with prize of 50k in icreate EV hackathon 2021.`,
    `Tarul khandelwal, student of B.Tech. 4th year won 2nd price of Rupees 25000/- in National level Coding challenge, Xela-thon, organized by Exela technology on the metl.com platform in online mode during 21 Aug - 19 Sep, 2021.`,
    `Code-N-build-2021 (Global level hackathon) Organized by -JECRC University at 22 and 23 February 2021. Joined by team Hackelite with team members Tarul khandelwal (team leader), Yash jain, Nivesh singh and achieved 3rd price by building android applications to help workers and labour class`,
    `Rahul Sharma finalist at National Environment Youth Parliament, 2022 held at Parliament Complex`,
    `Abhishek Jangid of CS 2021 passout batch selected for M.Tech. at IIT Patna.`,
    `Ankit Bajaj of IT 2021 passout batch selected for M.Tech at MNIT Jaipur.`,
    `Kajal Gehlot ( 2022 batch ) selected for M.Tech. at NIT kurukshetra.`,
    `Nishant sharma ( 2022 batch ) selected for M.Tech. at NIT Rourkela.`,
    `Harsh Wadhwani and Divyansh Bhatia of CS won first prize in National level Hackathon organized by Jyoti Niwas College Bengluru in 2021`,
    `Dhheraj Chandwani won second prize in smake-the-bug competition organized by Jyoti Niwas College Bengluru in 2021`,
    `Aditi Agarwal and Lokendra Singh Rao of CS branch won second prize (Smartphone) in Rajiv 2021 Digital Quizathon organized by Education department, Rajathan`,
    `Manoj Choudhary of CS branch won first prize (Tablet) in Rajiv 2021 Digital Quizathon organized by Education department, Rajathan`,
    `Harsh Wadhwani, Anshu Kumar Sharma, Rajdeep Singh of CS branch prepared software for Sudhar sabha NGO which help NGO in digitization and database management.`,
    `Priya Chelani, Krishna Verma, Students of B.tech (IT) 3rd year stood 2nd Winner with Cash prize Rupees 3 lakh in National Forensic Science Hackathon in Forensic psychology theme, organzied by National Forensic Science University, Gandhinagar, Gujarat during 1 Feb - 2 Feb, 2023`,
    `Krishna Verma, Priya Chelani, Mahak Goyal, Jatin Kumar student of B.Tech. 3rd year IT won 2nd price of Rupees 10,000/- each in IBM HACK CHALLENGE 2022, organized by IBM in collaboration of Smartinterz on ibm.com platform in online mode during 1 sept - 10 oct, 2022`,
    `Akshat jain gained a 100% scholarship in the RCAT quizathon held on 20 March 2023`,
    `Aditi Agarwal, Lokendra Singh Rao, Kushagra Rathore student of B.Tech 3rd year CSE gained 100% scholarship for a certification course at R-CAT center (Rajiv Gandhi Centre of Advanced Technology), Jaipur after qualifying the quizathon exam held on 20 January, 2023.`,
    `Prachi K. of CS branch won second prize in TERRE Olympiad organized by TERRE Policy Center, Pune`,
    `Harsh Wadhwani won first prize in IDEAINNERVE, event of the National Level IT Fest "ENTHIOS'22 -TECHINNERVE" , held on 3rd February 2022.`,
    `Harsh Wadhwani recognized as NPTEL DISCIPLINE STAR by NPTEL in Jul-Dec 2022.`,
    `Rakshita Jaju recognized as NPTEL DISCIPLINE STAR by NPTEL in Jul-Dec 2022.`,
    `Khush Seervi, Anubhuti Bhardwaj, Akshat Jain, Ketan Jhanwar, Bhartendra Sharma, Manish Malviya, B.Tech CSE students, showcased their exceptional skills in the finals of the Software Edition of Smart India Hackathon 2022 hosted by AICTE & Ministry of Education, securing a spot among the top 3 teams.`,
    `Khush Seervi, Anubhuti Bhardwaj, Jay Soni demonstrated their talents at the Youth Conclave-2022, hosted by INAE-SERB at IIT Jodhpur. Their remarkable performance allowed them to secure a position in the top 5 teams at the event.`,
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
            onChange={(event, newValue) => setValue(newValue)}
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
            <Link to="/gallery" style={{textAlign
            : 'center'}}>
              <Tab label="GALLERY" {...a11yProps(8)} />
            </Link>
          </Tabs>
          <TabPanel value={value} index={0}>
            <About comp={comp} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box sx={{ overflowY: "auto", height: "600px" }}>
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
                labs.map((lab) => <Lab key={lab?.id} lab={lab} />)}
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <MyTable data={announcement} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Box sx={{ overflowY: "auto", height: "600px" }}>
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
                {dep_achievements.map((item, i) => (
                  <li key={i}> {item} </li>
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
                {stu_achievements.map((item, i) => (
                  <li key={i}> {item} </li>
                ))}
              </ul>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <MyTable data={circulars} />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <MyTable data={time_table} />
          </TabPanel>
          <TabPanel value={value} index={7}>
            {/* isme kuch nhi he */}
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
