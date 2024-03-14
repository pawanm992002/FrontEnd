import React from 'react'

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Achievement = () => {

    //--------- function call to updating the achievements one by one
    const showNextAchievement = ()=>{

    }
    
  return (
    <>
      {/* --------- Achievement section to showing our cards and banner  */}
      <Box sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}} >
                <AchievementCard image={'https://www.ecajmer.ac.in/Images/img14.jpeg'} title={'Aditi Agarwal'} description={'Win a smart-phone on R-CAT competition'} />
            </Box>
    </>
  )
}

export default Achievement


//--------- Card component for the the achievement 
export const AchievementCard = ({ image, title, description })=> {
  return (
    <Card sx={{m:2,backgroundColor:'var(--primary-bg)',color:'white',cursor:'pointer'}} >
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt="Image"
      />
      <CardContent>
        <Typography sx={{textTransform:'capitalize'}} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}