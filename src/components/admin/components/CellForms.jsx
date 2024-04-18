import React,{useState} from 'react'

//-------- Packages Stuff
import {VStack} from '@chakra-ui/react'


import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';

//------------- Create the profile form
export const AddAlumniCellCircular = () => {
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