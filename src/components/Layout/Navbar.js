import { Box, List, ListItem } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Government Engineering College Ajmer",
    imgPath: "images/carosol1.jpg",
  },
  {
    label: "Classrooms",
    imgPath: "images/carosol2.jpg",
  },
  {
    label: "Memories",
    imgPath: "images/carosol3.jpg",
  },
  {
    label: "NCC Group Photo",
    imgPath: "images/carosol4.jpg",
  },
];

const Navbar = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: "50px",
        }}
      >
        <img
          src="https://www.ecajmer.ac.in/images//white%20logo.png"
          alt="gygjh"
          srcset=""
          width="500"
          height="150"
        />
        <List
          sx={{
            display: "flex",
            gap: "10px",
            p: "2px 5px",
            mt: "5px",
            fontSize: "13px",
            color: "#fff",
            mr: 3,
            height: "40px",
            borderRadius: 2,
            bgcolor: "#d9d9d9",
          }}
        >
          <ListItem
            sx={{
              minWidth: "fit-content",
              p: "0px 5px",
              m: 0,
              cursor: "pointer",
            }}
          >
            Btech Admission Enquiry
          </ListItem>
          <ListItem
            sx={{
              minWidth: "fit-content",
              p: "0px 5px",
              m: 0,
              cursor: "pointer",
            }}
          >
            Screen Reader
          </ListItem>
          <ListItem
            sx={{
              minWidth: "fit-content",
              p: "0px 5px",
              m: 0,
              cursor: "pointer",
            }}
          >
            ECA Ajmer
          </ListItem>
          <ListItem
            sx={{
              minWidth: "fit-content",
              p: "0px 5px",
              m: 0,
              cursor: "pointer",
            }}
          >
            HINDI
          </ListItem>
        </List>
      </Box>

      <Box bgcolor="white" sx={{ width: "80%", margin: "auto" }}>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: "5px",
            color: "#fff",
            height: "30px",
            fontSize: "15px",
          }}
        >
          <ListItem
            sx={{
              justifyContent: "center",
              bgcolor: "skyblue",
              p: "0 3px",
              cursor: "pointer",
              height: "100%",
              minWidth: "fit-content",
            }}
          >
            HOME
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              bgcolor: "skyblue",
              p: "0 3px",
              cursor: "pointer",
              height: "100%",
            }}
          >
            About us
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              bgcolor: "skyblue",
              p: "0 3px",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Administration
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              bgcolor: "skyblue",
              p: "0 3px",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Acadmics
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              bgcolor: "skyblue",
              p: "0 3px",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Departments
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              bgcolor: "skyblue",
              p: "0 3px",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Grievance
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              bgcolor: "skyblue",
              p: "0 3px",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Student Corner
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              bgcolor: "skyblue",
              p: "0 3px",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Cells
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              bgcolor: "skyblue",
              p: "0 3px",
              cursor: "pointer",
              height: "100%",
              minWidth: "fit-content",
            }}
          >
            Training & Placement
          </ListItem>
        </List>
      </Box>
      <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 550,
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
};

export default Navbar;
