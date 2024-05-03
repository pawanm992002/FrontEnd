import React, { useState } from 'react'

//-------- Packages Stuff
import { VStack } from '@chakra-ui/react'


import { ButtonBox, FormBox, FormInputBox } from '../FormInputBox';
import toast from 'react-hot-toast';
import { AdminApiInstance } from '../apis/ApiIntances';


//------------- Create the profile form
export const AddAlumniCellCircular = () => {
    const [form, setForm] = useState({ title: '', notice: '' });
    const [loading,setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        setForm({ ...form, notice: e.target.files[0] });
    };

  
    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          setLoading(true);
          
          const myForm = new FormData();
          myForm.append('title',form.title)
          myForm.append('notice',form.notice)
    
          const { data,status } = await AdminApiInstance.post("/cells/alumni-circular", myForm);
    
          if(status === 200) toast.success(data?.message);
          else toast.error(data?.message);
    
        } catch (error) {
          toast.error(error?.response?.data?.error);
        }
    
        setLoading(false);
        setForm({title:'',notice:''})
      };


    return (
        <>
            <FormBox title={"Add Circular for alumni cell"} >
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