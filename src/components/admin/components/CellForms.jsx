import React, { useState, useContext } from 'react'

//-------- Packages Stuff
import { VStack } from '@chakra-ui/react'


import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';
import toast from 'react-hot-toast';
import { CellsContext } from '../../../AdminContext/CellsContext/CellsContext';


//------------- Create the profile form
export const AddAlumniCellCircular = () => {
    const [form, setForm] = useState({ title: '', notice: '' });

    const { loading, error, handleAddNewAlumniCircular } = useContext(CellsContext);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        setForm({ ...form, notice: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.append('title', form.title)
        myForm.append('notice', form.notice)

        const data = await handleAddNewAlumniCircular(myForm);
        console.log('data ');

        if (error)
            toast.error(error);
        else toast.success("Adding a new circular of alumni")

    };


    return (
        <>
            <FormBox title={"Add Circular for alumni cell"} >
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