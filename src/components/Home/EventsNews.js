import * as React from "react";
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
  useMediaQuery,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function EventsNews({events,name}) {
  // const mobileView = 
  const Small = useMediaQuery("(max-width:900px)");
  return (
        <Card sx={{ width: Small?"90%":"30%", minWidth: "240px", boxShadow:'2px 1px 6px 2px black' }}>
          <CardActionArea>
            <CardHeader title={name} sx={{ bgcolor: "var(--cardBG)", color:'var(--darkBG)' }} />
            <CardContent>
              {events?.map((item, i) => (
                <Box key={i}>
                  <Typography sx={{fontWeight:'10px', fontSize:'17px', mt:1}} variant="h6">{item?.text?.slice(0, 30)}...</Typography>
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
                      <CalendarMonthIcon fontSize="small" /> {item?.date}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "blue", fontSize:'12px' }}>
                      NEW
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              View All
            </Button>
          </CardActions>
        </Card>
  );
}
