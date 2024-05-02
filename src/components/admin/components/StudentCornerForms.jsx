import React, { useState } from 'react'

//-------- Packages Stuff
import { VStack } from '@chakra-ui/react'


import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';
import { AdminApiInstance } from '../apis/ApiIntances';
import toast from 'react-hot-toast';

//------------- Create the profile form
export const AddCreativeArtSocietyCircular = () => {
    const [form, setForm] = useState({ title: '', notice: '' });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        setForm({ ...form, notice: e.target.files[0] });
    };

     const handleSubmit = async(e) => {

        e.preventDefault();

        setLoading(true);

        const myForm = new FormData();

        myForm.append('title', form.title);
        myForm.append('notice', form.notice);

        try {
            const { data, status } = await AdminApiInstance.post('/student-corner/creative-art-circular', myForm);

            if (status === 200) toast.success(data?.message);
            else toast.error(data?.message)

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
        setForm({title:'',notice:''})
    };

    return (
        <>
            <FormBox title={"Add Circular for creative art soceity"} >
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>

                        <FormInputBox label={"Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />


                        <FormInputBox label={'Notice'} type='file' handleChange={handleFileChange} name={'notice'} />



                        <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                    </VStack>
                </form>

            </FormBox>
        </>
    )
}

//------------ Create the examination Section form
export const AddCreativeArtSocietyGallery = () => {
    const [form, setForm] = useState({ image: '' });
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.files[0] });

   const handleSubmit = async(e) => {

        e.preventDefault();

        setLoading(true);

        const myForm = new FormData();

        myForm.append('image', form.image);

        try {
            const { data, status } = await AdminApiInstance.post('/student-corner/creative-art-gallery', myForm);

            if (status === 200) toast.success(data?.message);
            else toast.error(data?.message)

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
        setForm({image:''})
    };


    return (
        <>
            <FormBox title={"Add Creative Art Society Gallery"} >
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>

                        <FormInputBox label={"Creative Art Soceity"} name={'image'} type='file' handleChange={handleChange} />


                        <ButtonBox loading={loading} type='submit' title={'Add Gallery'} />
                    </VStack>
                </form>

            </FormBox>
        </>
    )
}

//------------- Create the profile form
export const AddNCCDataCircular = () => {
    const [form, setForm] = useState({ title: '', notice: '' });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        setForm({ ...form, notice: e.target.files[0] });
    };

    const handleSubmit = async(e) => {

        e.preventDefault();

        setLoading(true);

        const myForm = new FormData();

        myForm.append('title', form.title);
        myForm.append('notice', form.notice);

        try {
            const { data, status } = await AdminApiInstance.post('/student-corner/ncc-circular', myForm);

            if (status === 200) toast.success(data?.message);
            else toast.error(data?.message)

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
        setForm({title:'',notice:''})
    };

    return (
        <>
            <FormBox title={"Add Circular for NCC"} >
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>

                        <FormInputBox label={"Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />


                        <FormInputBox label={'Notice'} type='file' handleChange={handleFileChange} name={'notice'} />



                        <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                    </VStack>
                </form>

            </FormBox>
        </>
    )
}


//------------ Create the examination Section form
export const AddNCCDataGallery = () => {
    const [form, setForm] = useState({ image: '' });
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.files[0] });

   const handleSubmit = async(e) => {

        e.preventDefault();

        setLoading(true);

        const myForm = new FormData();

        myForm.append('image', form.image);

        try {
            const { data, status } = await AdminApiInstance.post('/student-corner/ncc-gallery', myForm);

            if (status === 200) toast.success(data?.message);
            else toast.error(data?.message)

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
        setForm({image:''})
    };


    return (
        <>
            <FormBox title={"Add NCC Gallery"} >
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>

                        <FormInputBox label={"NCC Gallery"} name={'image'} type='file' handleChange={handleChange} />


                        <ButtonBox loading={loading} type='submit' title={'Add Gallery'} />
                    </VStack>
                </form>

            </FormBox>
        </>
    )
}

//------------- Create the profile form
export const AddHostelCircular = () => {
    const [form, setForm] = useState({ title: '', notice: '' });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        setForm({ ...form, notice: e.target.files[0] });
    };

    const handleSubmit = async(e) => {

        e.preventDefault();

        setLoading(true);

        const myForm = new FormData();

        myForm.append('title', form.title);
        myForm.append('notice', form.notice);

        try {
            const { data, status } = await AdminApiInstance.post('/student-corner/hostel-circular', myForm);

            if (status === 200) toast.success(data?.message);
            else toast.error(data?.message)

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
        setForm({title:'',notice:''})
    };

    return (
        <>
            <FormBox title={"Add Circular for Hostel"} >
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>

                        <FormInputBox label={"Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />


                        <FormInputBox label={'Notice'} type='file' handleChange={handleFileChange} name={'notice'} />



                        <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                    </VStack>
                </form>

            </FormBox>
        </>
    )
}


//------------ Create the examination Section form
export const AddHostelGallery = () => {
    const [form, setForm] = useState({ image: '' });
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.files[0] });

    const handleSubmit = async(e) => {

        e.preventDefault();

        setLoading(true);

        const myForm = new FormData();

        myForm.append('image', form.image);

        try {
            const { data, status } = await AdminApiInstance.post('/student-corner/hostel-gallery', myForm);

            if (status === 200) toast.success(data?.message);
            else toast.error(data?.message)

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
        setForm({image:''})
    };


    return (
        <>
            <FormBox title={"Add Hostel Gallery"} >
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>

                        <FormInputBox label={"Hostel Gallery"} name={'image'} type='file' handleChange={handleChange} />


                        <ButtonBox loading={loading} type='submit' title={'Add Gallery'} />
                    </VStack>
                </form>

            </FormBox>
        </>
    )
}


//------------- Create the profile form
export const AddTransportationCircular = () => {
    const [form, setForm] = useState({ title: '', notice: '' });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        setForm({ ...form, notice: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const myForm = new FormData();

        myForm.append('title', form.title);
        myForm.append('notice', form.notice);


        try {
            const { data, status, statusText } = await AdminApiInstance.post('/student-corner/transportation-circular', myForm);

            if (data?.success === false) toast.error(data?.message);
            else toast.success(data?.message);

        } catch (error) {
            toast.error("Internal Server Error");
        }
        setLoading(false);
    };

    return (
        <>
            <FormBox title={"Add Circular for Transportation"} >
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>

                        <FormInputBox label={"Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />


                        <FormInputBox label={'Notice'} type='file' handleChange={handleFileChange} name={'notice'} />



                        <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                    </VStack>
                </form>

            </FormBox>
        </>
    )
}


//------------- Create the profile form
export const AddStudentAchievementCircular = () => {
    const [form, setForm] = useState({ title: '', name: '', description: '', image: '' });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        setForm({ ...form, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);


        const myForm = new FormData();

        myForm.append('title', form.title);
        myForm.append('name', form.name);
        myForm.append('description', form.description);
        myForm.append('image', form.image);


        try {
            const { data, status, statusText } = await AdminApiInstance.post('/student-corner/student-achievemen', myForm);

            if (data?.success === false) toast.error(data?.message);
            else toast.success(data?.message);

        } catch (error) {
            toast.error("Internal Server Error");
        }

        setLoading(false);
    };

    return (
        <>
            <FormBox title={"Add Circular for Student Achievement"} >
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>

                        <FormInputBox label={"Title"} name={'title'} placeholder={"Tarangani"} value={form.title} handleChange={handleChange} />

                        <FormInputBox label={"Name"} name={'name'} placeholder={"Tarangani"} value={form.name} handleChange={handleChange} />

                        <FormInputBox label={"Description"} name={'description'} placeholder={"Tarangani"} value={form.description} handleChange={handleChange} />


                        <FormInputBox label={'Thumbnail'} type='file' handleChange={handleFileChange} name={'image'} />



                        <ButtonBox loading={loading} type='submit' title={'Add New Circular'} />
                    </VStack>
                </form>

            </FormBox>
        </>
    )
}