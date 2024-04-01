import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SectionSimulator } from '../Administration/Principal'
import Members from '../../components/Members';

const AcademicSection = () => {
    const [active, setActive] = useState('members');

    const sectionMembers = [
        { name: 'Dr. Devendra Choudhary', designation: 'Chief Coordinator Academics' },
        { name: 'Dr.R. P. Sharma', designation: 'U.G. Coordinator' },
        { name: 'Dr. Prakriti Trivedi', designation: 'P.G. Coordinator' },
        { name: 'Sh. D. K. Jamuwa', designation: 'Ph.D. Coordinator' },
        { name: 'Dr. Tahir Ullah Khan', designation: 'Member' },
    ]

    return (
        <>
            <Container>

                <section id="section">

                    <SectionSimulator title={'Academic Section'} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%',margin:'9px 0' }} >
                        <Box onClick={() => setActive('members')} style={{ background: `${active === 'members' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'members' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Members</Typography>
                        </Box>


                        <Box onClick={() => setActive('details')} style={{ background: `${active === 'details' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'details' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Details</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'members' ?
                            <Members members={sectionMembers} /> :
                            <SectionDetails />
                        }
                    </Box>



                </section>

            </Container>
        </>
    )
}

export default AcademicSection


//----------------------- Details of post graduate programs
const SectionDetails = () => {
    return (
        <>
            <Container  sx={{margin:"12px 0"}}>
                <Box>

                    <Typography variant='h5' sx={{ margin: '4px 0' }} > U.G.</Typography>

                    <Box sx={{ marginLeft: '10px' }}>

                        <ul style={{ listStyleType: 'number' }}>
                            <li>To prepare academic calendar and ralted works to this section.</li>
                            <li>To propose new U.G programs.</li>
                            <li>Coordinate the academic activities and related work.
                            </li>
                        </ul>
                    </Box>


                </Box>
                <Box>

                    <Typography variant='h5' sx={{ margin: '4px 0' }} > P.G.     </Typography>

                    <Box sx={{ marginLeft: '10px' }}>

                        <ul style={{ listStyleType: 'number' }}>
                            <li>To prepare academic calendar, P.G. Scholarship and related works to this section.</li>
                            <li>To propose new P.G. programs.</li>
                            <li>Coordinate the academic activities and related work.</li>
                        </ul>

                    </Box>
                </Box>

            </Container>
        </>
    )
}