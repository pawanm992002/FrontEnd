import Box from "@mui/material/Box";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Lab({ lab }) {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia sx={{ height: 140 }} image={lab?.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {lab?.name}
        </Typography>
        <Typography variant="body2">Room: {lab?.room}</Typography>
        <Typography variant="body2">
          Lab Incharge: {lab?.Lab_Incharge}
        </Typography>
        <Typography variant="body2">
          Lab Technician: {lab?.Lab_Technician}
        </Typography>
        <Typography variant="body2">
          Lab_Attendent: {lab?.Lab_Attendent}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

//  function Lab({ lab }) {
//   console.log(lab);
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "8px",
//         alignItems: "center",
//         margin: "15px 5px",
//         boxShadow: "2px 2px 4px 2px black",
//       }}
//     >
//       <Box>
//         <img src={lab?.img} style={{ maxHeight: "200px" }} />
//       </Box>
//       <Box sx={{ flex: 1, minWidth: "220px" }}>
//         <Typography variant="h6">{lab?.name}</Typography>
//         <Typography variant="body2">Room: {lab?.room}</Typography>
//         <Typography variant="body2">
//           Lab Incharge: {lab?.Lab_Incharge}
//         </Typography>
//         <Typography variant="body2">
//           Lab Technician: {lab?.Lab_Technician}
//         </Typography>
//         <Typography variant="body2">
//           Lab_Attendent: {lab?.Lab_Attendent}
//         </Typography>
//         <Button variant="contained">View Details</Button>
//       </Box>
//     </Box>
//   );
// }
