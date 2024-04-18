import React from 'react'
import CircularCard from '../cards/CircularCard'
import { Box, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react'

const NewsOrders = () => {
  
    const newsData = [
        {
            title: 'NewsData Circular',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        }
    ]
    const ordersData = [
        {
            title: 'OrdersData Circular',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        }
    ]

    return (
        <VStack h={'full'} w={'full'}>
            <Box w={'full'}>
                <Flex mb={2}>
                    <Heading as='h4' size='md' borderBottom={'2px solid'} padding={2} borderColor={'red.700'}>
                        News
                    </Heading>
                </Flex>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                    {
                        newsData.map((data) => {
                            return <CircularCard data={data} link={'news-orders'} />
                        })
                    }
                </SimpleGrid>
            </Box>
            <Box w={'full'}>
                <Flex mb={2}>
                    <Heading as='h4' size='md' borderBottom={'2px solid'} padding={2} borderColor={'red.700'}>
                        Orders
                    </Heading>
                </Flex>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                    {
                        ordersData.map((data) => {
                            return <CircularCard data={data} link={'news-orders'} />
                        })
                    }
                </SimpleGrid>
            </Box>
        </VStack>
    )
}

export default NewsOrders