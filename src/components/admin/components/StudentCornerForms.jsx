import React,{useState} from 'react'

//-------- Packages Stuff
import {VStack} from '@chakra-ui/react'


import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';

//------------- Create the profile form
export const AddCreativeArtSocietyCircular = () => {
    const [form,setForm] = useState({title:'',notice:''});

    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e) => {
        setForm({...form,notice:e.target.files[0]});
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
        <FormBox title={"Add Circular for creative art soceity"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Circular Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />


                    <FormInputBox label={'Event Thumbnail'} type='file' handleChange={handleFileChange} name={'notice'} />

                  

                    <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------ Create the examination Section form
export const AddCreativeArtSocietyGallery = ()=>{
    const [form,setForm] = useState({image:''});
    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.files[0]});

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
            <FormBox title={"Add Creative Art Society Gallery"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Creative Art Soceity"} name={'image'} type='file'  value={form.image} handleChange={handleChange} />


                    <ButtonBox loading={loading} type='submit' title={'Add Gallery'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------- Create the profile form
export const AddNCCDataCircular = () => {
    const [form,setForm] = useState({title:'',notice:''});

    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e) => {
        setForm({...form,notice:e.target.files[0]});
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
        <FormBox title={"Add Circular for NCC"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Circular Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />


                    <FormInputBox label={'Event Thumbnail'} type='file' handleChange={handleFileChange} name={'notice'} />

                  

                    <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}


//------------ Create the examination Section form
export const AddNCCDataGallery = ()=>{
    const [form,setForm] = useState({image:''});
    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.files[0]});

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
            <FormBox title={"Add NCC Gallery"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"NCC Data"} name={'image'} type='file'  value={form.image} handleChange={handleChange} />


                    <ButtonBox loading={loading} type='submit' title={'Add Gallery'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}

//------------- Create the profile form
export const AddHostelCircular = () => {
    const [form,setForm] = useState({title:'',notice:''});

    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e) => {
        setForm({...form,notice:e.target.files[0]});
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
        <FormBox title={"Add Circular for Hostel"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Circular Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />


                    <FormInputBox label={'Event Thumbnail'} type='file' handleChange={handleFileChange} name={'notice'} />

                  

                    <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}


//------------ Create the examination Section form
export const AddHostelGallery = ()=>{
    const [form,setForm] = useState({image:''});
    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.files[0]});

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
            <FormBox title={"Add Hostel Gallery"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"NCC Data"} name={'image'} type='file'  value={form.image} handleChange={handleChange} />


                    <ButtonBox loading={loading} type='submit' title={'Add Gallery'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}


//------------- Create the profile form
export const AddTransportationCircular = () => {
    const [form,setForm] = useState({title:'',notice:''});

    const [loading,setLoading] = useState(false);

    
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e) => {
        setForm({...form,notice:e.target.files[0]});
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
        <FormBox title={"Add Circular for Transportation"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Circular Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />


                    <FormInputBox label={'Event Thumbnail'} type='file' handleChange={handleFileChange} name={'notice'} />

                  

                    <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}


//------------- Create the profile form
export const AddStudentAchievementCircular = () => {
    const [form,setForm] = useState({title:'',name:'',description:'',image:''});

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
        <FormBox title={"Add Circular for Student Achievement"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Circular Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />

                    <FormInputBox label={"Circular Name"} name={'name'} placeholder={"Tarangani"} value={form.name} handleChange={handleChange} />

                    <FormInputBox label={"Circular Description"} name={'description'} placeholder={"Tarangani"} value={form.description} handleChange={handleChange} />


                    <FormInputBox label={'Event Thumbnail'} type='file' handleChange={handleFileChange} name={'notice'} />

                  

                    <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}