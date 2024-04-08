import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

import '../../styles/style.css'


const History = () => {
  return (
    <>


      <Box width={"80%"} margin={'auto'} >
        <section id="History">

          <Box >
            <Typography variant='h5' className='double-line-bottom'  >History</Typography>
            <p style={{ padding: '7px 5px', textAlign: 'justify' }}>Established in the year 1997, Engineering College Ajmer, generally referred to as ECA is an autonomous institute of the Government of Rajasthan. Its foundation stone was laid by the former technical education minister honorable Shri Kalicharanji Saraf at Badaliya, Ajmer. A perfect amalgamation of innovation, inspiration and synergy Engineering College Ajmer aims to be a model institution for students across disciplines and programmes. Since its inception it has been promoting and encouraging research based experiential learning among all the students. It is one of the leading technical institutes in Rajasthan known for quality education, state of the art infrastructure, modern and well equipped laboratories, a well established digital library having RFID system, and above all an institute with maximum number of placements. The institute has the honour of having maximum placements among all the Government Colleges of Rajasthan.</p> </Box>

        </section>

        <section id="Campus">

          <Box >
            <Typography variant='h5' className='double-line-bottom'  >Campus</Typography>
            <p style={{ padding: '7px 5px', textAlign: 'justify' }}>Engineering College Ajmer, situated in the lap of Aravalli mountain ranges has a lush green campus spreading in around 300 acres of land, away from the hustle and bustle of the city, in a calm and serene environment adorned in its vicinity by the world famous Nareli Jain temples. The institute is located on NH 8 which connects Jaipur and Jodhpur.</p>

            <p style={{ padding: '7px 5px', textAlign: 'justify' }}>The campus is well constructed with several blocks which include the Civil and Electrical block, Central Library, Main building which houses the administrative block , Department of Computer Science and Information Technology and the Department of Masters in Computer Application. The new building has the Department of Applied Sciences and Humanities, Department of Electronics and Communication Engineering, Department of Mechanical Engineering and Department of Management Studies. Advancing forward towards the rear side is located the Guest house, Girls Hostel and Mechanical Workshop.</p>

            <p style={{ padding: '7px 5px', textAlign: 'justify' }}>The campus is a green, ecofriendly and hitech campus with Wifi facility throughout the premises. Carbon footprints are controlled using Solar Power Plant of 210 kW capacity which has been installed under RESCO mode by AZURE Rooftop One Pvt.Ltd and is functional since 2018. The plant generates on an average 840 kWh per day (306 MWh per year) and mitigates approximately 254 tonnes of carbondioxide annually (assuming emission factor of 0.83-CO2 per kWh). For the all round development of the student there are playgrounds and facility for indoor games is also available.</p>

          </Box>

        </section>

        <section id="QuickLinks">

          <Box >
            <Typography variant='h5' className='double-line-bottom'  >Quick Links {">>"}</Typography>

            <Box >
              <List>
                <ListItem>
                  <ListItemText > <a href='https://en.wikipedia.org/wiki/Government_Engineering_College,_Ajmer' target='blank' >🔗 Wikipedia Article</a> </ListItemText>
                </ListItem>
              </List>
            </Box>

          </Box>

        </section>

      </Box>
    </>
  )
}

export default History
