import React, { useEffect, useState } from 'react'
import { AddDepartmentNotesForm } from '../../components/admin/components/DepartmentsForms'
import {useSearchParams } from 'react-router-dom';
import MyTable from '../../components/utilily/MyTable';
import { Button, Flex, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { FacultyApiInstance, url } from '../../components/Faculty/api/APIs';
import toast from 'react-hot-toast';
import Loading from '../../components/Layout/Loading';


const Notes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get("section");
  const dept_name = searchParams.get('dept_name');

const [loading,setLoading] = useState(false);

  const [DepartmentNotes, setDepartmentNotes] = useState([]);

  const deleteDepartmentRow = async (_id) => {
    setLoading(true);
    try {
      const { data,status } = await FacultyApiInstance.delete(
        `/notes/${_id}`
      );
      if(status === 200) {
       setDepartmentNotes(DepartmentNotes.filter(item => item._id === _id));
        toast.success(data?.message);

      }

    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
    setLoading(false);
  };



  useEffect(() => {


    ; (async () => {

      setLoading(true);

    const user = JSON.parse(localStorage?.getItem('userData'));
      let department = user?.department;

    if (department === 'Civil Engineering') {
      setSearchParams({ dept_name: "civil" });
    }
    
       else if (department === ' Computer Science and Engineering') {
        setSearchParams({ dept_name: "cse" });
        }
    
        else if (department === 'Electrical Engineering') {
          setSearchParams({dept_name:'eee'})
        }
    
        else if (department === 'Electronic Instrumentation And Control Engineering') {
          setSearchParams({dept_name:'eic'})

        }
    
        else if (department === 'Electronics and Communication Engineering') {
          setSearchParams({dept_name:'ece'})

        }
    
        else if (department === 'Mechanical Engineering') {
          setSearchParams({dept_name:'mechanical'})

        }
    
        else if (department === 'Computer Applications') {
          setSearchParams({dept_name:'mca'})

        }
    
        else if (department === 'Department of Management Studies') {
          setSearchParams({dept_name:'mba'})

        }
    
        else if (department === 'Physics Department') {
          setSearchParams({dept_name:'physics'})

        }
    
        else if (department === 'Chemistry Department') {
          setSearchParams({dept_name:'chemistry'})

        }
    
        else if (department === 'Mathematics Department') {
          setSearchParams({dept_name:'maths'})

        }
    
        else if (department === 'English Department') {
          setSearchParams({dept_name:'english'})

        }
    
        else if (department === 'Economics Department') {
          setSearchParams({dept_name:'economics'})

    
        }
       
      
      try {
        const { data } = await axios.get(
          `${url}/public/department-notes/${searchParams.get('dept_name')}`
        );
        const temp = data?.result?.map((val, i) => {

          return {
            SR_NO: val._id,
            Created_At: new Date(val.createdAt).toDateString(),
            Title: val.title,
            Uploaded_By: val.faculty.name,
            Semester: val.sem,
            Source: (
              <a rel="noopener noreferrer" target='_blank' href={val.file}>
                <Button>View</Button>
              </a>
            ),
            
            Delete: (
              <Button onClick={() => deleteDepartmentRow(val?._id)}>
                Delete
              </Button>
            ),
          };
        });
        setDepartmentNotes(temp);
      } catch (error) {
        toast.error(error?.response?.data?.error);

      }
      setLoading(false);
    })();
  }, [section === 'Notes'])


  return (
    <>
    
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
            onClick={() => setSearchParams({ section: `Notes` })}
            fontSize="xl"
            textAlign="center"
          >
            Notes
          </h2>
          <Button
            onClick={() =>
              setSearchParams({ section: `Notes Form` })
            }
            colorScheme="blue"
            mr={3}
          >
            Add New
          </Button>
        </Flex>
        {loading && <Loading />}

        {(section === 'Notes' || section === null || !section) && <MyTable data={DepartmentNotes} styles={{width:"calc(100% - 400px)",height:440}} />}

        {/* ------------- Notes Form -------------------  */}
        {section === "Notes Form" && <AddDepartmentNotesForm dept_readonly={true} dept_name={searchParams.get('dept_name')} />}

      </VStack>
    </>
  )
}

export default Notes
