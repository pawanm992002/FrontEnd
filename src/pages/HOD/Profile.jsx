import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import {
    Avatar, Box, Button, HStack, Stack, VStack, Heading, Text, Container, Grid, Image, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'

import toast from 'react-hot-toast';


//Icons/Images Specific Stuff
import { RxAvatar } from 'react-icons/rx'
import { ButtonBox, FormInputBox } from '../../components/admin/FormInputBox';
import Loading from '../../components/Layout/Loading';
import { FacultyApiInstance } from '../../components/Faculty/api/APIs';

//Components Stuff


const Profile = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [loading, setLoading] = useState(false);
    const [isUpdateProfile, setIsUpdateProfile] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', department: '', roomNo: '', designation: ''})
    const [user,setUser] = useState(form);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })



    const handleUpdateProfile = async () => {
        setLoading(true);

        setIsUpdateProfile(false);

        const myForm = new FormData();
        if (form.name != user?.name) myForm.append('name', form.name);
        if (form.email != user?.email) myForm.append('email', form.email);
        if (form.designation != user?.designation) myForm.append('designation', form.designation);
        if (form.department != user?.department) myForm.append('department', form.department);
        if (form.roomNo != user?.roomNo) myForm.append('roomNo', form.roomNo);

        try {

            const { data, status } = await FacultyApiInstance.put('/update-profile', myForm);
            console.log('data status ', data, status);

            if (status === 200){
                toast.success(data?.message);

                localStorage.setItem("userData", JSON.stringify(data?.result));
                setUser(data?.result);
            } 
            else toast.error(data?.message);

        } catch (error) {
            toast.error(error?.response?.data?.error);
        }
        setLoading(false);
    }

    useEffect(() => {
        const user = JSON.parse(localStorage?.getItem('userData'));
        setUser(user);

        setForm({ name: user?.name, email: user?.email, department: user?.department, roomNo: user?.roomNo, designation: user?.designation })

    }, [])

    if (loading)
        return <Loading />

    return (
        <>

            {/* When click on upload pictur, then trigger this file  */}
            <UploadPictureModal onClose={onClose} isOpen={isOpen} />

            <section id="Profile" >


                <Heading textAlign={'center'} my=''>Profile</Heading>
                <Box my={'4'} >
                    <HStack width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'}  >
                        {loading && <Loading />}
                    </HStack>

                    <Stack direction={['column', 'row']} spacing={'5'} justifyContent={'space-around'} alignItems={'center'} opacity={loading && '0.3'} >


                        <VStack justifyContent={'center'} align={'center'}>
                            <Avatar size={'2xl'} src={user && user?.profile} boxShadow={'xl'} border={'1px dotted salmon'} />

                            <ButtonBox handleClick={onOpen} title='Update Picture' />
                        </VStack>

                        <VStack>
                            <FormInputBox name={'name'} label={'Name'} readonly={isUpdateProfile ? false : true} value={form.name} handleChange={handleChange} />

                            <FormInputBox name={'email'} label={'Email'} readonly={isUpdateProfile ? false : true} value={form.email}
                                type='email' handleChange={handleChange} />

                            <HStack my='5'>
                                {
                                    !isUpdateProfile ?
                                        <ButtonBox handleClick={() => setIsUpdateProfile(true)} title={'Update Profile'} /> :
                                        <ButtonBox handleClick={handleUpdateProfile} title={'Update'} />

                                }

                            </HStack>


                        </VStack>




                    </Stack>

                    <Stack direction={['column', 'row']} spacing={'5'} mt='7' justifyContent={'space-around'} alignItems={'center'}>

                        <FormInputBox name={'roomNo'} label={'Room No'} readonly={isUpdateProfile ? false : true} value={form.roomNo} handleChange={handleChange} />

                        <FormInputBox name={'department'} label={'Department'} readonly={isUpdateProfile ? false : true} value={form.department} handleChange={handleChange} />

                        <FormInputBox name={'designation'} label={'Designation'} readonly={isUpdateProfile ? false : true} value={form.designation}
                            handleChange={handleChange} />
                    </Stack>

                </Box>


            </section>
        </>
    )
}

export default Profile


//------------ Modal to change or upload new profile picture 
export const UploadPictureModal = ({ isOpen, onClose }) => {

    const [imgPrev, setImgPrev] = useState('');
    const [file, setFile] = useState('');
    const [loading, setLoading] = useState(false);


    //Function to handle upload image
    const handleImgChange = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => setImgPrev(reader.result)

        setFile(file);

        // Define the size of the image
        const fileSize = file.size / 1e+6; //mb
        if (fileSize.toFixed(2) > 5) {   //Can't upload file size > 5 MB
            toast.error("Avatar must be less than 5 MB");
            setFile('');
            return;
        }
    }

    //------------ Function to upload the imag
    const handleUploadImg = async () => {
        setLoading(true);

        if (!file) {
            toast.error('File not found');
            setFile('');
            setLoading(false);
            return;
        }

        const myForm = new FormData();
        myForm.append('profile', file);

        try {

            const { data, status } = await FacultyApiInstance.put('/update-profile', myForm);
            console.log('data status ', data, status);

            if (status === 200){
                localStorage.setItem("userData", JSON.stringify(data?.result));
                toast.success(data?.message);
            } 
            else toast.error(data?.message);

        } catch (error) {
            toast.error(error?.response?.data?.error);
        }


        setLoading(false);
        handleClose();
    }

    //----------- Function to close the modal
    const handleClose = () => {
        setFile('');
        setImgPrev('');

        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Upload a profile picture</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                    <VStack>
                        <Avatar border={'1px solid salmon'} boxShadow={'md'} src={imgPrev} display={'block'} mx={'auto'} my={'2'} />

                        <FormInputBox icon={<RxAvatar />} type='file' name='avatar' handleChange={handleImgChange} />
                    </VStack>
                </ModalBody>

                <ModalFooter display={'flex'} justifyContent={'space-between'}>

                    <Box w={'full'} p='2' my='4' display={'block'} mx='auto'>
                        <ButtonBox loading={loading} title={'Upload Picture'} handleClick={handleUploadImg} />
                    </Box>

                    <Button colorScheme='blue' mr={3} onClick={handleClose}>
                        Cancel
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}