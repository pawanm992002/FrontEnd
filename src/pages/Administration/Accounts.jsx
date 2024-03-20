import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SectionSimulator } from './Principal'
import Circulars from '../../components/Circulars';
import Members from '../../components/Members';

const Accounts = () => {
    const [active, setActive] = useState('circulars');

    const accountMembers = [
        { name: 'Dr. Kamlesh Upadhyay', designation: 'Dy. Registrar (F)' },
        { name: 'Sh. Himanshu Mathur', designation: 'Jr. Acct.' },
        { name: 'Sh. Prahalad Sharma', designation: 'Jr. Acct.' },
        { name: 'Sh. Praveen Kumar Gupta', designation: 'Jr. Acct.' },
        { name: 'Sh. K.K. Bhardwaj', designation: 'Jr. Acct.' },
        { name: 'Smt. Santosh Yadav', designation: 'Cashier' },
        { name: 'Sh. Madan Mohan', designation: 'D.E.O' },
        { name: 'Sh. Mahesh Chand Meena', designation: 'LDC' },
    ]

    return (
        <>
            <Container>

                <section id="Accounts">

                    <SectionSimulator title={'Accounts'} />

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
                            <Circulars /> :
                            <Members members = {accountMembers} />}
                    </Box>



                </section>

            </Container>
        </>
    )
}

export default Accounts
