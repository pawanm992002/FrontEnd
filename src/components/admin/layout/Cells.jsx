import React, { useEffect, useState } from 'react'
import CircularCard from '../cards/CircularCard'
import { Box, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { fetchAlumni } from '../../../api/cells';

const Cells = () => {
    const [AlumniCircular, setAlumniCircular] = useState([]);
    const [refresh, setRefresh] = useState();
  
    useEffect(() => {
      // for alumni circular
      ;(async () => {
        const alumni = await fetchAlumni(setRefresh);
        setAlumniCircular(alumni);
      })();
    }, [refresh]);

    const cardData = [
        {
            title: 'Alumni Circular',
            length: AlumniCircular?.length,
            data: AlumniCircular
        }
    ]

    return (
        <VStack h={'full'} w={'full'}>
            <Box w={'full'}>
                <Flex mb={2}>
                    <Heading as='h4' size='md' borderBottom={'2px solid'} padding={2} borderColor={'red.700'}>
                        Alumni Cell
                    </Heading>
                </Flex>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                    {
                        cardData.map((data) => {
                            return <CircularCard data={data} link={'cells'} />
                        })
                    }
                </SimpleGrid>
            </Box>
        </VStack>
    )
    
}

export default Cells