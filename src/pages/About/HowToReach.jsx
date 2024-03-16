import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const HowToReach = () => {
  return (
    <>
      <Container>

        <section id="HowToReach">
            
        <Box style={{background:'green',color:'white',margin:'15px 0'}}>
                    <Typography variant='h4' textAlign={'center'} >How To Reach</Typography>
                </Box>
            
        <p>{`Engineering College Ajmer is situated at 26° 27´ 13˝ Latitude (North) and 74° 42´ 30˝ Longitude (East).`}</p>

        <Typography variant='h5' margin={'5px 0'} >Air</Typography>
        <p>Jaipur, the nearest airport is 138 kms. {'('}86 miles{')'}.</p>

        <Typography variant='h5' margin={'5px 0'} >Rail</Typography>
        <p>Ajmer is connected to Delhi, Agra, Jaipur, Ahmedabad, Udaipur, Abu Road and Jodhpur by regular trains. Two of the best trains of the Indian Railways, Pink City Express and Shatabdi Express connect Ajmer to Delhi and Jaipur.</p>

        
        <Typography variant='h5' margin={'5px 0'}>Road</Typography>
        <p>A dense network of bus service operates from Ajmer to key destinations around. Distances from important tourist centres are:</p>

        <Grid container margin={'5px auto'} spacing={5}>
            <Grid item xs={12} md={6} >
            <Box style={{ background: 'green', color: 'white', padding: '10px', width: '100%', display: 'block' }} >

<Typography textAlign={'center'} >Google Map Location</Typography>

</Box>
<Box>
<figure>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114277.49838827149!2d74.5994624381494!3d26.48241195784676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be53a85e1c407%3A0xa7fe162fe30ea33!2sGovernment%20Engineering%20College%2C%20Ajmer!5e0!3m2!1sen!2sin!4v1710584611540!5m2!1sen!2sin" width={"100%"} height="290" allowFullScreen={'true'} loading="lazy" title='Google map location' referrerpolicy="no-referrer-when-downgrade"></iframe>
</figure>
</Box>
            </Grid>

            <Grid item xs={12} md={6} >
            <ul style={{margin:'0 5px'}}>
                <li>Jaipur: 138 kms(86 miles).</li>
                <li> Delhi: 392 kms(244 miles).</li>
                <li>Ahmedabad: 526 kms(327 miles).</li>
                <li>Jaisalmer: 490 kms(304 miles).</li>
                <li>Bikaner: 233 kms(145 miles).</li>
            </ul>
            </Grid>
        </Grid>

        


        </section>
      </Container>
    </>
  )
}

export default HowToReach
