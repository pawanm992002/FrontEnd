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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../components/Faculty/api/APIs";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const navigate = useNavigate();

  //-------------------- State management stuff
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const myForm = new FormData();
      myForm.append('email', form.email);
      myForm.append('password', form.password);

      const { data, status, error } = await axios.post(`${url}/auth/faculty-login`, myForm)
      

      if (status !== 200)
        toast.error("email and password not match");
      else {

        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", true)

        toast.success(data?.message);

        localStorage.setItem("userData", JSON.stringify(data?.faculty));
        localStorage.setItem("typeOfUser", "faculty");

        if (data?.faculty?.designation === 'Faculty') {

          localStorage.setItem("typeOfUser", "faculty");
          navigate("/faculty/profile");
        } else {
          localStorage.setItem("typeOfUser", "Head of Department");
          navigate("/hod/profile");
        }

      }

    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
    setLoading(false);
    setForm({ email: "", password: "" });
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
      if (localStorage.getItem("typeOfUser") === 'faculty')
        navigate("/faculty/profile");
      else navigate('/hod/profile');
    }
  }, [handleSubmit]);

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
        <Heading color="var(--main-primary)">Faculty Login</Heading>
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
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    minLength={5}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link href='/faculty/forget-password'>forgot password?</Link>
                </FormHelperText>
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
