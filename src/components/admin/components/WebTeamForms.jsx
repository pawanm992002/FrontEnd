import React, { useState } from 'react'

//-------- Packages Stuff
import { FormControl, FormLabel, VStack } from '@chakra-ui/react'

import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';

import toast from 'react-hot-toast';
import { AdminApiInstance } from '../apis/ApiIntances';
import { DepartmentsSelection } from '../cards/CircularCard';

//------------- Create the profile form
export const AddWebTeamForm = () => {

    const [form, setForm] = useState({ name: '', email: '', phone: '', image: '', branch: '', duration: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        setForm({ ...form, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const myForm = new FormData();
        myForm.append('name', form.name);
        myForm.append('email', form.email);
        myForm.append('phone', form.phone);
        myForm.append('image', form.image);
        myForm.append('branch', form.branch);
        myForm.append('duration', form.duration);

        try {
            const { data } = await AdminApiInstance.post('/web-team', myForm);

            if (data?.success === false)
                toast.error(data?.message);
            else toast.success(data?.message);

        } catch (error) {
            toast.error(error?.response?.data?.error);

        }


        setLoading(true);
        setForm({ name: '', email: '', phone: '', image: '', branch: '', duration: '' })
    }



return (
    <>
        <FormBox title={"Adding Web Team"} >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>

                    <FormInputBox label={"Name"} name={'name'} placeholder={"Tarangani"} value={form.name} handleChange={handleChange} />

                    <FormInputBox label={"Email"} name={'email'} placeholder={"jhondoe23@gmail.com"} value={form.email} type='email' handleChange={handleChange} />

                    <FormInputBox label={"Phone"} name={'phone'} placeholder={"9023892-1293"} value={form.phone} type='phone' handleChange={handleChange} />


                    <FormInputBox label={' Thumbnail'} type='file' handleChange={handleFileChange} name={'image'} />
                    <FormControl>
              <FormLabel>{"Branch"}</FormLabel>

              <DepartmentsSelection name='branch' value={form.branch} handleChange={handleChange} />
            </FormControl>

                    <FormInputBox label={"Duration"} name={'duration'} placeholder={"2023-24"} value={form.duration} handleChange={handleChange} />

                    <ButtonBox loading={loading} type='submit' title={'Add New Team'} />
                </VStack>
            </form>

        </FormBox>
    </>
)
}