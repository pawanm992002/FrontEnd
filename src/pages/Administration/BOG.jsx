import { Box, Container, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import React, { useState } from 'react'
import { SectionSimulator } from './Principal'

import Members from '../../components/Members';
import { Link } from 'react-router-dom';

const BOG = () => {

    const [active, setActive] = useState('bogs');

    const BogMembers = [
        { name: 'Dr. Subhash Garg', designation: 'Technical Education Minister [President]' },
        { name: 'Prof. N. C. Shivaprakash', designation: 'Professor, IISC Banglore [Chairman]' },
        { name: 'Sh. N. L. Meena', designation: 'Secretary, Higher & Technical Education, Govt. of Rajasthan [State Government Nominee-Nominated by State Goverment (Member)]' },
        { name: 'Sh. Akhil Arora', designation: 'Principal Secretary, Finance Department, Govt. of Rajasthan [Finance Department nominee (Member)]' },
        { name: 'Prof. R. P. Dahiya', designation: 'Ex-director, MNIT, Jaipur [AICTE nominee (Member)]' },
        { name: 'Sh. P. C. Makwana', designation: 'Director, Board of Technical Education, Rajasthan [Member]' },
        { name: 'Sh. S.K. Bansal', designation: 'Dean ,FOEA [BTU]' },
        { name: 'Dr. V. C. Jain', designation: 'Associate Professor (Chief Proctor) [Faculty of the College Nominated by Principal based on seniority (Member)]' },
        { name: 'Dr. Rekha Mehra', designation: 'Principal, Engineering College Ajmer [Member Secretary]' },
    ]

    const BogMeetings = [
        { meetNo: '22th', date: 'June 23,2021', link: 'http://www.ecajmer.ac.in/BOG/22.pdf' },
        { meetNo: '21th', date: 'January 25,2021', link: 'http://www.ecajmer.ac.in/BOG/21.pdf' },
        { meetNo: '20th', date: 'January 4,2021', link: 'http://www.ecajmer.ac.in/BOG/20.pdf' },
        { meetNo: '19th', date: 'Sepetember 21,2020', link: 'http://www.ecajmer.ac.in/BOG/19.pdf' },
        { meetNo: '18th', date: 'June 24,2020', link: 'http://www.ecajmer.ac.in/BOG/18.pdf' },
        { meetNo: '17th', date: 'May 14,2020', link: 'http://www.ecajmer.ac.in/BOG/17.pdf' },
        { meetNo: '16th', date: 'December 18,2019', link: 'http://www.ecajmer.ac.in/BOG/16.pdf' },
        { meetNo: '15th', date: 'December 18,2019', link: 'http://www.ecajmer.ac.in/BOG/15.pdf' },
        { meetNo: '14th', date: 'December 18,2019', link: 'http://www.ecajmer.ac.in/BOG/14.pdf' },
        { meetNo: '13th', date: 'December 18,2019', link: 'http://www.ecajmer.ac.in/BOG/13.pdf' },
        { meetNo: '12th', date: 'December 18,2019', link: 'http://www.ecajmer.ac.in/BOG/12.pdf' },
        { meetNo: '11th', date: 'December 18,2019', link: 'http://www.ecajmer.ac.in/BOG/11.pdf' },
        { meetNo: '10th', date: 'December 18,2019', link: 'http://www.ecajmer.ac.in/BOG/10.pdf' },
        { meetNo: '9th', date: 'Sepetember 21,2020', link: 'http://www.ecajmer.ac.in/BOG/9.pdf' },
        { meetNo: '8th', date: 'June 24,2020', link: 'http://www.ecajmer.ac.in/BOG/8.pdf' },
        { meetNo: '7th', date: 'May 14,2020', link: 'http://www.ecajmer.ac.in/BOG/7.pdf' },
        { meetNo: '6th', date: 'December 18,2019', link: 'http://www.ecajmer.ac.in/BOG/6.pdf' },
        { meetNo: '5th', date: 'December 18,2019', link: 'http://www.ecajmer.ac.in/BOG/5.pdf' },

    ]

    const minutesMeetColumns = ['meeting no.', 'date of meeting held', 'minute'];


    return (
        <>
            <Box className='w-80' >

                <section id="BOG">

                    <SectionSimulator title={'Board Of Governors(BOG)'} />

                    {/* <marquee style={{cursor:'pointer'}} >For Any Inquiries Mail to <a href="mailto:draccounts@ecajmer.ac.in">draccounts@ecajmer.ac.in</a> </marquee> */}

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} >
                        <Box onClick={() => setActive('bogs')} style={{ background: `${active === 'bogs' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'bogs' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >BoGs Society</Typography>
                        </Box>


                        <Box onClick={() => setActive('meetings')} style={{ background: `${active === 'meetings' ? 'var(--main-primary)' : 'white'}`, color: `${active === 'meetings' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Minutes's Meetings</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'bogs' ?
                            <Members members={BogMembers} /> :
                            <BogMinutesMeetings data={BogMeetings} columns={minutesMeetColumns} />}
                    </Box>



                </section>

            </Box>
        </>
    )
}

export default BOG


export const BogMinutesMeetings = ({ columns, data }) => {
    return (
        <>
            <Table sx={{margin:'14px 0'}}>
                <TableHead>

                    <TableRow >
                        {columns?.map((item, i) => (
                            <TableCell key={i} sx={{ border: '1px solid black', background: 'var(--main-primary)', color: 'white', borderLeft: '1px solid black', fontSize: '15px', textTransform: 'uppercase',textAlign:'center' }} >
                                {item}
                            </TableCell>
                        ))}
                    </TableRow>


                </TableHead>

                <TableBody>
                    {
                        data?.map((item, i) => (<TableRow key={item} >
                            <TableCell sx={{ border: '1px solid black' }}>{item?.meetNo}</TableCell>

                            <TableCell sx={{ textAlign: 'center', border: '1px solid black' }} >{item?.date}</TableCell>

                            <TableCell sx={{ border: '1px solid black' }}> <Link to={`${item?.link}`}>View</Link>
                            </TableCell>

                        </TableRow>

                        ))
                    }
                </TableBody>

            </Table>
        </>
    )
}