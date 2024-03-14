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
        <img src={people?.img} style={{ maxHeight: "200px" }} />
      </Box>
      <Box
        sx={{
          flex: 1,
          minWidth: "220px",
        }}
      >
        <Typography variant="h6">{people?.name}</Typography>
        <Typography variant="body2">{people?.post}</Typography>
        <Typography variant="body2">{people?.email}</Typography>
        <Typography variant="body2">{people?.room}</Typography>
        <Button variant="contained">View Details</Button>
      </Box>
    </Box>
  );
}
