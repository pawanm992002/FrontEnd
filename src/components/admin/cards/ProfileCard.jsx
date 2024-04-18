import React from 'react'
import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react'
import ProfileTable from '../table/ProfileTable'
import { AchievementForm, AddDepartmentTimeTableForm, AddNewDepartmentGalleryForm, FacultyMemberForm } from '../components/DepartmentsForms'
import AdminModal from '../AdminModal'
import { Link, useSearchParams } from 'react-router-dom'
import CircularTable from '../table/CircularTable'
import { AddWebTeamForm } from '../components/WebTeamForms'

const ProfileCard = ({ data, tableHeading, dataArray, link }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [searchParams,setSearchParams] = useSearchParams();
    const section = searchParams.get('section');

    console.log('link ', link, section);


    return (
        <>

            <Link style={{ padding: 25, backgroundColor: 'var(--main-primary)', borderWidth: 1, borderRadius: '12px', cursor: 'pointer' }} to={`/admin/${link}?section=${data.title}`} onClick={onOpen}  >

                <Text fontWeight="bold" fontSize="2xl" color={'white'}>
                    {data.title}
                </Text>
                <Text color={'white'}>{data.length}</Text>

            </Link>

            <AdminModal isOpen={isOpen} onClose={onClose} title={link} >
                <VStack>
                    <Flex alignItems={'center'} p='3' justifyContent={'space-between'} bg={'var(--main-primary)'} color={'white'} w={'full'}>
                        <h2 style={{ cursor: 'pointer' }} onClick={() => setSearchParams({ section: `${data.title}` })} fontSize='xl' textAlign='center'>
                            {data.title}
                        </h2>
                        <Button onClick={() => setSearchParams({ section: `${data.title} Form` })} colorScheme='blue' mr={3}>
                            Add New
                        </Button>
                    </Flex>

                    {/* ---------------- Faculty Member Stuff -----------------  */}
                    {section === 'Faculty Member' && <ProfileTable dataArray={dataArray} tableHeading={tableHeading} />}
                    {section === 'Faculty Member Form' && <FacultyMemberForm />}

                    {/* ----------------- Achievement Stuff ---------------  */}
                    {section === 'Achievement' && <CircularTable />}
                    {section === 'Achievement Form' && <AchievementForm />}

                    {/* ----------------- WEb Team Stuff ---------------  */}
                    {section === 'Team Member' && <CircularTable />}
                    {section === 'Team Member Form' && <AddWebTeamForm />}


                </VStack>
            </AdminModal>
        </>
    )
}

export default ProfileCard
