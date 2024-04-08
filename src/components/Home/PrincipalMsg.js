import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import '../../styles/style.css'
import { Link } from "react-router-dom";
import { message } from "../../pages/Administration/Principal";
import ModalComponent from "../Modal";


export default function PrincipalMsg() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navView = useMediaQuery("(min-width:1100px)");
  return (
    <>
    <Box
      sx={{
        maxWidth: "var(--maxWidth)",
        borderRadius: "8px",
        padding: "15px",
        // boxShadow: "2px 4px 3px black",
      }}
    >
      

      <Typography variant='h5' className='double-line-bottom' sx={{marginBottom:'20px'}}  >Principal Message</Typography>

      <Card sx={{ margin:'5px 0',boxShadow:'2px 3px 9px black',display:'flex',flexDirection: navView?'row':'column' }} >
        <CardMedia
          sx={{height: !navView?0: 250,width:'100%' }}
          image="/images/principal.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight="bold"
            component="div"
          >
            Dr. Rekha Mehra
          </Typography>
          <Typography
            borderBottom="1px solid black"
            gutterBottom
            variant="h6"
            component="div"
          >
            Message: From the Desk of the Principal
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {message.slice(0, 350)} {" "}
    {/*    <Link to='/administration/principal' style={{color:'blue'}} >Read More...</Link> */}
            <Typography onClick={()=>setOpen(true)}>Read More...</Typography>
            
          </Typography>
          <Typography fontWeight="bold" variant="body2">
            "We cannot always build the future for our youth, but we can build
            our youth for the future. Jai Hind !!"
          </Typography>
        </CardContent>
      </Card>
    </Box>
    <ModalComponent open={open} handleClose={handleClose} content={
      <>
        <Box sx={{ width: '80%', margin: 'auto' }}>
    
          <Typography>thrhsrthdrtd</Typography>
    
        </Box>
      </>
    } />
    </>
    // </Box>
  );
}
