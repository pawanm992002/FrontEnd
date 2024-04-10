import React from 'react'
import ProfileCard from '../cards/ProfileCard'
import { Box, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react'

const WebTeam = () => {

  const tableHeading = [
    'profile',
    'name',
    'eamil',
    'department',
    'batch',
  ]

  const cardData = [
    {
      title: 'Team Member',
      length: '15',
      data: [1, 2, 3, 4, 5, 6]
    }
  ]

  const dataArray = [
    {
      "_id": "1",
      "profile": "https://source.unsplash.com/random/1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "department": "Engineering",
      "batch": "2020-2024"
    },
    {
      "_id": "2",
      "profile": "https://source.unsplash.com/random/2",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "department": "Marketing",
      "batch": "2020-2024"
    },
    {
      "_id": "3",
      "profile": "https://source.unsplash.com/random/3",
      "name": "David Johnson",
      "email": "david.johnson@example.com",
      "department": "Finance",
      "batch": "2020-2024"
    },
    {
      "_id": "4",
      "profile": "https://source.unsplash.com/random/4",
      "name": "Emily Brown",
      "email": "emily.brown@example.com",
      "department": "Human Resources",
      "batch": "2020-2024"
    },
    {
      "_id": "5",
      "profile": "https://source.unsplash.com/random/5",
      "name": "Michael Wilson",
      "email": "michael.wilson@example.com",
      "department": "Sales",
      "batch": "2025-2029"
    },
    {
      "_id": "6",
      "profile": "https://source.unsplash.com/random/6",
      "name": "Emma Taylor",
      "email": "emma.taylor@example.com",
      "department": "Operations",
      "batch": "2025-2029"
    },
    {
      "_id": "7",
      "profile": "https://source.unsplash.com/random/7",
      "name": "James Martinez",
      "email": "james.martinez@example.com",
      "department": "Customer Service",
      "batch": "2025-2029"
    },
    {
      "_id": "8",
      "profile": "https://source.unsplash.com/random/8",
      "name": "Olivia Anderson",
      "email": "olivia.anderson@example.com",
      "department": "Information Technology",
      "batch": "2025-2029"
    },
    {
      "_id": "9",
      "profile": "https://source.unsplash.com/random/9",
      "name": "William Thomas",
      "email": "william.thomas@example.com",
      "department": "Research and Development",
      "batch": "2025-2029"
    },
    {
      "_id": "10",
      "profile": "https://source.unsplash.com/random/10",
      "name": "Sophia Walker",
      "email": "sophia.walker@example.com",
      "department": "Public Relations",
      "batch": "2025-2029"
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
              return <ProfileCard data={data} dataArray={dataArray} tableHeading={tableHeading} />
            })
          }
        </SimpleGrid>
      </Box>
    </VStack>
  )
}

export default WebTeam