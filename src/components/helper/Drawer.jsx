import  React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

export default function Drawer({ open, toggleDrawerOpen, toggleDrawerClose }) {

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    //   onClick={toggleDrawer(false)}
    //   onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['info@ecajmer.ac.in', '645948465168'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link to={'/faculty/login'}>
            <ListItemButton>
              <ListItemText primary='Faculty Login' />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <a href={'https://www.ecajmer.ac.in/mailDirectory'} target="_blank" rel="noopener noreferrer">

            <ListItemButton>
              <ListItemText primary='Admission' />
            </ListItemButton>
          </a>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>

      <SwipeableDrawer
        anchor={'right'}
        open={open}
        onClose={toggleDrawerClose}
        onOpen={toggleDrawerOpen}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
