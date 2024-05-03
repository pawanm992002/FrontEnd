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

    const handleFileChange = (e) => {
        setForm({...form,image:e.target.files[0]});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('form', form);

        setLoading(true);
        const myForm = new FormData();
        myForm.append('image',form.image);

        try {
            const {data,statusText,status} = await AdminApiInstance.post('/news',myForm);
            console.log('data ',data,statusText,status);

            if (data?.success === false)
                toast.error(data?.message);
            else toast.success(data?.message);

        } catch (error) {
            console.log('error ',error,error?.message,error?.response,error?.response?.message);
            toast.error(error?.message);
        }

        setLoading(false);
        setForm({image:''})
    };

    return (
        <>
        <FormBox title={"ECA Press"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                <FormInputBox label={'News'} type='file' handleChange={handleFileChange} name={'image'} />

                    <ButtonBox loading={loading} type='submit' title={'Upload'} />
                </VStack>
            </form>

        </FormBox>
        </>
    )
}