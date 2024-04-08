import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import '../../styles/style.css'


const Vision = () => {


    return (
        <>


            <Box className='w-80' >
                <section id="Vision">
                    <Box >

                        <Typography variant='h5' className='double-line-bottom'  >Vision</Typography>
                        <p style={{ padding: '7px 5px' }}>To foster harmonious value oriented environment for all in an efficient innovative manner to contribute nation through excellence in academics and research.</p>


                    </Box>


                </section>
                <section id="Mission" >
                    <Box >

                        <Typography variant='h5' className='double-line-bottom'  >Mission</Typography>

                        <ul style={{ padding: '10px 25px' }}>
                            <li>To nurture value oriented competent professionals through conceptual, analytical and technical knowledge for overall sustainable societal development.</li>
                            <li>To achieve academic excellence in engineering, technology and science by imparting quality based education.</li>
                            <li>To strengthen managerial and entrepreneurial skills to start new ventures.</li>
                            <li>To inculcate inquisitive and research oriented approach.</li>
                        </ul>
                    </Box>


                </section>

            </Box>
        </>
    )
}

export default Vision
