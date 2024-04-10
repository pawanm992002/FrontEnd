import React from 'react'
import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react'
import ProfileTable from '../table/ProfileTable'

const ProfileCard = ({ data, tableHeading,dataArray }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box cursor={'pointer'} p={5} boxShadow="md" rounded="md" borderWidth={1} backgroundColor={'blue.700'} onClick={onOpen}>
                <Text fontWeight="bold" fontSize="2xl" color={'white'}>
                    {data.title}
                </Text>
                <Text color={'white'}>{data.length}</Text>
            </Box>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'4xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{data.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <Flex alignItems={'flex-start'} justifyContent={'flex-end'} w={'full'}>
                                <Button colorScheme='pink' mr={3}>
                                    Add New
                                </Button>
                            </Flex>
                            <ProfileTable dataArray={dataArray} tableHeading={tableHeading}/>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='pink' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileCard
