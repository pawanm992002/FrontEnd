import React from 'react'
import { Button, Flex, FormControl, FormLabel, Select, Text, VStack, useDisclosure } from '@chakra-ui/react'
import AdminModal from '../AdminModal'
import { AccountSectionForm, AdministrationForm, ExaminationForm, ProctorSectionForm, RegistrarSectionForm } from '../components/AdministrationForms'
import { AcademicCalenderForm, FirstYearCircularForm } from '../components/AcademicsForms'
import { AchievementForm, AddDepartmentNotesForm, AddDepartmentTimeTableForm, AddNewDepartmentGalleryForm, FacultyMemberForm } from '../components/DepartmentsForms'
import { AddNewEventForm } from '../components/EventsForms'
import { Link, useSearchParams } from 'react-router-dom'
import { AddCreativeArtSocietyCircular, AddCreativeArtSocietyGallery, AddHostelCircular, AddHostelGallery, AddNCCDataCircular, AddNCCDataGallery, AddPlacementForm, AddStudentAchievementCircular, AddTransportationCircular } from '../components/StudentCornerForms'
import { AddAlumniCellCircular } from '../components/CellForms'
import { AddECAPressForm } from '../components/ECAPressForms'
import MyTable from '../../utilily/MyTable'
import { AddWebTeamForm } from '../components/WebTeamForms'

export const tableSection = [
  "Gallery",
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
  "Faculty Member",
  "Placement"
];

const CircularCard = ({ data, link,typeOfUser='admin',dept_name='',dept_readonly=false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get("section");


 

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
        to={`/${typeOfUser}/${link}?section=${data?.title}`}
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
          {/* <MyTable data={data.data} /> */}

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
          {section === "Circular Form" && <RegistrarSectionForm />}

          {/* ---------------- Academic Calender Stuff -----------------  */}
          {section === "Academic Calender Form" && <AcademicCalenderForm />}

          {/* ---------------- First year circular Stuff -----------------  */}
          {section === "First Year Circular Form" && <FirstYearCircularForm />}

          {/* ---------------- Achievement Stuff -----------------  */}
          {section === "Achievement Form" && <AchievementForm dept_name={dept_name} dept_readonly={dept_readonly} />}

          {/* ------------- Notes Form -------------------  */}
          {section === "Notes Form" && <AddDepartmentNotesForm dept_name={dept_name} dept_readonly={dept_readonly} />}

          {section === 'Faculty Member Form' && <FacultyMemberForm dept_name={dept_name} dept_readonly={dept_readonly} />}


          {/* ---------------- Time Table Stuff -----------------  */}
          {section === "Time Table Form" && <AddDepartmentTimeTableForm dept_name={dept_name} dept_readonly={dept_readonly} />}

          {/* ---------------- Time Table Stuff -----------------  */}
          {section === "Placement Form" && <AddPlacementForm dept_readonly={true}  dept_name={dept_name} />}

          {/* ---------------- Gallery Stuff -----------------  */}
          {section === "Gallery Form" && <AddNewDepartmentGalleryForm dept_name={dept_name} dept_readonly={dept_readonly} />}

          {/* ---------------- Events Stuff -----------------  */}
          {section === "Event Form" && <AddNewEventForm />}

          {/* ---------------- Creative Art data circular Stuff -----------------  */}
          {section === "CreativeArtData Circular Form" && (
            <AddCreativeArtSocietyCircular />
          )}

          {/* --------------------- Team Member Form  */}
          {section === 'Team Member Form' && <AddWebTeamForm />}

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
          {section === 'StudentAchievementData Form' && <AddStudentAchievementCircular />}

          {/* ---------------- Alumni Circular Stuff -----------------  */}
          {section === "Alumni Circular Form" && <AddAlumniCellCircular />}

          {/* ---------------- NewsData Circular Stuff -----------------  */}
          {section === "NewsData Circular Form" && <AddAlumniCellCircular />}

          {/* ---------------- ordersData Circular Stuff -----------------  */}
          {section === 'OrdersData Circular Form' && <AddAlumniCellCircular />}


          {/* ---------------- ECA Press Stuff -----------------  */}
          {section === 'News Cutting Form' && <AddECAPressForm />}



        </VStack>
      </AdminModal>
    </>
  )
}

export default CircularCard;


//-------- Create the departments list
export const DepartmentsSelection = ({ value, handleChange, name = 'department',dept_readonly=false,label }) => {
  
  return (
    <>

<FormControl>
     <FormLabel requiredIndicator={null} >{label}</FormLabel>
      <Select
      cursor={'pointer'}
      value={value}
        onChange={handleChange}
        name={name}
        isDisabled={dept_readonly}
      >
        <option value="cse">CSE</option>
        <option value="civil">Civil</option>
        <option value="eee">Electrical</option>
        <option value="eic">Electronics</option>
        <option value="ece">Electronics Communication</option>
        <option value="mechanical">Mechanical</option>
        <option value="mca">MCA</option>
        <option value="mba">MBA</option>
        <option value="physics">Physics</option>
        <option value="chemistry">Chemistry</option>
        <option value="maths">Maths</option>
        <option value="english">English</option>
        <option value="economics">Economics</option>
      </Select>
      </FormControl>
    </>
  )
}

//-------- Create the designation list
export const DesignationSelection = ({ value, handleChange,label,name= 'designation'}) => {
  return (
    <>
    
    <FormControl>
                <FormLabel>{label}</FormLabel>
      <Select
        value={value}
        onChange={handleChange}
        name={name}
      >
        <option value="Professor">Professor</option>
        <option value="Assistant Professor">Assistant Professor</option>
        <option value="Lecturer">Lecturer</option>
        <option value="Head of Department">Head of Department</option>
        <option value="Lab Attendant">Lab Attendant</option>
        <option value="Technician">Technician</option>
        <option value="Lab Incharge">Lab Incharge</option>
      </Select>
      </FormControl>
    </>
  )
}

//-------- Create the semester list
export const SemesterSelection = ({ value, handleChange,label="Semester",name='sem' }) => {
  return (
    <>
    <FormControl>
                <FormLabel>{label}</FormLabel>
      <Select
        value={value}
        onChange={handleChange}
        name={name}
      >
        <option value="1st">1st</option>
        <option value="2nd">2nd</option>
        <option value="3rd">3rd</option>
        <option value="4th">4th</option>
        <option value="5th">5th</option>
        <option value="6th">6th</option>
        <option value="7th">7th</option>
        <option value="8th">8th</option>
      </Select>
      </FormControl>
    </>
  )
}

//-------- Create the year selections
export const YearSelection = ({ value, handleChange,name='year',label='Year' }) => {
  return (
    <>
    <FormControl>
                <FormLabel>{label}</FormLabel>
      <Select
        value={value}
        onChange={handleChange}
        name={name}
      >
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </Select>
      </FormControl>
    </>
  )
}



