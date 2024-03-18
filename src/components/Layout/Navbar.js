import { Box, Button, List, ListItem } from "@mui/material";

const NavbarDropDownListData = [
  ['home' , []],
  ['about us',['history','vision & mission','pos & peos','how to reach','sight seeing','contact us']],
  ['administration',['bog','principal','registrar','proctor','examination section','account section']],
  ['academics', ['academic section','academic calendar','ug courses','pg courses','research','first year','syllabus','time table and class management']],
  ['departments', ['civil engineering','electrical engineering']],
  ['greivance', ['sc/st/obc']],
  ['student corner', ['scholarship details','ncc']],
  ['cells ', ['aicte cell','alumni cell']],
  ['tpo' , []]
]

const Navbar = () => {


  return (
    < >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // mb: "50px",
        }}
      >
        <img src="https://www.ecajmer.ac.in/images//white%20logo.png" alt="ecajmer_logo"  srcset="" width="50%" style={{margin:'auto'}}
        />
        {/* <List
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
        </List> */}
      </Box>

      <Box bgcolor="green" sx={{ width: "100%"}}>

        <List  sx={{display: "flex",justifyContent: "space-around",alignItems:'center',width:"80%",margin:'auto',fontSize:'15px',color: "#fff"}}>

{NavbarDropDownListData?.map((item,i)=>( <ListItem key={i} sx={{paddingTop:'5px',textTransform:'capitalize',cursor: "pointer",'&:hover':{color:'black'}}}> {item[0]}   </ListItem> ))}

        </List>

      </Box>

    
    </>
  );
};

export default Navbar;
