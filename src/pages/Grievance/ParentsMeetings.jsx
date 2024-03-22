import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SectionSimulator } from '../Administration/Principal'
import Members from '../../components/Members';

const ParentsMeetings = () => {
    const [active, setActive] = useState('members');

    const meetsMembers = [
        { name: 'Sh. Y. K. Gupta, Associate Professor', designation: 'Convenor' },
        { name: 'Registrar', designation: 'Member' },
        { name: 'Deputy Registrar (F)', designation: 'Member' },
        { name: 'Sh. Prakash Meena', designation: 'Member' },
        { name: 'Sh. Vivek Dubey', designation: 'Member' },
    ]

    return (
        <>
            <Container>

                <section id="section">

                    <SectionSimulator title={'Student/Parent/Employe Cell'} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} >
                        <Box onClick={() => setActive('members')} style={{ background: `${active === 'members' ? 'green' : 'white'}`, color: `${active === 'members' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Members</Typography>
                        </Box>


                        <Box onClick={() => setActive('details')} style={{ background: `${active === 'details' ? 'green' : 'white'}`, color: `${active === 'details' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Details</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'members' ?
                            <Members members={meetsMembers} /> :
                            <MeetsMembersDetails />
                        }
                    </Box>



                </section>

            </Container>
        </>
    )
}

export default ParentsMeetings


//----------------------- Details of post graduate programs
const MeetsMembersDetails = () => {
    return (
        <>
            <Container >

                <p>The primary objective of grievance cell is to resolve the complaints of students, parents, and employees. This Institution aims to provide mechanism to the students for redressal of their grievances with regard to their complaints on academic and non-academic matters, grievances related to assessment, attendance, conducting of examinations, and harassment by colleague students etc.</p>

                <p style={{marginTop:'10px'}} >The objective of the Grievance Cell is to develop a responsive and accountable attitude among all the stakeholders in order to maintain a harmonious educational atmosphere in the institute.</p>

            </Container>
        </>
    )
}