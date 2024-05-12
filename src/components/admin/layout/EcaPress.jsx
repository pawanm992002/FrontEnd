import React, { useEffect, useState } from "react";
import CircularCard from "../cards/CircularCard";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminApiInstance } from '../apis/ApiIntances';
import { fetchNewsCutting } from "../../../api/ecapress";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const EcaPress = () => {
  const [NewsCutting, setNewsCutting] = useState([]);
  const [refresh, setRefresh] = useState()
  const [searchParams,setSearchParams] = useSearchParams();
  const section = searchParams.get('section')

  


  useEffect(() => {
    ;(async () => {
      const news = await fetchNewsCutting(setRefresh);
      setNewsCutting(news);
    })();
  }, [refresh,section === 'News Cutting']);
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
            return <CircularCard link={"eca-press"} data={data} />;
          })}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default EcaPress;
