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
  useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { handleAdminLogin } from "../../../apis/AdminApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {

  const navigate = useNavigate();

  //-------------------- State management stuff
  const [form, setForm] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setLoading(true);
  
      const data = await handleAdminLogin(form);
  
      if (data) {
        toast.success(data?.message);
        
        localStorage.setItem("token",data.token)
        localStorage.setItem("_id",data.admin._id)
        localStorage.setItem("username",data.admin.username)
        localStorage.setItem("isLoggedIn",1)
        
        navigate('/admin/administration');

      } else {
        toast.error("Username or password is not valid");
      }
    } catch (error) {
        toast.error(error?.message);
    }
  
  
    setLoading(false);

    setForm({ username: '', password: '' })
  };

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("isLoggedIn")) === 1) 
      navigate('/admin')
  },[])

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
        <Heading color="var(--main-primary)">Admin Login</Heading>
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
                  <Input type="text" placeholder="username address" name="username" onChange={handleChange} required minLength={5} />

                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password" onChange={handleChange} required minLength={5}

                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                isLoading={loading}
                borderRadius={0}
                type="submit"
                variant="solid"
                bgColor={"var(--main-primary)"}
                width="full"
                color={'white'}
                sx={{ '&:hover': { bg: 'var(--main-primary)' } }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
