import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SectionSimulator } from './Principal'
import Circulars from '../../components/Circulars';
import Members from '../../components/Members';

const ExaminationSection = () => {

    const [active, setActive] = useState('circulars');

    const examinationFacultyMembers = [
        { name: 'Dr. Chandan Sharma', designation: 'Chief Coordinator' },
        { name: 'Dr. Atul Choudhary', designation: 'Co-coordinator' },
        { name: 'Sh. Dilip Sisodia', designation: 'Co-coordinator' },
        { name: 'Dr. Tarun Kumar Aseri', designation: 'Co-coordinator' },
        { name: 'Dr. Adarsh Mangal', designation: 'Co-coordinator' },
        { name: 'Sh. Harish Sharma', designation: 'Co-coordinator' },
    ]
    const examinationStaffMembers = [
        { name: 'Sh. Nitesh Kumar Suman', designation: 'LDC' },
        { name: 'Sh. Mahendra Singh Godara', designation: 'Lab. Attendant' },
        { name: 'Sh. Mahaveer Prashad Yadav', designation: 'Attendant' },
    ]

    return (
        <>
            <Container>

                <section id="Accounts">

                    <SectionSimulator title={'Examination Section'} />

                    {/* <marquee style={{cursor:'pointer'}} >For Any Inquiries Mail to <a href="mailto:draccounts@ecajmer.ac.in">draccounts@ecajmer.ac.in</a> </marquee> */}

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} >
                        <Box onClick={() => setActive('circulars')} style={{ background: `${active === 'circulars' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'circulars' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Circulars</Typography>
                        </Box>


                        <Box onClick={() => setActive('members')} style={{ background: `${active === 'members' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'members' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Members</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'circulars' ?
                            <Circulars /> : <>
                                <Typography variant='h6' sx={{margin:'10px auto'}} >Faculty Members</Typography>
                                <Members members={examinationFacultyMembers} />

                                <Typography variant='h6' sx={{margin:'10px auto'}} >Staffs</Typography >
                                <Members members={examinationStaffMembers} />
                            </>
                        }
                    </Box>



                </section>

            </Container>
        </>
    )
}

export default ExaminationSection
