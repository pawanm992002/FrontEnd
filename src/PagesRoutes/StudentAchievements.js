import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

const StudentCard = () => {
    return <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image="/images/principal.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Problem Solving Hackathon
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Rajat Shri Shrimal
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    20CS65
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}

export default function StudentAchievement() {
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
                    width: '100%'
                }}
            >
                <Typography variant="h5" sx={{ background: 'var(--cardBG)', color: 'var(--darkBG)', padding: '8px 15px', margin: '8px auto', textAlign: 'center', width: '100%' }}>Student Scholarship Details</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                </Box>
            </Box>
        </Box>
    );
}