import React, { useEffect, useState } from 'react'
import CircularCard from '../cards/CircularCard'
import { Box, Button, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import toast from 'react-hot-toast';
import { AdminApiInstance } from '../../../apis/ApiIntances';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const Cells = () => {
    const [AlumniCircular, setAlumniCircular] = useState([]);
  
    const deleteAdmistrationRow = async (_id, val) => {
      console.log("......... gal", _id, val);
      try {
        const { data } = await AdminApiInstance.delete(
          `/cells/${val}/${_id}`
        );
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
          const { data } = await axios.get(`${url}/cells/alumni`);
          const temp = data.result.map((val, i) => {
            return {
              SR_NO: val.srNo,
              Section: val.section,
              Title: val.title,
              Created_At: new Date(val.createdAt).toDateString(),
              Notice: (
                <Link to={val.notice}>
                  {" "}
                  <Button>View</Button>{" "}
                </Link>
              ),
              Delete: (
                <Button onClick={() => deleteAdmistrationRow(val?._id, "alumni-circular")}>
                  Delete
                </Button>
              ),
            };
          });
          setAlumniCircular(temp);
        } catch (error) {
          console.log(".......... circular", error);
        }
      })();
    }, []);

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