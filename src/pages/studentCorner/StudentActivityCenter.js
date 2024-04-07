import { Box, Typography, useMediaQuery } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const ActivitiyCard = ({data}) => {
    const mobileView = useMediaQuery("(min-width:1100px)");
    return <Card sx={{ maxWidth: mobileView ? '340px': '100%' }}>
    <CardActionArea sx={{ display: !mobileView && "flex"}} >
      <CardMedia
        component="img"
        height="140"
        image={data?.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.desc}
        </Typography>
        <ul style={{padding: '10px 8px'}}>
            {data?.points?.map((pt,i) => {
                return <li key={i}>{pt}</li>
            })}
        </ul>
      </CardContent>
    </CardActionArea>
  </Card>
}

export default function StudentActivityCenter() {
    const activities = [
        {title: 'NATIONAL CADETS CORPS', img: "/images/principal.jpg", desc: `The National Cadet Corps plays a significant part in moulding a person's character. It fosters the spirit of teamwork and leads to the development of a more pleasing overall personality. Thus NCC strives to achieve the following objectives:`, points: ["To channelize the energy and dynamism of young men and women towards activities beneficial to them and to the society.","Constructive use of leisure time, wholesome recreation, wide cultural sympathies, abiding social consciousness and an alert mind.", "Recognizing the importance of the NCC, the Institute offers the students an opportunity to be part of the NCC."]},
        {title: 'NATIONAL CADETS CORPS', img: "/images/principal.jpg", desc: `The National Cadet Corps plays a significant part in moulding a person's character. It fosters the spirit of teamwork and leads to the development of a more pleasing overall personality. Thus NCC strives to achieve the following objectives:`, points: ["To channelize the energy and dynamism of young men and women towards activities beneficial to them and to the society.","Constructive use of leisure time, wholesome recreation, wide cultural sympathies, abiding social consciousness and an alert mind.", "Recognizing the importance of the NCC, the Institute offers the students an opportunity to be part of the NCC."]},
    ]
    return (<Box
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
                width: '100%',
            }}
        >
            <Box padding="5px 15px">
                <Typography variant="h5" sx={{ background: 'var(--cardBG)', color: 'var(--darkBG)', padding: '8px 15px', margin: '8px auto', textAlign: 'center', width: '100%' }}>Student Activities</Typography>
                <Typography>
                    As the name suggests, Student Activity Centre (SAC) is the hub of all student activities and has recently emerged as one of the main venues for most of the student held events. Every year, it witnesses musical extravaganza night, standup comedy acts, talks and discussions by eminent people, plays and many more such programs. Not just the students but the entire campus community is making use of its facilities. If it happens to be a weekend, you can easily come across underprivileged children with their ever smiling faces who come there to learn from the philanthropic students determined to bring a change in the society through good education.
                </Typography>
                <Typography>
                    One of the star attractions of the SAC is an sports complex which has one modern gym machine and facilities of Table-Tennis, Carrom, Chess etc. We have also a outdoor ground for playing Volleyball, Kabaddi, Kho-Kho etc.
                </Typography>
                <Box sx={{display:'flex', flexWrap:'wrap', gap: '15px', margin: "15px auto"}}>
                {
                    activities.map((val, i) => <ActivitiyCard key={i} data={val} />)
                }
                </Box>
            </Box>
        </Box>
    </Box>)
}