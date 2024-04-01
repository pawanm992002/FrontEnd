import React, { useState } from 'react'

import { Box, Container, Typography } from '@mui/material'
import Members from '../../components/Members';

import {SectionSimulator} from '../Administration/Principal'

const TimeTables = () => {
    const [active, setActive] = useState('abouts');



    const timeTablesMembers = [
        { name: 'Dr. R. P. Sharma', designation: 'Coordinator' },
        { name: 'Sh. V.P. Sharma', designation: 'Co-coordinator' },
        { name: 'Dr. Tahir Ullah Khan', designation: 'Member' },
    ]

    return (
        <>
            <Container>

                <section id="timeTables">

                    <SectionSimulator title={'Time Tables & Class Management'} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%',margin:'10px 0' }} >

                        <Box onClick={() => setActive('abouts')} style={{ background: `${active === 'abouts' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'abouts' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >About</Typography>
                        </Box>


                        <Box onClick={() => setActive('members')} style={{ background: `${active === 'members' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'members' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Members</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'abouts' ? <TimeTableAboutSection/> :
                            <Members members={timeTablesMembers} />}
                    </Box>



                </section>

            </Container>
        </>
    )
}

export default TimeTables

//---------- About section for time tables related
const TimeTableAboutSection = () => {
    return (
        <>
            <Box sx={{marginLeft:'15px',marginBottom:'13px'}}>
                <ul style={{listStyleType:'number',lineHeight:'29px'}} >
                    <li>To Prepare institute time table at all levels including individual faculty memeber and lecture room.</li>
                    <li>To coordinate and finalize the department time tables.</li>

                    <li>To ensure proper facilities in the class room.</li>
                    <li>To advise on infrastructure facilities required in the class rooms.</li>

                    <li>To advise on future requirement of class room Vis-a-vis addition of new programs.</li>
                    <li>To upgrade the lecture rooms with modern audio video Internet facilities.</li>

                    <li>To ensure availablity of class room to every course.</li>
                    <li>To ensure proper conduction of classes according to time table.</li>
                    <li>Other related works to the section/ committee.</li>

                </ul>
            </Box>
        </>
    )
}