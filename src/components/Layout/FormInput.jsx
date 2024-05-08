import { TextField } from '@mui/material'
import React from 'react'

const FormInput = ({required=true,label,name,type='text',fullWidth=true,value,handleChange,minL=5}) => {
  return (
    <>
        <TextField
              margin="normal"
              required={required}
              fullWidth={fullWidth}
              type={type}
              id={name}
              label={label}
              name={name}
              autoFocus
              value={value}
              onChange={handleChange}
              minLength={minL}
            />
    </>
  )
}

export default FormInput
