import React from 'react'
import { Button, Flex,Text, VStack, useDisclosure } from '@chakra-ui/react'
import AdminModal from '../AdminModal'
import { AccountSectionForm, AdministrationForm, ExaminationForm, ProctorSectionForm, RegistrarSectionForm } from '../components/AdministrationForms'
import { AcademicCalenderForm, FirstYearCircularForm } from '../components/AcademicsForms'
import { AchievementForm, AddDepartmentNotesForm, AddDepartmentTimeTableForm, AddNewDepartmentGalleryForm } from '../components/DepartmentsForms'
import { AddNewEventForm } from '../components/EventsForms'
import { Link, useSearchParams } from 'react-router-dom'
import { AddCreativeArtSocietyCircular, AddCreativeArtSocietyGallery, AddHostelCircular, AddHostelGallery, AddNCCDataCircular, AddNCCDataGallery, AddStudentAchievementCircular, AddTransportationCircular } from '../components/StudentCornerForms'
import { AddAlumniCellCircular } from '../components/CellForms'
import { AddECAPressForm } from '../components/ECAPressForms'
import MyTable from '../../utilily/MyTable'

const CircularCard = ({ data, link }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get("section");

  let tableSection = [
    "Gallery",
    "Circular",
    "Time Table",
    "Achievement",
    "Notes",
    "Academic Calender",
    "First Year Circular",
    "Event",
    "Bog Mom",
    "Examination Circular",
    "Account Section Circular",
    "Proctor Circular",
    "Registrar Circular",
    "CreativeArtData Circular",
    "NCCData Circular",
    "NCCData Gallery",
    "HostelData Circular",
    "HostelData Gallery",
    "TransportationData Circular",
    "StudentAchievementData",
    'Alumni Circular', 
    "NewsData Circular",
    "OrdersData Circular",
    'News Cutting',
    "Team Member",
    "Faculty Member"
  ];

  return (
    <>
      <Link
        style={{
          padding: 25,
          backgroundColor: "var(--main-primary)",
          borderWidth: 1,
          borderRadius: "12px",
          cursor: "pointer",
        }}
        to={`/admin/${link}?section=${data?.title}`}
        onClick={onOpen}
      >
        <Text fontWeight="bold" fontSize="2xl" color={"white"}>
          {data.title}
        </Text>
        <Text color={"white"}>{data.length}</Text>
      </Link>

      <AdminModal isOpen={isOpen} onClose={onClose} title={link}>
        <VStack>
          <Flex
            alignItems={"center"}
            p="3"
            justifyContent={"space-between"}
            bg={"var(--main-primary)"}
            color={"white"}
            w={"full"}
          >
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => setSearchParams({ section: `${data?.title}` })}
              fontSize="xl"
              textAlign="center"
            >
              {data.title}
            </h2>
            <Button
              onClick={() =>
                setSearchParams({ section: `${data?.title} Form` })
              }
              colorScheme="blue"
              mr={3}
            >
              Add New
            </Button>
          </Flex>

          {tableSection.includes(section) && <MyTable data={data.data} />}

          {/* ---------------- Bog Mom Stuff -----------------  */}
          {section === "Bog Mom Form" && <AdministrationForm />}

          {/* ---------------- Examination Section Stuff -----------------  */}
          {section === "Examination Circular Form" && <ExaminationForm />}

          {/* ---------------- Account Section Stuff -----------------  */}
          {section === "Account Section Circular Form" && (
            <AccountSectionForm />
          )}

          {/* ---------------- Proctor Section Stuff -----------------  */}
          {section === "Proctor Circular Form" && <ProctorSectionForm />}

          {/* ---------------- Proctor Section Stuff -----------------  */}
          {section === "Registrar Circular Form" && <RegistrarSectionForm />}

          {/* ---------------- Academic Calender Stuff -----------------  */}
          {section === "Academic Calender Form" && <AcademicCalenderForm />}

          {/* ---------------- First year circular Stuff -----------------  */}
          {section === "First Year Circular Form" && <FirstYearCircularForm />}

          {/* ---------------- Achievement Stuff -----------------  */}
          {section === "Achievement Form" && <AchievementForm />}

          {/* ------------- Notes Form -------------------  */}
          {section === "Notes Form" && <AddDepartmentNotesForm />}


          {/* ---------------- Time Table Stuff -----------------  */}
          {section === "Time Table Form" && <AddDepartmentTimeTableForm />}

          {/* ---------------- Gallery Stuff -----------------  */}
          {section === "Gallery Form" && <AddNewDepartmentGalleryForm />}

          {/* ---------------- Events Stuff -----------------  */}
          {section === "Event Form" && <AddNewEventForm />}

          {/* ---------------- Creative Art data circular Stuff -----------------  */}
          {section === "CreativeArtData Circular Form" && (
            <AddCreativeArtSocietyCircular />
          )}

          {/* ---------------- Creative Art data gallery Stuff -----------------  */}
          {section === "CreativeArtData Gallery Form" && (
            <AddCreativeArtSocietyGallery />
          )}

          {/* ---------------- NCC Data circular Stuff -----------------  */}
          {section === "NCCData Circular Form" && <AddNCCDataCircular />}

          {/* ---------------- NCC Data Gallery Stuff -----------------  */}
          {section === "NCCData Gallery Form" && <AddNCCDataGallery />}

          {/* ---------------- NCC Data circular Stuff -----------------  */}
          {section === "HostelData Circular Form" && <AddHostelCircular />}

          {/* ---------------- NCC Data Gallery Stuff -----------------  */}
          {section === "HostelData Gallery Form" && <AddHostelGallery />}

          {/* ---------------- Transportation Data Stuff -----------------  */}
          {section === "TransportationData Circular Form" && (
            <AddTransportationCircular />
          )}

                        {/* ---------------- Transportation Data Stuff -----------------  */}
                        { section === 'StudentAchievementData Form' && <AddStudentAchievementCircular /> }

          {/* ---------------- Alumni Circular Stuff -----------------  */}
          {section === "Alumni Circular Form" && <AddAlumniCellCircular />}

          {/* ---------------- NewsData Circular Stuff -----------------  */}
          {section === "NewsData Circular Form" && <AddAlumniCellCircular />}

                        {/* ---------------- ordersData Circular Stuff -----------------  */}
                        { section === 'OrdersData Circular Form' && <AddAlumniCellCircular /> }

                        
                        {/* ---------------- ECA Press Stuff -----------------  */}
                        { section === 'News Cutting Form' && <AddECAPressForm/> }



                    </VStack>
                </AdminModal>
        </>
    )
}

export default CircularCard;
