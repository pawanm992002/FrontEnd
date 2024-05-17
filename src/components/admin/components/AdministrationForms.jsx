import React,{useState} from 'react'

//-------- Packages Stuff
import {VStack, FormControl,
    FormLabel,
    Text
} from '@chakra-ui/react'


import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';
import { AdminApiInstance } from '../apis/ApiIntances';
import toast from 'react-hot-toast';

//------------- Create the administration form
export const AdministrationForm = () => {
    const [form,setForm] = useState({meetingNo:'',date:new Date().toLocaleDateString(),minute:''});
    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e) => {
        setForm({...form,minute:e.target.files[0]});
    };

    const handleSubmit = async(e) => {

        e.preventDefault();

        setLoading(true);
        const myForm = new FormData();

        myForm.append('meetingNo',form.meetingNo)
        myForm.append('minute',form.minute)
        myForm.append('date',form.date)

        try {
            const { data, status } = await AdminApiInstance.post('/administration/bog-mom', myForm);

            if (status === 200) toast.success(data?.message);
            else toast.error(data?.message)

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
        setForm({meetingNo:'',date:new Date().toLocaleDateString(),minute:''})
    };

    return (
        <>
        <FormBox title={"Add New BOG Member"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Meeting Number"} name={'meetingNo'} placeholder={"22th"} value={form.meetingNo} handleChange={handleChange} />

                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <Text>{form.date}</Text>
                    </FormControl>

                    <FormInputBox label={'Minute Time-Table'} type='file' handleChange={handleFileChange} name={'minute'} />


                    <ButtonBox loading={loading} type='submit' title={'Add New Member'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------ Create the examination Section form
export const ExaminationForm = ()=>{
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
            const { data, status } = await AdminApiInstance.post('/administration/examination-circular', myForm);

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
            <FormBox title={"Add new examination circular"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Title"} name={'title'} placeholder={"examination circular"} value={form.title} handleChange={handleChange} />

                    <FormInputBox label={'Notice'} type='file' handleChange={handleFileChange} name={'notice'} />

                    <ButtonBox loading={loading} type='submit' title={'Add Examination Notice'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------ Create the examination Section form
export const AccountSectionForm = ()=>{
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
            const { data, status } = await AdminApiInstance.post('/administration/account-circular', myForm);

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
            <FormBox title={"Add new account section circular"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Title"} name={'title'} placeholder={"enter circular"} value={form.title} handleChange={handleChange} />

                    <FormInputBox label={'Notice'} type='file' handleChange={handleFileChange} name={'notice'} />

                    <ButtonBox loading={loading} type='submit' title={'Add Account Section Notice'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------ Create the examination Section form
export const ProctorSectionForm = ()=>{
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
            const { data, status } = await AdminApiInstance.post('/administration/proctor-circular', myForm);

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
            <FormBox title={"Add new proctor section circular"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Title"} name={'title'} placeholder={"enter circular"} value={form.title} handleChange={handleChange} />

                    <FormInputBox label={'Notice'} type='file' handleChange={handleFileChange} name={'notice'} />

                    <ButtonBox loading={loading} type='submit' title={'Add Proctor Section Notice'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------ Create the examination Section form
export const RegistrarSectionForm = ({title='Add Registrar Section Notice',btn='Add Registrar'})=>{
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
            const { data, status } = await AdminApiInstance.post('/administration/registrar-circular', myForm);

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
            <FormBox title={title} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Title"} name={'title'} placeholder={"enter circular"} value={form.title} handleChange={handleChange} />

                    <FormInputBox label={'Notice'} type='file' handleChange={handleFileChange} name={'notice'} />

                    <ButtonBox loading={loading} type='submit' title={btn} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}