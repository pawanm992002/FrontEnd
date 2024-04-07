import { Typography,Box, Container, Divider, List, ListItem, useMediaQuery } from '@mui/material'
import React from 'react'

import { FaFacebook,FaLinkedin } from "react-icons/fa";
import { FaXTwitter,FaInstagram  } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  const Medium = useMediaQuery('(max-width:1150px)');
  const small = useMediaQuery('(max-width:900px)');
  return (
    <>
      <section id="Footer">

        {/* <Box  sx={{background:'grey',color:'white',padding:'9px'}}> */}
        <Box sx={{background:'url(https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/group-diverse-grads-throwing-caps-up-sky-1.jpg) center/cover no-repeat',height:'300px',lineHeight:'29px'}} >

          <Box sx={{width:'100%',height:'100%',backdropFilter:'blur(2px)',background:'#213153EB',color:'white'}} >

            <Container sx={{width:Medium?"100%":'90%',margin:'auto'}} >

<Box sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-around',paddingTop:'17px',lineHeight:'43px'}} >
            <Box sx={{width:small?"80%":Medium?"60%":'40%',border:'0px solid black',margin:'5px 10px'}}>
             {/* <small>Engineering College Ajmer</small>  */}
              <Typography variant='h4'>ECA</Typography>
              <p>231 Badlya Choraya, Nareli Ajmer, 305001, Rajasthan</p>
              <Box sx={{marginTop:'7px'}} >
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer',width:'50%'}}>
              <FaFacebook  size={'30px'}  />
              <FaLinkedin  size={'30px'} />
              <FaXTwitter  size={'30px'} />
              <FaInstagram  size={'30px'} />

                </Box>
              </Box>
            </Box>

            {/* <Divider style={{border:'0.59px solid white',height:'auto'}} ></Divider> */}


            <Box sx={{width:'40%',border:'0px solid black',margin:'5px 10px'}} >
              <Typography variant='h4'  >Contact US</Typography>
              <p> Tel:  {"(+0145),"} 923943  </p>
              <p>Can contact through the address, OR</p>

<Typography sx={{margin:'5px 0'}} >

              <a href="https://maps.app.goo.gl/gcoE27ERDKXeiqjt5" target='map' style={{cursor:'pointer',color:'white'}} > 🎯 Get Direction</a>
</Typography>
<Typography>
              <a href='mailTo:eca@gmail.com' target='mail' style={{cursor:'pointer',color:'white'}} > 📩 Send Us A Mail</a>
</Typography>

            </Box>

            {/* <Divider style={{border:'0.59px solid white',height:'100%'}} ></Divider> */}

            <Box sx={{width:'40%',border:'0px solid black',margin:'5px 10px'}} >
              <Typography variant='h4' >Usefull Links</Typography>

              <Box>
                <List>
                  <ListItem sx={{padding:'0 5px'}}> <Link style={{color:'white',}} >About US</Link> </ListItem>
                  <ListItem sx={{padding:'0 5px'}}> <Link style={{color:'white',}} >Departments</Link> </ListItem>
                  <ListItem sx={{padding:'0 5px'}}> <Link style={{color:'white',}} >Administration</Link> </ListItem>
                </List>
              </Box>

            </Box>
            </Box>


            </Container>


          </Box>

        </Box>

        <Box sx={{background:'black',padding:'19px',display:'flex',alignItems:'center',justifyContent:'space-between',color:'white'}} >
          <Typography> <b>Visitor</b> 134902 </Typography>
          <Typography> Copyright &copy; 2024 <span style={{fontWeight:'bold',color:'#1976d2'}} >ECA</span> | All rights reserved </Typography>
        </Box>

      </section>
    </>
  )
}

export default Footer
