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
import { AdminApiInstance } from "../../../apis/ApiIntances";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const deleteStudentCornerRow = async (_id, val) => {
    console.log("......... gal", _id, val);
    try {
      const { data } = await AdminApiInstance.delete(
        `/student-corner/${val}/${_id}`
      );
      toast.success(data?.message);
    } catch (error) {
      console.log(".......... del", error);
      toast.error(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    // for creative circular
    ;(async () => {
      try {
        const { data } = await axios.get(
          `${url}/student-corner/circular/creative`
        );
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: val.srNo,
            Title: val.title,
            Section: val.section,
            Created_At: new Date(val.createdAt).toDateString(),
            Notice: (
              <Link to={val.notice}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button
                onClick={() => deleteStudentCornerRow(val?._id, "creative-art-circular")}
              >
                Delete
              </Button>
            ),
          };
        });
        setCreativeCircular(temp);
      } catch (error) {}
    })();

    // for creative gallery
    ;(async () => {
      try {
        const { data } = await axios.get(
          `${url}/student-corner/gallery/creative`
        );
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i,
            Created_At: new Date(val.createdAt).toDateString(),
            Image: (
              <Link to={val.image}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button
                onClick={() => deleteStudentCornerRow(val?._id, "creative-art-gallery")}
              >
                Delete
              </Button>
            ),
          };
        });
        console.log(".......... testttttt", data);
        setCreativeGallery(temp);
      } catch (error) {
        console.log(".......... testttt", error);
      }
    })();

    // for ncc circular
    ;(async () => {
      try {
        const { data } = await axios.get(`${url}/student-corner/circular/ncc`);
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: val.srNo,
            Title: val.title,
            Section: val.section,
            Created_At: new Date(val.createdAt).toDateString(),
            Notice: (
              <Link to={val.notice}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button
                onClick={() => deleteStudentCornerRow(val?._id, "ncc-circular")}
              >
                Delete
              </Button>
            ),
          };
        });
        setNccCircular(temp);
      } catch (error) {}
    })();

    // for ncc gallery
    ;(async () => {
      try {
        const { data } = await axios.get(`${url}/student-corner/gallery/ncc`);
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i,
            Created_At: new Date(val.createdAt).toDateString(),
            Image: (
              <Link to={val.image}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button
                onClick={() => deleteStudentCornerRow(val?._id, "ncc-gallery")}
              >
                Delete
              </Button>
            ),
          };
        });
        console.log(".......... testttttt", data);
        setNccGallery(temp);
      } catch (error) {
        console.log(".......... testttt", error);
      }
    })();

    // for hostel circular
    ;(async () => {
      try {
        const { data } = await axios.get(
          `${url}/student-corner/circular/hostel`
        );
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: val.srNo,
            Title: val.title,
            Section: val.section,
            Created_At: new Date(val.createdAt).toDateString(),
            Notice: (
              <Link to={val.notice}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button
                onClick={() => deleteStudentCornerRow(val?._id, "hostel-circular")}
              >
                Delete
              </Button>
            ),
          };
        });
        setHostelCircular(temp);
      } catch (error) {}
    })();

    // for hostel gallery
    ;(async () => {
      try {
        const { data } = await axios.get(
          `${url}/student-corner/gallery/hostel`
        );
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i,
            Created_At: new Date(val.createdAt).toDateString(),
            Image: (
              <Link to={val.image}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button
                onClick={() => deleteStudentCornerRow(val?._id, "hostel-gallery")}
              >
                Delete
              </Button>
            ),
          };
        });
        console.log(".......... testttttt", data);
        setHostelGallery(temp);
      } catch (error) {
        console.log(".......... testttt", error);
      }
    })();

    // for transportation circular
    ;(async () => {
      try {
        const { data } = await axios.get(
          `${url}/student-corner/circular/transport`
        );
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: val.srNo,
            Title: val.title,
            Section: val.section,
            Created_At: new Date(val.createdAt).toDateString(),
            Notice: (
              <Link to={val.notice}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button
                onClick={() => deleteStudentCornerRow(val?._id, "transportation-circulars")}
              >
                Delete
              </Button>
            ),
          };
        });
        setTransportationCircular(temp);
      } catch (error) {}
    })();

    // for student acheivement
    ;(async () => {
      try {
        const { data } = await axios.get(
          `${url}/student-corner/student-achievement`
        );
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i,
            Title: val.title,
            Name: val.name,
            Description: val.description,
            Created_At: new Date(val.createdAt).toDateString(),
            Image: (
              <Link to={val.image}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button
                onClick={() => deleteStudentCornerRow(val?._id, "student-achievement")}
              >
                Delete
              </Button>
            ),
          };
        });
        setStudentAchievement(temp);
      } catch (error) {}
    })();
  }, []);

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
