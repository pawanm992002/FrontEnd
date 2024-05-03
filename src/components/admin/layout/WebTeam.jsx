import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import toast from 'react-hot-toast';
import { AdminApiInstance } from '../../../apis/ApiIntances';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CircularCard from '../cards/CircularCard';

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;


const WebTeam = () => {
  const [WebTeam, setWebTeam] = useState([]);

  const deleteWebTeamRow = async (_id) => {
    console.log("......... gal", _id);
    try {
      const { data } = await AdminApiInstance.delete(`/web-team/${_id}`);
      toast.success(data?.message);
    } catch (error) {
      console.log(".......... del", error);
      toast.error(error?.response?.data?.error);
    }
  };
  useEffect(() => {
    // for alumni circular
    ;(async () => {
      try {
        const { data } = await axios.get(`${url}/web-team`);
        console.log('rrrrrrrrrrr', data)
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i+1,
            Name: val.name,
            Picture: (<img src={`${val.image}`} style={{borderRadius: '50%'}} />),
            Branch: val.branch,
            Duration: val.duration,
            Created_At: new Date(val.createdAt).toDateString(),
            Delete: (
              <Button onClick={() => deleteWebTeamRow(val?._id)}>
                Delete
              </Button>
            ),
          };
        });
        setWebTeam(temp);
      } catch (error) {
        console.log(".......... circular", error);
      }
    })();
  }, []);

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