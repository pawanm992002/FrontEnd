import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyTable from "../../components/utilily/MyTable";
import {
  fetchCreativeCircular,
  fetchCreativeGallery,
} from "../../api/studentCorner";
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

export default function CreativeSociety() {
  const [value, setValue] = useState(0);
  const [Gallery, setGallery] = useState([]);
  const [Circulars, setCirculars] = useState([]);

  useEffect(() => {
    (async () => {
      if (value === 2) {
        const Circulars = await fetchCreativeCircular();
        setCirculars(
          Circulars?.map((val) => {
            return {
              SR_NO: val.SR_NO,
              Title: val.Title,
              Section: val.Section,
              Notice: val.Notice,
            };
          })
        );
      }
      if (value === 3) {
        const Gallery = await fetchCreativeGallery();
        setGallery(
          Gallery?.map((val) => {
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
              <Tab label="Gallery" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <ol
              style={{ display: "flex", gap: "10px", flexDirection: "column" }}
            >
              <li>Organizing the Annual Festival "Tarangini"</li>
              <li>Other Cultural events on Different occasions</li>
              <li>To coordinate and organize programs of renowned artists</li>
              <li>
                To encourage students participate in Creative Art
                Activities/College events
              </li>
            </ol>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <MyTable data={members} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <MyTable data={Circulars} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <GallerySection images={Gallery} />
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}
