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
import { AdminApiInstance } from '../apis/ApiIntances';
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const NewsOrders = () => {
  const [NewsCircular, setNewsCircular] = useState([]);
  const [OrderCircular, setOrderCircular] = useState([]);

  const deleteNewsOrderRow = async (_id, val) => {
    try {
      const { data } = await AdminApiInstance.delete(`/cells/${val}/${_id}`);
      toast.success(data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    // for news circular
    //   ;(async () => {
    //     try {
    //       const { data } = await axios.get(`${url}/cells/alumni`);
    //       const temp = data.result.map((val, i) => {
    //         return {
    //           SR_NO: val.srNo,
    //           Section: val.section,
    //           Title: val.title,
    //           Created_At: new Date(val.createdAt).toDateString(),
    //           Notice: (
    //             <Link to={val.notice}>
    //               {" "}
    //               <Button>View</Button>{" "}
    //             </Link>
    //           ),
    //           Delete: (
    //             <Button onClick={() => deleteAdmistrationRow(val?._id, "alumni-circular")}>
    //               Delete
    //             </Button>
    //           ),
    //         };
    //       });
    //       setAlumniCircular(temp);
    //     } catch (error) {
    //       console.log(".......... circular", error);
    //     }
    //   })();
    // for orders circular
    //   ;(async () => {
    //     try {
    //       const { data } = await axios.get(`${url}/cells/alumni`);
    //       const temp = data.result.map((val, i) => {
    //         return {
    //           SR_NO: val.srNo,
    //           Section: val.section,
    //           Title: val.title,
    //           Created_At: new Date(val.createdAt).toDateString(),
    //           Notice: (
    //             <Link to={val.notice}>
    //               {" "}
    //               <Button>View</Button>{" "}
    //             </Link>
    //           ),
    //           Delete: (
    //             <Button onClick={() => deleteAdmistrationRow(val?._id, "alumni-circular")}>
    //               Delete
    //             </Button>
    //           ),
    //         };
    //       });
    //       setAlumniCircular(temp);
    //     } catch (error) {
    //       console.log(".......... circular", error);
    //     }
    //   })();
  }, []);

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
