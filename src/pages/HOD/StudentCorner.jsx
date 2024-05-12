import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import CircularCard from "../../components/admin/cards/CircularCard";
import { AdminApiInstance } from "../../components/admin/apis/ApiIntances";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const StudentCorner = () => {
  const [StudentAchievement, setStudentAchievement] = useState([]);

  const deleteStudentCornerRow = async (_id, val) => {
    try {
      const { data } = await AdminApiInstance.delete(
        `/student-corner/${val}/${_id}`
      );
      toast.success(data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  const [searchParams,setSearchParams] = useSearchParams();
  const section = searchParams.get('section');

  useEffect(() => {


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
  }, [section === 'StudentAchievementData']);

  
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
              Student Achievement
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
            spacing={{ base: 5, lg: 8 }}
          >
            {studentAchievementData.map((data) => {
              return <CircularCard typeOfUser="hod" data={data} link={"student-corner"} />;
            })}
          </SimpleGrid>
        </Box>
      </VStack>
    </>
  );
};

export default StudentCorner;
