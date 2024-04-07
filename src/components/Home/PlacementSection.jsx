import React, { useState } from 'react'
import ModalComponent from '../Modal'
import { Box, Button, Container, Divider, Typography, useMediaQuery } from '@mui/material'
import { LineChart } from './PlacementChart'

const PlacementSection = () => {
  //------------- Control the modal component 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navView = useMediaQuery("(min-width:900px)");
  const Medium = useMediaQuery("(min-width:1300px)");
  const smallMed = useMediaQuery("(min-width:1000px)");
  return (
    <>
      
      <section id="Placements">
        {/* ------------ handling the model for placement data -------------  */}
        <ModalComponent open={open} handleClose={handleClose} content={
          <>
            {/* ----------- Placement data to show the users   */}
            <Box sx={{ width: '80%', margin: 'auto' }}>

              <Typography variant='h5' sx={{ textAlign: 'center' }} >Placements @ECA</Typography>

              <LineChart />
            </Box>
          </>
        } />

        <Box sx={{ width: !Medium?"100%":'90%', margin: 'auto' }} >

          <Box sx={{ display: 'flex',flexDirection:navView?'row':'column', alignItems: 'flex-start', justifyContent: 'space-evenly',width: Medium?"80%":smallMed?'90%':"95%",margin:'auto',height:'100%' }} >
            <img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/group-of-happy-international-students-posing-outdoors-near-university-building.jpg" alt="placements" width={"50%"}  style={{ borderRadius: '12px', boxShadow: '2px 4px 9px black',minWidth:smallMed?"500px":navView?"400px":"100%",height:navView?"auto":"300px" }} />

            <Container sx={{ padding: '0px 5px 5px 5px',display:'flex',flexDirection:'column',justifyContent:'space-between',height:Medium?"360px":'100%' }} >
            {/*  <small>About Placements</small> */}
            <Typography sx={{ marginBottom: '5px', fontSize:Medium?50:40 }} variant='h3' >Placements In <span style={{ color: '#1976d2',fontSize:Medium?50:40}}> ECA  </span></Typography>
            <Box sx={{display:'flex',flexDirection:'column',gap:1.2}}>
              <Typography> Amazing placement record in ECA, you amazing that, our last year record in ECA is amazing. Overall 98% students are placed in all departments</Typography>
              <p style={{ margin: '5px auto' }}>We are providing the training and placement programs, so that all students get to chance to work with Big MNCs and get Engage working experience </p>
              {/* <Typography > Next? <span style={{ fontSize: '50px' }}>🫵</span></Typography> */}
              <Button variant='outlined' sx={{width:'fit-content'}} onClick={handleOpen} >Discover</Button>
            </Box>
            </Container>
          </Box>

          <Box className='flex' sx={{ display:'flex',flexWrap:Medium?"nowrap":'wrap', width: Medium?"80%":navView?"90%":'100%',margin:'auto',marginTop:'30px' }} >

            <Box sx={{ display: 'flex' ,padding: '9px 12px', border: '0px solid black', margin: 'auto 10px', fontWeight: 'bold', width: '25%',minWidth:'200px',alignItems:'center' }}>
              <Typography variant={navView?"h4":'h6'} sx={{ paddingRight: '5px' }} >A+</Typography>

              <p >Graded By NBA, 1st In Ajmer</p>
            </Box>
            {navView&&<Divider orientation='vertical' sx={{width:'1px', height:'65px',backgroundColor:'gray'}}  />}
            <Box sx={{ display: 'flex', padding: '9px 12px', border: '0px solid black', margin: 'auto 10px', fontWeight: 'bold', width: '25%',minWidth:'200px',alignItems:'center' }} >
              <Typography variant={navView?"h4":'h6'} sx={{ paddingRight: '5px' }}>60%</Typography>
              <p >Placed in last year</p>
            </Box>
            {navView&&<Divider orientation='vertical' sx={{width:'1px', height:'65px',backgroundColor:'gray'}}  />}

            <Box sx={{ display: 'flex', padding: '9px 12px', border: '0px solid black', margin: 'auto 10px', fontWeight: 'bold', width: '25%',minWidth:'200px',alignItems:'center' }}>
              <Typography variant={navView?"h4":'h6'} sx={{ paddingRight: '5px' }}>6%</Typography>
              <p >Increment, in our college students</p>
            </Box>
            {navView&&<Divider orientation='vertical' sx={{width:'1px', height:'65px',backgroundColor:'gray'}}  />}

            <Box sx={{ display: 'flex', padding: '9px 12px', border: '0px solid black', margin: 'auto 10px', fontWeight: 'bold', width: '25%',minWidth:'200px',alignItems:'center' }}>
              <Typography variant={navView?"h4":'h6'} sx={{ paddingRight: '5px' }}>10K</Typography>
              <p >Undergraduate from the college</p>
            </Box>

          </Box>
        </Box>

      </section>
    </>
  )
}

export default PlacementSection