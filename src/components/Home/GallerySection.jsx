
import React, { useState } from 'react'
import { Box, Button, Container, Typography, Grid } from '@mui/material'

import ModalComponent from '../Modal'

const GallerySection = () => {


  //------------- Control the modal component 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <section id="Gallery" style={{ margin: '12px 0' }}>

        {/* ------------ handling the model for gallery data -------------  */}
        <ModalComponent open={open} handleClose={handleClose} content={
          <>
            <Box sx={{ width: '80%', margin: 'auto' }}>

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

          <Typography sx={{ textAlign: 'center', margin: '7px 0', fontWeight: 'bold' }} variant='h3' >Gallery</Typography>

          <Box sx={{ width: '80%', margin: 'auto' }} >
            <Grid container sx={{ justifyContent: 'center'}}  >

              <Grid item xs={12} md={3} sx={{ border: '1px solid black', height: '175px', width: '30px', padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/young-students-painting-on-canvas-during-lesson-in-faculty-of-arts-university.jpg" alt="gallery" width={'100%'} />
              </Grid>
              <Grid item xs={12} md={4} sx={{ border: '1px solid black', height: '175px', width: '30px', padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/doctor-examines-the-patient-s-pulse-with-stethoscope-and-records-the-results-health-medical-checkup.jpg" alt="gallery" width={'100%'} />
              </Grid>
              <Grid item xs={12} md={4} sx={{ border: '1px solid black', height: '175px', width: '30px', padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/university-students-using-laptops-and-digital-tablet-working-together.jpg" alt="gallery" width={'100%'} />
              </Grid>
              <Grid item xs={12} md={3} sx={{ border: '1px solid black', height: '175px', width: '30px', padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/university-students-using-laptops-and-digital-tablet-working-together.jpg" alt="gallery" width={'100%'} />
              </Grid>
              <Grid item xs={12} md={4} sx={{ border: '1px solid black', height: '175px', width: '30px', padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/young-students-painting-on-canvas-during-lesson-in-faculty-of-arts-university.jpg" alt="gallery" width={'100%'} />
              </Grid>
              <Grid item xs={12} md={4} sx={{ border: '1px solid black', height: '175px', width: '30px', padding: '0', overflow: 'hidden', margin: '2px' }} ><img src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/university-students-using-laptops-and-digital-tablet-working-together.jpg" alt="gallery" width={'100%'} />
              </Grid>

            </Grid>

            <Box sx={{ width: '12%', marginInlineStart: 'auto' }} >

              <Button variant='outlined' onClick={handleOpen} >Browse All</Button>
            </Box>
          </Box>
        </Box>

      </section>
    </>
  )
}

export default GallerySection
