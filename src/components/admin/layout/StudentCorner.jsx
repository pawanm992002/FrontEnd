import React from 'react'
import CircularCard from '../cards/CircularCard'
import { Box, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react'

const StudentCorner = () => {
    const creativeArtData = [
        {
            title: 'Circular',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        },
        {
            title: 'Gallery',
            length: '20',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
    ]

    const nccData = [
        {
            title: 'Circular',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        },
        {
            title: 'Gallery',
            length: '20',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
    ]

    const hostelData = [
        {
            title: 'Circular',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        },
        {
            title: 'Gallery',
            length: '20',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
    ]

    const transportationData = [
        {
            title: 'Circular',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        },
    ]
    const studentAchievementData = [
        {
            title: 'Achievement',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        },
    ]

    return (
        <>
            <VStack h={'full'} w={'full'}>
                <Box w={'full'}>
                    <Flex mb={2}>
                        <Heading as='h4' size='md' borderBottom={'2px solid'} padding={2} borderColor={'red.700'}>
                            Creative Art Society
                        </Heading>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                        {
                            creativeArtData.map((data) => {
                                return <CircularCard data={data} />
                            })
                        }
                    </SimpleGrid>
                </Box>
                <Box w={'full'}>
                    <Flex mb={2}>
                        <Heading as='h4' size='md' borderBottom={'2px solid'} padding={2} borderColor={'red.700'}>
                            NCC
                        </Heading>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                        {
                            nccData.map((data) => {
                                return <CircularCard data={data} />
                            })
                        }
                    </SimpleGrid>
                </Box>
                <Box w={'full'}>
                    <Flex mb={2}>
                        <Heading as='h4' size='md' borderBottom={'2px solid'} padding={2} borderColor={'red.700'}>
                            Hostel
                        </Heading>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                        {
                            hostelData.map((data) => {
                                return <CircularCard data={data} />
                            })
                        }
                    </SimpleGrid>
                </Box>
                <Box w={'full'}>
                    <Flex mb={2}>
                        <Heading as='h4' size='md' borderBottom={'2px solid'} padding={2} borderColor={'red.700'}>
                            Transportation
                        </Heading>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                        {
                            transportationData.map((data) => {
                                return <CircularCard data={data} />
                            })
                        }
                    </SimpleGrid>
                </Box>
                <Box w={'full'}>
                    <Flex mb={2}>
                        <Heading as='h4' size='md' borderBottom={'2px solid'} padding={2} borderColor={'red.700'}>
                            Student Achievement
                        </Heading>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                        {
                            studentAchievementData.map((data) => {
                                return <CircularCard data={data} />
                            })
                        }
                    </SimpleGrid>
                </Box>
            </VStack>
        </>
    )
}

export default StudentCorner