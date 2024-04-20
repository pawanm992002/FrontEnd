import React,{useState} from 'react'

//-------- Packages Stuff
import {VStack} from '@chakra-ui/react'


import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';

//------------- Create the profile form
export const AddNewEventForm = () => {
    const [form,setForm] = useState({title:'',description:'',date:'',image:''});

    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e) => {
        setForm({...form,image:e.target.files[0]});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form', form);

        setLoading(true);

        try {
            
        } catch (error) {
            
        }

        setLoading(false);
    };

    return (
        <>
        <FormBox title={"Add New Event"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Event Name"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />


                    <FormInputBox label={'Event Thumbnail'} type='file' handleChange={handleFileChange} name={'image'} />

                    <FormInputBox label={"Event Description"} name={'description'} placeholder={"description"} value={form.description} handleChange=
                    {handleChange} />

                    <FormInputBox label={"Event date"} name={'date'} type='date' value={form.date} handleChange={handleChange} />
                  

                    <ButtonBox loading={loading} type='submit' title={'Add New Event'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------ Create the examination Section form
export const AchievementForm = ()=>{
    const [form,setForm] = useState({department:'',achievement:'',category:''});
    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('pawan form', form);

        setLoading(true);

        try {
            
        } catch (error) {
            
        }

        setLoading(false);
    };


    return(
        <>
            <FormBox title={"Add Achievements"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Department"} name={'department'} placeholder={"CSE"} value={form.department} handleChange={handleChange} />

                    <FormInputBox label={"Achievement"} name={'achievement'} placeholder={"Getting any rank in any contest"} value={form.achievement} handleChange={handleChange} />

                    <FormInputBox label={"Category"} name={'category'} placeholder={"Student/College"} value={form.category} handleChange={handleChange} />


                    <ButtonBox loading={loading} type='submit' title={'Add New Achievement'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------ add new gallery in department
export const AddNewDepartmentGalleryForm = ()=>{
    const [form,setForm] = useState({department:'',file:''});
    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e)=> setForm({...form,file:e.target.files[0]});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form', form);

        setLoading(true);

        try {
            
        } catch (error) {
            
        }

        setLoading(false);
    };


    return(
        <>
            <FormBox title={"Add Department Gallery"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Department"} name={'department'} placeholder={"CSE"} value={form.department} handleChange={handleChange} />

                    <FormInputBox label={"File"} name={'file'} type='file' handleChange={handleFileChange} />


                    <ButtonBox loading={loading} type='submit' title={'Add Gallery'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------ add new gallery in department
export const AddDepartmentTimeTableForm = ()=>{
    const [form,setForm] = useState({department:'',timetable:'',title:''});
    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e)=> setForm({...form,timetable:e.target.files[0]});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form', form);

        setLoading(true);

        try {
            
        } catch (error) {
            
        }

        setLoading(false);
    };


    return(
        <>
            <FormBox title={"Add Department TimeTable"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Title"} name={'title'} placeholder={"title of the time table"} value={form.title} handleChange={handleChange} />

                    <FormInputBox label={"Department"} name={'department'} placeholder={"CSE"} value={form.department} handleChange={handleChange} />

                    <FormInputBox label={"Upload Timetable"} name={'timetable'} handleChange={handleFileChange} />


                    <ButtonBox loading={loading} type='submit' title={'Upload Time Table'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}