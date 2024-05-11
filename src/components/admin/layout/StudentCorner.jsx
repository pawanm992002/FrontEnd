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
import toast from "react-hot-toast";
import { AdminApiInstance } from "../apis/ApiIntances";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  fetchCreativeCircular,
  fetchCreativeGallery,
  fetchHostelCircular,
  fetchHostelGallery,
  fetchNccCircular,
  fetchNccGallery,
  fetchStudentAchievement,
  fetchTransportationCircular,
} from "../../../api/studentCorner";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const StudentCorner = () => {
  const [CreativeCircular, setCreativeCircular] = useState([]);
  const [CreativeGallery, setCreativeGallery] = useState([]);
  const [NccCircular, setNccCircular] = useState([]);
  const [NccGallery, setNccGallery] = useState([]);
  const [HostelCircular, setHostelCircular] = useState([]);
  const [HostelGallery, setHostelGallery] = useState([]);
  const [TransportationCircular, setTransportationCircular] = useState([]);
  const [StudentAchievement, setStudentAchievement] = useState([]);
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    (async () => {
      const creativeCir = await fetchCreativeCircular(setRefresh);
      setCreativeCircular(creativeCir);

      const creativeGal = await fetchCreativeGallery(setRefresh);

      setCreativeGallery(creativeGal);
      const nccCir = await fetchNccCircular(setRefresh);
      setNccCircular(nccCir);

      const nccGal = await fetchNccGallery(setRefresh);
      setNccGallery(nccGal);

      const hostelCir = await fetchHostelCircular(setRefresh);
      setHostelCircular(hostelCir);

      const hostelGal = await fetchHostelGallery(setRefresh);
      setHostelGallery(hostelGal);

      const transportationCir = await fetchTransportationCircular(setRefresh);
      setTransportationCircular(transportationCir);

      const studnentAch = await fetchStudentAchievement(setRefresh);
      setStudentAchievement(studnentAch);
    })();
  }, [refresh]);

  const creativeArtData = [
    {
      title: "CreativeArtData Circular",
      length: CreativeCircular?.length,
      data: CreativeCircular,
    },
    {
      title: "CreativeArtData Gallery",
      length: CreativeGallery?.length,
      data: CreativeGallery,
    },
  ];

  const nccData = [
    {
      title: "NCCData Circular",
      length: NccCircular?.length,
      data: NccCircular,
    },
    {
      title: "NCCData Gallery",
      length: NccGallery?.length,
      data: NccGallery,
    },
  ];

  const hostelData = [
    {
      title: "HostelData Circular",
      length: HostelCircular?.length,
      data: HostelCircular,
    },
    {
      title: "HostelData Gallery",
      length: HostelGallery?.length,
      data: HostelGallery,
    },
  ];

  const transportationData = [
    {
      title: "TransportationData Circular",
      length: TransportationCircular?.length,
      data: TransportationCircular,
    },
  ];
  const studentAchievementData = [
    {
      title: "StudentAchievementData",
      length: StudentAchievement?.length,
      data: StudentAchievement,
    },
  ];

  return (
    <>
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
              Creative Art Society
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
            spacing={{ base: 5, lg: 8 }}
          >
            {creativeArtData.map((data, i) => {
              return (
                <CircularCard key={i} data={data} link={"student-corner"} />
              );
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
              NCC
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
            spacing={{ base: 5, lg: 8 }}
          >
            {nccData.map((data) => {
              return <CircularCard data={data} link={"student-corner"} />;
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
              Hostel
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
            spacing={{ base: 5, lg: 8 }}
          >
            {hostelData.map((data) => {
              return <CircularCard data={data} link={"student-corner"} />;
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
              Transportation
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
            spacing={{ base: 5, lg: 8 }}
          >
            {transportationData.map((data) => {
              return <CircularCard data={data} link={"student-corner"} />;
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
              Student Achievement
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
            spacing={{ base: 5, lg: 8 }}
          >
            {studentAchievementData.map((data) => {
              return <CircularCard data={data} link={"student-corner"} />;
            })}
          </SimpleGrid>
        </Box>
      </VStack>
    </>
  );
};

export default StudentCorner;
