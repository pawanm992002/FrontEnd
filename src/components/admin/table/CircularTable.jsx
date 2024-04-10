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
    Button
} from '@chakra-ui/react';
const CircularTable = () => {

    const dataArray = [
        {
            _id: '1',
            srNo: '1',
            date: '2024-03-20',
            title: 'Title 1',
            link: 'https://example.com/link1'
        },
        {
            _id: '2',
            srNo: '2',
            date: '2024-03-21',
            title: 'Title 2',
            link: 'https://example.com/link2'
        },
        {
            _id: '3',
            srNo: '3',
            date: '2024-03-22',
            title: 'Title 3',
            link: 'https://example.com/link3'
        },
        {
            _id: '4',
            srNo: '4',
            date: '2024-03-23',
            title: 'Title 4',
            link: 'https://example.com/link4'
        },
        {
            _id: '5',
            srNo: '5',
            date: '2024-03-24',
            title: 'Title 5',
            link: 'https://example.com/link5'
        },
        {
            _id: '6',
            srNo: '6',
            date: '2024-03-25',
            title: 'Title 6',
            link: 'https://example.com/link6'
        },
        {
            _id: '7',
            srNo: '7',
            date: '2024-03-26',
            title: 'Title 7',
            link: 'https://example.com/link7'
        },
        {
            _id: '8',
            srNo: '8',
            date: '2024-03-27',
            title: 'Title 8',
            link: 'https://example.com/link8'
        },
        {
            _id: '9',
            srNo: '9',
            date: '2024-03-28',
            title: 'Title 9',
            link: 'https://example.com/link9'
        },
        {
            _id: '10',
            srNo: '10',
            date: '2024-03-29',
            title: 'Title 10',
            link: 'https://example.com/link10'
        }
    ];


    const handleDelete = (id) => {
        alert(`circular ${id} deleted`)
    }

    return (
        <Container maxW="3xl" py={10} px={4}>
            <Box border="1px solid" borderColor="gray.400" rounded="md" boxShadow="lg" overflow="hidden">
                <Flex justifyContent="left" p={5}>
                    <chakra.h3 fontSize="xl" fontWeight="bold" textAlign="center">
                        All Circular
                    </chakra.h3>
                </Flex>
                <Divider />
                <TableContainer>
                    <Table size="md">
                        <Thead>
                            <Tr fontWeight="900">
                                <Th>Sr No.</Th>
                                <Th>Date</Th>
                                <Th>Title</Th>
                                <Th>Link</Th>
                                <Th>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dataArray.map((data, index) => (
                                <Tr key={index}>
                                    <Td fontSize="sm">{data.srNo}</Td>
                                    <Td fontSize="sm">{data.date}</Td>
                                    <Td fontSize="sm">{data.title}</Td>
                                    <Td color={'blue'} fontSize="sm"><a href={data.link}>View</a></Td>
                                    <Td><Button colorScheme='red' onClick={() => handleDelete(data._id)}>Delete</Button></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}

export default CircularTable


