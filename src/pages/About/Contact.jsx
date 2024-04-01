import { Box, Container, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

//---------- All related contact details
const contactDetails = [
    ['address', 'NH-8, Barliya Circle, Ajmer, Rajasthan 305025'],
    ['contact', '+911452971024, +911452971023'],
    ['email', 'principal@ecajmer.ac.in, principal.eca@rajasthan.gov.in'],
    ['website', 'www.ecajmer.ac.in']
]

const Contact = () => {
    return (
        <>
            <Container style={{margin:'5px auto'}}>

                <section id="contact">

                <Box style={{background:'var(--main-primary)',color:'white',margin:'15px 0'}}>
                    <Typography variant='h4' textAlign={'center'} >Contact</Typography>
                </Box>

                    <Grid container spacing={5} >

                        <Grid item xs={12} md={6}  >

                            <TableContainer >
                                <Box style={{ background: 'var(--main-primary)', color: 'white', padding: '10px', margin: 'auto', width: '100%', display: 'block' }} >

                                    <Typography textAlign={'center'} >ENGINEERING COLLEGE AJMER</Typography>
                                    <Typography textAlign={'center'}> {"("} An Autonomous Institution Of Government Of Rajasthan {")"}</Typography>
                                    {/* </TableHead> */}
                                </Box>
                                <Table w={"100%"} >
                                    {/* <TableHead > */}



                                    <TableBody>
                                        {contactDetails?.map((item, i) => (
                                            <TableRow key={i}>
                                                <TableCell style={{ textTransform: 'capitalize' }} >{item[0]}</TableCell>
                                                <TableCell >{item[1]}</TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow >
                                            <TableCell >Mail-Ids</TableCell>
                                            <TableCell > <Link to="/mailDirectory" >All mails ids</Link> </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>


                        <Grid item xs={12} md={6}  >

                            <TableContainer >
                                <Box style={{ background: 'var(--main-primary)', color: 'white', padding: '10px', margin: 'auto', width: '100%', display: 'block' }} >

                                    <Typography textAlign={'center'} >Google Map Location</Typography>

                                </Box>
                                <Box>
                                    <figure>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114277.49838827149!2d74.5994624381494!3d26.48241195784676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be53a85e1c407%3A0xa7fe162fe30ea33!2sGovernment%20Engineering%20College%2C%20Ajmer!5e0!3m2!1sen!2sin!4v1710584611540!5m2!1sen!2sin" width={"100%"} height="290" allowFullScreen={'true'} loading="lazy" title='Google map location' referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </figure>
                                </Box>
                            </TableContainer>

                        </Grid>


                    </Grid>

                </section>

            </Container>
        </>
    )
}

export default Contact
