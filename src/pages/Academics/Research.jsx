import React from 'react'

import { Box, Container } from '@mui/material'
import Members from '../../components/Members';

import {SectionSimulator} from '../Administration/Principal'

const Research = () => {


    const timeTablesMembers = [
        { name: 'Dr. Jyoti Gajrani', designation: 'Computer Engineering' },
        { name: 'Dr. Prakriti Trivedi', designation: 'Computer Engineering' },
        { name: 'Dr. Rakesh Rathi', designation: 'Computer Engineering' },
        { name: 'Dr. Neetu Sharma', designation: 'Computer Engineering' },
        { name: 'Dr. Deepak Jhanwar', designation: 'Electronics & Communication Engineering' },
        { name: 'Dr. Uma Shankar Modani', designation: 'Electronics & Communication Engineering' },
        { name: 'Dr. Rekha Mehra', designation: 'Electronics & Communication Engineering' },
        { name: 'Dr. Jitendra Kumar Deegwal', designation: 'Electronics & Communication Engineering' },
        { name: 'Dr. Chandra Prakash Jain', designation: 'Electronic Instrumentation And Control Engineering' },
        { name: 'Dr. Ankur Pareek', designation: 'Mechanical Engineering' },
        { name: 'Dr. Devendra Choudhary', designation: 'Mechanical Engineering' },
        { name: 'Dr. Sandesh Trivedi', designation: 'Mechanical Engineering' },
        { name: 'Dr. Amit Sharma', designation: 'Business Administration' },
        { name: 'Dr. R. K. Motwani', designation: 'Business Administration' },
        { name: 'Dr. Manish Badlani', designation: 'Business Administration' },
        { name: 'Dr. Amit Chaturvedi', designation: 'Master Of Computer Application' },
    ]

    return (
        <>
            <Container>

                <section id="timeTables">

                    <SectionSimulator title={'Approved Research Supervisors Under RTU/BTU'} />


                    <Box>                      
                            <Members members={timeTablesMembers} designation='department' />
                    </Box>



                </section>

            </Container>
        </>
    )
}

export default Research
