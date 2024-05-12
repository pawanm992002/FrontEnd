import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore, Inbox, Login, Mail, Phone, PhoneAndroid, Star } from '@mui/icons-material';
import { useState } from 'react';
import { Collapse, ListSubheader, useMediaQuery } from '@mui/material';



export default function Drawer({open,toggleDrawerOpen,toggleDrawerClose,data}) {
  const [Opens, setOpens] = useState({
    0:false,
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false
  });

const Small = useMediaQuery('(max-width:1100px)')
const handleClick = (propertyKey) => {
  setOpens((prevState) => ({
    ...prevState,
    [propertyKey]: !prevState[propertyKey],
  }));
};

const Links = (view)=>(
  <Box
  position=''
  bottom={'0'}
  width={'100%'}
  >
  <List>
    {['info@ecajmer.ac.in', '556841568166'].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <Mail /> : <Phone />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  <Divider />
  <List>
    {['Faculty Login','Screen Reader'].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <Login /> : <PhoneAndroid />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
</Box>
  )

  const list = () => (
    <>
  {data?.map((item,key)=>{
    return(
      <>
  <ListItemButton onClick={()=>{handleClick(key)}}>
  <ListItemIcon>
    <Inbox />
  </ListItemIcon>
  <ListItemText primary={item[0]} />
  {Opens[key] ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
<Collapse in={Opens[key]} timeout="auto" unmountOnExit>
<List component="div" disablePadding>
   {
item[1].map((d,k)=>{
  console.log("guygjk=>",d);
  return(
  <ListItemButton sx={{ pl: 4 }}>
  <ListItemIcon>
  <Star />
  </ListItemIcon>
  <ListItemText primary={d.name} />
  </ListItemButton>
  )
})
    }
</List>
</Collapse>
</>
)})
}
</>
  );

  return (
    <div style={{maxWidth:'90vw'}}>

          <SwipeableDrawer
            anchor={'right'}
            open={open}
            onClose={toggleDrawerClose}
            onOpen={toggleDrawerOpen}
            sx={{maxWidth:'90%'}}
          >
          <Box
          sx={{ width : 400,maxWidth:'90vw',display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100vh' }}
          role="presentation"
        >
        {Small &&
        <List
        sx={{ width: '100%',maxWidth:'90%', bgcolor: 'background.paper'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
            {list()} 
            </List>
        }    
            {Links(Small)}
          </Box>
          </SwipeableDrawer>
    </div>
  );
}