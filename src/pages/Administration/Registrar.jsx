import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SectionSimulator } from './Principal'
import Circulars from '../../components/Circulars';
import Members from '../../components/Members';
import { Link } from 'react-router-dom';

const Registrar = () => {
    
    const [active, setActive] = useState('circulars');
    
    const establishmentMembers = [
        { name: 'Sh. Atul Vajpai', designation: 'Registrar' },
        { name: 'Sh. Ajay Dadhich', designation: 'Section Officer(Establishment)' },
    ]
    const administrationMembers = [
        { name: 'Sh. Atul Vajpai', designation: 'AR (Administration)' },
    ]

    const rulesRegulations = [
        {title:'Rajasthan Service Rules, Volume-I',link:'https://www.ecajmer.ac.in/rules/rsrrules.pdf'},
        {title:'Rajasthan Service Rules, Volume-II',link:'https://www.ecajmer.ac.in/rules/rsrrules-vol-II.pdf'},
        {title:'HRA Rules',link:'https://www.ecajmer.ac.in/rules/hra.pdf'},
        {title:'GF&AR Volume-I Part-I',link:'https://www.ecajmer.ac.in/rules/GFR-I.pdf'},
        {title:'GF&AR Volume-I Part-II',link:'https://www.ecajmer.ac.in/rules/GFR-II.pdf'},
        {title:'GF&AR Volume-I Part-III',link:'https://www.ecajmer.ac.in/rules/GFR-III.pdf'},
        {title:'GF&AR Vol-II Forms',link:'https://www.ecajmer.ac.in/rules/vol2.pdf'},
        {title:'Society Rules',link:'https://www.ecajmer.ac.in/rules/BoG%20Rules[2421].pdf'},
        {title:'Memorandum',link:'https://www.ecajmer.ac.in/rules/Memorandum.pdf'},

    ]

    return (
        <>
            <Container>

                <section id="Registrar">

                    <SectionSimulator title={'Registrar'} />

                    {/* <marquee style={{cursor:'pointer'}} >For Any Inquiries Mail to <a href="mailto:draccounts@ecajmer.ac.in">draccounts@ecajmer.ac.in</a> </marquee> */}

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} >
                        <Box onClick={() => setActive('circulars')} style={{ background: `${active === 'circulars' ? 'green' : 'white'}`, color: `${active === 'circulars' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Circulars</Typography>
                        </Box>


                        <Box onClick={() => setActive('members')} style={{ background: `${active === 'members' ? 'green' : 'white'}`, color: `${active === 'members' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Members</Typography>
                        </Box>
                        <Box onClick={() => setActive('rules')} style={{ background: `${active === 'rules' ? 'green' : 'white'}`, color: `${active === 'rules' ? 'white' : 'black'}`, margin: '15px 0', cursor: 'pointer', width: '50%' }}>
                            <Typography variant='h6' textAlign={'center'} >Rules & Regulations</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {active === 'circulars' &&
                            <Circulars />} 
                            {active === 'members'&& <>
                            <Typography variant='h6' sx={{margin:'10px auto'}} >Establishment Section Members</Typography>
                            <Members members={establishmentMembers} />

                            <Typography variant='h6' sx={{margin:'10px auto'}} >Administration Section Members</Typography >
                            <Members members={administrationMembers} />
                        </>
                            }

                            {active === 'rules' && <RulesRegulations data={rulesRegulations} /> }
                    </Box>



                </section>

            </Container>
        </>
    )
}

export default Registrar


//----- Rules and regulations
export const RulesRegulations = ({data})=>{
    return (
        <>
        {data?.map((item,i)=>(
<Box sx={{margin:'15px 0'}}>

            <Link to={`${item.link}`} style={{margin:'3px 0'}} key={i}> {item.title}   </Link>
</Box>
        ))}
        </>
    )
}