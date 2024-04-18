import React from 'react'
import CircularCard from '../cards/CircularCard'
import { SimpleGrid } from '@chakra-ui/react'

const Event = () => {
    const cardData = [
        {
            title: 'Event',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        }
    ]

    return (
        <>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                {
                    cardData.map((data,i) => {
                        return <CircularCard key={i} data={data} link={'event'} />
                    })
                }
            </SimpleGrid>
        </>
    )
}

export default Event