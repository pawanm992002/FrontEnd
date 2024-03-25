import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import '../../styles/style.css'
import { Link } from "react-router-dom";
import { message } from "../../pages/Administration/Principal";


export default function PrincipalMsg() {
   const [Open,setOpen] = useState(false);
  function TransitionsModal({value}) {
    const [open, setOpen] = useState(value);
    // if(value==true){
    //   setOpen(value);
    // }
    console.log(open);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }

  return (
    
    <Box
      sx={{
        maxWidth: "var(--maxWidth)",
        borderRadius: "8px",
        padding: "15px",
        // boxShadow: "2px 4px 3px black",
      }}
    >
      

      <Typography variant='h5' className='double-line-bottom' sx={{marginBottom:'20px'}}  >Principal Message</Typography>

      <Card sx={{ margin:'5px 0',boxShadow:'2px 3px 9px black',display:'flex' }} >
        <CardMedia
          sx={{ height: 250,width:800 }}
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
    {Open && <TransitionsModal value={Open}/>}
    </Box>

    // </Box>
  );
}
