import { Box, Typography } from '@mui/material'
import React from 'react'

import '../../styles/style.css'


const SightSeeing = () => {
    return (
        <>
            <Box width={"80%"} margin="auto" padding={"7px"} >

                <section id="SightSeeing">

                    <Box style={{ display: 'flex', alignItems: 'flex-start', margin: '16px auto', width: '100%',flexWrap:'wrap' }} >
                        <Box width={["100%","40%"]} margin={'auto'}  >
                            <img style={{ width: '90%', margin: '0 5px', border: '2px solid black ', borderRadius: '12px',boxShadow:'2px 5px 12px black' }} src="https://www.jagranimages.com/images/newimg/16022023/16_02_2023-ajmer_dargah_23331218.jpg" alt='img' />
                        </Box>
                        <Box padding={'0 10px'} width={["100%","60%"]} >
                            <Typography variant='h5' style={{ margin: '5px 0', textTransform: 'capitalize',textAlign:['center','left'] }} >The Dargah of Khawaja Saheb</Typography>
                            <p style={{ textAlign: 'justify' }} >The Dargah of Khawaja Saheb or Khawaja Sharif is at the foot of a barren hill. The shrine is next only to Mecca and Medina for the Muslims of South Asia. It is said that Akbar used to make a pilgrimage to the Dargah from Agra once a year. The saint's tomb with a splendid marble dome is in the center of the second courtyard, which is surrounded by a silver platform. There is another mosque in the courtyard built by Shahjahan, the most marvelous of all the sanctums within the sanctuary of the Dargah.</p>
                        </Box>
                    </Box>


                    <Box style={{ display: 'flex', alignItems: 'flex-start', margin: '16px auto', width: '100%',flexWrap:'wrap-reverse' }} >

                        <Box padding={'0 10px'} width={["100%","60%"]} >
                            <Typography variant='h5' style={{ margin: '5px 0', textTransform: 'capitalize',textAlign:['center','left'] }} >Pushkar, The Noval Place</Typography>
                            <p style={{ textAlign: 'justify' }} >Pushkar is a holy town in the state of Rajasthan famous for the Pushkar lake, various ghats and temples spread all around the lake. The word 'Pushkar' means lotus flower, which is said to be the seat of Brahma, one of the Hindu holy trinity, who is worshipped as the creator of this world. The legend has it that the demon Vajra Nabha killed Brahma's children, he in turn struck him with his weapon, a lotus flower. Vajra Nabha died with the impact..</p>
                        </Box>
                        <Box width={["100%","40%"]} margin={'auto'} >
                            <img style={{ width: '90%', margin: '0 5px', border: '2px solid black ', borderRadius: '12px',boxShadow:'2px 5px 12px black' }} src="https://www.revv.co.in/blogs/wp-content/uploads/2021/02/Pushkar.jpg" alt='img' />
                        </Box>
                    </Box>


                </section>

            </Box>

        </>
    )
}

export default SightSeeing
