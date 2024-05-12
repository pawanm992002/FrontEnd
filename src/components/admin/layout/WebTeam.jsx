import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import CircularCard from '../cards/CircularCard';
import { fetchTeamMember } from '../../../api/webTeam';
import { useSearchParams } from 'react-router-dom';

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;


const WebTeam = () => {
  const [WebTeam, setWebTeam] = useState([]);
  const [refresh, setRefresh] = useState([]);

  
  const [searchParams,setSearchParams] = useSearchParams();
  const section = searchParams.get('section')

  useEffect(() => {
    ;(async () => {
      const team = await fetchTeamMember(setRefresh);
      setWebTeam(team);
    })();
  }, [refresh,section==='Team Member']);

  const cardData = [
    {
      title: 'Team Member',
      length: WebTeam?.length,
      data: WebTeam
    }
  ]

  return (
    <VStack h={'full'} w={'full'}>
      <Box w={'full'}>
        <Flex mb={2}>
          <Heading as='h4' size='md' borderBottom={'2px solid'} padding={2} borderColor={'red.700'}>
            Web Team
          </Heading>
        </Flex>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
          {
            cardData.map((data) => {
              return <CircularCard data={data} link={'web-team'} />
            })
          }
        </SimpleGrid>
      </Box>
    </VStack>
  )
}

export default WebTeam