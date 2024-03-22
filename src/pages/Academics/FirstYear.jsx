import React from 'react'

import {Link} from 'react-router-dom'

import { Box, Container } from '@mui/material'

import { SectionSimulator } from '../Administration/Principal'

const FirstYear = () => {
    return (
        <>
            <Container>

                <section id="firstYear">

                    <SectionSimulator title={'News & Orders'} />

                    {/* ---------------- Section for the news and order of the first year particulars  */}
                    <Box sx={{maxWidth:'var(--maxWidth)'}} >
                        <ul>
                            <li> <Link>Notice:- To book issuing from Book -Bank Sem IV & VI two extra book   </Link> 19/03/24 </li>
                        </ul>
                    </Box>

                </section>

            </Container>
        </>
    )
}

export default FirstYear
