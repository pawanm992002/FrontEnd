import React from 'react'
import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react'
import CircularTable from '../table/CircularTable'
import AdminModal from '../AdminModal'
import { AccountSectionForm, AdministrationForm, ExaminationForm, ProctorSectionForm, RegistrarSectionForm } from '../components/AdministrationForms'
import { AcademicCalenderForm, FirstYearCircularForm } from '../components/AcademicsForms'
import { AchievementForm, AddDepartmentTimeTableForm, AddNewDepartmentGalleryForm } from '../components/DepartmentsForms'
import { AddNewEventForm } from '../components/EventsForms'
import { useParams,Link, useSearchParams, useNavigate } from 'react-router-dom'
import { AddCreativeArtSocietyCircular, AddCreativeArtSocietyGallery, AddHostelCircular, AddHostelGallery, AddNCCDataCircular, AddNCCDataGallery, AddStudentAchievementCircular, AddTransportationCircular } from '../components/StudentCornerForms'
import { AddAlumniCellCircular } from '../components/CellForms'

const CircularCard = ({ data,link }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [searchParams, setSearchParams] = useSearchParams();
    const section = searchParams.get('section');
    console.log('params & form',section,data?.title)


    return (
        <>
        
       

            <Link style={{padding:25,backgroundColor:'var(--main-primary)',borderWidth:1,borderRadius:'12px',cursor:'pointer'}} to={`/admin/${link}?section=${data?.title}`} onClick={onOpen}  >

                <Text fontWeight="bold" fontSize="2xl" color={'white'}>
                    {data.title}
                </Text>
                <Text color={'white'}>{data.length}</Text>
            </Link>

            <AdminModal isOpen={isOpen} onClose={onClose} title={link} >
                    <VStack>
                        <Flex alignItems={'center'} p='3' justifyContent={'space-between'} bg={'var(--main-primary)'} color={'white'} w={'full'}>
                            <h2 style={{cursor:'pointer'}}  onClick={()=>setSearchParams({section:`${data?.title}`})} fontSize='xl' textAlign='center'>
                               {data.title}
                            </h2>
                            <Button onClick={()=>setSearchParams({section:`${data?.title} Form`})} colorScheme='blue' mr={3}>
                                Add New
                            </Button>
                        </Flex>

                        {/* ---------------- Bog Mom Stuff -----------------  */}
                        { section === 'Bog Mom' && <CircularTable /> }
                        { section === 'Bog Mom Form' && <AdministrationForm/> }

                        {/* ---------------- Examination Section Stuff -----------------  */}
                        { section === 'Examination Circular' && <CircularTable /> }
                        { section === 'Examination Circular Form' && <ExaminationForm /> }

                        {/* ---------------- Account Section Stuff -----------------  */}
                        { section === 'Account Section Circular' && <CircularTable /> }
                        { section === 'Account Section Circular Form' && <AccountSectionForm /> }

                        {/* ---------------- Proctor Section Stuff -----------------  */}
                        { section === 'Proctor Circular' && <CircularTable /> }
                        { section === 'Proctor Circular Form' && <ProctorSectionForm /> }

                        {/* ---------------- Proctor Section Stuff -----------------  */}
                        { section === 'Registrar Circular' && <CircularTable /> }
                        { section === 'Registrar Circular Form' && <RegistrarSectionForm /> }

                        {/* ---------------- Academic Calender Stuff -----------------  */}
                        { section === 'Academic Calender' && <CircularTable /> }
                        { section === 'Academic Calender Form' && <AcademicCalenderForm /> }

                        {/* ---------------- First year circular Stuff -----------------  */}
                        { section === 'First Year Circular' && <CircularTable /> }
                        { section === 'First Year Circular Form' && <FirstYearCircularForm /> }

                        {/* ---------------- Achievement Stuff -----------------  */}
                        { section === 'Achievement' && <CircularTable /> }
                        { section === 'Achievement Form' && <AchievementForm /> }

                        {/* ---------------- Time Table Stuff -----------------  */}
                        { section === 'Time Table' && <CircularTable /> }
                        { section === 'Time Table Form' && <AddDepartmentTimeTableForm /> }

                        {/* ---------------- Gallery Stuff -----------------  */}
                        { section === 'Gallery' && <CircularTable /> }
                        { section === 'Gallery Form' && <AddNewDepartmentGalleryForm /> }

                        {/* ---------------- Events Stuff -----------------  */}
                        { section === 'Event' && <CircularTable /> }
                        { section === 'Event Form' && <AddNewEventForm /> }

                        {/* ---------------- Creative Art data circular Stuff -----------------  */}
                        { section === 'CreativeArtData Circular' && <CircularTable /> }
                        { section === 'CreativeArtData Circular Form' && <AddCreativeArtSocietyCircular /> }

                        {/* ---------------- Creative Art data gallery Stuff -----------------  */}
                        { section === 'CreativeArtData Gallery' && <CircularTable /> }
                        { section === 'CreativeArtData Gallery Form' && <AddCreativeArtSocietyGallery /> }

                        {/* ---------------- NCC Data circular Stuff -----------------  */}
                        { section === 'NCCData Circular' && <CircularTable /> }
                        { section === 'NCCData Circular Form' && <AddNCCDataCircular /> }

                        {/* ---------------- NCC Data Gallery Stuff -----------------  */}
                        { section === 'NCCData Gallery' && <CircularTable /> }
                        { section === 'NCCData Gallery Form' && <AddNCCDataGallery /> }

                        {/* ---------------- NCC Data circular Stuff -----------------  */}
                        { section === 'HostelData Circular' && <CircularTable /> }
                        { section === 'HostelData Circular Form' && <AddHostelCircular /> }

                        {/* ---------------- NCC Data Gallery Stuff -----------------  */}
                        { section === 'HostelData Gallery' && <CircularTable /> }
                        { section === 'HostelData Gallery Form' && <AddHostelGallery /> }

                        {/* ---------------- Transportation Data Stuff -----------------  */}
                        { section === 'TransportationData Circular' && <CircularTable /> }
                        { section === 'TransportationData Circular Form' && <AddTransportationCircular /> }

                        {/* ---------------- Transportation Data Stuff -----------------  */}
                        { section === 'StudentAchievementData' && <CircularTable /> }
                        { section === 'StudentAchievementData Form' && <AddStudentAchievementCircular /> }
                        { section === 'TransportationData Circular Form' && <AddTransportationCircular /> }

                        {/* ---------------- Alumni Circular Stuff -----------------  */}
                        { section === 'Alumni Circular' && <CircularTable /> }
                        { section === 'Alumni Circular Form' && <AddAlumniCellCircular /> }

                        {/* ---------------- NewsData Circular Stuff -----------------  */}
                        { section === 'NewsData Circular' && <CircularTable /> }
                        { section === 'NewsData Circular Form' && <AddAlumniCellCircular /> }

                        {/* ---------------- ordersData Circular Stuff -----------------  */}
                        { section === 'OrdersData Circular' && <CircularTable /> }
                        { section === 'OrdersData Circular Form' && <AddAlumniCellCircular /> }



                    </VStack>
                </AdminModal>
        </>
    )
}

export default CircularCard
