import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyTable from "../../components/utilily/MyTable";
import { fetchNccCircular, fetchNccGallery } from "../../api/studentCorner";
import GallerySection from "../../components/Home/GallerySection";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NCC() {
  const [value, setValue] = useState(0);
  const [Gallery, setGallery] = useState([]);
  const [Circulars, setCirculars] = useState([]);

  useEffect(() => {
    (async () => {
      if (value === 2) {
        const NccCirculars = await fetchNccCircular();
        setCirculars(
          NccCirculars?.map((val) => {
            return {
              SR_NO: val.SR_NO,
              Title: val.Title,
              Section: val.Section,
              Notice: val.Notice,
            };
          })
        );
      }
      if (value === 5) {
        const NccGallery = await fetchNccGallery();
        setGallery(
          NccGallery?.map((val) => {
            return val?.Image?.props?.to;
          })
        );
      }
    })();
  }, [value]);
  const members = [
    { Name: "Dr. Pooja Tomar", Designation: "Coordinator" },
    { Name: "Sh. Lalit K Dusad", Designation: "Co-Coordinator" },
    { Name: "Dr. Shikha Agarwal", Designation: "Co-Coordinator" },
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
          width: "100%",
        }}
      >
        <Box sx={{ padding: "10px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <Tabs
              sx={{ backgroundColor: "var(--cardBG)", color: "white" }}
              textColor="white"
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab label="Details" {...a11yProps(0)} />
              <Tab label="Members" {...a11yProps(1)} />
              <Tab label="Circulars" {...a11yProps(2)} />
              <Tab label="Activities" {...a11yProps(3)} />
              <Tab label="List of Students" {...a11yProps(4)} />
              <Tab label="Gallery" {...a11yProps(5)} />
              {/* <Tab
                label={
                  <Link
                    style={{ color: "white" }}
                    to={"/gallery"}
                    variant="contained"
                  >
                    Gallery
                  </Link>
                }
                {...a11yProps(5)}
              /> */}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Typography>
              The National Cadet Corps plays a significant part in molding a
              person's character. It fosters the spirit of teamwork and
              man-management and leads to the development of a more pleasing
              overall personality.
            </Typography>
            <Box>
              <Typography variant="h5" marginY="10px">
                Objectives
              </Typography>
              <Typography>
                Thus NCC strives to achieve the following objectives:-
              </Typography>
              <ol
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  paddingLeft: "15px",
                  marginTop: "10px",
                }}
              >
                <li>
                  To channelize the energy and dynamism of young men towards
                  activities beneficial to them and to the society.
                </li>
                <li>
                  Constructive use of leisure time, wholesome recreation, wide
                  cultural sympathies, abiding social consciousness and an alert
                  mind.
                </li>
                <li>
                  Recognizing the importance of the NCC, the Institute offers
                  the students an opportunity to be part of the NCC. The
                  Institute has strength of 100 cadets. All the incoming
                  students who had opted for NCC are required to enroll
                  themselves in the first year for 3-Year course. The Institute
                  cadets are part of the 2-Rajasthan Engineer Coy. NCC Ajmer.
                </li>
              </ol>
            </Box>
            <Box>
              <Typography variant="h5" marginY="10px">
                Social Service
              </Typography>
              <Typography>
                Various social activities are also organized to encourage the
                feeling of belonging to the society.
              </Typography>
              <ol
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  paddingLeft: "15px",
                  marginTop: "10px",
                }}
              >
                <li>Blood Donation Camp</li>
                <li>Tree Plantation</li>
              </ol>
            </Box>
            <Typography variant="h5" marginY="10px">
              NCC Officer
            </Typography>
            <Typography>Capt. H.R. Choudhary</Typography>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <MyTable data={members} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <MyTable data={Circulars} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Box>
              <Typography variant="h5" marginY="10px">
                General
              </Typography>
              <ol
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  paddingLeft: "15px",
                  marginTop: "10px",
                }}
              >
                <li>
                  To channelize the energy and dynamism of young men towards
                  activities beneficial to them and to the society
                </li>
                <li>
                  Constructive use of leisure time, wholesome recreation, wide
                  cultural sympathies, abiding social consciousness and an alert
                  mind.
                </li>
              </ol>
            </Box>
            <Box>
              <Typography variant="h5" marginY="10px">
                Camp
              </Typography>
              <ol
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  paddingLeft: "15px",
                  marginTop: "10px",
                }}
              >
                <li>
                  An Annual Training Camp is held to further enhance and
                  inculcate a feeling of independence in the cadets.
                </li>
                <li>
                  Extensive knowledge about devices used in the Army like mines,
                  bridges, nuclear and biological weapons etc. is imparted.
                </li>
                <li>Self defense training is also given.</li>
                <li>
                  Rigorous physical training is provided in the camp with a view
                  to increasing the physical endurance of the cadets.
                </li>
                <li>Military training with rifles is also provided.</li>
                <li>
                  Cultural programmers are also held with a view to improving
                  the cultural and social outlook of the cadets.
                </li>
              </ol>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <MyTable data={members} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            {console.log("ggggggg", Gallery)}
            <GallerySection images={Gallery} />
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}
