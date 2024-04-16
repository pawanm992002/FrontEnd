import {
    FormControl,
    FormLabel
} from '@chakra-ui/react'


export const FormInputBox = ({label,name,type='text',handleChange}) => {
    return (
        <>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <Input type={type} name={name} onChange={handleChange} />
            </FormControl>
        </>
    )
}