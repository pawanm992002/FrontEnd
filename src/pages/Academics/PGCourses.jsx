import { Box, Container, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SectionSimulator } from '../Administration/Principal'
import Circulars from '../../components/Circulars';
import Members from '../../components/Members';
import { Link } from 'react-router-dom';

const PGCourses = () => {
    const [active, setActive] = useState('circulars');

    const PGCoursesDetails = [
        { course: 'Computer Science & Eng.', intake: '9' },
        { course: 'Digital Communication', intake: '18' },
        { course: 'Software Eng.', intake: '9' },
        { course: 'Product Eng.', intake: '18' },
        { course: 'Information Technology', intake: '9' },
        { course: 'Renewable Energy', intake: '18' },
        { course: 'Power Systems', intake: '18' },
        { course: 'VLSI Design & Embedded Systems', intake: '18' },
    ]

    return (
        <>
            <Container>

                <section id="PGCourses">

                    <SectionSimulator title={'Post Graduate Programs'} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} >
                        <Box onClick={() => setActive('circulars')} style={{ background: `${active === 'circulars' ? 'green' : 'white'}`, color: `${active === 'circulars' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Circulars</Typography>
                        </Box>


                        <Box onClick={() => setActive('details')} style={{ background: `${active === 'details' ? 'green' : 'white'}`, color: `${active === 'details' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Details</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'circulars' ?
                            <Circulars /> :
                            <PGDetails data={PGCoursesDetails} />
                        }
                    </Box>



                </section>

            </Container>
        </>
    )
}

export default PGCourses


//----------------------- Details of post graduate programs
const PGDetails = ({ data }) => {
    return (
        <>
            <Box>
                <Box>

                    <Typography variant='h5' sx={{ margin: '7px 0' }} > <Link to={'/academics/mtech'}>
                        Master of Technology {"("}M.Tech {")"} {">>"} </Link> </Typography>
                    <Typography sx={{ margin: '7px 0' }}>Two years{" ("} 4 semesters {")"} programme in: </Typography>

                    <Members members={data} name='courses' designation='intake' />
                </Box>

                {/* ----------- MCA Program details  */}
                <Box>

                    <Typography variant='h5' sx={{ margin: '7px 0' }} > <Link to='/academics/mca'>Master of TechnologyMaster of Computer Applications  {"("}MCA {")"} {">>"}</Link>       </Typography>
                    <Typography sx={{ margin: '7px 0' }}>Two years {"("} 4 semesters{")"} programme in the Department of MCA. Students are selected for admission to the MCA programme through Rajasthan MCA Admission Test {"("}RMCAAP{")"}.

                    </Typography>
                </Box>

                {/* --------------- MBA Program details  */}

                <Divider sx={{ fontWeight: 'bold',border:'1px solid black' }} />
                <Box>

                    <Typography variant='h5' sx={{ margin: '7px 0' }} > <Link to='/academics/mba'>Master of Business Administration  {"("}MBA {")"} {">>"}</Link>
                    </Typography>
                    <Typography sx={{ margin: '7px 0' }}>Two years {"("} 4 semesters{" )"} programme in the Department of Management Studies. Students are selected for admission to the MBA programme through Rajasthan Management Admission Process {"("}RMAP{")"}.

                    </Typography>
                </Box>

            </Box>
        </>
    )
}