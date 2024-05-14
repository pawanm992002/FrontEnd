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
import { AdminApiInstance } from "../apis/ApiIntances";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchNewsCircular, fetchOrderCircular } from "../../../api/newsOrders";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const NewsOrders = () => {
  const [NewsCircular, setNewsCircular] = useState([]);
  const [OrderCircular, setOrderCircular] = useState([]);
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    (async () => {
      const circulars = await fetchNewsCircular(setRefresh);
      setNewsCircular(circulars);

      const orders = await fetchOrderCircular(setRefresh);
      setOrderCircular(orders);
    })();
  }, [refresh]);

  const newsData = [
    {
      title: "NewsData Circular",
      length: NewsCircular?.length,
      data: NewsCircular,
    },
  ];
  const ordersData = [
    {
      title: "OrdersData Circular",
      length: OrderCircular?.length,
      data: OrderCircular,
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
            News
          </Heading>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {newsData.map((data) => {
            return <CircularCard data={data} link={"news-orders"} />;
          })}
        </SimpleGrid>
      </Box>
      <Box w={"full"}>
        <Flex mb={2}>
          <Heading
            as="h4"
            size="md"
            borderBottom={"2px solid"}
            padding={2}
            borderColor={"red.700"}
          >
            Orders
          </Heading>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {ordersData.map((data) => {
            return <CircularCard data={data} link={"news-orders"} />;
          })}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default NewsOrders;
