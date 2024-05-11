'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>

          <Text as={'span'} color={'var(--main-primary)'}>
          404
          </Text> NOT FOUND
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
         Welcome in Engineering College Ajmer.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Link to={'/'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'var(--main-primary)'}
            _hover={{ bg: 'var(--main-primary)' }}>
            Go To Home Page
          </Button>
         
              </Link>
        </Stack>
      </Stack>
    </Container>
  )
}