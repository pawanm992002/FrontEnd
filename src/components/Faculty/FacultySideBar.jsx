'use client'

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Center,
  Image,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'



const LinkItems = [
  { name: 'Profile', icon: FiHome, href: '/faculty/profile' },
  { name: 'Notes', icon: FiTrendingUp, href: '/faculty/notes' },
  { name: 'Change Password', icon: FiCompass, href: '/faculty/change-password' },
]

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* Logo */}
        <Image src='https://www.ecajmer.ac.in/images//white%20logo.png' />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems?.map((link) => (
        <Link key={link.name} to={link.href} style={{ width: "100%", height: '100%' }}>
          <NavItem onClick={onClose} icon={link.icon} >
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {

  const href = (window.location.href).split('/');
  const activeLink = href[href?.length - 1];

  // console.log(href,activeLink,children,'check link');

  return (
    <Box
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        textTransform="capitalize"
        bg={activeLink === children && 'var(--main-primary)'}
        color={activeLink === children && 'white'}
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'var(--main-primary)',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        EcAjmer
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>  <Link to={'/faculty/profile'} >Profile</Link> </MenuItem>
              <MenuDivider />
              <MenuItem> <Link to={'/logout'} >Logout</Link> </MenuItem>

            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const Sidebar = ({ content }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  //----------- function to set the department of the users
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
      if (localStorage.getItem("typeOfUser") !== 'faculty')
        navigate("/");
    }
    console.log('run');
  },[])



  useEffect(() => {
    const user = JSON.parse(localStorage?.getItem('userData'));
    console.log('user at sidebar ', user);

    if (user?.department === 'Civil Engineering')  setSearchParams({ dept_name: "civil" });

   /* else if (department === 'cse') {
      department = 'Computer Science and Engineering'
    }

    else if (department === 'eee') {
      department = "Electrical Engineering"
    }

    else if (department === 'eic') {
      department = "Electronic Instrumentation And Control Engineering"
    }

    else if (department === 'ece') {
      department = "Electronics and Communication Engineering"
    }

    else if (department === 'mechanical') {
      department = "Mechanical Engineering"
    }

    else if (department === 'mca') {
      department = "Computer Applications"
    }

    else if (department === 'mba') {
      department = "Department of Management Studies"
    }

    else if (department === 'physics') {
      department = "Physics Department"
    }

    else if (department === 'chemistry') {
      department = "Chemistry Department"
    }

    else if (department === 'maths') {
      department = "Mathematics Department"
    }

    else if (department === 'english') {
      department = "English Department"
    }

    else if (department === 'economics') {
      department = "Economics Department"

    }*/
  }, [])

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {content ?
          content
          :
          <>
            <Center>
              <Box maxH={'200px'} maxW={'500px'}>
                <Image src='https://www.ecajmer.ac.in/images//white%20logo.png' />
              </Box>
            </Center>
          </>}
      </Box>
    </Box>
  )
}

export default Sidebar


