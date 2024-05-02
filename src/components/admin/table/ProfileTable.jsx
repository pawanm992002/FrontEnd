import React from 'react'
import {
    Container,
    Box,
    chakra,
    Flex,
    Divider,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Th,
    Tr,
    Td,
    Button,
    Image
} from '@chakra-ui/react';
const ProfileTable = ({ tableHeading, dataArray }) => {

    console.log('data array ',dataArray);

    const handleDelete = (id) => {
        alert(`circular ${id} deleted`)
    }

    return (
        <Container maxW="4xl" py={10} px={4}>
            <Box border="1px solid" borderColor="gray.400" rounded="md" boxShadow="lg" overflow="hidden">
                <Flex justifyContent="left" p={5}>
                    <chakra.h3 fontSize="xl" fontWeight="bold" textAlign="center">
                        All Member
                    </chakra.h3>
                </Flex>
                <Divider />
                <TableContainer>
                    <Table size="md">
                        <Thead>
                            <Tr fontWeight="900">
                                {
                                    tableHeading.map((data, i) => {
                                        return <Th key={i}>{data}</Th>
                                    })
                                }
                                <Th>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dataArray?.map((data, index) => (
                                <Tr key={index}>
                                    <Td fontSize="sm"><Image width={'50px'} height={'50px'} borderRadius={'50%'} src={data?.profile ? data?.profile : data?.image} /></Td>
                                    <Td fontSize="sm">{data?.name}</Td>
                                    <Td fontSize="sm">{data?.email}</Td>
                                    <Td fontSize="sm">{data?.department ? data?.department : "Engineering"}</Td>
                                    {data.batch ? <Td fontSize="sm">{data?.batch}</Td> : ""}
                                    <Td><Button colorScheme='red' onClick={() => handleDelete(data?._id)}>Delete</Button></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}

export default ProfileTable


