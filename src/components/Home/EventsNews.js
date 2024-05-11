import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
  Modal,
  useMediaQuery,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { MyList } from "../utilily/MyList";
import { Link } from "react-router-dom";
import ModalComponent from "../Modal";

export default function EventsNews({ events, name }) {
  const [open, setOpen] = useState(false);
  const Small = useMediaQuery("(max-width:900px)");


  return (
    <Card
      sx={{
        width: Small ? "90%" : "30%",
        minWidth: "240px",
        boxShadow: "2px 1px 6px 2px black",
        height:'500px',
        position:'relative',
        top:'0%'
      }}
    >
      <CardActionArea>
        <CardHeader
          title={name}
          sx={{ bgcolor: "var(--cardBG)", color: "var(--darkBG)" }}
        />
        <CardContent>
          
        {events?.length <=0 && <Typography color={'red'} >No Data Found</Typography>}
        
          {events && events?.map((item, i) => (
        i<=4 &&  <Box key={i}>
          <a href={item?.notice} target="_blank" rel="noopener noreferrer">
              <Typography
                sx={{ fontWeight: "10px", fontSize: "17px", mb: 1.2,textTransform:'capitalize' }}
                variant="h6"
              >
                { item?.text ? item?.text?.slice(0, 30) : item?.title?.slice(0, 30)} ...
              </Typography>
              </a>
             
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <CalendarMonthIcon fontSize="small" />  {item?.createdAt?.split('T')?.[0]}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "blue", fontSize: "12px" }}
                >
                  NEW
                </Typography>
              </Box>
            </Box>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions>

        <ModalComponent
          open={open}
          handleClose={()=> setOpen(false)}
          content={
        <>
          <Box
            // sx={{
            //   position: "absolute",
            //   top: "50%",
            //   left: "50%",
            //   transform: "translate(-50%, -50%)",
            //   bgcolor: "background.paper",
            //   borderRadius: 2,
            //   boxShadow: 24,
            //   p: 4,
            //   display: "flex",
            //   flexDirection: "column",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   width: "90%",
            // }}
          >
            <h2 id="parent-modal-title"> {name} </h2>
            <p id="parent-modal-description">

              {events?.length <=0 && <Typography color={'red'} >No Data Found</Typography>}

              {events && events?.map((item, i) => (
                <Box key={i} sx={{ borderBottom: "1px solid black",width:'100%' }}>
                  <a href={item?.notice} target="_blank" rel="noopener noreferrer">
                    <Typography
                      sx={{ fontWeight: "10px", fontSize: "17px", mt: 1 }}
                      variant="h6"
                      textTransform={'capitalize'}
                    >
                      { item?.text ? item?.text?.slice(0, 30) : item?.title?.slice(0, 30)}
                    </Typography>
                  </a>
                  <Typography
                sx={{ fontWeight: "10px", fontSize: "17px", mt: 1 }}
                variant="h6"
              >
                {item?.description} 
              </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      <CalendarMonthIcon fontSize="small" /> {item?.createdAt?.split('T')?.[0]}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </p>
          </Box> </>} />

        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{position:'absolute',bottom:'4%'}}
        >
          View All
        </Button>
      </CardActions>
    </Card>
  );
}
