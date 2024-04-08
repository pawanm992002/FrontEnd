import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SectionSimulator } from '../Administration/Principal'
import Members from '../../components/Members';
import { Link } from 'react-router-dom';

const Category = () => {
    const [active, setActive] = useState('members');

    const categoryMembers = [
        { name: 'Sh. Gunaram Choudhary', designation: 'Convenor' },
        { name: 'Sh. Tarun Aseri', designation: 'Member' },
        { name: 'Sh. Prakash Meena', designation: 'Member' },
        { name: 'Dr. Amit Kumar Chaturvedi', designation: 'Member' },
        { name: 'Smt. Seema Sharma', designation: 'Member' },
    ]

    return (
        <>
            <Box className='w-80'>

                <section id="section">

                    <SectionSimulator title={'SC/ST/OBC Cell'} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} >
                        <Box onClick={() => setActive('members')} style={{ background: `${active === 'members' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'members' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Members</Typography>
                        </Box>


                        <Box onClick={() => setActive('details')} style={{ background: `${active === 'details' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'details' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Details</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'members' ?
                            <Members members={categoryMembers} /> :
                            <CategoryDetails />
                        }
                    </Box>



                </section>

            </Box>
        </>
    )
}

export default Category


//----------------------- Details of post graduate programs
const CategoryDetails = () => {
    return (
        <>
            <Container sx={{margin:'14px 0'}} >
                <Box>
                    <Typography variant='h5' sx={{ margin: '4px 0' }} > Vision</Typography>

                    <p>To be an institution of excellence in higher education that continually responds to the changing social realities through the development and application of knowledge, towards creating a people-centered and ecologically sustainable society that promotes and protects the dignity, equality, social justice and human rights for all, with special emphasis on marginalized and vulnerable groups.</p>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{ margin: '4px 0' }} > Mission</Typography>

                    <p>In fulfilment of vision, the Engineering College (GEC), Ajmer organizes various programmes to facilitate the development of competent and committed professionals for practice, research and teaching; undertakes research; develops and disseminates knowledge; and reaches out to the larger community through extension, at the local, regional, national and international levels.</p>
                </Box>

                <Box>
                    <Typography variant='h5' sx={{ margin: '4px 0' }} > Objectives</Typography>

                    <p>The Scheduled Caste (SC) and Scheduled Tribes (ST) Cell in GEC Ajmer likely to promote the special interests of students in the reserved category. It is expected to provide special inputs in areas of their curriculum where the students experience difficulties and are weak. The prime objective of the cell is to conduct regular remedial coaching classes on life skills, specific profession software learning, personality development, written and oral communication development, writing assignments and making presentations, as well as Hindi and local language classes. The Cell also is expected to organize interactive sessions and informal meetings with students to attend to their personal, social and academic problems.</p>
                </Box>

                <Box>
                    <Typography variant='h5' sx={{ margin: '4px 0' }} > For More Detail</Typography>

                    <p>Please wait: <Link to=''>AICTE CELL</Link> </p>

                    <Typography>A Manual has been prepared in order to guide the students to optimally utilise the benefits of the schemes offered by the Government of India.</Typography>

                    <Box>
                        <ul>
                            <li> <a href="https://www.nsfdc.nic.in/" target="_blank" rel="noopener noreferrer">
                                National Scheduled Castes Finance and Development Corporation</a> </li>
                        </ul>
                    </Box>


                </Box>

            </Container>
        </>
    )
}