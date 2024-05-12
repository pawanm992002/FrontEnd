import { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { FacultyApiInstance, url } from '../../components/Faculty/api/APIs'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const ForgetPassword = () => {
  const navigate = useNavigate();

  //-------------------- State management stuff
  const [form, setForm] = useState({ password: ""});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const {data,status,error} = await FacultyApiInstance.put(`/update-password`, form)
      

      if(status !== 200)
          toast.error(data?.error);
      else {

        toast.success(data?.message);
      }

    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
    setLoading(false);
    setForm({ password: "" });
  };


  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="var(--main-primary)" />
        <Heading color="var(--main-primary)">Change Your Password</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="password"
                    placeholder="New Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    minLength={5}
                  />
                </InputGroup>
              </FormControl>
             
              <Button
                isLoading={loading}
                borderRadius={0}
                type="submit"
                variant="solid"
                bgColor={"var(--main-primary)"}
                width="full"
                color={"white"}
                sx={{ "&:hover": { bg: "var(--main-primary)" } }}
              >
                Change Password
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ForgetPassword;
