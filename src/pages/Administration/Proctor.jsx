import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SectionSimulator } from './Principal'
import Circulars from '../../components/Circulars';
import Members from '../../components/Members';

const Proctor = () => {
    
    const [active, setActive] = useState('circulars'); 

    const proctorFacultyMembers = [
        { name: 'Dr. R. K. Motwani', designation: 'Chief Coordinator' },
        { name: 'Dr. Suresh Sahu', designation: 'Proctor (First Year)' },
        { name: 'Dr. Anil Maheshwari', designation: 'Proctor (First Year)' },
        { name: 'Smt. Shalini Walia', designation: 'Proctor (First Year)' },
        { name: 'Sh. Ravinder Singh', designation: 'Proctor (IT)' },
        { name: 'Dr. Lalit Kumar Dusad', designation: 'Proctor (ECE)' },
        { name: 'Sh. Deepak Gupta', designation: 'Proctor (Comp. Eng.)' },
        { name: 'Sh. Ajay Agarwal', designation: 'Proctor (EE)' },
        { name: 'Dr. Ganpat Singh', designation: 'Proctor (Civil)' },
        { name: 'Dr. Sandesh Trivedi', designation: 'Proctor (ME)' },
        { name: 'Dr. CP Jain', designation: 'Proctor (EI&CE)' },
        { name: 'Sh. Dinesh Kumar Khunteta', designation: 'Proctor (CY. Sec.)' },
        { name: 'Dr. Manish Badlani', designation: 'Proctor (MBA)' },
        { name: 'Sh. Gyan Singh', designation: 'Proctor (MCA)' },
    ]
    const proctorStaffMembers = [
        { name: 'Smt. Swati Mathur', designation: 'Assistant Registrar' },
        { name: 'Sh. Manish Kumar Sharma', designation: 'LDC' },
        { name: 'Sh. Satpal', designation: 'Lab. Attendant' },
    ]

    return (
        <>
            <Container>

                <section id="Proctor">

                    <SectionSimulator title={'Proctor'} />

                    {/* <marquee style={{cursor:'pointer'}} >For Any Inquiries Mail to <a href="mailto:draccounts@ecajmer.ac.in">draccounts@ecajmer.ac.in</a> </marquee> */}

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} >
                        <Box onClick={() => setActive('circulars')} style={{ background: `${active === 'circulars' ? 'green' : 'white'}`, color: `${active === 'circulars' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Circulars</Typography>
                        </Box>


                        <Box onClick={() => setActive('members')} style={{ background: `${active === 'members' ? 'green' : 'white'}`, color: `${active === 'members' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Members</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'circulars' ?
                            <Circulars /> :<>
                            <Typography variant='h6' sx={{margin:'10px auto'}} >Faculty Members</Typography>
                            <Members members={proctorFacultyMembers} />

                            <Typography variant='h6' sx={{margin:'10px auto'}} >Staffs</Typography >
                            <Members members={proctorStaffMembers} />
                        </>
                            }
                    </Box>



                </section>

            </Container>
        </>
    )
}

export default Proctor
