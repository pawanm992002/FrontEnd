
import React, { useState } from 'react'
import { Box, Button, Container, Typography, Grid, useMediaQuery } from '@mui/material'

import ModalComponent from '../Modal'

const GallerySection = () => {


  //------------- Control the modal component 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const large = useMediaQuery('(max-width:1100px)');
const small = useMediaQuery('(max-width:800px)');
const Xsmall = useMediaQuery('(max-width:700px)');
const XXS = useMediaQuery('(max-width:620px)');
  console.log("large => ",large," small => ",small);
  
  return (
    <>
      <section id="Gallery" style={{ margin: '12px 0' }}>

        {/* ------------ handling the model for gallery data -------------  */}
        <ModalComponent open={open} handleClose={handleClose} content={
          <>
            <Box sx={{ width: large?small?"100%":"90%":'80%', margin: 'auto' }}>

              <Grid container sx={{ width: '100%', margin: 'auto' }}  >

                <Grid item xs={12} md={4} sx={{ border: '1px solid black', height: '175px', width: '30px', padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/young-students-painting-on-canvas-during-lesson-in-faculty-of-arts-university.jpg" alt="gallery" width={'100%'} />
                </Grid>
                <Grid item xs={12} md={3} sx={{ border: '1px solid black', height: '175px', width: '30px', padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/doctor-examines-the-patient-s-pulse-with-stethoscope-and-records-the-results-health-medical-checkup.jpg" alt="gallery" width={'100%'} />
                </Grid>

                <Grid item xs={12} md={4} sx={{ border: '1px solid black', height: '175px', width: '30px', padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/doctor-examines-the-patient-s-pulse-with-stethoscope-and-records-the-results-health-medical-checkup.jpg" alt="gallery" width={'100%'} />
                </Grid>

              </Grid>

            </Box>
          </>
        } />




        <Box sx={{justifyContent:"center"}}>

<Box sx={{ display:'flex',marginBottom:'10px', width:'100%',justifyContent:'center' }} >
<Typography variant='h5' className='double-line-bottom' > Galery@ECA </Typography>
</Box>

  <Container sx={{ width: XXS?"90%":large?small?"100%":'90%':'80%', margin: 'auto',p:0 }} >
    <Grid container sx={{ display:'grid',gridTemplateColumns:XXS?"1fr":Xsmall?"1fr 1fr":'1fr 1fr 1fr', width: '100%', margin: 'auto',gap:'5px' }}  >

      <Grid item  sx={{ border: '1px solid black', height: '250px', width:'100%' , padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/young-students-painting-on-canvas-during-lesson-in-faculty-of-arts-university.jpg" alt="gallery" width={'100%'} height={'100%'} />
      </Grid>
      <Grid item  sx={{ border: '1px solid black', height: '250px', width:'100%' , padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/doctor-examines-the-patient-s-pulse-with-stethoscope-and-records-the-results-health-medical-checkup.jpg" alt="gallery" width={'100%'}  height={'100%'} />
      </Grid>
      <Grid item  sx={{ border: '1px solid black', height: '250px', width:'100%' , padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/university-students-using-laptops-and-digital-tablet-working-together.jpg" alt="gallery" width={'100%'}  height={'100%'} />
      </Grid>
      <Grid item  sx={{ border: '1px solid black', height: '250px', width:'100%' , padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/university-students-using-laptops-and-digital-tablet-working-together.jpg" alt="gallery" width={'100%'} height={'100%'}  />
      </Grid>
      <Grid item  sx={{ border: '1px solid black', height: '250px', width:'100%' , padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/young-students-painting-on-canvas-during-lesson-in-faculty-of-arts-university.jpg" alt="gallery" width={'100%'} height={'100%'}  />
      </Grid>
      <Grid item  sx={{ border: '1px solid black', height: '250px', width:'100%' , padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/university-students-using-laptops-and-digital-tablet-working-together.jpg" alt="gallery" width={'100%'} height={'100%'}  />
      </Grid>
        </Grid>

            <Box sx={{ width: 'fit-content',mt:1, marginInlineStart: 'auto' }} >

              <Button variant='outlined' onClick={handleOpen} >Browse All</Button>
            </Box>
            </Container>
            </Box>
  </section>
    </>
  )
}

export default GallerySection
