import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import '../../styles/style.css'

const SightSeeingData = [
    {
        placeName: 'The Dargah of Khawaja Saheb (Ajmer Dargah)',
        img: 'https://www.ecajmer.ac.in/images/ajmer.jpg',
        description: "The Dargah of Khawaja Saheb or Khawaja Sharif is at the foot of a barren hill. The shrine is next only to Mecca and Medina for the Muslims of South Asia. It is said that Akbar used to make a pilgrimage to the Dargah from Agra once a year. The saint's tomb with a splendid marble dome is in the center of the second courtyard, which is surrounded by a silver platform. There is another mosque in the courtyard built by Shahjahan, the most marvelous of all the sanctums within the sanctuary of the Dargah.",
        // text : 'Tourism Places at Ajmer',
        // link : 


    },
    {
        placeName: 'pushkar',
        img: 'https://www.ecajmer.ac.in/images/pushkar.jpg',
        description: "Pushkar is a holy town in the state of Rajasthan famous for the Pushkar lake, various ghats and temples spread all around the lake. The word 'Pushkar' means lotus flower, which is said to be the seat of Brahma, one of the Hindu holy trinity, who is worshipped as the creator of this world. The legend has it that the demon Vajra Nabha killed Brahma's children, he in turn struck him with his weapon, a lotus flower. Vajra Nabha died with the impact, and the petals of the lotus fell at three places. One of them is Pushkar, where it gave birth to a lake. Brahma is supposed to have performed sacrifice at this lake on Kartik Purnima (the full moon day of the Kartik month (generally in the month of November)), hallowing the place. Though Brahma is considered to be the creator of the world, Pushkar is the only temple of this important deity in the whole world. ",
        // text : 'Tourism Places at Ajmer',
        // link : 


    },
]

const SightSeeing = () => {
    return (
        <>
            <Container>

                <section id="SightSeeing">

                    {SightSeeingData?.map((item, i) => (
                        <Box key={i} style={{ display: 'flex',flexWrap:'wrap', alignItems: 'center', margin: '16px auto' }} >
                            <Box maxWidth={'80%'} minWidth={'80%'} margin={'auto'} >
                                <img style={{ width:'100%', margin: '0 5px', border: '2px solid black ', borderRadius: '12px' }} src={item?.img} alt='img' />
                            </Box>
                            <Box margin={'5px 10px'}>
                                <Typography variant='h5' style={{ margin: '5px', textTransform: 'capitalize' }} >{item?.placeName}</Typography>
                                <p style={{textAlign:'justify'}} >{item?.description}</p>
                            </Box>
                        </Box>

                    ))}



                </section>

            </Container>

        </>
    )
}

export default SightSeeing
