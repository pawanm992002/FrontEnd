import React,{useState} from 'react'

//-------- Packages Stuff
import {ToastOptionProvider, VStack} from '@chakra-ui/react'

import toast from 'react-hot-toast'


import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';
import { AdminApiInstance } from '../apis/ApiIntances';

//------------- Create the profile form
export const AddECAPressForm = () => {
    const [form,setForm] = useState({image:''});

    const [loading,setLoading] = useState(false);

    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    const handleFileChange = (e) => {
        setForm({...form,image:e.target.files[0]});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        setLoading(true);
        const myForm = new FormData();
        myForm.append('image',form.image);
        myForm.append('title',form.title);

        try {
            const {data,statusText,status} = await AdminApiInstance.post('/news',myForm);

            if (data?.success === false)
                toast.error(data?.message);
            else toast.success(data?.message);

        } catch (error) {
            toast.error(error?.response?.data?.error);
        }

        setLoading(false);
        setForm({image:'',title:''})
    };

    return (
        <>
        <FormBox title={"ECA Press"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                <FormInputBox
              label={"Title"}
              name={"title"}
              placeholder={"Title of news"}
              value={form.title}
              handleChange={handleChange}
            />

                <FormInputBox label={'News'} type='file' handleChange={handleFileChange} name={'image'} />

                    <ButtonBox loading={loading} type='submit' title={'Upload'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}