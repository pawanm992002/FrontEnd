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

import {url} from '../../components/Faculty/api/APIs'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const ForgetPassword = () => {
  const navigate = useNavigate();

  //-------------------- State management stuff
  const [form, setForm] = useState({ email: ""});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const [showResetLink, setShowResetLink] = useState(false);


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const {data,status,error} = await axios.post(`${url}/auth/faculty-forgot-password`, form)
      console.log('data and status ',data , status,error);

      if(status !== 200)
          toast.error(data?.error);
      else {

        toast.success(data?.message);
        setShowResetLink(data?.emailText);
      }

    } catch (error) {
      console.log('error ',error);
      toast.error(error?.message);
    }
    setLoading(false);
    setForm({ email: "" });
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
        <Heading color="var(--main-primary)">Faculty Forget Password</Heading>
        {showResetLink && <Text> Click the following link to reset password <Link color={'red'} href={showResetLink}>Click Here</Link> </Text> }
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
                    type="email"
                    placeholder="email address"
                    name="email"
                    value={form.email}
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
                Send Request To Forget ➡️
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ForgetPassword;