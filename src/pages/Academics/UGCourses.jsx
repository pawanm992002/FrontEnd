import { Box, Container, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SectionSimulator } from '../Administration/Principal'
import Circulars from '../../components/Circulars';
import Members from '../../components/Members';
import { Link } from 'react-router-dom';

const UGCourses = () => {
    const [active, setActive] = useState('circulars');

    const UGCoursesDetails = [
        { department: 'Computer Science & Eng.', seat: '0 / 120' },
        { department: 'Computer Science & Eng. (Cyber Security)', seat: '0 / 60' },
        { department: 'Information Technology', seat: '0 / 60' },
        { department: 'Electronics & Communication Eng.', seat: '40 / 50' },
        { department: 'Electronics Instrumentation & Control Eng.', seat: '40 / 20' },
        { department: 'Electrical Eng.', intake: '0 / 45' },
        { department: 'Mechnical Eng.', seat: '40 / 35' },
        { department: 'Civil Eng.', intake: '0 / 60' },
    ]

    return (
        <>
            <Box className='w-80'>

                <section id="UGCourses">

                    <SectionSimulator title={'Under Graduate Programs'} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} >
                        <Box onClick={() => setActive('circulars')} style={{ background: `${active === 'circulars' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'circulars' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Circulars</Typography>
                        </Box>


                        <Box onClick={() => setActive('details')} style={{ background: `${active === 'details' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'details' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Details</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'circulars' ?
                            <Circulars /> :
                            <UGDetails data={UGCoursesDetails} />
                        }
                    </Box>



                </section>

            </Box>
        </>
    )
}

export default UGCourses


//----------------------- Details of post graduate programs
const UGDetails = ({ data }) => {
    return (
        <>
            <Box>
                <Box sx={{lineHeight:'15px'}}>

                    <Typography variant='h5' sx={{ margin: '5px 0' }} > <Link to={'/academics/btech'}>
                        Bachelor of Technology {"("}B.Tech {")"} {">>"} </Link>
                    </Typography>
                    <Typography sx={{ margin: '5px 0' }}>Govt. Engineering college Ajmer presently offers the following Programmes in the bachelors level:  </Typography>

                    <Members members={data} name='departments' designation='Govt / SFS Seats' />
                </Box>

                <Box>

                    <Typography > Additional to above specified intake, 5% of total intake is additional for fee waiver students {"("}TFWS{")"}. Students are selected for admission to the above programmes through REAP.
                    </Typography>
                    <Divider />
                    <Typography sx={{margin:'5px 0'}}>For more information mail to : <a href="mailto:principal@ecajmer.ac.in">principal@ecajmer.ac.in</a> ,
                        <a href="mailto:proctor@ecajmer.ac.in">proctor@ecajmer.ac.in</a>

                    </Typography>
                </Box>

            </Box>
        </>
    )
}