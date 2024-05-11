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
import toast from "react-hot-toast";
import { AdminApiInstance } from "../../components/admin/apis/ApiIntances";
import CircularCard from "../../components/admin/cards/CircularCard";
import { ReturnDepartmentValue } from "./Department";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const Placement = () => {
  const [placementData, setPlacementData] = useState([]);
  const [departmentValue, setDepartmentValue] = useState("cse");


  const deleteNewCuttingRow = async (_id) => {
    try {
      const { data } = await AdminApiInstance.delete(`/placement/${_id}`);
      toast.success(data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };
  useEffect(() => {
    // for News cutting
    (async () => {
      const user = JSON.parse(localStorage?.getItem('userData'));
      let department = user?.department;
  
      ReturnDepartmentValue(department,setDepartmentValue);
      try {
        const { data } = await axios.get(`${url}/placement`);
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i+1,
            Student : val?.studentName,
            Company:val?.companyName,
            Branch : val?.branch,
            Year : val?.year,
            Package : val?.package,
            Delete: (
              <Button onClick={() => deleteNewCuttingRow(val?._id)}>
                Delete
              </Button>
            ),
          };
        });
        setPlacementData(temp);
      } catch (error) {
        toast.error(error?.response?.data?.error);
      }
    })();
  }, []);
  const cardData = [
    {
      title: "Placement",
      length: placementData?.length,
      data: placementData,
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
            Placement at : @ECA
          </Heading>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {cardData.map((data) => {
            return <CircularCard dept_readonly={true}  dept_name={departmentValue} typeOfUser="hod" link={"placement"} data={data} />;
          })}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Placement;
