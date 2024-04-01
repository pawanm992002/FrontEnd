import React from 'react'

import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'


const Members = ({ members,designation='Designation',name='Name',sno="S.No." }) => {

  return (
    <>
      <Table sx={{margin:'13px 0'}} >
        <TableHead>
          

            
            <TableRow>
            <TableCell sx={{ border: '1px solid black', background: 'var(--main-primary)', color: 'white', borderLeft: '1px solid black', fontSize: '15px' }} >
             {sno}
            </TableCell>

            <TableCell sx={{ width: '50%', textAlign: 'center', border: '1px solid black', background: 'var(--main-primary)', color: 'white', borderLeft: '1px solid black', fontSize: '15px',textTransform:'capitalize' }} >{name}</TableCell>
            <TableCell sx={{ border: '1px solid black', background: 'var(--main-primary)', color: 'white', borderLeft: '1px solid black', borderRight: '1px solid black', fontSize: '15px',textTransform:'capitalize' }}>{designation}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            members?.map((item, i) => (<TableRow key={i} >
              <TableCell sx={{ border: '1px solid black' }}>{i + 1}</TableCell>

              <TableCell sx={{ textAlign: 'center', border: '1px solid black' }} >{item?.name || item?.department || item?.course}</TableCell>

              <TableCell sx={{ border: '1px solid black' }}>{item?.designation || item?.seat || item?.intake}
              </TableCell>
              
            </TableRow>

            ))
          }
        </TableBody>

      </Table>
    </>
  )
}

export default Members
