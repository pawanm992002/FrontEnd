import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

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

export default function Scrollables() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const news = [
    {
      text: "news1 jdkj fdpofodpjflkdjf df ldkjhhhhhhhhh ihk kjgjg kj lkj kjbj bkjshkh lk",
      link: "",
    },
    { text: "news2 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news3 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news4 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news5 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news6 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news7 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news8 jdkj fdpofodpjflkdjf df ld", link: "" },
  ];
  const orders = [
    {
      text: "news1 jdkj fdpofodpjflkdjf df ldkjhhhhhhhhh ihk kjgjg kj lkj kjbj bkjshkh lk",
      link: "",
    },
    { text: "news2 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news3 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news4 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news5 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news6 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news7 jdkj fdpofodpjflkdjf df ld", link: "" },
    { text: "news8 jdkj fdpofodpjflkdjf df ld", link: "" },
  ];
  const tenders = [];
  const formats = [];
  return (
    <Box sx={{ bgcolor: "var(--darkBG)" }}>
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
        Latest@ECA
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            maxWidth: "var(--maxWidth)",
            color: "var(--darkText)",
            height: 300,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            textColor="var(--darkText)"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              bgcolor: "var(--darkBG2)",
            }}
          >
            <Tab label="NEWS" {...a11yProps(0)} />
            <Tab label="ORDERS" {...a11yProps(1)} />
            <Tab label="TENDERS" {...a11yProps(2)} />
            <Tab label="FORMATS" {...a11yProps(3)} />
          </Tabs>

          <Box sx={{ width: "100%", bgcolor: "#757572" }}>
            <TabPanel value={value} index={0}>
              <List
                className="scrollbar-hide"
                sx={{ maxHeight: 250, overflowY: "auto" }}
              >
                {news.map((val, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      primary={
                        <Link style={{ color: "white" }} to={val.link}>
                          {i + 1 + ". " + val.text}{" "}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <List
                className="scrollbar-hide"
                sx={{ maxHeight: 250, overflowY: "auto" }}
              >
                {orders.map((val, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      primary={
                        <Link style={{ color: "white" }} to={val.link}>
                          {i + 1 + ". " + val.text}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <List
                className="scrollbar-hide"
                sx={{ maxHeight: 250, overflowY: "auto" }}
              >
                {tenders.map((val, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      primary={
                        <Link style={{ color: "#c7eaed" }} to={val.link}>
                          {i + 1 + ". " + val.text}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <List
                className="scrollbar-hide"
                sx={{ maxHeight: 250, overflowY: "auto" }}
              >
                {formats.map((val, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      primary={
                        <Link style={{ color: "#c7eaed" }} to={val.link}>
                          {i + 1 + ". " + val.text}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
