import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from "../../components/admin/apis/ApiIntances";
import CircularCard from "../../components/admin/cards/CircularCard";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const EcaPress = () => {
  const [NewsCutting, setNewsCutting] = useState([]);

  const deleteNewCuttingRow = async (_id) => {
    try {
      const { data } = await AdminApiInstance.delete(`/news/${_id}`);
      toast.success(data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };
  useEffect(() => {
    // for News cutting
    (async () => {
      try {
        const { data } = await axios.get(`${url}/eca-press/news`);
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i+1,
            Created_At: new Date(val.createdAt).toDateString(),
            Image: (
              <Link to={val.image}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button onClick={() => deleteNewCuttingRow(val?._id)}>
                Delete
              </Button>
            ),
          };
        });
        setNewsCutting(temp);
      } catch (error) {
        toast.error(error?.response?.data?.error);
      }
    })();
  }, []);
  const cardData = [
    {
      title: "News Cutting",
      length: NewsCutting?.length,
      data: NewsCutting,
    },
  ];

  return (
    <VStack h={"full"} w={"full"}>
      <Box w={"full"}>
        <Flex mb={2}>
          <Heading
            as="h4"
            size="md"
            borderBottom={"2px solid"}
            padding={2}
            borderColor={"red.700"}
          >
            Eca in Press
          </Heading>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {cardData.map((data) => {
            return <CircularCard typeOfUser='hod' link={"eca-press"} data={data} />;
          })}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default EcaPress;
