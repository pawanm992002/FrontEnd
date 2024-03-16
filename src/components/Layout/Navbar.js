import { Box, List, ListItem } from "@mui/material";


const Navbar = () => {


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

    
    </div>
  );
};

export default Navbar;
