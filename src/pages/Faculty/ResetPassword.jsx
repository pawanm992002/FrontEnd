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
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

import {url} from '../../components/Faculty/api/APIs'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const ResetPassword = () => {
  const navigate = useNavigate();

  const [searchParams,setSearchParams] = useSearchParams();
  const token = searchParams.get('token');

  console.log('token ',token);

  //-------------------- State management stuff
  const [form, setForm] = useState({ password: ""});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const submitData = {'newPassword':`${form.password}`,'token':token}

      const {data,status,error} = await axios.post(`${url}/auth/faculty-reset-password`, submitData)
      console.log('data and status ',data , status,error);

      if(status !== 200)
          toast.error(data?.error);
      else {

        toast.success(data?.message);
        navigate('/faculty/login');
      }

    } catch (error) {
      console.log('error ',error);
      toast.error(error?.message);
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
        <Heading color="var(--main-primary)">Reset Your Password</Heading>
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
                    placeholder="password"
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
                Reset Password
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;