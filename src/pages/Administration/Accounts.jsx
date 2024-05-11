import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SectionSimulator } from './Principal'
import Members from '../../components/Members';
import { fetchAccountCircular } from '../../api/adminstration';
import MyTable from '../../components/utilily/MyTable';

const Accounts = () => {
    const [active, setActive] = useState('circulars');
    const [Circulars, setCirculars] = useState([]);

    useEffect(() => {
      (async () => {
        if (active === "circulars") {
          const circulars = await fetchAccountCircular();
          setCirculars(
            circulars?.map((val) => {
              return {
                SR_NO: val.SR_NO,
                Title: val.Title,
                Section: val.Section,
                Notice: val.Notice,
              };
            })
          );
        }
      })();
    }, [active]);

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
            <Box className='w-80'>

                <section id="Accounts">

                    <SectionSimulator title={'Accounts'} />

                    {/* <marquee style={{cursor:'pointer'}} >For Any Inquiries Mail to <a href="mailto:draccounts@ecajmer.ac.in">draccounts@ecajmer.ac.in</a> </marquee> */}

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} >
                        <Box onClick={() => setActive('circulars')} style={{ background: `${active === 'circulars' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'circulars' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Circulars</Typography>
                        </Box>


                        <Box onClick={() => setActive('members')} style={{ background: `${active === 'members' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'members' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Members</Typography>
                        </Box>
                    </Box>

                    <Box sx={{marginBottom: '10px'}}>
                        {active === 'circulars' ?
                            <MyTable data={Circulars} /> :
                            <Members members = {accountMembers} />}
                    </Box>
                </section>
            </Box>
        </>
    )
}

export default Accounts
