import React,{useState} from 'react'

//-------- Packages Stuff
import {VStack} from '@chakra-ui/react'


import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';
import { AdminApiInstance } from '../apis/ApiIntances';
import toast from 'react-hot-toast';

//------------- Create the calender form
export const AcademicCalenderForm = () => {
    const [form,setForm] = useState({session:'',sem:'',calender:''});
    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e) => {
        setForm({...form,calender:e.target.files[0]});
    };

 
    const handleSubmit = async(e) => {

        e.preventDefault();

        setLoading(true);
        const myForm = new FormData();

        myForm.append('session',form.session)
        myForm.append('sem',form.sem)
        myForm.append('calender',form.calender)

        try {
            const { data, status } = await AdminApiInstance.post('/academic/calender', myForm);

            if (status === 200) toast.success(data?.message);
            else toast.error(data?.message)

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
        setForm({session:'',sem:'',calender:''})
    };

    return (
        <>
        <FormBox title={"Add New sem Caleder"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Session Year"} name={'session'} placeholder={"2023-24"} value={form.session} handleChange={handleChange} />

                    <FormInputBox label={"Semester"} name={'sem'} placeholder={"Even"} value={form.sem} handleChange={handleChange} />

                    <FormInputBox label={'Calender Time-Table'} type='file' handleChange={handleFileChange} name={'calender'} />


                    <ButtonBox loading={loading} type='submit' title={'Add Calender'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------ Create the examination Section form
export const FirstYearCircularForm = ()=>{
    const [form,setForm] = useState({title:'',notice:''});
    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e) => {
        setForm({...form,notice:e.target.files[0]});
    };

   
    const handleSubmit = async(e) => {

        e.preventDefault();

        setLoading(true);
        const myForm = new FormData();

        myForm.append('title',form.title)
        myForm.append('notice',form.notice)

        try {
            const { data, status } = await AdminApiInstance.post('/academic/first-year-circular', myForm);

            if (status === 200) toast.success(data?.message);
            else toast.error(data?.message)

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
        setForm({title:'',notice:''})
    };

    return(
        <>
            <FormBox title={"Add First year circular"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Title"} name={'title'} placeholder={"circular"} value={form.title} handleChange={handleChange} />

                    <FormInputBox label={'Notice'} type='file' handleChange={handleFileChange} name={'notice'} />

                    <ButtonBox loading={loading} type='submit' title={'Add First Year Notice'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}