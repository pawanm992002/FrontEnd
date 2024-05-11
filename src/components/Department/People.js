import { Box, Button, Typography } from "@mui/material";

export default function People({ people }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        alignItems: "center",
        margin: "15px 5px",
        boxShadow: "2px 2px 4px 2px black",
        padding: "8px",
      }}
    >
      <Box>
        {console.log("..................gggg", people)}
        <img src={people?.Picture?.props?.src} style={{ maxHeight: "200px" }} />
      </Box>
      <Box
        sx={{
          flex: 1,
          minWidth: "220px",
        }}
      >
        <Typography variant="h6">{people?.Name}</Typography>
        <Typography variant="body2">{people?.Designation}</Typography>
        <Typography variant="body2">{people?.Email}</Typography>
        <Typography variant="body2">{people?.Room_NO}</Typography>
        <Button variant="contained">View Details</Button>
      </Box>
    </Box>
  );
}
