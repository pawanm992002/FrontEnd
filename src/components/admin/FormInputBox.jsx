import {
    FormControl,
    FormLabel, Input, Box, Heading,Button
} from '@chakra-ui/react'

//---------------- Create the form structure how looks like
export const FormBox = ({ title,children }) => {
    return (

        <>
            <Box p={6} shadow="md" borderRadius="md" w="full">
                <Heading textTransform={'capitalize'} textAlign={'center'} mb={4}>{title}</Heading>
                {children}
            </Box>
        </>
    )
}


export const FormInputBox = ({ label, name, type = 'text', handleChange, value, placeholder,readonly=false }) => {
    return (
        <>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <Input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    required
                    readOnly={readonly}
                />
            </FormControl>
        </>
    )
}

//------------- Create a button use globally
export const ButtonBox = ({type='button',title,handleClick,loading})=>{
    return (
        <>
         <Button type={type} isLoading={loading} colorScheme="blue" onClick={handleClick} >{title}</Button>
        </>
    )
}