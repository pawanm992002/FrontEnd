import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import '../../styles/style.css'
import { Link } from "react-router-dom";
import { message } from "../../pages/Administration/Principal";


export default function PrincipalMsg() {

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

      <Card sx={{ maxWidth: 400,margin:'9px 0',boxShadow:'2px 3px 9px black' }}>
        <CardMedia
          sx={{ height: 250 }}
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
            <Link to='/administration/principal' style={{color:'blue'}} >Read More...</Link>
          </Typography>
          <Typography fontWeight="bold" variant="body2">
            "We cannot always build the future for our youth, but we can build
            our youth for the future. Jai Hind !!"
          </Typography>
        </CardContent>
      </Card>
    </Box>
    // </Box>
  );
}
