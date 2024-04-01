import { AddAPhoto, BuildTwoTone, DashboardSharp, IceSkating } from "@mui/icons-material";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Alumni() {
  const [ActiveBox, SetActiveBox] = useState(1);
  const [Toggle, SetToggle] = useState(false);
  const ClickHandeller = (data) => {
    SetActiveBox(data);
    console.log(ActiveBox);
  };
 
  function createData(name, Designation) {
      return { name, Designation };
    }
    
    const rows = [
      createData("Sh Vinod Kumar Verma","Coordinator"),
      createData("Dr. Vinesh Jain","Member"),
      createData("Sh. Dilip Sisodia","Member"),
      createData("Dr. Manish Badlani","Menber"),
      createData("Sh. Praveen Kumar Gupta","Member"),
    ];
    

  return (
    <Box sx={{ width: "80%", margin: "auto",position:'relative' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          gap: "5px",
          cursor:'pointer',
        }}
      >
        <Typography
          sx={{
            fontSize: "1.4rem",
            color: ActiveBox == 1 ? "white" : "black",
            bgcolor: ActiveBox == 1 ? "#213153EB" : "transparent",
            flex: 1,
            borderRadius:1,
            opacity:'0.9'
          }}
          onClick={() => {
            ClickHandeller(1);
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4rem",
            color: ActiveBox == 2 ? "white" : "black",
            bgcolor: ActiveBox == 2 ? "#213153EB" : "transparent",
            flex: 1,
            borderRadius:1,opacity:'0.9'
          }}
          onClick={() => {
            ClickHandeller(2);
          }}
        >
          Members
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4rem",
            color: ActiveBox == 3 ? "white" : "black",
            bgcolor: ActiveBox == 3 ? "#213153EB" : "transparent",
            flex: 1,
            borderRadius:1,opacity:'0.9'
          }}
          onClick={() => {
            ClickHandeller(3);
          }}
        >
          Circulars
        </Typography>
      </Box>
      {ActiveBox == 1 ? (
        <Box sx={{display:'flex',flexDirection:'column',gap:2,m:'10px 0'}}>
          <Typography sx={{lineBreak: 'anywhere', lineHeight: 1.8,fontSize:'17px'}}>
            Engineering College Ajmer is Engineering college of Rajasthan in the
            Northern India established in 1997. More than 2000 students are
            studying in the institute in B.Tech., M.Tech., MBA, MCA and PhD
            courses at present. Institute's alumni are working in various
            positions in Govt. organisations, Private organisations, MNCs, and
            also self employed (Entrepreneurs).
          </Typography>
          <Typography sx={{lineBreak: 'anywhere', lineHeight: 1.8,fontSize:'17px'}}>
            More than 10000 alumnus have completed education from the institute.
            Institute's alumni are working in various positions in Govt.
            organisations, Private organisations, MNCs, and also self employed
            (Entrepreneurs).
          </Typography>
          <Typography sx={{lineBreak: 'anywhere', lineHeight: 1.8,fontSize:'17px'}}>
            Alumni association is formed in the institute. The main aim of the
            association is to maintain the link between Institute and Alumni and
            share details of mutual growth, achievement and advancement in
            various fields.
          </Typography>
          <Typography sx={{lineBreak: 'anywhere', lineHeight: 1.8,fontSize:'17px'}}>
            Alumni may contact to the Alumni Association on mail id:
           <b style={{color:'#213153EB',cursor:'pointer',fontWeight:500}}> alumni@ecajmer.ac.in </b>
          </Typography>
        </Box>
      ) : ActiveBox == 2 ? (
        <TableContainer component={Paper} sx={{m:'10px 0'}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center" >Designation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.Designation}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box>
          <Typography>
            Ajmer is Engineering college of Rajasthan in the Northern India
            established in 1997. More than 2000 students are studying in the
            institute in B.Tech., M.Tech., MBA, MCA and PhD courses at present.
            Institute's alumni are working in various positions in Govt.
            organisations, Private organisations, MNCs, and also self employed
            (Entrepreneurs).
          </Typography>
          <Typography>
            More than 10000 alumnus have completed education from the institute.
            Institute's alumni are working in various positions in Govt.
            organisations, Private organisations, MNCs, and also self employed
            (Entrepreneurs).
          </Typography>
          <Typography>
            Alumni association is formed in the institute. The main aim of the
            association is to maintain the link between Institute and Alumni and
            share details of mutual growth, achievement and advancement in
            various fields.
          </Typography>
          <Typography>
            Alumni may contact to the Alumni Association on mail id:
            alumni@ecajmer.ac.in{" "}
          </Typography>
        </Box>
        )}
        <Box 
          onClick={()=>{SetToggle(!Toggle)}}
          sx={{position:"absolute",bottom:10,right:-130,borderRadius:'50%',width:'50px',height:'50px',bgcolor:'grey',zIndex:6,display:'flex',alignItems:'center',justifyContent:'center'}}
        ><Tooltip><BuildTwoTone/></Tooltip> 
        </Box>
      { Toggle && 
        <Box position={'absolute'} color={'#213153EB'} width={'50px'} bottom={70} right={-130} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3} justifyContent={'center'}>
        <Box><Tooltip title="df" placement="right"><IceSkating/></Tooltip>  </Box>
        <Box><Tooltip  title="df" placement="right"> <AddAPhoto/></Tooltip></Box>
        <Box> <Tooltip  title="df" placement="right"> <DashboardSharp/></Tooltip> </Box>
        </Box>
      }
    </Box>
  );
}
