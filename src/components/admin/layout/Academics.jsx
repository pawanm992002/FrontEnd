import React from 'react'
import CircularCard from '../cards/CircularCard'
import { SimpleGrid } from '@chakra-ui/react'

const Academics = () => {

    const cardData = [
        {
            title: 'Academic Calender',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        },
        {
            title: 'First Year Circular',
            length: '20',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
    ]

    return (
        <>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                {
                    cardData.map((data) => {
                        return <CircularCard data={data} />
                    })
                }
            </SimpleGrid>
        </>
    )
}

export default Academics