import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchStudentAchievement } from "../../api/studentCorner";

const StudentCard = ({achieves}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={achieves?.Image?.props?.to}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {achieves?.Title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {achieves?.Name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {achieves?.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default function StudentAchievement() {
  const [Achievements, setAchievements] = useState([]);

  useEffect(() => {
    (async () => {
      const achieves = await fetchStudentAchievement();
      setAchievements(achieves);
    })();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "var(--darkBG)",
        padding: "10px 0",
      }}
    >
      <Box
        sx={{
          maxWidth: "var(--maxWidth)",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            background: "var(--cardBG)",
            color: "var(--darkBG)",
            padding: "8px 15px",
            margin: "8px auto",
            textAlign: "center",
            width: "100%",
          }}
        >
          Student Scholarship Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          {Achievements?.map((val) => (
            <StudentCard achieves={val}  />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
